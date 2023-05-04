import React, { useState } from "react";
import Avatar from "../Avatar";
import styles from "./Comment.module.css"
import Poster from "../Poster/Poster";
import { Link } from "react-router-dom";
function Comment(props){
    const maxLength = 50;
    const message =props.body
    const output = message.length > maxLength ? message.substring(0,maxLength): message;
    const [body, setBody] = useState(output);
    const [buttonMessage,setButtonMessage] = useState("see more");
    function onClickHandler(){
        if(body.length>maxLength){
            setBody(message.substring(0,maxLength))
            setButtonMessage("see more")
        }
        else{
            setBody(message)
            setButtonMessage("see less")
        }
    }
    return (
        <div class={"bg-gray-800/[.1] border border-gray-200 text-sm text-gray-600 rounded-md p-4 dark:bg-gray-900/[.1] dark:border-gray-700 dark:text-white "+ styles.comment} role="alert">
            <Poster image="https://www.mykhel.com/thumb/250x90x250/football/players/4/19054.jpg" imageSize={2.375} />
            <p style={{textAlign: "center"},{marginLeft: "20px"}}>
                {body}
                {output !== message 
                && <a 
                onClick={onClickHandler}
                className="inline-flex items-center   text-sm font-medium border text-blue-600 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-gray-700">{buttonMessage}</a> }
            </p>
        </div>
    )
}

export default Comment;