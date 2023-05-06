import { Link } from 'react-router-dom';
// import { XMarkIcon } from '@heroicons/react/20/solid';
import Post from '../Components/Post/Post';
import { getMember } from '../api/Accounts/accountsController';
import { useEffect, useState } from 'react';
import { fetchData } from '../api/utilities';


import SideBarLeftData from './Data/Data';


import styles from './Main.module.css';
import Navigation from '../Components/Navigation';
import SideBarRight from '../Components/SideBar/SideBarRight';
import SideBarLeft from '../Components/SideBar/SideBarLeft';
const Home = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(getMember, setData);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>


<div className={`${styles['main-wrapper']}`}>
        <Navigation />
        <div className={`${styles['side-main-container']}`}>
          <div className={`${styles['leftSide']}`}>
            <SideBarLeft data={SideBarLeftData} />
          </div>
          <div className={`${styles['centerDiv']}`}>
          <h1 style={{ fontSize: '2rem' }}>Home</h1>
      <h1 style={{ fontSize: '2rem' }}>
        {' '}
        -----: Go to <Link to="/profile"> Profile</Link>
      </h1>
      <Post />
      <Post />
      <Post />
      <Post />
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
export default Home;
