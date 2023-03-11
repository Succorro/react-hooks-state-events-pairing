import {React,useState} from "react";
import Comment from './Comment'


function VideoComments({video}){
    const {comments} = video
    const [displayComments, setDisplayComments] = useState(null)  
    const AllComments = comments.map((com) => {
        const { id, user, comment} = com
        return (
            <Comment key={id} user={user} comment={comment} />
        )
    })
    function handleClick(){
        setDisplayComments((displayComments)=> !displayComments)
    }
    return (
        <>
            <button onClick={handleClick} style={{display: "block" }}>{displayComments? "Hide Comments": 'Show Comments' }</button>
            {displayComments ? AllComments: <></>}
        </>
    )
}
export default VideoComments