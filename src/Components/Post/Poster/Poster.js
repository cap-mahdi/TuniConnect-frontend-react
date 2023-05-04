import React from "react";
import Avatar from "../Avatar";
import styles from "./Poster.module.css"
function Poster(props){
    return (
        <div class="flex-shrink-0 group block">
            <div class="flex items-center">
                <Avatar size={props.imageSize}
                 image={props.image} />
                <div class="ml-3">
                    <h3 class="font-semibold text-gray-800 dark:text-white" >Lionel messi</h3>
                    <p className={styles.time} >3 mins ago</p>
                </div>
            </div>
</div>
        )
}

export default Poster