import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <section className="conversation">
      <h1>
        <Link to="/Chat">Watashitachi Friends</Link>
      </h1>
      <h3>Penfriends sharing language and culture</h3>
      <Footer />
    </section>
  );
}
