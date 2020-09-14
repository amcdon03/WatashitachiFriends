import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing";
import Chat from "./pages/chat";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import { auth } from "./services/firebase";
import { PublicRoute, PrivateRoute } from "./utils/route";

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // auth is coming from FB
    // check "onAuthStateChanged" in the docs
    // is user getting here or not?
    // console.log("abracadabra");

    auth().onAuthStateChanged((user) => {
      // is user getting here?
      if (user) {
        // User is signed in.
        setAuthenticated(true);
        setLoading(false);
      } else {
        // No user is signed in.
        setAuthenticated(false);
        setLoading(false);
      }
    });
  }, []);

  return loading === true ? (
    <h2>Loading...</h2>
  ) : (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <PublicRoute
          path="/login"
          authenticated={authenticated}
          component={Login}
        />
        <PublicRoute
          path="/register"
          authenticated={authenticated}
          component={Register}
        />
        <PrivateRoute
          path="/chat"
          authenticated={authenticated}
          component={Chat}
        />
        <PrivateRoute
          path="/dashboard"
          authenticated={authenticated}
          component={Dashboard}
        />
      </Switch>
    </BrowserRouter>
  );
}
