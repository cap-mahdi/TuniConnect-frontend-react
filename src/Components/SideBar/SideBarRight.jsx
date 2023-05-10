import React from 'react';
import { useState, useEffect } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import SidebarData from './SideBar__SideComponents/SidebarData';
import UserProfile from './SideBar__SideComponents/UserProfile';
import styles from './SideBar.module.css';
import st from './SideBarRight.module.css';
import InvitationRequest from '../Invitation/InvitationRequest';
import { getFriendRequests } from '../Invitation/FriendRequestController';
import { fetchData } from '../../API/utilities';
import Spin from '../../Components/Spin'




const SideBarRight = (props) => {

  function ListOfInvits({ friendRequests, setFriendRequests }) {
    async function hadleReplyeFriendRequest(id) {
      const newFriendRequests = friendRequests.splice(id, 1);
      setFriendRequests(newFriendRequests)
    }

    const invits = friendRequests.map((friendRequest, index) => {
      return <InvitationRequest friendRequest={friendRequest} onChangeHandler={() => { hadleReplyeFriendRequest(index) }} id={index} />
    })
    return invits
  }

  const { memberId } = props;
  const [toggle, setToggle] = useState(false);
  const [friendRequests, setFriendRequests] = useState(null)

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
      <div className={`sidebar-container  ${styles.container} ${st['container']}`}>
        <div className={`${styles['friend-requests']}`} >
          you don't have any friend requests
        </div>
      </div>

    )
  }



  return (
    <div className={`sidebar-container  ${styles.container} ${st['container']}`}>

      <ListOfInvits friendRequests={friendRequests} onChangeHandler={setFriendRequests} />

    </div>
  );
};

export default SideBarRight;
