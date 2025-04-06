import { useEffect, useState } from 'react'
import CommentListComp from './CommentListComp'
import AddCommentComp from './AddCommentComp'
import LoadingComp from './LoadingComp'
import ErrorComp from './ErrorComp'
import { ThemeContext } from '../modules/context';
import { useContext } from 'react';

const CommentAreaComp = ({ asin }) => {

  const [theme] = useContext(ThemeContext)

  //DEFINISCO L'ENDPOINT DEI COMMENTI
  const urlComments = 'https://striveschool-api.herokuapp.com/api/books/' + asin + '/comments/'

  //DEFINISCO LO STATO DI MEMORIZZAZIONE DEI COMMENTI
  const [comments, setComments] = useState([])

  //DEFINISCO LO STATO DI CARICAMENTO DEI COMMENTI
  const [loading, setLoading] = useState(false)

  //DEFINISCO LO STATO DI ERRORE
  const [error, setError] = useState(false)

  const addNewComment = (newComment) => {
    setComments(prevComments => [...prevComments, newComment])
  }
  /*----------------------------------------------------------------------------------*/

  //FETCH PER RECUPERARE I COMMENTI DALL'ENDPOINT TRAMITE useEffect
  useEffect(() => {
    
    const getComments = async () => {
      setLoading(true) // Mostra l'indicatore di caricamento
      
      try {
        const response = await fetch(urlComments, {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMGU2YTFlMTQwNjAwMTUzMTRkNmQiLCJpYXQiOjE3NDM5NTE4NTEsImV4cCI6MTc0NTE2MTQ1MX0.oQD5ZroIzhBsuy9WkXSyoF5eoH97cYpM0GQl0wNwSL0"
          }
        }
      )
      console.log(response)
        //Se la richiesta dell'API avviene con successo:
        //1.memorizzo i commenti nello stato "comments"
        //2.non è più necessario mostrare l'indicatore di caricamento
        //3.non è più necessario mostrare un componente di errore 
        if (response.ok) {
          let comments = await response.json()
          setComments(comments)
          setLoading(false)
          setError(false)
        } else {
          console.log('errore nella fetch')
          setLoading(false) // non è più necessario mostrare l'indicatore di caricamento
          setError(true) // è necessario mostrare un componente di errore
        }
      } catch (error) {
        console.log("Errore nel recupero dei dati", error)
        setLoading(false)
        setError(true)
      }
    }
    //Se l'"asin" è valido, chiama la funzione che recupera i commenti
    if (asin) {
      getComments()
    }

    // getComments()    
    //È il secondo argomento dell'useEffect che rapprensenta un dipedenza
    //ed indica che l'useEffect verrà eseguito ogni volta che il valore di asin cambia
  }, [asin])

  const updateCommentList = (id) => {
    setComments((prevComments) => prevComments.filter(comment => comment._id !== id))
  }

  return (
    <div className={`text-center ${theme}`}>
      {loading && <LoadingComp  />} 
      {error && <ErrorComp />} 
      <div data-testid="addCommentComp-test">
        <AddCommentComp asin={asin} onCommentAdded={addNewComment} /> 
      </div>
      <CommentListComp 
      commentsToShow={comments} 
      updateCommentList={updateCommentList}
      />
    </div>
  )
}

export default CommentAreaComp