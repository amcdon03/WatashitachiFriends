import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import ChatPage from './components/chatPage';
import Login from './components/login';
import Dashboard from './components/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={Login} />
        <Route path="/chatPage" component={ChatPage} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
