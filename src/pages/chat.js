import React, { useState, useEffect } from "react";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import Header from "../components/Header";
import MessageForm from "../components/MessageForm.js";
import MessageList from "../components/MessageList.js";

export default function Chat() {
  const [user] = useState(auth().currentUser);
  const [chats, setChats] = useState([]);
  const [readError, setReadError] = useState(null);
  const [writeError, setWriteError] = useState(null);

  useEffect(() => {
    try {
      db.ref("rooms").on("value", (snapshot) => {
        let messages = [];
        snapshot.forEach((snap) => {
          messages.push({ key: snap.key, ...snap.val() });
          //console.log("snap", snap.val);
        });
        setChats(messages);
      });
    } catch (error) {
      setReadError(error.message);
      //console.log("error", error);
    }
  }, []);

  //////////////////////
  function sendMessage(newCurrentMessage) {
    setWriteError(null);
    try {
      db.ref("rooms").push({
        room: 5,
        //sender: profileName,
        content: newCurrentMessage,
        timestamp: Date.now(),
        uid: user.uid,
      });
    } catch (error) {
      setWriteError(error.message);
    }
  }

  return (
    <section className="conversation">
      {readError ? readError : ""}
      <Header user={user} />
      <h3>Yay! Let's Chat!</h3>
      <MessageList messages={chats} currentUserId={user.uid} />
      <MessageForm onSend={sendMessage} error={writeError} />
    </section>
  );
}
