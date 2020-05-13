import React from 'react'
import MessageArea from "./messageArea.js"
import Title from "./title"
import SendMessageForm from "./sendMessageForm"
import Messages from "./messages.js"

class Dashboard extends React.Component {
  render() {
    //can only return 1 main element inside of return
    return (
    <section className='conversation'>
      <Title/>
      <MessageArea />
      <SendMessageForm/>
      <Messages/>
    </section>
    )
  }
}

export default Dashboard
