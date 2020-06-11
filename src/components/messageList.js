import React, { useState } from 'react';

export default function MessageList() {
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

  const addMsgObject = () => {
    // add function code here
    //const { messages } = state;
    setMessages([
      ...messages,
      {
        user: 'bubble sender',
        name: 'angel',
        text: 'Exactly! Oh No!',
      },
    ]);
    //console.log(this.messages)
  };

  return (
    <section className="messageArea">
      {messages.map(function (item) {
        return <div className={item.user}>{item.text}</div>;
      })}
      <button onClick={addMsgObject}>add</button>
    </section>
  );
}
