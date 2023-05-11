import React from "react";
import Avatar from "../Avatar";
import styles from "./Poster.module.css";
import DeleteButton from "../DeleteButton";
import UpdateButton from "../UpdateButton";
import { Link } from "react-router-dom";
function Poster(props){
    return (
        <div className="flex-shrink-0 group block" style={{display:"flex"}}>
            <div className="flex items-center">
            <Link to={`/profile/`+props.poster.id} ><Avatar image={props.poster.profilePicture} size={props.size} />  </Link>
                <div className="ml-3">
                    <h3 className="font-semibold text-gray-800 " >{props.poster.firstName} {props.poster.lastName} {props.isEdited && <span className={styles["share_span"]} >edited</span> } {props.isShared && <span className={styles["share_span"]} >shares this post</span>}</h3>
                    <p className={styles.time} >{props.time}</p>
                    {props.isOwner && <DeleteButton onClick={props.onClick} />}
                    {!props.isShared && props.isOwner && <UpdateButton onClick={props.onClickUpdate} />}
                   
                </div>
            </div>
            
</div>
        )
}

export default Poster