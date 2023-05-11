import React,{useEffect, useState} from "react";
import PostBody from "./PostBody";
import PostDetails from "./PostDetails/PostDetails";
import Comment from "./Comment/Comment";
import Poster from "./Poster/Poster";
import styles from "./Post.module.css"
import PostSharer from "./PostSharer";
import PostInput from "../PostInput/PostInput";
import Input from "./Input";
import { addComment, deletePost, getComment, getComments, getPostOwner, likeDislikePost, sendNotification, sharePost, updatePost  , addNotification, getPostLikes, getPost} from "../../API/Posts/PostController";
import { fetchData, getData, timeAgo } from "../../API/utilities";
import PostSharedBadge from "./Badge";
import {v4} from "uuid"
import DeleteButton from "./DeleteButton";
import Badge from "./Badge";
import UpdatePost from "./UpdatePost";
import Spin from "../Spin";
import { Link } from "react-router-dom";


function Post(props){
    const post = props.post;
    const currentUserId = props.currentUserId;
    



    /*************LIKE BUTTON*****************/ 
    const [likeNumbers,setLikeNumbers] = useState(post.likers.length);
    const liked =  ()=>{
        let likers = post.likers;
        for(let i=0;i<likers.length;i++){
            if(likers[i].id == currentUserId)
                return true;
        }
        return false;
    }

    const[isLiked,setIsLiked] = useState(liked());
    //when the button is clicked,we check if the post is liked or not,if it is liked we decrease the number of likes by 1,if it is not liked we increase the number of likes by 1
    async function likeHandler(){
        setIsLiked((isLiked)=> !isLiked);
        setLikeNumbers((likeNumbers)=> isLiked? likeNumbers-1 : likeNumbers+1);
        await likeDislikePost(post.id,currentUserId);
        await fetchData(()=>getPostLikes(post.id),setLikeNumbers)
        
    }

    /*************COMMENT BUTTON*****************/ 
    const [commentNumbers,setCommentNumbers] = useState(post.comments.length);
    const [commentShown,setCommentShown] = useState(false);
    const [comments,setComments] = useState(post.comments);



    //when the button is clicked,we check if the comments are shown or not,if they are shown we hide them,if they are not shown we show them
    async function commentHandler(){
        if(!commentShown){
            setComments(null);
            setCommentShown(true);
            console.log("getting comments");
            await fetchData(()=>getComments(post.id),(comments)=>{
                setComments(comments)
            });
            console.log("comments got");
            
        }else{
            setCommentShown(false)
        }
        
    
    }

    //when the user submits a comment,we add it to the comments array,we increment the number of comments and we show the comments if they are not shown
    async function onAddingComment(comment){
        setCommentNumbers((commentNumbers)=> commentNumbers+1)

        if(!commentShown)
            setCommentShown((commentShown)=> true);

        const res = await addComment(post.id,currentUserId,comment);
        setComments((oldComments)=>[res.data,...oldComments])

        
        
        
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
        await sharePost(post.id,currentUserId);  
        setShareNumbers((shareNumbers)=> shareNumbers+1);
        setIsShared((isShared)=> false);
        setIsSharing("done");
        setTimeout(()=>{setIsSharing("start")},1000);
        // await sendNotification(post.id , "like" , currentUserId)
        
    }
    
    const [isDeleting,setIsDeleting] = useState("start");
    async function deleteHandler(){
        console.log("deleting post");
        setIsDeleting("deleting");
        await deletePost(post.id);
        setIsDeleting("done");
        setTimeout(()=>{props.deletePost(post.id);},1000);
        
        
    }

    const [isEditing,setIsEditing] = useState(false);
    async function editHandler(postId,text){
        if(isEditing)
            return;
        setIsEditing((isEditing)=> true);

    }
    async function updateHandler(text){
        await updatePost(post.id,{"text":text});
        const res = await getPost(post.id)
        console.log('the updated post is ', res.data);
         props.updatePost(res.data)
         setIsEditing(false);
        

    }

    useEffect(()=> console.log("comments are ,",comments),[comments])

    return (
        <div>
        <div  className={"flex flex-col bg-white border shadow-sm rounded-xl  " + styles["layout"]}>
        {isSharing=="sharing" ? <Badge posted = {true} text={"sharing post..."}/> : isSharing=="done" ? <Badge posted = {false} text={"post shared!"}/> : null }
        {isDeleting=="deleting" ? <Badge posted = {true} text={"deleting post..."}/> : isDeleting=="done" ? <Badge posted = {false} text={"post deleted!"}/> : null }
        {post.isShared && <PostSharer onClick={deleteHandler} isOwner={(currentUserId==post.sharer.id)} sharer={post.sharer} time={timeAgo(new Date(post.date))} />}
        <div className="p-4 md:p-5">
        <Poster isEdited={post.post.edited} onClickUpdate={editHandler} onClick={deleteHandler} isOwner={!post.isShared && currentUserId==post.post.owner.id} size={post.isShared?40:50} poster={post.post.owner} time={timeAgo(new Date(post.post.date))} />
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
                memberFullName={props.memberFullName}
                onSumbit={onAddingComment}
                userId={currentUserId}
            />
        </div>
    </div>
        
            
    )
}

export default Post;
