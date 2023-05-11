import React from 'react';
import Friend from './friend';
import { Link } from 'react-router-dom';
import { setDate } from 'date-fns';
import { fetchData, fetchDataWithArgs } from '../../API/utilities';
import { getMember } from '../../API/Accounts/accountsController';
import { getUserPostsPaginated } from '../../API/Posts/PostController';

const FriendsList = ({ friends, resetToNull,setData,setID,setPosts}) => {
  return (
    <div style={{marginBottom:"10px"}} className="mt-4 pl-4">
      <div className="p-4 shadow rounded-lg bg-white w-full" id="intro">
        {/* Header */}
        <div className="flex justify-between">
          <h1 className="font-bold text-xl">Friends</h1>
        </div>
        {/* List */}
        <div className="">
          <p className="text-base text-gray-400">{friends?.length || '--'} friends</p>
          <div className="grid grid-cols-3 gap-1">
            {friends.map((friend) => (
              <Link onClick={ ()=>{
                resetToNull();
                fetchDataWithArgs(getMember, setData,friend.id);
                setID(friend.id);
                fetchData(()=>getUserPostsPaginated(friend.id,0), setPosts);
              }} 
                to={"/profile/"+friend.id} ><Friend
                firstName={friend.firstName}
                lastName={friend.lastName}
                imageUrl={friend.profilePicture}
                id={friend.id}
              /></Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsList;
