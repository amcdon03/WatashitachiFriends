import React from "react";

export default function MessageList({ messages }) {
  return (
    <section className="messageArea">
      {messages.map((item) => {
        return <div className={item.user}>{item.text}</div>;
        // return <div className={item.user}>{item.content}</div>;
      })}
    </section>
  );
}
