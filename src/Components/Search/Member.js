
import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../Post/Avatar";

export default function Member( {member}) {
    return <div style={{marginBottom:"20px"}} className="flex-shrink-0 group block" >
    <div className="flex items-center">
    <Link to={`/profile/`+member.id} ><Avatar image={member.profilePicture} size={100} />  </Link>
        <div className="ml-3">
            <h3 className="font-semibold text-gray-800 " >{member.firstName} {member.lastName}  </h3>
        </div>
    </div>
    
</div>;
    }