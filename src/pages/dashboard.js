/* import React, { useState, useEffect } from "react";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import Header from "../components/Header";
import MessageForm from "../components/MessageForm.js";
//import AddRoom from "../components/AddRoom.js";
//import RoomList from "../components/RoomList.js";

export default function Dashboard() {
  const [user] = useState(auth().currentUser); //teacher
  const [dashboard, setDashboard] = useState([]);
  const [readError, setReadError] = useState(null);

  useEffect(() => {
    try {
      db.ref("messages/ + messagesID + toApprove/ + toApproveID + {user}}/").on(
        "value",
        (snapshot) => {
          // collect all messages that're pending approval
          let messagesForApprovalDashboard = [];
          snapshot.forEach((snap) => {
            messagesForApprovalDashboard.push({ key: snap.key, ...snap.val() });
            //console.log("snap", snap.val);
          });
          // filter messages only for teacher's own students
          const messageForTheTeacher = db.ref("messages").filter((message) => {
            return messageForTheTeacher;
          });
          if (messageForTheTeacher.teacher === user)
            setDashboard(messagesForApprovalDashboard);
        }
      );
    } catch (error) {
      setReadError(error.message);
      // console.log("error", error);
    }
  }, [user]);

  return (
    <section className="conversation">
      {readError ? readError : ""}
      <Header user={user} />
      {dashboard.map((sender, i) => (
        <MessageForm key={user.id} {...user} />
      ))}
    </section>
  );
}
 */
