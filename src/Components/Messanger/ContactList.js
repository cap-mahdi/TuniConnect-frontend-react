import Contact from './Contact';

import { fetchDataWithArgs } from '../../API/utilities';
import { getRoomMessages } from '../../API/Chat/chatController';
import style from './ContactList.module.css';
export default function ContactList({ member, rooms, friends, activeRoom, setActiveRoom, messages, setMessages }) {
  const contactOnClickHandler = (room) => {
    setActiveRoom(room);
    fetchDataWithArgs(getRoomMessages, setMessages, { roomId: room.id });
  };
  if (!rooms || rooms.length === 0) {
    return <></>;
  } else {
    return (
      <ul role="list" className={`divide-y divide-gray-100 `}>
        {rooms.map((room) => {
          let friend;

          room.members.map((mem) => {
            if (mem.id !== member.id) friend = mem;
          });
          friends.map((mem) => {
            if (mem.id === friend.id) friend = mem;
          });

          return (
            <Contact
              onClick={contactOnClickHandler}
              key={room.id}
              member={member}
              room={room}
              friend={friend}
              activeRoom={activeRoom}
              setActiveRoom={setActiveRoom}
            />
          );
        })}
      </ul>
    );
  }
}
