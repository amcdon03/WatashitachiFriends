import React from "react"
import MessageList from "./messageList.js"
import Title from "./title"
import SendMessageForm from "./sendMessageForm"
//import Conversation from "./messageArea.js"

export default () => (
  <section className="conversation">
    <Title />
    <MessageList />
    <SendMessageForm />
  </section>
)
