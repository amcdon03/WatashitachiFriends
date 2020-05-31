import React from 'react'
import MessageList from "./messageList.js"
import Title from "./title"
import SendMessageForm from "./sendMessageForm"
//import Conversation from "./messageArea.js"

class Dashboard extends React.Component {
  render() {
    //can only return 1 main element inside of return
    return (
    <section className='conversation'>
      <Title/>
      <MessageList />
      <SendMessageForm/>

    </section>
    )
  }
}

export default Dashboard
