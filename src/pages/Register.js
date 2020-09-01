import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SignUp, setSchool, setUserRole } from "../utils/auth";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      email: "",
      password: "",
      schoolName: "",
      isTeacher: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await SignUp(this.state.email, this.state.password);
      setSchool(this.state.schoolName);
      setUserRole(this.state.isTeacher);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div className="conversation">
        <form onSubmit={this.handleSubmit}>
          <h1>Register with Watashitachi Friends</h1>
          <p>Select your school</p>
          <select>
            <option value="LondonAcademy">London Academy</option>
            <option value="HamburgGymnasium">Hamburg Gymnasium</option>
          </select>
          <p>Create your login credentials</p>
          <div>
            <input
              placeholder="Email"
              name="email"
              type="email"
              onChange={(event) => this.handleChange(event)}
              value={this.state.email}
            ></input>
          </div>
          <div>
            <input
              placeholder="Password"
              name="password"
              onChange={(event) => this.handleChange(event)}
              value={this.state.password}
              type="password"
            ></input>
            <p>Confirm you are a teacher</p>
            <div onChange={(event) => this.handleChange(event)}>
              <input type="radio" value="yes" name="confirm" /> Yes
              <input type="radio" value="no" defaultChecked name="confirm" /> No
              <p></p>
            </div>
          </div>
          <div>
            {this.state.error ? <p>{this.state.error}</p> : null}
            <button type="submit">Register</button>
          </div>
          <hr></hr>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    );
  }
}
