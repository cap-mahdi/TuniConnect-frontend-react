import './App.css';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import React, { useState, useEffect } from 'react';
function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');

    socket.onmessage = (event) => {
      const message = event.data;
      setMessages((messages) => [...messages, message]);
    };

    return () => {
      // socket.close();
    };
  }, []);

  const sendMessage = (message) => {
    const socket = new WebSocket('ws://localhost:8080');
    socket.onopen = () => {
      socket.send(message);
      // socket.close();
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
            sendMessage(messageInput.value);
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

export default App;
