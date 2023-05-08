import React ,{useState}from "react";
import style from "./Post.module.css";
export default function UpdatePost(props) {
    const [input , setInput] = useState(props.post.text);
    
    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        props.onClick(input)
    }


    return (
        <div>
        <form onSubmit={handleSubmit} className={`flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5  `}>
            <input onChange={handleInputChange} value={input} type="text" className={`py-3 px-2 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 `} placeholder="Edit your post." />

                <button style={{width:"50px"},{margin:"5px auto"}}  class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" >
                Edit
                </button> 
</form>
            {props.post.photos.length!=0 && <img style={{marginTop: "px"}} src={`http://localhost:8000/postsImages/${props.post.photos[0]}`} alt="Post image" />}
        </div>
        
    );
}