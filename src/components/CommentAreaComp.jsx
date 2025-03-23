import { useEffect, useState } from 'react'
import CommentListComp from './CommentListComp'
import AddCommentComp from './AddCommentComp'
import LoadingComp from './LoadingComp'
import ErrorComp from './ErrorComp'

const CommentAreaComp = ({ asin }) => {

  //DEFINISCO L'ENDPOINT DEI COMMENTI
  const urlComments = 'https://striveschool-api.herokuapp.com/api/books/' + asin + '/comments/'

  //DEFINISCO LO STATO DI MEMORIZZAZIONE DEI COMMENTI
  const [comments, setComments] = useState([])

  //DEFINISCO LO STATO DI CARICAMENTO DEI COMMENTI
  const [loading, setLoading] = useState(false)

  //DEFINISCO LO STATO DI ERRORE
  const [error, setError] = useState(false)

  /*----------------------------------------------------------------------------------*/

  //FETCH PER RECUPERARE I COMMENTI DALL'ENDPOINT TRAMITE useEffect
  useEffect(() => {
    
    const getComments = async () => {
      setLoading(true) // Mostra l'indicatore di caricamento
      
      try {
        const response = await fetch(urlComments, {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMGU2YTFlMTQwNjAwMTUzMTRkNmQiLCJpYXQiOjE3NDI2NDE5MTgsImV4cCI6MTc0Mzg1MTUxOH0.APQhZrX46Y-h5KK1AHBIbt358anElVIeaGqSwx0_XTg"
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
  return (
    <div className="text-center">
      {loading && <LoadingComp />} 
      {error && <ErrorComp />} 
      <AddCommentComp asin={asin} /> 
      <CommentListComp commentsToShow={comments} />
    </div>
  )
}

export default CommentAreaComp