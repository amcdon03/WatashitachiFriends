import React from "react";
import { Link } from "react-router-dom";

export default function Title() {
  return (
    <section className="headerArea">
      <h1>
        <Link to="/chat">Watashitachi Friends</Link>
      </h1>
      <h3>Penfriends sharing language and culture</h3>
    </section>
  );
}
