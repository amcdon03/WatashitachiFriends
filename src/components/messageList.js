import React from 'react';

export default function MessageList({ messages }) {
  return (
    <section className="messageArea">
      {messages.map(function (item) {
        return <div className={item.user}>{item.text}</div>;
      })}
    </section>
  );
}
