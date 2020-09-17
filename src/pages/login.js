import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignIn } from "../utils/auth";

export default function Login() {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileName, setProfileName] = useState({ profileName: "" });

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  // Sets a profile name here?
  const handleNameChange = (event) => {
    event.persist();
    setProfileName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      await SignIn(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

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
        <br />
        <div>
          <input
            placeholder="Profile Name"
            name="profileName"
            onChange={handleNameChange}
            value={profileName}
            type="text"
          />
        </div>
        <div>
          {error ? <p className="error">{error}</p> : null}
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
