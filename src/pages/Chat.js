import React, { useState, useEffect } from "react";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import MessageForm from "../components/MessageForm.js";
import Header from "../components/Header";
import MessageList from "../components/MessageList.js";

/*1. create a new project in current state: git.clone
 or commit, then undo commit
FIXED CSS
- had to identify/pull out unique message key (set by FB), needed by React
- used a filter on classname
- error: I passed a  typo as currentUserID != currentUserId
PROPS
- made sure prop name here matched prop name passed to child (the 'props' bit is like the 'property' bit in CSS)
TESTS
- error msg in msgForm worked by passing value 'test' instead of 'writeError'
- console logged snapshot, snapshot.val to find msg uid
- console logged msg1 to see msgs in snapshot
- used Inspector to see if className rendered as desired in msgLst (mistake, wrote: bubble.sender, not bubble sender)
*/

export default function Chat() {
  // useState -> {user, setUser} => const result = useState(,,,); const user = result.user ; const setUser = result.setUser;
  const [user] = useState(auth().currentUser);
  const [chats, setChats] = useState([]);
  const [readError, setReadError] = useState(null);
  const [writeError, setWriteError] = useState(null);

  //This Fn uses a callback - consisting of Anonymous Fn and empty array
  useEffect(() => {
    try {
      db.ref("chats").on("value", (snapshot) => {
        let messages = [];
        //console.log("messages1", messages);
        snapshot.forEach((snap) => {
          messages.push({ key: snap.key, ...snap.val() });
          //console.log("snap", snap.val);
        });
        setChats(messages);
        //console.log("messages2", messages);
      });
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
      {readError ? readError : ""}
      <div>
        Logged in as <strong>{user.email}</strong>
      </div>
      <Header />
      {/* trying to create a prop to hold the current user's id */}
      <MessageForm messages={chats} currentUserId={user.uid} />
      <MessageList onSend={sendMessage} error={writeError} />
    </section>
  );
}
