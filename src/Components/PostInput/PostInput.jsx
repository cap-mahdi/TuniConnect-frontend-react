import React,{useState} from "react";
import styles from "./PostInput.module.css"
import { fetchData, postData } from "../../API/utilities";
import { addPost, getPostTimeline } from "../../API/posts/PostController";
import { json } from "react-router-dom";
import PostingBadge from "./PostingBadge";
 function PostInput(props) {
    const currentUserId = props.currentUserId;
    const [input, setInput] = useState("");
    const [image, setImage] = useState(null);
    const [isPosting, setIsPosting] = useState("start");
    const [file,setFile] = useState(null);
    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0])
            reader.onload = () => {
                setFile(reader.result);
              };

        }else{
            setFile(null);
        }
        
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e) => {   
        e.preventDefault();
        if(input == "")
            return;
        const formData = new FormData();
        formData.append("image", image);
        formData.append("text", input);
        formData.append("member_id", currentUserId);
        setIsPosting("posting")
        const res = await addPost(formData);
        await props.addPost(res.data.id)
        setIsPosting("done");
        setTimeout(() => {
            setIsPosting("start");
        }, 1000);
        setInput("");
        setImage(null);
        setFile(null);

    };


    return (
        <form onSubmit={handleSubmit} className={`flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5  ${styles["form_post"]}`}>
            {isPosting=="posting" ? <PostingBadge posted = {true}/> : isPosting=="done" ? <PostingBadge posted = {false}/> : null }
            <input onChange={handleInputChange} type="text" className={`py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500  ${styles["input_post"]} `} placeholder="It is time to post." value={input} />
            <div className={styles["upload_post"]}>
                <label class="block">
                    <span class="sr-only">Choose photo</span>
                    <input type="file" accept="image/*" class="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-500 file:text-white
                    hover:file:bg-blue-600
                    "  onChange={handleFileChange} />
                </label>
                
                
            </div>
            {file && (<img style={{marginTop:"20px"}} src={file}/>  )}
            <button style={{marginTop:"20px"}} class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm " >
                Post
                </button> 
</form>

    )
    

    }
export default PostInput;