import React, { useState, useEffect } from "react";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import MessageList from "../components/messageList.js";
import Title from "../components/title";
import MessageForm from "../components/messageForm.js";

export default function Chat() {
  const [user, setUser] = useState(auth().currentUser);
  const [chats, setChats] = useState([]);

  // For now, this state is not being used
  // const [content, setContent] = useState("");

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
  const messages = chats; // empty vars intro'd so RTN block still works - so page won't break
  const sendMessage = (message) => {
    db.ref("chats").push({
      content: message,
      timestamp: Date.now(),
      uid: user.uid,
    });
  }; // on having removed the hardcoded data
  //////////////////////

  /*   const handleSubmit = (event) => {
  event.preventDefault();
  setWriteError(null);
  try {
    db.ref("chats").push({
      content: content,
      timestamp: Date.now(),
      uid: user.uid,
    });

    // onSend(currentMessage); //passed up to the parent
    // trigger DOM refresh by setting new value
    setContent("");
  } catch (error) {
    setWriteError(error.message);
  }
};

const handleMessageChange = (event) => {
  //set the state, above, by passing in its fn elem
  //call setCurrentMessage and pass on value enclosed
  setContent(event.target.value);
}; */

  return (
    <section className="conversation">
      <div>
        Logged in as <strong>{user.email}</strong>
      </div>
      <Title />
      <MessageList messages={messages} />
      <MessageForm onSend={sendMessage} />
    </section>
  );
}
