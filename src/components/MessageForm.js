import React, { useState } from "react";

export default function MessageForm({ onSend, error }) {
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
        <button type="submit">Send</button>
        {error ? <p className="error">{error}</p> : null}
      </form>
    </div>
  );
}
