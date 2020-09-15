import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignIn } from "../utils/auth";

export default function Login() {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setDisplayName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    //console.log("user does a submit");

    //console.log("user enters email: ", email);
    //console.log("and a password: ", password);
    try {
      await SignIn(email, password);
      //console.log("user signs in");
    } catch (error) {
      //console.log("there has been an error: ", error);
      setError(error.message);
    }
  };

  //console.log("error ", error);

  return (
    <div className="conversation">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h1>Log in to Watashitachi Friends</h1>
        <p>Fill in the form below to login to your account.</p>
        <div>
          <input
            placeholder="School Email"
            name="email"
            type="email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            name="password"
            onChange={handlePasswordChange}
            value={password}
            type="password"
          />
        </div>
        <div>
          <input
            placeholder="Profile Name"
            name="displayName"
            onChange={handleNameChange}
            value={displayName}
            type="text"
          />
        </div>
        <div>
          {error ? <p>{error}</p> : null}
          <button type="submit">Login</button>
        </div>
        <hr />
        <p>
          Don't have an account? <Link to="/Register">Get registered</Link>
        </p>
      </form>
    </div>
  );
}
