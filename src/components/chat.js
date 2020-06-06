import React from "react"
import MessageList from "./messageList.js"
import Title from "./title"
import MessageForm from "./messageForm"
//import Conversation from "./messageArea.js"

export default () => (
  <section className="conversation">
    <Title />
    <MessageList />
    <MessageForm />
  </section>
)
