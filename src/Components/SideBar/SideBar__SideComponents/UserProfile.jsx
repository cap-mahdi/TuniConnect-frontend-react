import React from 'react';
import user from '../assets/user.jpg';
import styles from './UserProfile.module.css';
import { Link } from 'react-router-dom';
import avatar from '../../../assets/avatar.svg';
const UserProfile = ({ toggle, width, member }) => {
  const responsive = {
    hide: width < 1200 || toggle ? true : false,
  };
  console.log('rerender' + responsive.hide);
  return (
    <Link to={`/profile/${member.id}`}>
      <div
        className={`flex gap-5 items-center ${
          toggle ? 'bg-none transition-all duration-300 delay-200' : 'bg-white rounded-xl p-2'
        }`}
        style={{ width: '90%' }}
      >
        <div className="min-w-[3.5rem] h-[3.5rem]">
          <img
            src={member?.profilePicture ? `http://localhost:8000/images/${member.profilePicture}` : avatar}
            alt=""
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className={`${toggle ? 'opacity-0 delay-200' : ''}  ${responsive.hide ? `${styles['hide']}` : ''}`}>
          <h3 className="text-xl">
            {member.firstName} {member.lastName}
          </h3>
          <span className="text-[0.75rem] opacity-60">{member.user.email}</span>
        </div>
      </div>
    </Link>
  );
};

export default UserProfile;
