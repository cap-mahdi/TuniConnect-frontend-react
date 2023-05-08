import React, { useState } from "react";
import { addComment } from "../../API/Posts/PostController";

function Input(props){
    const [input,setInput] = useState("");

    function sumbitHandler(e){
        e.preventDefault();
        if(!input.trim())
            {
                setInput("");
                return;
            }
        props.onSumbit(input);
        setInput("");
    }
    return(
        <form  className="flex" onSubmit={sumbitHandler}>
            <input onChange={(e)=>setInput(e.target.value)} type="text" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Comment as Lionel Messi" value={input} />
        </form>

    )
}
export default Input