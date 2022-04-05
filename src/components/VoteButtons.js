import React from 'react'

function VoteButtons({downVotes, upVotes, setUpVote, setDownVote}) {

  function handleClickUp() {
    setUpVote(upVotes + 1)
  }

  function handleClickDown() {
    setDownVote(downVotes + 1)
  }

  return(
    <div>
      <button onClick={handleClickUp}>{upVotes} 👍</button>
      <button onClick={handleClickDown}>{downVotes} 👎</button>
    </div>
  )
}

export default VoteButtons