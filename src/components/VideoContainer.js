import React from "react";


function VideoContainer({video}){
    const {title, embedUrl} = video
    return (
        <>
            <iframe
            width="919"
            height="525"
            src={embedUrl}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
            />
            <h1>{title}</h1>
      </>
    )
}
export default VideoContainer