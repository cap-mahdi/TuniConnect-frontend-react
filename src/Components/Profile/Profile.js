import React, { useEffect, useState } from 'react';
import CoverImage from '../Profile/Images';
import ActivityInfo from './ActivityInfo';
import ProfileImage from './ProfileImage';
import { Link } from 'react-router-dom';
import FriendsList from './FriendsList';
import avatar from '../../assets/avatar.svg';
import { fetchData, fetchDataWithArgs } from '../../API/utilities';
import { getFriends, getMemberComments, getMemberLikes, getMemberPhotos, getMemberShares } from '../../API/Accounts/accountsController';
import Spin from '../Spin';
import { set } from 'date-fns';
import { getUserPostsPaginated } from '../../API/Posts/PostController';

//profile page with tailwind  cover image profile image and profile info and list of posts and friends

const Profile = ({ data ,setData,setPosts,setID}) => {
  console.log("data thta comes", data);
  const [friends, setFriends] = useState(null);
  const [nbrLikes, setNbrLikes] = useState(null);
  const [nbrPhotos, setNbrPhotos] = useState(null);
  const [nbrComments, setNbrComments] = useState(null);
  const [nbShares, setNbShares] = useState(null);

  useEffect(() => {
    if(data)
    {fetchDataWithArgs(getFriends, setFriends, data.id)
    fetchDataWithArgs(getMemberLikes, setNbrLikes, data.id);
    fetchDataWithArgs(getMemberPhotos, setNbrPhotos, data.id);
    fetchDataWithArgs(getMemberComments, setNbrComments, data.id);
    fetchDataWithArgs(getMemberShares, setNbShares, data.id);}

  }, [data]);
  useEffect(() => {
    console.log("shares", nbShares);
  }, [nbShares]);
  function resetToNull(){
    setFriends(null);
    setData(null);
    setNbrLikes(null);
    setNbrPhotos(null);
    setNbrComments(null);
    setNbShares(null);
    setPosts(null);
  }
  return (
    <main className="profile-page">
      <CoverImage imageUrl={data?.coverPicture} />
      <section className="relative pt-16 bg-gray-300">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <ProfileImage
                  imageUrl={data?.profilePicture ? `http://localhost:8000/images/${data.profilePicture}` : avatar}
                />
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <ActivityInfo nbrLikes={nbrLikes} nbrPhotos={nbrPhotos} nbrComments={nbrComments} nbShares={nbShares}/>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                  {data?.firstName || '--'} {data?.lastName || '--'}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i> {data?.address.city || '--'}{' '}
                  {data?.address.state || '--'} {data?.address.country || '--'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {friends ? <FriendsList resetToNull={resetToNull} friends={friends} setData={setData} setID={setID} setPosts={setPosts}/>: <Spin />}
    </main>
  );
};

export default Profile;
