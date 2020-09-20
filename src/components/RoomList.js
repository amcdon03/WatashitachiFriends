/* import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { db } from "../services/firebase";

export default function RoomList() {
  const [room, setRoom] = useState([]);
  const [username, setUsername] = useState("");
  const history = useHistory();

  useEffect(() => {
    const fetchUsername = async () => {
      setUsername(localStorage.getItem("username"));
      db.ref("messages/ +toDisplay/ +toDisplayID +uuid1_uuid2/").on(
        "value",
        (response) => {
          setRoom([]);
          setRoom(snapshotToArray(response));
        }
      );
    };
    fetchUsername();
  }, []);

  const snapshotToArray = (snapshot) => {
    const returnArray = [];

    snapshot.forEach((childSnapshot) => {
      const item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArray.push(item);
    });
    return returnArray;
  };

  return (
    <div>
      <h3>{username} </h3>
      <h2>Room List</h2>
      <div>
        <Link to="/addroom">Add Room</Link>
      </div>
      <ListGroup>
        {room.map((item, idx) => (
          <ListGroupItem
            key={idx}
            action
            onClick={() => {
              enterChatRoom(item.roomname);
            }}
          >
            {item.roomname}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
// example how to use db.ref

/* db.ref("rooms").on("value", (snapshot) => {
        let messages = [];
        snapshot.forEach((snap) => {
          messages.push({ key: snap.key, ...snap.val() });
          //console.log("snap", snap.val);
        });
        setChats(messages); */
 */