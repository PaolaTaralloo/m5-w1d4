import { Button, ListGroup } from 'react-bootstrap'

const SingleCommentComp = ({ comment, deleteCommentFromList }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMGU2YTFlMTQwNjAwMTUzMTRkNmQiLCJpYXQiOjE3NDI2NDE5MTgsImV4cCI6MTc0Mzg1MTUxOH0.APQhZrX46Y-h5KK1AHBIbt358anElVIeaGqSwx0_XTg"
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
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        Elimina
      </Button>
    </ListGroup.Item>
  )
}
export default SingleCommentComp
