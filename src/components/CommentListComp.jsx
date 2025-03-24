import { ListGroup } from 'react-bootstrap'
import SingleCommentComp from './SingleCommentComp'

const CommentListComp = ({ commentsToShow, updateCommentList }) => {
  console.log(commentsToShow);
  return (
    <ListGroup style={{ color: 'black' }} className="mt-2">
      {commentsToShow.map((comment) => (
        <SingleCommentComp
        key={comment._id}
        comment={comment} 
        deleteCommentFromList={updateCommentList}
        />
      ))}
    </ListGroup>

  )

}

export default CommentListComp