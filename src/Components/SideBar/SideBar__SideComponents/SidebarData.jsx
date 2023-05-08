import React, { useState, useEffect } from 'react';
// import { datas } from '../Data';
import { Link } from 'react-router-dom';
import styles from './SidebarData.module.css';
import { BrowserRouter as Router } from 'react-router-dom';

const SidebarData = ({ toggle, data, width }) => {
  const datas = data;

  const responsive = {
    hide: width < 1200 || toggle ? true : false,
  };

  return (
    <>
      {datas.map((data) => {
        return (
          // <Link to={data.link}>
          <div
            className={` 
           sidebar left-4  bottom-4 ${styles['data-wrap']}`}
            key={data.id}
          >
            <div className="mr-8 text-[180%] text-brown">{data.icon}</div>
            <div
              className={`${toggle ? 'opacity-0 delay-200' : ''} text-[110%] text-brown whitespace-pre  ${
                responsive.hide ? `${styles['hide']}` : ''
              } `}
            >
              {data.text}
            </div>
          </div>
          /* </Link> */
        );
      })}
    </>
  );
};

export default SidebarData;
