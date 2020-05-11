import React from "react"
import { Route, Redirect, Switch } from "react-router-dom"
import "./App.css"
import Dashboard from "./components/dashboard"
import Login from "./components/login"

function App() {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  )
}

export default App
