import React from 'react'

function Comment({user, comment}) {

  return (
    <div>
      <p><strong>{user}</strong></p>
      <p>{comment}</p>
    </div>
  )
}

export default Comment