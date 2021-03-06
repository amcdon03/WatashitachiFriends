import React, { useState, useEffect } from "react";
//import scrollToBottom from "react-scroll-to-bottom";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import Header from "../components/Header";
import MessageForm from "../components/MessageForm.js";
import MessageList from "../components/MessageList.js";

export default function Chat() {
  const [user] = useState(auth().currentUser); //student
  const [chats, setChats] = useState([]);
  const [readError, setReadError] = useState(null);
  const [writeError, setWriteError] = useState(null);
  //console.log("user:", user);
  // useEffect fn loads the room data from the FB realtime db
  useEffect(() => {
    try {
      db.ref("messages/toDisplay").on("value", (snapshot) => {
        let messagesForReceivingStudent = [];
        console.log("msg4st:", messagesForReceivingStudent);
        snapshot.forEach((snap) => {
          messagesForReceivingStudent.push({ key: snap.key, ...snap.val() });
          //console.log("snap", snap.val);
        });
        setChats(messagesForReceivingStudent); // shd capture msgs for pair of sts
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
      db.ref("messages/toDisplay").push({
        //username: user,
        content: newCurrentMessage,
        timestamp: Date.now(),
        //teacher: user.teacher.uid, // how do i get this info? when uncommented, breaks
        uid: user.uid, // st email to use as user uid
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
