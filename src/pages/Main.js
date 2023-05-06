import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Link } from 'react-router-dom';

import HomePage from './Home';
import ProfilePage from './Profile';
import Navigation from '../Components/Navigation';
import SideBarLeft from '../Components/SideBar/SideBarLeft';
import SideBarRight from '../Components/SideBar/SideBarRight';

import styles from './Main.module.css';
import SideBarLeftData from './Data/Data';
import SignUpPage from './SignUpPage';
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
  {
    path: '/signup',
    element: <SignUpPage />,
  }
]);

const Main = (props) => {
  return (
    <>

            <RouterProvider router={router} />

    </>
  );
};
export default Main;
