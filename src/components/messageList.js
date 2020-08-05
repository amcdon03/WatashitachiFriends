import React from "react";

export default function MessageList({ messages, currentUserId }) {
  /*
    1. Pass the current user ID to the MessageList component
       (this component) as a prop.
    2. Every message (in messages) has a "uid"
       property which contains the ID of the user who sent
       that message.
    3. Compare the current user ID with the "uid"
       on a message (e.g. currentUserId == item.uid) and
       apply bubble.sender CSS class if they are the same;
       bubble.recipient CSS if they are different.
  */
  return (
    <section className="messageArea">
      {messages.map((item) => {
        return <div className={item.uid}>{item.content}</div>;
      })}
    </section>
  );
}
