import React, { useState, useEffect } from "react";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import MessageList from "../components/messageList.js";
import Title from "../components/title";
import MessageForm from "../components/messageForm.js";

export default function Chat() {
  const [user, setUser] = useState(auth().currentUser);
  const [chats, setChats] = useState([]);
  const [readError, setReadError] = useState(null);
  const [writeError, setWriteError] = useState(null);

  useEffect(() => {
    setReadError(null);
    try {
      db.ref("chats").on("value", (snapshot) => {
        let messages = [];
        //console.log("messages1", messages);
        snapshot.forEach((snap) => {
          messages.push(snap.val());
          //console.log("snapshot", snapshot);
        });
        setChats(messages);
      }); //console.log("messages2", messages);
    } catch (error) {
      setReadError(error.message);
      //console.log("error", error);
    }
  }, []);

  //////////////////////
  const sendMessage = (newCurrentMessage) => {
    setWriteError(null);
    try {
      db.ref("chats").push({
        content: newCurrentMessage,
        timestamp: Date.now(),
        uid: user.uid,
      });
    } catch (error) {
      setWriteError(error.message);
    }
  };
  //////////////////////

  return (
    <section className="conversation">
      <div>
        Logged in as <strong>{user.email}</strong>
      </div>
      <Title />
      {/* trying to create a prop to hold the current user's id */}
      <MessageList messages={chats} currentUserID={user.uid} />
      <MessageForm onSend={sendMessage} error={writeError} />
    </section>
  );
}
