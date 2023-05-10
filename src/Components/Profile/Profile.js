import React, { useEffect, useState } from 'react';
import CoverImage from '../Profile/Images';
import ActivityInfo from './ActivityInfo';
import ProfileImage from './ProfileImage';
import { Link } from 'react-router-dom';
import FriendsList from './FriendsList';
import avatar from '../../assets/avatar.svg';
import { fetchDataWithArgs, getData, postData } from '../../API/utilities';
import { getFriends } from '../../API/Accounts/accountsController';
import styles from './Profile.module.css'



const Profile = ({ data, member, handleChangeOnProfile , profileId }) => {
  const [friends, setFriends] = useState([]);
  const [friendRequestSent, setFriendRequestSent] = useState(false);
  const [areFriends, setAreFriends] = useState(false)


  async function verifyFriendship(id1, id2) {
    const { data } = await getData(`/member/areFriends/${id1}/${id2}`)
    setAreFriends(data.areFriends)
  }

  async function verifySendingFriendRequest(id1, id2) {
    const { data } = await getData(`/friend/request/${id1}/sent_to/${id2}`)
    setFriendRequestSent(data.sentRequest);
  }

  useEffect(() => {
    fetchDataWithArgs(getFriends, setFriends, profileId);
    verifyFriendship(member?.id,profileId);
    verifySendingFriendRequest(member?.id, profileId);
  }, []);


  useEffect(() => {
    console.log(friends);
  }, [friends, friendRequestSent, areFriends ]);


  useEffect(() => {
    console.log("YYOYO3 ", friendRequestSent );
  }, [friendRequestSent]);

  async function handleAddFriendButtonClick() {
    const donnees = {
      sender: member?.id,
      receiver: data?.id
    };
    await postData("/friend/request/add", donnees)
    setFriendRequestSent(true);

    // handleChangeOnProfile()
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
                  <ActivityInfo nbrFriends={22} nbrPhotos={10} nbrComments={89} />
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
                <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase" >
                  {data?.id !== member?.id ? (
                    !areFriends ? (
                      <button
                        className={friendRequestSent ? `${styles['sent']}` : `${styles['unsent']}`}
                        onClick={handleAddFriendButtonClick}
                        disabled={friendRequestSent}
                      >
                        {friendRequestSent ? 'Friend Request Sent' : 'Send friend request'}
                      </button>
                    ) : (
                      "You are already friends"
                    )
                  ) : ("")
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FriendsList friends={friends} />
    </main>
  );
};

export default Profile;
