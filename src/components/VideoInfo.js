import React from 'react'

function VideoInfo({title, views, dateCreated}) {

  return(
    <div>
      <h1>{title}</h1>
      <p>{views} Views | Uploaded {dateCreated}</p>
    </div>
  )
}

export default VideoInfo