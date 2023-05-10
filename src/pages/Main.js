import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import Navigation from '../Components/Navigation';
import SideBarLeft from '../Components/SideBar/SideBarLeft';
import SideBarRight from '../Components/SideBar/SideBarRight';
import PostInput from '../Components/PostInput/PostInput';

import styles from './Main.module.css';
import SideBarLeftData from './Data/Data';
import SignUpPage from './SignUpPage';
// import SideBarRightData from './Data/Data';

const Main = (props) => {

  return (
    <>
      <div className={`${styles['main-wrapper']}`}>
        <Navigation member={props.member} />
        <div className={`${styles['side-main-container']}`}>
          <div className={`${styles['leftSide']}`}>
            <SideBarLeft member={props.member} data={SideBarLeftData} />
          </div>
          <div className={`${styles['centerDiv']}`}>
            <Outlet />
          </div>
          <div className={`${styles['rightSide']}`}>
            {' '}
            <SideBarRight data={SideBarLeftData} memberId={props?.member.id} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
