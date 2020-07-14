import React, { useState, useEffect } from 'react';
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import MessageList from '../components/messageList.js';
import Title from '../components/title';
import MessageForm from '../components/messageForm.js';

export default function Chat() {
  const [user, setUser] = useState(auth().currentUser)
  const [chats, setChats] = useState([])
  const [content, setContent] = useState("");
  const [readError, setReadError] = useState(null)
  const [writeError, setWriteError] = useState(null)
  
  useEffect(() => {
    setReadError(null)
    try {
      db.ref("chats").on("value", snapshot => {
        let messages = [];
        snapshot.forEach((snap) => {
          messages.push(snap.val());
        });
        setChats(messages)
      });
    } catch (error) {
      setReadError(error.message)
    }
  },
  []);
  
  
  
  // const [messages, setMessages] = useState([
  //   { user: 'bubble sender', name: 'angel', text: 'Hey there!' },
  //   {
  //     user: 'bubble recipient',
  //     name: 'andrew',
  //     text: "Hi! How's it going!",
  //   },
  //   {
  //     user: 'bubble sender',
  //     name: 'angel',
  //     text: 'Oh, things are going fine!',
  //   },
  //   {
  //     user: 'bubble recipient',
  //     name: 'andrew',
  //     text: 'What about for you?',
  //   },
  //   { user: 'bubble sender', name: 'angel', text: "It's all good!" },
  //   {
  //     user: 'bubble sender',
  //     name: 'angel',
  //     text: 'Although, I do have Maths today! 😬',
  //   },
  //   {
  //     user: 'bubble recipient',
  //     name: 'andrew',
  //     text: 'Noooo 😬',
  //   },
  // ]);

  // const LOCAL_STORAGE_KEY = 'react-message-list-messages';

  // useEffect(() => {
  //   //get messages from local storage to store in var by calling getItem on localStorage
  //   const storageMessages = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (storageMessages) {
  //     setMessages(storageMessages);
  //   }
  // }, []);

  // useEffect(() => {
  //   //call setItem fn on global local storage
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));
  // }, [messages]);

  // const sendMessage = (message) => {
  //   //call setMessage and pass on value enclosed
  //   setMessages([
  //     ...messages,
  //     {
  //       user: 'bubble sender',
  //       name: 'angel',
  //       text: message,
  //     },
  //   ]); //use a library to send to the server - fetch api
  // };

  return (
    <section className="conversation">
      <div>
        Login in as: <strong>{user.email}</strong>
      </div>
      <Title />
      <MessageList messages = {chats} />
      {/* <MessageForm onSend={sendMessage} /> */}
    </section>
  );
}
