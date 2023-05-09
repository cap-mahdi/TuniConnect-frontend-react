import React from 'react';
import { useState  , useEffect} from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import SidebarData from './SideBar__SideComponents/SidebarData';
import UserProfile from './SideBar__SideComponents/UserProfile';
import styles from './SideBar.module.css';
import st from './SideBarRight.module.css';
import InvitationRequest from '../Invitation/InvitationRequest';
import { getFriendRequests } from '../Invitation/FriendRequestController';
import { fetchData } from '../../API/utilities';
import Spin from '../../Components/Spin'

function ListOfInvits({friendRequests , setFriendRequests})
{
  const invits=friendRequests.map((friendRequest ,index)=>{
    return <InvitationRequest friendRequest={friendRequest} onChangeHandler={setFriendRequests} id={index} />
  })
  return invits
}


const SideBarRight = (props) => {
  const [toggle, setToggle] = useState(false);
  const [friendRequests, setFriendRequests] = useState(null)

  async function showInvits() {
    const invitations = await fetchData(()=>getFriendRequests(2),setFriendRequests);
  }

  useEffect(()=>{
    console.log("test");
    showInvits()
  },[] )
  useEffect(()=>{
    console.log(friendRequests);
  },[friendRequests])

 
  

 if (friendRequests==null){
  return <Spin/>
 }

  return (
    <div className={`sidebar-container  ${styles.container} ${st['container']}`}>
      
      {/* <InvitationRequest friendRequest={friendRequests[0]} />  */}

     <ListOfInvits friendRequests={friendRequests} onChangeHandler={setFriendRequests} />
    
    </div>
  );
};

export default SideBarRight;
