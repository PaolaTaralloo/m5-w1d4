import { ListGroup } from 'react-bootstrap'
import SingleCommentComp from './SingleCommentComp'

const CommentListComp = ({commentsToShow}) => {
    <ListGroup style={{ color: 'black' }} className="mt-2">
    {commentsToShow.map((comment) => (
      <SingleCommentComp comment={comment} key={comment._id} />
    ))}
  </ListGroup>
  
}

export default CommentListComp