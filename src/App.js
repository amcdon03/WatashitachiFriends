import React from 'react'
import './App.css'
import Dashboard from './components/dashboard'
import Title from './components/title'
import Conversation from './components/conversation'
import SendMessageForm from './components/sendMessageForm'

function App() {
  return (
    <div className='App'>
      <Dashboard />
      <Title />
      <Conversation />
      <SendMessageForm />
    </div>
  )
}

export default App
