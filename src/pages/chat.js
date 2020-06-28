import React, { useState, useEffect } from 'react';
import MessageList from '../components/messageList.js';
import Title from '../components/title';
import MessageForm from '../components/messageForm.js';

export default function Chat() {
  const [messages, setMessages] = useState([
    { user: 'bubble sender', name: 'angel', text: 'Hey there!' },
    {
      user: 'bubble recipient',
      name: 'andrew',
      text: "Hi! How's it going!",
    },
    {
      user: 'bubble sender',
      name: 'angel',
      text: 'Oh, things are going fine!',
    },
    {
      user: 'bubble recipient',
      name: 'andrew',
      text: 'What about for you?',
    },
    { user: 'bubble sender', name: 'angel', text: "It's all good!" },
    {
      user: 'bubble sender',
      name: 'angel',
      text: 'Although, I do have Maths today! 😬',
    },
    {
      user: 'bubble recipient',
      name: 'andrew',
      text: 'Noooo 😬',
    },
  ]);

  const LOCAL_STORAGE_KEY = 'react-message-list-messages';

  useEffect(() => {
    //get messages from local storage to store in var by calling getItem on localStorage
    const storageMessages = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageMessages) {
      setMessages(storageMessages);
    }
  }, []);

  useEffect(() => {
    //call setItem fn on global local storage
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  const sendMessage = (message) => {
    //call setMessage and pass on value enclosed
    setMessages([
      ...messages,
      {
        user: 'bubble sender',
        name: 'angel',
        text: message,
      },
    ]); //use a library to send to the server - fetch api
  };

  return (
    <section className="conversation">
      <Title />
      <MessageList messages={messages} />
      <MessageForm onSend={sendMessage} />
    </section>
  );
}
