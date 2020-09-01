import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { auth } from "./services/firebase";
import { PublicRoute, PrivateRoute } from "./utils/route";

class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true,
    };
  }

  componentDidMount() {
    // auth is coming from Firebase
    // check "onAuthStateChanged" in the documentation
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false,
        });
      }
    });
  }

  render() {
    return this.state.loading === true ? (
      <h2>Loading...</h2>
    ) : (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <PublicRoute
            path="/Login"
            authenticated={this.state.authenticated}
            component={Login}
          />
          <PublicRoute
            path="/Register"
            authenticated={this.state.authenticated}
            component={Register}
          />
          <PrivateRoute
            path="/Chat"
            authenticated={this.state.authenticated}
            component={Chat}
          />
          <PrivateRoute
            path="/Dashboard"
            authenticated={this.state.authenticated}
            component={Dashboard}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
