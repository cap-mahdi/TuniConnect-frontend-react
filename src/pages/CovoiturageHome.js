import TripCard from '../Components/Covoiturage/tripCard';
import { Link } from 'react-router-dom';
import Avatar from '../Components/Post/Avatar';
import { useState, useEffect } from 'react';
import { getCovoiturages } from '../API/Covoiturage/CovoiturageController';
import { fetchData } from '../API/utilities';
import Model1 from '../Components/Covoiturage/Model1';

function CovoiturageHome({ member }) {
  const [data, setData] = useState([]);
  const [showModal2, setShowModal2] = useState(false);

  useEffect(() => {
    fetchData(getCovoiturages, setData);
  }, []);

  useEffect(() => {
    setData(data);
  }, [data]);

  console.log(data);
  return (
    <div class="flex flex-col space-x-0 space-y-12 justify-between items-center mt-10">
      <div className="flex flex-col justify-end space-x-3 self-end">
        <Link
          to='myTrips'
          className="self-end"
        >
          <span class="mb-2 font-semibold text-lg ml-2 text-[#1F2937]">My Offered trips</span>
        </Link>
        <button className="self-end" onClick={() => setShowModal2(true)}>
          <div className='flex flex-row'>
            <Avatar image={'button.png'} size={1.5}></Avatar>
            <span class="font-semibold text-lg ml-2 text-[#1F2937]">Add a new trip</span>
          </div>
        </button>
      </div>
      {data?.map((trip) => (
        <TripCard trip={trip} allTrips={true} id={member.id}></TripCard>
      ))}
      <Model1 isVisible={showModal2} onClose={() => setShowModal2(false)} member_id={member.id}></Model1>
    </div>
  );
}

export default CovoiturageHome;
