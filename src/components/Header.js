import React from "react";
import { auth } from "../services/firebase";

export default function Header({ user }) {
  return (
    <section className="headerArea">
      <div>
        Logged in as <strong>{user.email}</strong>
        <button onClick={() => auth().signOut()}>Logout</button>
      </div>
      <br />
    </section>
  );
}
