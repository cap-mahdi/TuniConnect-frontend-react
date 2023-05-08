import React from "react";
import { Link } from 'react-router-dom';



const Friend = (props) => {

    return (
        <div className="bg-white p-0.5">
        <img src={props.imageUrl}
            className="w-24 h-24 rounded-md mt-2 cursor-pointer"
        />
        <Link to={`/profile/`+props.id} className="font-semibold text-sm">{props.firstName +' '+props.lastName}</Link>
    </div>
    );
};



export default Friend;