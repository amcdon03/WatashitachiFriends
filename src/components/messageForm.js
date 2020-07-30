import React, { useState } from "react";

export default function MessageForm({ onSend }) {
  const [currentMessage, setCurrentMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSend(currentMessage);
    setCurrentMessage("");
  };

  const handleMessageChange = (event) => {
    //console.log("msgChange", event.target.value);
    setCurrentMessage(event.target.value);
  };

  return (
    <div className="sendForm">
      <form onSubmit={handleSubmit}>
        <input
          name="myMessage"
          onChange={handleMessageChange}
          type="text"
          value={currentMessage}
          placeholder="Your message"
        ></input>
        {/* {error ? <p>{writeError}</p> : null} */}
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
