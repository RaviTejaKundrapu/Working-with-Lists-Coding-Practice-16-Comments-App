// Comments.js
import React, {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {nameInput: '', commentInput: '', commentList: []}

  likeOrNot = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each => {
        if (each.id === id) {
          return {...each, likeStatus: !each.likeStatus}
        }
        return each
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.filter(comment => comment.id !== id),
    }))
  }

  addComment = event => {
    event.preventDefault()

    const {nameInput, commentInput} = this.state
    const randomIndex = Math.floor(
      Math.random() * initialContainerBackgroundClassNames.length,
    )
    const randomClassName = initialContainerBackgroundClassNames[randomIndex]
    const postedTime = formatDistanceToNow(new Date())

    const newComment = {
      id: uuidv4(),
      nameFirstLetter: nameInput[0],
      name: nameInput,
      comment: commentInput,
      nameColorCss: randomClassName,
      time: postedTime,
      likeStatus: false,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      nameInput: '', // Clear name input
      commentInput: '', // Clear comment input
    }))
  }

  nameInputGiven = event => {
    this.setState({nameInput: event.target.value})
  }

  commentInputGiven = event => {
    this.setState({commentInput: event.target.value})
  }

  render() {
    const {commentList, nameInput, commentInput} = this.state
    const totalComments = commentList.length
    return (
      <div className="appContainer">
        <h1 className="commentHeading">Comments</h1>
        <p className="desccomm">Say something about 4.0 Technologies</p>
        <div className="inputTakingAndImageContainer">
          <form className="inputTakingContainer">
            <input
              onChange={this.nameInputGiven}
              className="inputBar"
              value={nameInput}
              placeholder="Your Name"
            />
            <textarea
              onChange={this.commentInputGiven}
              className="commentBar"
              value={commentInput}
              placeholder="Your Comment"
            >
              <> </>
            </textarea>
            <button
              type="submit"
              className="addComment"
              onClick={this.addComment}
            >
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="commentsImage"
          />
        </div>
        <hr className="line" />
        <p className="totalComments">
          <span className="totalCommentsNum">{totalComments}</span> Comments
        </p>
        <ul className="commentsContainer">
          {commentList.map(each => (
            <CommentItem
              key={each.id}
              commentsGot={each}
              likeOrnot={this.likeOrNot}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
