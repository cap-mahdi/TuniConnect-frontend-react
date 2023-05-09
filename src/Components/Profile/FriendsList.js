import React from 'react';
import Friend from './friend';

const FriendsList = ({ friends }) => {
  return (
    <div className="mt-4 pl-4">
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
              <Friend
                firstName={friend.firstName}
                lastName={friend.lastName}
                imageUrl={friend.profilePicture}
                id={friend.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsList;
