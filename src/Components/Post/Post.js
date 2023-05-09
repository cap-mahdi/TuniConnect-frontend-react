import React,{useEffect, useState} from "react";
import PostBody from "./PostBody";
import PostDetails from "./PostDetails/PostDetails";
import Comment from "./Comment/Comment";
import Poster from "./Poster/Poster";
import styles from "./Post.module.css"
import PostSharer from "./PostSharer";
import PostInput from "../PostInput/PostInput";
import Input from "./Input";
import { addComment, deletePost, getComment, getComments, getPostOwner, likeDislikePost, sendNotification, sharePost, updatePost  , addNotification} from "../../API/Posts/PostController";
import { fetchData, timeAgo } from "../../API/utilities";
import PostSharedBadge from "./Badge";
import {v4} from "uuid"
import DeleteButton from "./DeleteButton";
import Badge from "./Badge";
import UpdatePost from "./UpdatePost";
import Spin from "../Spin";


function Post(props){
    const post = props.post;
    const userId = props.userId;
    

    //envoi de notification
    async function sendNotification(idPost, type,  userId ){
        const ownerId = await getPostOwner(idPost)
        const postNotificationData = {
            ownerId: ownerId,
            type: type,
            postId: idPost,
            relatedTo: userId
        }
        await addNotification(postNotificationData)
    }


    /*************LIKE BUTTON*****************/ 
    const [likeNumbers,setLikeNumbers] = useState(post.likers.length);
    const liked =  ()=>{
        let likers = post.likers;
        for(let i=0;i<likers.length;i++){
            if(likers[i].id == userId)
                return true;
        }
        return false;
    }

    const[isLiked,setIsLiked] = useState(liked());
    //when the button is clicked,we check if the post is liked or not,if it is liked we decrease the number of likes by 1,if it is not liked we increase the number of likes by 1
    async function likeHandler(){
        setIsLiked((isLiked)=> !isLiked);
        setLikeNumbers((likeNumbers)=> isLiked? likeNumbers-1 : likeNumbers+1);
        await likeDislikePost(post.id,userId);
        
    }

    /*************COMMENT BUTTON*****************/ 
    const [commentNumbers,setCommentNumbers] = useState(post.comments.length);
    const [commentShown,setCommentShown] = useState(false);
    const [comments,setComments] = useState(post.comments);



    //when the button is clicked,we check if the comments are shown or not,if they are shown we hide them,if they are not shown we show them
    function commentHandler(){
        setCommentShown((commentShown)=> !commentShown);
    }

    //when the user submits a comment,we add it to the comments array,we increment the number of comments and we show the comments if they are not shown
    async function onAddingComment(comment){
        setCommentNumbers((commentNumbers)=> commentNumbers+1)
        if(!commentShown)
            setCommentShown((commentShown)=> true);
        const res = await addComment(post.id,userId,comment);
        console.log(res.data.id);
        await fetchData(()=>getComment(res.data.id),(newComment)=>{
            console.log("newComment",newComment);
            setComments((oldComments)=>[newComment,...oldComments])});
        
        
        
    }   


    /*************SHARE BUTTON*****************/ 
    const [shareNumbers,setShareNumbers] = useState(post.shares);
    const [isShared,setIsShared] = useState(false);
    const [isSharing,setIsSharing] = useState("start");
    //when the button is clicked,we check if the post is already shared or not,if it is shared nothing will happen (you can only delete the shared post from your profile),if it is not shared we increase the number of shares by 1
    async function shareHandler(){
        if(isShared)
            return;
        setIsSharing("sharing");
        setIsShared((isShared)=> true);
        await sharePost(post.id,userId);  
        setShareNumbers((shareNumbers)=> shareNumbers+1);
        setIsShared((isShared)=> false);
        setIsSharing("done");
        setTimeout(()=>{setIsSharing("start")},1000);
        await sendNotification(post.id , "like" , userId)
        
    }
    
    const [isDeleting,setIsDeleting] = useState("start");
    async function deleteHandler(){
        console.log("deleting post");
        setIsSharing("deleting");
        await deletePost(post.id);
        setIsSharing("done");
        setTimeout(()=>{setIsSharing("start")},1000);
        props.regetPosts();
        
    }

    const [isEditing,setIsEditing] = useState(false);
    async function editHandler(postId,text){
        if(isEditing)
            return;
        setIsEditing((isEditing)=> true);

    }
    async function updateHandler(text){
        await updatePost(post.id,{"text":text});
        await props.regetPosts();

    }



    return (
        <div>
        <div  className={"flex flex-col bg-white border shadow-sm rounded-xl  " + styles["layout"]}>
        {isSharing=="sharing" ? <Badge posted = {true} text={"sharing post..."}/> : isSharing=="done" ? <Badge posted = {false} text={"post shared!"}/> : null }
        {isDeleting=="deleting" ? <Badge posted = {true} text={"deleting post..."}/> : isDeleting=="done" ? <Badge posted = {false} text={"post deleted!"}/> : null }
        {post.isShared && <PostSharer onClick={deleteHandler} isOwner={(userId==post.sharer.id)} sharer={post.sharer} time={timeAgo(new Date(post.date))} />}
        <div className="p-4 md:p-5">
        <Poster isEdited={post.post.edited} onClickUpdate={editHandler} onClick={deleteHandler} isOwner={!post.isShared && userId==post.post.owner.id} size={post.isShared?40:50} poster={post.post.owner} time={timeAgo(new Date(post.post.date))} />
            {isEditing ?<UpdatePost onClick={updateHandler} post={post.post} /> :
                <PostBody
                    post={post.post}
                />
            }
            </div>
            <PostDetails
                likeNumbers={likeNumbers}
                likeHandler={likeHandler}
                isliked = {isLiked}

                commentNumbers={commentNumbers}
                commentHandler={commentHandler}
                isShown = {commentShown}

                shareNumbers={shareNumbers}
                shareHandler={shareHandler}
                isShared = {isShared}
             />

            {commentShown && (comments != null? comments.map((comment)=> <Comment key={comment.id} comment={comment} />) : <Spin />)}
            <Input
                onSumbit={onAddingComment}
                userId={userId}
            />
        </div>
    </div>
        
            
    )
}

export default Post;
