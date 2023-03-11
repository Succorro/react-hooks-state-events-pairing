import React from "react";
import VideoComments from "./VideoComments";
import VideoLikes from "./VideoLikes"

function VideoAnalytics({video}){
    const {views,createdAt} = video

    return (
        <>
            <p id="views">{views} Views | Uploaded {createdAt}</p> 
            <VideoLikes video={video}/>
            <VideoComments style={{display: "inline" }}  video={video}/>
        </>
    )
}
export default VideoAnalytics