import React from 'react';
import { useState, useEffect } from 'react';
import { getCovoituragesByDriver } from '../API/Covoiturage/CovoiturageController';
import TripCard from '../Components/Covoiturage/tripCard';

const MyTrips = ({ member }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCovoituragesByDriver(member.id).then((response) => setData(response.data));
  }, []);

  useEffect(() => {
    setData(data);
  }, [data]);
  return (
    <div>
      {data.length === 0 ? (
        <p className='text-center'>Oops, Looks like you didn't suggest any carpools!</p>
      ) : (
        data.map((trip) => <TripCard trip={trip} allTrips={false} id={member.id}></TripCard>)
      )}
    </div>
  );
};

export default MyTrips;
