import React, { useState } from "react";

export default function MessageForm({ onSend }) {
  const [currentMessage, setCurrentMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSend(currentMessage);
    setCurrentMessage("");
  };

  const handleMessageChange = (event) => {
    console.log("msgChange", event.target.value);
    setCurrentMessage(event.target.value);
  };

  return (
    //nothing here changes value of messages
    <div className="sendForm">
      {/*handler capturing onSubmit event, ie submit action, calling onSend and passing it currentMessage*/}
      <form onSubmit={handleSubmit}>
        {/*input has props, inc onChange = user typing*/}
        <input
          name="myMessage"
          //onChange handler fires method called handleMessageChange
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
