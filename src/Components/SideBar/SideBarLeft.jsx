import React from 'react';
import { useState, useEffect } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import SidebarData from './SideBar__SideComponents/SidebarData';
import UserProfile from './SideBar__SideComponents/UserProfile';
import styles from './SideBar.module.css';
const SideBarLeft = (props) => {
  const [toggle, setToggle] = useState(false);
  const [width, setWindowWidth] = useState(0);
  // const [hide, setHide] = useState(false);

  useEffect(() => {
    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  const updateDimensions = () => {
    // console.log(window);
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  useEffect(() => {
    if (width < 1200) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [width]);

  return (
    <div className={`${toggle ? `${styles['w-t']}` : `${styles['w-o']}`} sidebar-container  ${styles.container}`}>
      <UserProfile toggle={toggle} width={width} />
      <div className={` ${styles.scroll}`}>
        <SidebarData toggle={toggle} data={props.data} width={width} />
      </div>
      <div
        className={`absolute top-[7rem] flex justify-center items-center -left-5 w-10 h-10 bg-glass rounded-full cursor-pointer`}
        onClick={() => {
          if (width > 1200) setToggle(!toggle);
        }}
      >
        <BiChevronLeft className={`${toggle ? 'rotate-180' : ''} text-3xl transition-all duration-300`} />
      </div>
    </div>
  );
};

export default SideBarLeft;
