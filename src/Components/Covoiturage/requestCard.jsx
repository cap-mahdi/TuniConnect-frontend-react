import Avatar from '../Post/Avatar';
import React, { useEffect, useState } from 'react';
import { acceptCov, declineCov } from '../../API/Covoiturage/CovoiturageController';

const RequestCard = ({ request }) => {
  const [requestStatus, setRequestStatus] = useState(request.status);

  const handleAccept = () => {
    acceptCov(request.sender.id, request.covoiturage.id).then((response) => {
      setRequestStatus(response.data.status);
    });
  };


  const handleDecline = () => {
    declineCov(request.sender.id, request.covoiturage.id).then((response) => {
      setRequestStatus(response.data.status);
    });
  };

  let buttonsOrStatus;

  if (requestStatus === 'pending') {
    buttonsOrStatus = (
      <div className="flex flex-col lg:flex-row lg:justify-end lg:items-center w-full lg:space-x-2">
        <button
          className="bg-[#F4F5FA] py-3 rounded-full border border-[#F0F0F6] shadow-xl lg:w-1/3 w-56"
          onClick={handleAccept}
        >
          Accept Request
        </button>
        <button
          className="bg-[#F4F5FA] py-3 rounded-full border border-[#F0F0F6] shadow-xl lg:w-1/3 w-56 text-center"
          onClick={handleDecline}
        >
          Decline Request
        </button>
      </div>
    );
  } else {
    buttonsOrStatus = <p className="text-lg font-light">{`Request ${requestStatus}`}</p>;
  }

  return (
    <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 mb-10 mx-auto w-9/12">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row ">
          <Avatar size={4} image={request.sender.profilePicture}></Avatar>
          <div className="flex flex-col">
            <span className="font-light text-lg ">{`${request.sender.firstName} ${request.sender.lastName}`}</span>
            <span className="font-light text-lg self-center">{`${request.sender.phone}`}</span>
          </div>
          </div>
          <div className='self-center'>{buttonsOrStatus}</div>
        </div>
    </div>
  );
};

export default RequestCard;
