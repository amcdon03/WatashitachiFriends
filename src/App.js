import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Chat from './pages/chat';
import Login from './pages/login';
// import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
//import { auth } from './services/firebase';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to={Home} />
        <Route path="/login" component={Login} />
        {/* <Route path="/signup" authenticated={this.state.authenticated} component={Signup} /> */}
        <Route path="/chat" component={Chat} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
