import React, { useState, useEffect } from 'react';
import WebSocket from 'isomorphic-ws';
import { v4 as uuidv4 } from 'uuid';
function WebS() {
  const [messages, setMessages] = useState([]);
  const [id, setId] = useState(uuidv4());

  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:8080`);
    socket.onopen = () => {
      const payload = {
        userId: id,
      };
      socket.send(JSON.stringify(payload));
    };

    socket.onmessage = (event) => {
      const message = event.data;
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
        userId: id,
        message: message,
      };
      socket.send(JSON.stringify(payload));
    };
  };
  return (
    <>
      <div>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const messageInput = event.target.elements.message;
            const json = messageInput.value;
            sendMessage(json);
            messageInput.value = '';
          }}
        >
          <input type="text" name="message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}

export default WebS;
