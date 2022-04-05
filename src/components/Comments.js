import { render } from '@testing-library/react'
import React, { useState } from 'react'
import Comment from './Comment'

function Comments({comments}) {
  const [showComments, setShowComments] = useState(true)

  const renderComments = comments.map(comment => {
    return <Comment  key={comment.id} user={comment.user} comment={comment.comment} />
  })

  function handleClick() {
    setShowComments(!showComments)
  }

  return (
    <div>
      <button onClick={handleClick}>{showComments ? 'Hide Comments' : 'Show Comments'}</button>
      <h3 className={showComments ? '' : 'hide'} >{comments.length} Comments</h3>
      <div className={showComments ? '' : 'hide'}>{renderComments}</div>
    </div>
  )
}

export default Comments