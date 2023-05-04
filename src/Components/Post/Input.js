import React, { useState } from "react";

function Input(props){
    const [input,setInput] = useState("");

    function sumbitHandler(e){
        e.preventDefault();
        if(input.trim().length == 0)
            {
                setInput("");
                return;
            }
        props.onSumbit(input);
        setInput("");
        
    }
    return(
        <form onSubmit={sumbitHandler}>
            <input onChange={(e)=>setInput(e.target.value)} type="text" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Comment as Lionel Messi" value={input} />
        </form>

    )
}
export default Input