import React from "react"

function Comment ({user, comment }){
    return (<>
    <h3>2 Comments</h3>
    <h4>{user}:</h4>
    <p>{comment}</p>
    </>)
}
export default Comment