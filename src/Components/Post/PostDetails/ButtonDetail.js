import React,{useState} from "react";
import styles from "./PostDetails.module.css"
function  ButtonDetails(props){
    return(
        
        <button onClick={()=>props.clickHandler()}  type="button" className={`py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-gray-500 hover:bg-gray-100  transition-all text-sm  ${props.isClicked &&  styles["button-clicked"]}`}>
                {props.number} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d={props.iconCode} />
            </svg>
        </button>
    )
}

export default ButtonDetails