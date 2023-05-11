import React from "react";
import Poster from "../Post/Poster/Poster";
import Member from "./Member";
export default function ListOfMembers({members}) {
    return (
        members.map((member) => (
            <Member member={member} />
            ))
    );
    }