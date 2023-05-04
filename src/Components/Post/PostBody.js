import React from "react";
import styles from "./Post.module.css"
function PostBody(props){
    return <div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec efficitur lorem, in molestie nisl. Nam cursus fermentum mattis. Ut placerat nisi dignissim libero finibus vestibulum. Cras eu lacus sit amet turpis tempus iaculis a non diam. Curabitur vitae elit commodo, luctus risus non, tempus enim. Integer vitae massa in nulla rhoncus facilisis quis vel urna. In in consequat justo, et vulputate urna. Vivamus auctor urna sed leo blandit eleifend. Sed faucibus ac sem sit amet placerat. Sed iaculis lectus sagittis libero cursus, vitae rhoncus eros vehicula.
    </p>
    <img class={styles["post_image"]} style={{marginTop: "px"}} src={props.image} alt="Post image" />
    </div>

}

export default PostBody;