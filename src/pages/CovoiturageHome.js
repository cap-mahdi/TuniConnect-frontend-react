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
  const [loading, setLoading] = useState(true); 
  
  useEffect(() => {
    fetchData(getCovoiturages, setData)
      .then(() => setLoading(false))
      .catch((error) => {
        console.error('Error fetching carpools:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setData(data);
  }, [data]);

  console.log(data);
  return (
    <div class="flex flex-col space-x-0 space-y-12 justify-between items-center mt-10">
      <div className="flex flex-col justify-end space-x-3 self-end">
        <Link to="myTrips" className="self-end">
          <span class="mb-2 font-semibold text-lg ml-2 text-[#1F2937]">Your Carpool Offers</span>
        </Link>
        <button className="self-end" onClick={() => setShowModal2(true)}>
          <div className="flex flex-row">
            <Avatar image={'button.png'} size={1.5}></Avatar>
            <span class="font-semibold text-lg ml-2 text-[#1F2937]">Add a new carpool</span>
          </div>
        </button>
      </div>
      {loading ? ( 
        <div
          class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-indigo-600 rounded-full"
          role="status"
          aria-label="loading"
        >
          <span class="sr-only">Loading...</span>
        </div>
      ) : data.length === 0 ? (
        <p className="text-center">Oops, Looks like there aren't any carpools!</p>
      ) : (
        data
          .filter((trip) => trip.driver.id !== member.id)
          .map((trip) => <TripCard trip={trip} allTrips={true} id={member.id}></TripCard>)
      )}
      <Model1 isVisible={showModal2} onClose={() => setShowModal2(false)} member_id={member.id}></Model1>
    </div>
  );
}

export default CovoiturageHome;
