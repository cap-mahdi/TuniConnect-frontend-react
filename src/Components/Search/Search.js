import React from "react";
import ListOfMembers from "./ListOfMembers";

export default function Search({members}) {
    return members.length !=0 ? 
    <div style={{margin:"auto"}}>
        <h1 style={{marginBottom:"20px"}}>{members.length} result(s)</h1> 
      <ListOfMembers members={members} /> 
    </div>
    : <h1 style={{textAlign:"center"}}> No results found </h1> ;
    }
