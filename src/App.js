import React /* useState */ from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Chat from './pages/chat';
import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
//import { auth } from './services/firebase';
import { PublicRoute, PrivateRoute } from './utils/route';

export default function App() {
  //const [authenticated, setAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to={Home} />
        <PublicRoute path="/login" authenticated={this.state.authenticated} component={Login} />
        <PublicRoute path="/signup" authenticated={this.state.authenticated} component={Signup} />
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
