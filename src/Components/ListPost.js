import React from "react";
import Post from "./Post/Post";
import Spin from "./Spin";

export default function ListPost(props) {
    if(props.posts==null)
        return <Spin />;
    return (<>
        {props.posts.map((post) => (
        <Post post={post} userId={props.userId} regetPosts={props.regetPosts} />
      ))
            
        }
        <div class="flex" style={{justifyContent:"center"}}>
        {props.isShowing ? <Spin /> :<button onClick={props.onClick}  type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-gray-100 border border-transparent font-semibold text-gray-500 hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-gray-500 focus:ring-offset-2 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:text-white dark:focus:ring-offset-gray-800">
            Show more
            </button>}

        </div>
        
    </>
    );
}