import { Button, ListGroup } from 'react-bootstrap'

const SingleCommentComp = ({ comment, deleteCommentFromList }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMGU2YTFlMTQwNjAwMTUzMTRkNmQiLCJpYXQiOjE3NDM5NTE4NTEsImV4cCI6MTc0NTE2MTQ1MX0.oQD5ZroIzhBsuy9WkXSyoF5eoH97cYpM0GQl0wNwSL0"
          },
        }
      )
      if (response.ok) {
        //se il commento vien eliminato, chiama la funzione per aggiornare la lista dei commenti
        deleteCommentFromList(comment._id)
        alert('La recensione è stata eliminata!')
      } else {
        throw new Error('La recensione non è stata eliminata!')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <ListGroup.Item role="listitem" >
      <div className='float-start'>
      {comment.comment}
      </div>
      <Button
        variant="danger"
        className="ms-2 float-end"
        onClick={() => deleteComment(comment._id)}
      >
        Elimina
      </Button>
    </ListGroup.Item>
  )
}
export default SingleCommentComp
