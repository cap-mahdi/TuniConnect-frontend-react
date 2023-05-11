import { Fragment, useState } from 'react';

import Avatar from "../Post/Avatar"
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
  UserPlusIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import { Menu, Transition } from '@headlessui/react';
import { useEffect } from 'react';

import styles from './InvitationRequest.module.css';
import { postData } from '../../API/utilities';
import { editFriendRequests } from '../../API/Accounts/FriendRequestController';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function InvitationRequest({toggle , width ,  friendRequest, onChangeHandler  , id}) {

  const [status , setStatus]=useState("pending")
  const responsive = {
    hide: width < 1200 || toggle ? true : false,
  };

  async function handledAcceptButton(){
    const newStatus="Accepted"
    setStatus(newStatus)
    const friendRequestId=friendRequest["id"]
    const postData = { 
      status: newStatus, 
      friendRequestId: friendRequestId 
    }
    editFriendRequests(postData)
    setTimeout(() => {
      onChangeHandler();
    }, 500);
  }

  async function handledDeclineButton() {
    const newStatus = "Refused"
    setStatus(newStatus)
    const friendRequestId = friendRequest["id"]
    const postData = {
      status: newStatus,
      friendRequestId: friendRequestId
    }
    editFriendRequests(postData)
    setTimeout(() => {
      onChangeHandler();
    }, 500);
  }


  return (
    <>

      <div
        className={` sidebar  ${styles['invitation-container']}  ${toggle ? 'opacity-0 delay-200' : ''} ${
                responsive.hide ? `${styles['hide']}` : ''
              } `}
        // key={data.id}
      >
        <h2 className={`text-3xl font-bold leading-7 text-gray-900  ${styles['name']}`}>{friendRequest["sender"]["lastName"]}  {friendRequest["sender"]["firstName"]}</h2>

        <div className="mt-2 flex items-center text-sm text-gray-500">
          <Avatar image={friendRequest["sender"]["profilePicture"]} size={20} />         
         <span>sent you a friend request</span> 
        </div>
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
          {status=="pending" ? (
            <>
          <button
            onClick={handledAcceptButton}
            type="button"
            className={`inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${styles['button']}`}
          >
            <CheckIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Accept
          </button>

          <button
            type="button"
            onClick={handledDeclineButton}
            className={`inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${styles['button']}`}
          >
            <XMarkIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Refuse
          </button>
            </>
          ) : (
            <>
                <div className={`  ${styles[`${status=="Accepted" ? 'accepted' : 'refused'}` ]}`}> {status}</div> 
            </>

          )}
        </div>
      </div>
    </>
  );
}
