/* PASSAGGI:
1. Creo un modulo "AddComment", che consente agli utenti di inviare una recensione per un prodotto (identificato da asin).
2. Creo una funzione async che al click di invio del form crea una nuova recensione, i cui dati vengono inviati a un'API tramite una richiesta POST.

3. Creo un form che permette all'utente di scrivere una recensione e assegnare una valutazione (da 1 a 5).
4. Se la richiesta è riuscita faccio in modo che lo stato del modulo viene resettato */

/*----------------------------------------------------------------------------------*/

import { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddCommentComp = ({ asin }) => {
    //DEFINISCO LO STATO DI MEMORIZZAZIONE DEI COMMENTI
    const [comment, setComment] = useState({
        comment: '',
        rate: 1,
        elementId: null,
    })

    //DEFINISCO LO STATO DEL COMMENTO
    // > ogni volta che l'asin cambia, l'elementId viene cambiaato con il nuovo valore di asin 
    // > recesione e prodotto venogno associati correttamente
    useEffect(() => {
        setComment((c) => ({
          ...c,
          elementId: asin,
        }))
      }, [asin])

      //FUNZIONE PER CREARE UNA POST PER INVIARE UN COMMENTO
      const sendComment = async (e) => {
        e.preventDefault() // > previene il caricamento della pagina al momento dell'invio
        try {
          let response = await fetch(
            'https://striveschool-api.herokuapp.com/api/comments',
            {
              method: 'POST',
              body: JSON.stringify(comment),
              headers: {
                'Content-type': 'application/json',
                 Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMGU2YTFlMTQwNjAwMTUzMTRkNmQiLCJpYXQiOjE3NDI2NDE5MTgsImV4cCI6MTc0Mzg1MTUxOH0.APQhZrX46Y-h5KK1AHBIbt358anElVIeaGqSwx0_XTg",
              },
            }
          )
          //Se la risposta dall'API avviene con successo:
          //1.appare un alert di conferma
          //2.lo stato del commento ritorna allo stato iniziale, si resetta
          if (response.ok) {
            alert('Recensione inviata!')
            setComment({
              comment: '',
              rate: 1,
              elementId: null,
            })
          } else {
            throw new Error('Devi inserire tutti i campi') // in caso contrario appare un msg di errore
          }
        } catch (error) {
          alert(error)
        }
      }
      
    return (
        <div className="my-3">
        <Form onSubmit={sendComment}>
          <Form.Group className="mb-2">
            <Form.Label>Recensione</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci qui il testo"
              value={comment.comment}
              onChange={(e) =>
                setComment({
                  ...comment,
                  comment: e.target.value,
                })
              }
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Valutazione</Form.Label>
            <Form.Control
              as="select"
              value={comment.rate}
              onChange={(e) =>
                setComment({
                  ...comment,
                  rate: e.target.value,
                })
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Invia
          </Button>
        </Form>
      </div>
    )
}
export default AddCommentComp