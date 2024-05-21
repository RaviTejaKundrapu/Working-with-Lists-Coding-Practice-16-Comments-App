// CommentItem.js
import './index.css'

const CommentItem = props => {
  const {commentsGot, likeOrnot, deleteComment} = props

  const {id, nameFirstLetter, name, comment, nameColorCss, time, likeStatus} =
    commentsGot

  const isLiked = likeStatus
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const isLikedFun = () => {
    likeOrnot(id)
  }

  const ondelete = () => {
    deleteComment(id)
  }

  return (
    <li className="eachComment">
      <div className="slicedNameandTime">
        <div className="letter-container">
          <p className={`letter ${nameColorCss}`}>{nameFirstLetter}</p>
        </div>
        <div className="nameTime">
          <p className="name">{name}</p>
          <p className="time">{time}</p>
        </div>
      </div>
      <p className="comment">{comment}</p>
      <div className="buttonsLikeAndDeleteContainer">
        <button onClick={isLikedFun} className="buttonLike">
          <img src={isLiked} alt="Like" />
          <span>{likeStatus ? 'Liked' : 'Like'}</span>
        </button>
        <button className="delBtn" onClick={ondelete} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}

export default CommentItem
