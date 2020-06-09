import React from 'react';
import MessageList from './messageList.js';
import Title from './title';
import MessageForm from './messageForm.js';

export default function ChatPage() {
  return (
    <section className="conversation">
      <Title />
      <MessageList />
      <MessageForm />
    </section>
  );
}
