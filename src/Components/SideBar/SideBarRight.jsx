import React from 'react';
import { useState } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import SidebarData from './SideBar__SideComponents/SidebarData';
import UserProfile from './SideBar__SideComponents/UserProfile';
import styles from './SideBar.module.css';
import st from './SideBarRight.module.css';
import InvitationRequest from '../Invitation/InvitationRequest';
const SideBarRight = (props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`sidebar-container  ${styles.container} ${st['container']}`}>
      <InvitationRequest />
      {'                '}
      <li
        class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9 sidebar "
        id="listbox-option-0"
        role="option"
      >
        <div class="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            class="h-5 w-5 flex-shrink-0 rounded-full"
          />

          <span class="font-normal ml-3 block truncate">Wade Cooper</span>
        </div>

        <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </li>
      {'               '}
    </div>
  );
};

export default SideBarRight;
