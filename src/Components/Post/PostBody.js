import React,{useState} from "react";
import styles from "./Post.module.css"
function PostBody(props){
    const maxLength = 50;
    const message =props.post.text;    
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
    return <div>
        <p style={{margin:"10px 25px"} }>
        {body}
        <br /> 
        {output !== message 
                && <a 
                onClick={onClickHandler}
                className="inline-flex items-center   text-sm font-medium border text-blue-600 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 ">  {buttonMessage}</a> }
    </p>
    
    {props.post.photos.length!=0 && <img className={styles["post_image"]} style={{marginTop: "px"}} src={`http://localhost:8000/postsImages/${props.post.photos[0]}`} alt="Post image" />}
    </div>

}

export default PostBody;