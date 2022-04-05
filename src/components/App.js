import video from "../data/video.js";
import VoteButtons from './VoteButtons'
import Comments from './Comments'
import VideoInfo from './VideoInfo'
import React, { useState } from 'react'

function App() {
  const [upVote, setUpVote] = useState(video.upvotes)
  const [downVote, setDownVote] = useState(video.downvotes)
  
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <VideoInfo title={video.title} views={video.views} dateCreated={video.createdAt}/>
      <VoteButtons downVotes={downVote} upVotes={upVote} setUpVote={setUpVote} setDownVote={setDownVote}/>
      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;
