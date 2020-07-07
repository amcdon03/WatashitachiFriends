import React, { useState } from 'react';

export default function MessageForm({ onSend }) {
  //useState rtns an array with 2 params: current & setter (a fn that updates current state)
  //tracks state of the input box
  const [currentMessage, setCurrentMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSend(currentMessage); //passed up to the parent
    //trigger DOM refresh by setting new value
    setCurrentMessage('');
  }
  //this fn takes in an event
  const handleMessageChange = (event) => {
    //set the state, above, by passing in its fn elem
    //call setCurrentMessage and pass on value enclosed
    setCurrentMessage(event.target.value); //use a library to send to the server - fetch api
  };

  return (
    //nothing here changes value of messages
    <div className="sendForm">
      {/*handler capturing onSubmit event, ie submit action, calling onSend and passing it currentMessage*/}
      <form
        onSubmit={handleSubmit}
      >
        {/*input has props, inc onChange = user typing*/}
        <input
          name="myMessage"
          //onChange handler fires method called handleMessageChange
          onChange={handleMessageChange}
          type="text"
          value={currentMessage}
          placeholder="Your message"
        ></input>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
