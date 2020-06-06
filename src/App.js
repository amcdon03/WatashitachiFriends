import React from "react"
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"
import "./App.css"
import Chat from "./components/chat"
import Login from "./components/login"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={Login} />
        <Route path="/chat" component={Chat} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
