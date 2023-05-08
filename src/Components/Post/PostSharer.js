import Poster from "./Poster/Poster";
import DeleteButton from "./DeleteButton";
import styles from "./Post.module.css"
function PostSharer(props){


    return <>
    <div class="flex flex-col bg-white   rounded-xl p-4 md:p-5 " >
        <Poster onClick={props.onClick} isOwner={props.isOwner} poster={props.sharer} isShared={true} size={50} time={props.time} />
  </div>
  <hr className="" />
    </>
    

}

export default PostSharer;