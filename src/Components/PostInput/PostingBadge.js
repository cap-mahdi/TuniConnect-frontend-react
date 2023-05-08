import React from "react";

export default function PostingBadge(props) {
    const style={
        size:{
            width: "100px",
        },
        margin:" 2px auto"
    }
    if(props.posted == true){
    return(
        <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-500 text-white" style={style} >Posting ...</span>
    )
    }else{
        return(
            <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-500 text-white" style={style}>Posted !</span>
        )
    }
}