import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Link } from 'react-router-dom';

import HomePage from './Home';
import ProfilePage from './Profile';
import Navigation from '../Components/Navigation';
import SideBarLeft from '../Components/SideBar/SideBarLeft';
import SideBarRight from '../Components/SideBar/SideBarRight';

import styles from './Main.module.css';
import SideBarLeftData from './Data/Data';
// import SideBarRightData from './Data/Data';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
]);

const Main = (props) => {
  return (
    <>
      <div className={`${styles['main-wrapper']}`}>
        <Navigation />
        <div className={`${styles['side-main-container']}`}>
          <div className={`${styles['leftSide']}`}>
            <SideBarLeft data={SideBarLeftData} />
          </div>
          <div className={`${styles['centerDiv']}`}>
            <RouterProvider router={router} />
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
