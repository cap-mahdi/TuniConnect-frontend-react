import React from "react";
import Friend from "./friend";


const FriendsList = (props) => {    

    return (
        
        <div className="mt-4 pl-4">
                                    <div className="p-4 shadow rounded-lg bg-white w-full" id="intro">
                                        {/* Header */}
                                        <div className="flex justify-between">
                                            <h1 className="font-bold text-xl">Friends</h1>
                                        </div>
                                        {/* List */}
                                        <div className="">
                                            <p className="text-base text-gray-400">1000 friends</p>
                                            <div className="grid grid-cols-3 gap-1">
                                                <Friend firstName="Friend" lastName="FullName"  imageUrl="" id={0}/>
                                                <Friend firstName="Friend" lastName="FullName"  imageUrl="" id={0}/>
                                                <Friend firstName="Friend" lastName="FullName"  imageUrl="" id={0}/>
                                                <Friend firstName="Friend" lastName="FullName"  imageUrl="" id={0}/>
                                                <Friend firstName="Friend" lastName="FullName"  imageUrl="" id={0}/>
                                                <Friend firstName="Friend" lastName="FullName"  imageUrl="" id={0}/>
                                                <Friend firstName="Friend" lastName="FullName"  imageUrl="" id={0}/>
                                                <Friend firstName="Friend" lastName="FullName"  imageUrl="" id={0}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    );
};


export default FriendsList;