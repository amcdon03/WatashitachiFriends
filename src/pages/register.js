import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignUp } from "../utils/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [schoolName, setSchoolName] = useState("");
  const [isTeacher, setIsTeacher] = useState(false);
  /*       error: null,
      email: "",
      password: "",
      schoolName: "",
      isTeacher: false, */

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTeacherStatus = (event) => {
    setIsTeacher(event.target.value);
  };

  const handleSchoolName = (event) => {
    setSchoolName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await SignUp(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="conversation">
      <form onSubmit={handleSubmit}>
        <h1>Register with Watashitachi Friends</h1>
        <p>Select your school</p>
        <select onChange={handleSchoolName} value={schoolName}>
          <option value="LondonAcademy">London Academy</option>
          <option value="HamburgGymnasium">Hamburg Gymnasium</option>
        </select>
        <p>Create your login credentials</p>
        <div>
          <input
            placeholder="Email"
            name="email"
            type="email"
            onChange={handleEmailChange}
            value={email}
          ></input>
        </div>
        <div>
          <input
            placeholder="Password"
            name="password"
            onChange={handlePasswordChange}
            value={password}
            type="password"
          ></input>
          <p>Confirm you are a teacher</p>
          <div>
            <input
              type="radio"
              value="yes"
              name="confirm"
              onChange={handleTeacherStatus}
            />{" "}
            Yes
            <input
              type="radio"
              value="no"
              name="confirm"
              defaultChecked={true}
              onChange={handleTeacherStatus}
            />{" "}
            No
            <p></p>
          </div>
        </div>
        <div>
          {error ? <p>{error}</p> : null}
          <button type="submit">Register</button>
        </div>
        <hr></hr>
        <p>
          Already have an account? <Link to="/Login">Login</Link>
        </p>
      </form>
    </div>
  );
}
