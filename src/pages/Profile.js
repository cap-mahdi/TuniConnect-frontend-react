import { Link } from 'react-router-dom';
import Navigation from '../Components/Navigation';
import SideBarLeft from '../Components/SideBar/SideBarLeft';
import SideBarRight from '../Components/SideBar/SideBarRight';

import SideBarLeftData from './Data/Data';

import styles from './Main.module.css';


const Profile = (props) => {
  return (
    <>

<div className={`${styles['main-wrapper']}`}>
        <Navigation />
        <div className={`${styles['side-main-container']}`}>
          <div className={`${styles['leftSide']}`}>
            <SideBarLeft data={SideBarLeftData} />
          </div>
          <div className={`${styles['centerDiv']}`}>
            
      {' '}
      <h1 style={{ fontSize: '2rem' }}>Profile</h1>
      <h1 style={{ fontSize: '2rem' }}>
        -----: Go to <Link to="/"> Home</Link>
      </h1>
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
export default Profile;
