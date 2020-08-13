import React from "react";

export default function MessageList({ messages, currentUserId }) {
  return (
    <section className="messageArea">
      {messages.map((message) => {
        return (
          // div has 2 elements: className and key
          // msg is displayed in between
          <div
            className={
              currentUserId === message.uid
                ? "bubble sender"
                : "bubble recipient"
            }
            key={message.key}
          >
            {message.content}
          </div>
        );
      })}
    </section>
  );
}
