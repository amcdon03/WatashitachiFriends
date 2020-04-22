import React from 'react'
import Conversation from "./conversation.js"
import Title from "./title"
import SendMessageForm from "./sendMessageForm"

class Dashboard extends React.Component {
  render() {
    //can only return 1 element inside of return
    return <section className='dashboard'>
      <Title/>
      <Conversation />
      <SendMessageForm/>
    </section>
  }
}

export default Dashboard
