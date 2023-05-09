import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import { Link  , Outlet} from 'react-router-dom';

import Navigation from '../Components/Navigation';
import SideBarLeft from '../Components/SideBar/SideBarLeft';
import SideBarRight from '../Components/SideBar/SideBarRight';
import PostInput from '../Components/PostInput/PostInput';

import styles from './Main.module.css';
import SideBarLeftData from './Data/Data';
import SignUpPage from './SignUpPage';
// import SideBarRightData from './Data/Data';




const Main = (props) => {
  console.log("props,",props);
  console.log("Log from main" , props.member);
  return (
    <>
      <div className={`${styles['main-wrapper']}`}>
        <Navigation />
        <div className={`${styles['side-main-container']}`}>
          <div className={`${styles['leftSide']}`}>
            <SideBarLeft data={SideBarLeftData} />
          </div>
          <div className={`${styles['centerDiv']}`}>
          
            <Outlet/>
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
export default Main;
