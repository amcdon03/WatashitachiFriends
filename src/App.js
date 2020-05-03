import React from "react"
import {Route, Redirect, Switch} from "react=router-dom"
import "./App.css"
import Dashboard from "./components/dashboard"
import Login from "./components/login"


function App() {
  return (
    <switch>
      <Redirect from="/" to="/login" />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </switch>
  )
}

export default App
