import React from 'react';
import MessageList from './messageList.js';
import Title from './title';
import MessageForm from './messageForm';

export default function chatPage() {
  return (
    <section className="conversation">
      <Title />
      <MessageList />
      <MessageForm />
    </section>
  );
}
