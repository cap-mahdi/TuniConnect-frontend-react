import style from './MessangerSection.module.css';
import ContactList from '../Components/Messanger/ContactList';
import { Fragment, useRef, useState } from 'react';

import RightSection from '../Components/Messanger/RightSection/RightSection';
import RoomCreate from '../Components/Messanger/RoomCreate';
export function MessangerSection(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={` ${style['container']}`}>
        <div className={`${style['left']}`}>
          <RoomCreate open={open} setOpen={setOpen} />
          <button
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => {
              setOpen(true);
            }}
          >
            Create Room
          </button>
          <ContactList />
        </div>
        <div className={`${style['right']}`}>
          <RightSection />
        </div>
      </div>
    </>
  );
}
export default MessangerSection;
