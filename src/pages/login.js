import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignIn } from "../utils/auth";

export default function Login() {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /*     this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }; */

  /*   handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value,
        });
      }; */

  const handleChange = (event) => {
    (setEmail, setPassword)({
      [event.target.name]: event.target.value,
    });
  };

  /*   async handleSubmit(event) {
        event.preventDefault();
        setError({ error: "" });
        try {
          await SignIn(email, password);
          //console.log('User signs in')
        } catch (error) {
          setError({ error: error.message });
        }
      } */

  const handleSubmit = (event) => {
    event.preventDefault();
    setError({ error: "" });
    try {
      SignIn(email, password);
      //console.log('User signs in')
    } catch (error) {
      setError({ error: error.message });
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
            onChange={handleChange}
            value={email}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
            type="password"
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
