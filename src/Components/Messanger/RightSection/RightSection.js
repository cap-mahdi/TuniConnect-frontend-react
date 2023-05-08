import style from './RightSection.module.css';
import { BiPaperPlane } from 'react-icons/bi';
import MessagesList from './MessagesList';
import React, { useState, useEffect } from 'react';
import WebSocket from 'isomorphic-ws';
import { v4 as uuidv4 } from 'uuid';
import { fetchDataWithArgs } from '../../../API/utilities';
import { getRoomMessages } from '../../../API/Chat/chatController';
export default function RightSection() {
  const [messages, setMessages] = useState([]);
  const roomId = 1;
  const ID = Math.floor(Math.random() * 2) + 1;
  console.log('ID :  ----> ', ID);

  const [id, setId] = useState(ID);

  useEffect(() => {
    fetchDataWithArgs(getRoomMessages, setMessages, { roomId });
  }, []);
  useEffect(() => {
    console.log(messages);
  }, [messages]);

  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:8080`);
    socket.onopen = () => {
      const payload = {
        userId: id,
      };
      socket.send(JSON.stringify(payload));
    };

    socket.onmessage = (event) => {
      console.log(event);
      const message = JSON.parse(event.data);

      setMessages((messages) => [...messages, message]);
    };

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = (message) => {
    const socket = new WebSocket('ws://localhost:8080');
    socket.onopen = () => {
      const payload = {
        senderId: id,
        roomId,

        body: message,
      };
      socket.send(JSON.stringify(payload));
    };
  };

  return (
    <>
      <div className={`${style['container']}`}>
        <div className={`${style['messages-container']}`}>
          <MessagesList id={id} messages={messages} />
        </div>

        <form
          className={`${style['input-container']} space-y-1 px-2 pb-3 pt-2"`}
          onSubmit={(event) => {
            event.preventDefault();
            const messageInput = event.target.elements.message;
            const json = messageInput.value;
            sendMessage(json);
            messageInput.value = '';
          }}
        >
          <input
            type="text"
            name="message"
            className={`block rounded-md px-3 py-2 text-base font-medium text-black-300  ${style['input']}`}
          ></input>
          <button className={`${style['send-container']}`}>
            <BiPaperPlane className={`h-6 w-6`} />
          </button>
        </form>
      </div>
    </>
  );
}
