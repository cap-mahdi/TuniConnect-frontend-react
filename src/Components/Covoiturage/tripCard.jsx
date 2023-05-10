import { useEffect, useState } from 'react';
import Avatar from '../Post/Avatar';
import Addon from './addon';
import { deleteCovoiturage, getRequest, sendRequest } from '../../API/Covoiturage/CovoiturageController';
import { Link } from 'react-router-dom';
import { getCovoituragesByID } from '../../API/Covoiturage/CovoiturageController';
import RequestCard from './requestCard';

function TripCard({ id, trip, allTrips }) {
  const [requestID, setRequestID] = useState(null);
  const [requestStatus, setRequestStatus] = useState(null);
  const departureTime = new Date(trip.departureTime);
  const [showCarpoolRequests, setShowCarpoolRequests] = useState(false);
  const [CarpoolRequests, setCarpoolRequests] = useState([]);
  const [imgSrc, setImgSrc] = useState('/down-arrow.png');
  const [isDeleted, setIsDeleted] = useState(false);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    getRequest(id, trip.id).then((response) => {
      if (response.data.length !== 0) {
        setRequestID(response.data[0].id);
        const savedStatus = localStorage.getItem(`requestStatus-${response.data[0].id}`);
        if (savedStatus) {
          setRequestStatus(savedStatus);
        }
      }
    });
  }, []);

  useEffect(() => {
    const currentTimestamp = new Date().getTime();
    const departureTimestamp = new Date(trip.departureTime).getTime();
    if (currentTimestamp > departureTimestamp) {
      setIsExpired(true);
    }
  }, [[trip.departureTime]]);

  useEffect(() => {
    if (trip.isDeleted) {
      setIsDeleted(true);
    }
  }, [trip]);

  useEffect(() => {
    if (showCarpoolRequests) {
      getCovoituragesByID(trip.id).then((response) => setCarpoolRequests(response.data));
    }
  }, [showCarpoolRequests]);

  const handleDelete = () => {
    console.log(trip.id);
    deleteCovoiturage(trip.id)
      .then((response) => {
        console.log(response);
        setIsDeleted(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (isDeleted) {
    return null;
  }

  if (isExpired) {
    return null;
  }

  const handleRequest = () => {
    const savedStatus = localStorage.getItem(`requestStatus-${requestID}`);
    if (savedStatus) {
      setRequestStatus(savedStatus);
    } else {
      setRequestStatus('sending');
      sendRequest(id, trip.id)
        .then((response) => {
          setRequestStatus('sent');
          setRequestID(response.data.id);
          localStorage.setItem(`requestStatus-${response.data.id}`, 'sent');
        })
        .catch(() => {
          setRequestStatus('error');
        });
    }
  };

  const toggleCarpoolRequests = () => {
    setShowCarpoolRequests(!showCarpoolRequests);
    setImgSrc(showCarpoolRequests ? '/down-arrow.png' : '/scroll-up.png');
  };

  const options = {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'Europe/Paris',
  };

  const formattedDepartureTime = departureTime.toLocaleDateString('en-US', options).replace(',', '');
  return (
    <>
      <div
        class="bg-[#E6ECF0] rounded-xl lg:w-4/5 md:w-96 w-full my-10 mx-auto"
        style={
          trip.numberOfPlaces - trip.numberOfPlacesTaken === 0 && allTrips ? { display: 'none' } : { display: 'block' }
        }
      >
        <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 ">
          <div className="flex flex-row justify-between">
            <div class="mb-2 font-semibold text-lg">{formattedDepartureTime}</div>
            <button
              style={allTrips ? { display: 'none' } : { display: 'flex' }}
              className="me-5"
              onClick={handleDelete}
            >
              <img src="/delete.png" className="w-6 h-6"></img>
            </button>
          </div>
          <div className="flex flex-row justify-between mb-2">
            <div className="flex flex-row justify-start">
              <Addon></Addon>
              <div className="flex flex-col">
                <div class="mx-3 font-semibold text-lg">{trip.departure}</div>
                <div class="mx-3 mt-6 font-semibold text-lg">{trip.destination}</div>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className='ml-3'>
                <span class="font-bold text-lg">{trip.price} </span>
                <span class="font-light text-sm">Dt</span>
              </div>
              <div title="places left" className="flex flex-row">
                <div class="relative inline-block">
                  <img
                    class="inline-block rounded-full ring-2 ring-white dark:ring-gray-800 w-10 h-10 mr-5"
                    src={'/pngegg.png'}
                  />
                </div>
                <span class="font-bold text-lg me-5 -ml-3">{trip.numberOfPlaces - trip.numberOfPlacesTaken}</span>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col lg:flex-row lg:justify-between lg:items-end items-center space-y-2"
            style={!allTrips ? { display: 'none' } : { display: 'flex' }}
          >
            <div className="flex flex-row">
              <Avatar size={3} image={trip.driver.profilePicture}></Avatar>
              <span class="font-light text-lg ml-2">{`${trip.driver.firstName} ${trip.driver.lastName} ${trip.driver.phone}`}</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-end lg:items-center w-3/4 lg:space-x-2 items-center">
              <button
                class="bg-[#F4F5FA] lg:py-3 py-2 rounded-full border border-[#F0F0F6] shadow-xl lg:w-2/5 w-44 lg:mb-0 mb-2"
                disabled={requestStatus === 'sending' || requestStatus === 'sent'}
                onClick={handleRequest}
              >
                {requestStatus === 'sending' && 'Sending...'}
                {requestStatus === 'sent' && 'Request sent'}
                {requestStatus !== 'sending' && requestStatus !== 'sent' && 'Send request'}
              </button>

              <Link
                to={`/profile/${trip.driver.id}`}
                target="_blank"
                rel="noopener noreferrer"
                class="bg-[#F4F5FA] lg:py-3 py-2 rounded-full border border-[#F0F0F6] shadow-xl lg:w-2/5 w-44 text-center"
              >
                <button>Contact</button>
              </Link>
            </div>
          </div>
          <div className="flex flex-row justify-center" style={allTrips ? { display: 'none' } : { display: 'flex' }}>
            <button onClick={toggleCarpoolRequests}>
              <img src={imgSrc} className=" w-5 h-5" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div style={!showCarpoolRequests ? { display: 'none' } : { display: 'flex' }} className="flex flex-col">
        {CarpoolRequests?.map((request) => (
          <RequestCard request={request}></RequestCard>
        ))}
      </div>
    </>
  );
}

export default TripCard;
