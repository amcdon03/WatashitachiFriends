/* import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { db } from "../services/firebase";

export default function AddRoom() {
  const history = useHistory();
  const [room, setRoom] = useState({ roomname: "" });
  const ref = db.ref("messages/ +toDisplay/ +chatroom1/");

  const save = (event) => {
    event.preventDefault();
    ref
      .orderByChild("roomname")
      .equalTo(room.roomname)
      .once("value", (snapshot) => {
        if (snapshot.exists()) {
          return (
            <div>
              <Alert color="primary">Room name already exist!</Alert>
            </div>
          );
        } else {
          const newRoom = db().ref("messages/ +toDisplay/").push();
          newRoom.set(room);
          history.goBack();
        }
      });
  };

    const onChange = (event) => {
    event.persist();
    setRoom({ ...room, [event.target.name]: event.target.value });
    };

    return (
      <div>
          <h2>Please enter new Room</h2>
          <Form onSubmit={save}>
            <Label>Room Name</Label>
            <Input
              type="text"
              name="roomname"
              id="roomname"
              placeholder="Enter Room Name"
              value={room.roomname}
              onChange={onChange}
            />
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
      </div>
    );
}
 */
