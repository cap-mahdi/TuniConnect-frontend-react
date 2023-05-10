import style from './MessangerSection.module.css';
import ContactList from '../Components/Messanger/ContactList';
import { useState, useEffect } from 'react';

import RightSection from '../Components/Messanger/RightSection/RightSection';
import RoomCreate from '../Components/Messanger/RoomCreate';
import { fetchDataWithArgs } from '../API/utilities';
import { getFriends } from '../API/Accounts/accountsController';
import { getRooms } from '../API/Chat/chatController';

export function MessangerSection(props) {
  const [open, setOpen] = useState(false);
  const [friends, setFriends] = useState([]);
  const [activeRoom, setActiveRoom] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchDataWithArgs(getFriends, setFriends, props.member.id);
    fetchDataWithArgs(getRooms, setRooms, props.member.id);
  }, []);

  useEffect(() => {
    console.log('from messanger : ', friends);
  }, [friends]);
  useEffect(() => {
    console.log('from messanger rooms : ', rooms);
  }, [rooms]);
  useEffect(() => {
    // console.log('from messanger rooms : ', rooms);
  }, [activeRoom]);
  return (
    <>
      <div className={` ${style['container']}`}>
        <div className={`${style['left']} sidebar-container`}>
          <RoomCreate member={props.member} friends={friends} open={open} setOpen={setOpen} setRooms={setRooms} />
          <button
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => {
              setOpen(true);
            }}
          >
            Create Room
          </button>
          <ContactList
            messages={messages}
            setMessages={setMessages}
            member={props.member}
            rooms={rooms}
            friends={friends}
            activeRoom={activeRoom}
            setActiveRoom={setActiveRoom}
          />
        </div>
        <div className={`${style['right']}`}>
          {!activeRoom ? (
            <></>
          ) : (
            <RightSection messages={messages} setMessages={setMessages} member={props.member} activeRoom={activeRoom} />
          )}
        </div>
      </div>
    </>
  );
}
export default MessangerSection;
