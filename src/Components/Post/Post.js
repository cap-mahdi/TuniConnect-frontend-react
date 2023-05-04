import React,{useState} from "react";
import PostBody from "./PostBody";
import PostDetails from "./PostDetails/PostDetails";
import Comment from "./Comment/Comment";
import Poster from "./Poster/Poster";
import styles from "./Post.module.css"

import Input from "./Input";


function Post(){
    const commentsDB=[
        "test3 ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec efficitur lorem, in molestie nisl. Nam cursus fermentum mattis. Ut placerat nisi dignissim libero finibus vestibulum. Cras eu lacus sit amet turpis tempus iaculis a non diam. Curabitur vitae elit commodo, luctus risus non, tempus enim. Integer vitae massa in nulla rhoncus facilisis quis vel urna. In in consequat justo, et vulputate urna. Vivamus auctor urna sed leo blandit eleifend. Sed faucibus ac sem sit amet placerat. Sed iaculis lectus sagittis libero cursus, vitae rhoncus eros vehicula.",
        "test2 ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec efficitur lorem, in molestie nisl. Nam cursus fermentum mattis. Ut placerat nisi dignissim ",
        "test ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec efficitur lorem, in molestie nisl. Nam cursus fermentum mattis. Ut placerat nisi dignissim libero finibus vestibulum. Cras eu lacus sit amet turpis tempus iaculis a non diam. Curabitur vitae elit commodo, luctus risus non, tempus enim. Integer vitae massa in nulla rhoncus facilisis quis vel urna. In in consequat justo, et vulputate urna. Vivamus auctor urna sed leo blandit eleifend. Sed faucibus ac sem sit amet placerat. Sed iaculis lectus sagittis libero cursus, vitae rhoncus eros vehicula."
    
    ]

    /*************LIKE BUTTON*****************/ 
    const [likeNumbers,setLikeNumbers] = useState(3);
    const[isLiked,setIsLiked] = useState(false);
    //when the button is clicked,we check if the post is liked or not,if it is liked we decrease the number of likes by 1,if it is not liked we increase the number of likes by 1
    function likeHandler(){
        if(isLiked){
            setLikeNumbers((likeNumbers)=> likeNumbers-1)
        }   
        else{
            setLikeNumbers((likeNumbers)=> likeNumbers+1)
        }
        setIsLiked((isLiked)=> !isLiked)
    }

    /*************COMMENT BUTTON*****************/ 
    const [commentNumbers,setCommentNumbers] = useState(20);
    const [commentShown,setCommentShown] = useState(false);
    const [comments,setComments] = useState(commentsDB);
    //when the button is clicked,we check if the comments are shown or not,if they are shown we hide them,if they are not shown we show them
    function commentHandler(){
        setCommentShown((commentShown)=> !commentShown);
    }

    //when the user submits a comment,we add it to the comments array,we increment the number of comments and we show the comments if they are not shown
    function onAddingComment(comment){
        setComments((comments)=> [...comments,comment])
        setCommentNumbers((commentNumbers)=> commentNumbers+1)
        if(!commentShown)
            setCommentShown((commentShown)=> true);
    }


    /*************SHARE BUTTON*****************/ 
    const [shareNumbers,setShareNumbers] = useState(30);
    const [isShared,setIsShared] = useState(false);
    //when the button is clicked,we check if the post is already shared or not,if it is shared nothing will happen (you can only delete the shared post from your profile),if it is not shared we increase the number of shares by 1
    function shareHandler(){
        if(!isShared){
            setShareNumbers((shareNumbers)=> shareNumbers+1)
            setIsShared((isShared)=> !isShared)
        }    
    }

    return (
        <div>
        <div class={"flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] " + styles["layout"]}>
            <div class="p-4 md:p-5">
                <Poster image="https://assets-fr.imgfoot.com/media/cache/1200x1200/lionel-messi-2223-4.jpg" imageSize={3.875} />
                <PostBody
                    image="https://assets-fr.imgfoot.com/media/cache/1200x1200/lionel-messi-2223-4.jpg"
                />
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

            {commentShown && comments.map((body,index)=> <Comment key={index} body={body} />)
           }
            <Input
                onSumbit={onAddingComment}
            />
        </div>
    </div>
        
            
    )
}

export default Post;
