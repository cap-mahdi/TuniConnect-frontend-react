import { Link } from 'react-router-dom';
import Navigation from '../Components/Navigation';
import SideBarLeft from '../Components/SideBar/SideBarLeft';
import SideBarRight from '../Components/SideBar/SideBarRight';

import SideBarLeftData from './Data/Data';

import styles from './Main.module.css';
import Profile from '../Components/Profile/Profile';
import { useParams } from 'react-router-dom';
import { getMember } from '../api/Accounts/accountsController';
import { fetchData } from '../api/utilities';
import { useEffect, useState } from 'react';
const ProfilePage = (props) => {
  const { id } = useParams();
  console.log(id);

  const [data, setData] = useState();

  useEffect(() => {
    fetchData(getMember, setData,10);
  }, []);

  useEffect(() => {
    console.log(data);
  }, data);
  return (
    <>

<div className={`${styles['main-wrapper']}`}>
        <Navigation />
        <div className={`${styles['side-main-container']}`}>
          <div className={`${styles['leftSide']}`}>
            <SideBarLeft data={SideBarLeftData} />
          </div>
          <div className={`${styles['centerDiv']}`}>
            
          <Profile />
          </div>
          <div className={`${styles['rightSide']}`}>
            {' '}
            <SideBarRight data={SideBarLeftData} />
          </div>
        </div>
      </div>





    </>
  );
};
export default ProfilePage;
