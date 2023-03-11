import {React, useState} from "react";


function VideoLikes({video}){
    let {upvotes, downvotes} = video
    let [likes, setLikes] = useState(upvotes)
    let [unlike, setUnLike] = useState(downvotes)
    
    function handleUpvotes (){
         return setLikes(()=> likes++)
    }

    function handleDownvotes(){
        return setUnLike(unlike--)
    }
    return (
        <> 
            <button onClick={handleUpvotes}>{likes}👍</button>
            <button onClick={handleDownvotes}>{unlike}👎</button>
            
      </>
    )
}
export default VideoLikes