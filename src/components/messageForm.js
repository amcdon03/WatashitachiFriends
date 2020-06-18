import React, { useState } from 'react';

export default function MessageForm({ onSend }) {
  //useState rtns an array with 2 params: current & setter (a fn that updates current state)
  //tracks state of the input box
  const [currentMessage, setCurrentMessage] = useState('');

  const updateMessage = (event) => {
    //call setCurrentMessage and pass on value enclosed
    setCurrentMessage(event.target.value); //use a library to send to the server - fetch api
  };

  return (
    //nothing here changes value of messages
    <div className="sendForm">
      {/*capturing onSubmit event, calling onSend on line 26 and passing currentMessage*/}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSend(currentMessage); //passed up to the parent
          //trigger DOM refresh by setting new value
          setCurrentMessage('');
        }}
      >
        {/*input has 3 props, inc onChange = user typing*/}
        <input name="myMessage" onChange={updateMessage} type="text" value={currentMessage}></input>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
