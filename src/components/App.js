import React from "react";
import video from "../data/video.js";
import VideoContainer from './VideoContainer'
import VideoAnalytics from "./VideoAnalytics";


function App() {
  console.log("Here's your data:", video);

  return (
    <>
      <VideoContainer video={video}/>
      <VideoAnalytics video={video}/>
    </>
  );
}

export default App;
