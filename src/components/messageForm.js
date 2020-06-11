import React, { useState } from 'react';

export default function MessageForm() {
  //useState rtns an array with 2 params: current & setter (that updates current state)
  const [messages, setMessages] = useState([]);

  const [currentMessage, setCurrentMessage] = useState('');

  const addMessage = () => {
    //call addMessage and pass on value enclosed
    setMessages([...messages, currentMessage]);
    //clear the inut box
    setCurrentMessage('');
  };

  const updateInput = (event) => {
    //call setCurrentMessage and pass on value enclosed
    setCurrentMessage(event.target.value); //use a library to send to the server - fetch api
  };

  return (
    //nothing here changes value of messages
    <div className="sendForm">
      <form onSubmit={addMessage}>
        <input onChange={updateInput} type="text"></input>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
