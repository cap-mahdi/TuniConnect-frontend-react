import React from 'react';

import { useState, useEffect } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import SidebarData from './SideBar__SideComponents/SidebarData';
import UserProfile from './SideBar__SideComponents/UserProfile';
import styles from './SideBar.module.css';
import st from './SideBarRight.module.css';
import InvitationRequest from '../Invitation/InvitationRequest';
import { getFriendRequests } from '../../API/Accounts/FriendRequestController';
import { fetchData } from '../../API/utilities';
import Spin from '../../Components/Spin';




const SideBarRight = (props) => {

  const { memberId } = props;
  const [toggle, setToggle] = useState(false);
  const [friendRequests, setFriendRequests] = useState(null);
  const [width, setWindowWidth] = useState(0);

  
  useEffect(() => {
    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  const updateDimensions = () => {
    // console.log(window);
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  useEffect(() => {
    if (width < 1200) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [width]);



  function ListOfInvits({ friendRequests, setFriendRequests ,toggle , width }) {
    async function hadleReplyeFriendRequest(id) {
      const newFriendRequests = friendRequests.splice(id, 1);
      setFriendRequests(newFriendRequests)
    }

    const invits = friendRequests.map((friendRequest, index) => {
      return <InvitationRequest toggle={toggle} width={width} friendRequest={friendRequest} onChangeHandler={() => { hadleReplyeFriendRequest(index) }} id={index} />
    })
    return invits
  }

  


  async function showInvits(memberId) {
    const invitations = await fetchData(() => getFriendRequests(memberId), setFriendRequests);
  }


  useEffect(() => {
    showInvits(memberId)
  }, [])

  useEffect(() => {
    showInvits(memberId)
  }, [friendRequests])





  if (friendRequests == null) {
    return <Spin />
  }
  if (friendRequests.length == 0) {
    return (
      <div className={`sidebar-container  ${styles.container}  ${toggle ? `${styles['w-t']}` : `${styles['w-o']}`}`}>
        <div className={`${styles['friend-requests']}`} >
          {/* you don't have any friend requests */}
        </div>  
      </div>

    )
  }



  return (
    <div className={`${toggle ? `${styles['w-t']}` : `${styles['w-o']}`} sidebar-container  ${styles.container}`  }>

      <ListOfInvits friendRequests={friendRequests} onChangeHandler={setFriendRequests} toggle={toggle} width={width} />

    </div>
  );
};

export default SideBarRight;
