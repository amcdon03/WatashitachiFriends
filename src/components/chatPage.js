import React, { useState } from 'react';
import MessageList from './messageList.js';
import Title from './title';
import MessageForm from './messageForm.js';

export default function ChatPage() {
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
