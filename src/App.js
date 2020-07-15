import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Chat from './pages/chat';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import { auth } from './services/firebase';
import { PublicRoute, PrivateRoute } from './utils/route';

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
    auth().onAuthStateChanged(user => {
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
    })
  }

  render() {
    return this.state.loading === true ? (
      <h2>Loading...</h2>
    ) : (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <PublicRoute path="/login" authenticated={this.state.authenticated} component={Login} />
          <PublicRoute path="/register" authenticated={this.state.authenticated} component={Register} />
          <PrivateRoute path="/chat" authenticated={this.state.authenticated} component={Chat} />
          <PrivateRoute
            path="/dashboard"
            authenticated={this.state.authenticated}
            component={Dashboard}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
