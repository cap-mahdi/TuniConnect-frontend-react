import { Link } from 'react-router-dom';
import Navigation from '../Components/Navigation';
import SideBarLeft from '../Components/SideBar/SideBarLeft';
import SideBarRight from '../Components/SideBar/SideBarRight';

import SideBarLeftData from './Data/Data';

import styles from './Main.module.css';
import Profile from '../Components/Profile/Profile';
import { useParams } from 'react-router-dom';
import { getMember } from '../API/Accounts/accountsController';
import { fetchDataWithArgs } from '../api/utilities';
import { useEffect, useState } from 'react';
const ProfilePage = (props) => {
  const { id } = useParams();
  console.log("profile id ", id);
  console.log("profile page props" , props)

  const [data, setData] = useState();

  useEffect(() => {
    fetchDataWithArgs(getMember, setData,id);
  }, []);

  // useEffect(() => {
  //   console.log("wwwww" , data);
  // }, [  data]);
  return (
    <>

          <Profile member= {props.member} data={data} handleChangeOnProfile={setData} profileId={id} />


    </>
  );
};
export default ProfilePage;
