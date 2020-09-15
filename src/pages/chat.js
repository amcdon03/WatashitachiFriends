import React, { useState, useEffect } from "react";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import Header from "../components/Header";
import MessageForm from "../components/MessageForm.js";
import MessageList from "../components/MessageList.js";

export default function Chat() {
  // useState -> {user, setUser} => const result = useState(,,,); const user = result.user ; const setUser = result.setUser;
  const [user] = useState(auth().currentUser);
  const [chats, setChats] = useState([]);
  const [readError, setReadError] = useState(null);
  const [writeError, setWriteError] = useState(null);
  //this.myRef = React.createRef();

  //This Fn uses a callback - consisting of Anonymous Fn and empty array
  useEffect(() => {
    //const chatArea = this.myRef.current;
    try {
      db.ref("rooms").on("value", (snapshot) => {
        let messages = [];
        snapshot.forEach((snap) => {
          messages.push({ key: snap.key, ...snap.val() });
          //console.log("snap", snap.val);
        });
        setChats(messages);
        //chatArea.scrollBy(0, chatArea.scrollHeight);
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
        room: 3,
        content: newCurrentMessage,
        timestamp: Date.now(),
        uid: user.uid,
      });
    } catch (error) {
      setWriteError(error.message);
    }
  }
  //////////////////////

  // This function should retrieve the rooms database of firebase
  const getData = () => {
    let rooms = [];
    let ref = db.ref("rooms");

    if (ref) {
      ref.on("value", function (snapshot) {
        let values = snapshot.val();
        snapshot.forEach((snap) => {
          let obj = { key: snap.key, ...snap.val() };
          rooms.push(obj.room);
          //console.log(rooms.sort());
        });
      });
    }
  };

  return (
    <section className="conversation">
      {readError ? readError : ""}
      <Header user={user} />
      <h3>Yay! Let's Chat!</h3>
      {getData()}
      <MessageList messages={chats} currentUserId={user.uid} />
      <MessageForm onSend={sendMessage} error={writeError} />
    </section>
  );
}
