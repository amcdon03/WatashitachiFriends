import React from 'react'
import MessageArea from "./messageArea.js"
import Title from "./title"
import SendMessageForm from "./sendMessageForm"

class Dashboard extends React.Component {
  render() {
    //can only return 1 main element inside of return
    return <section className='conversation'>
      <Title/>
      <MessageArea />
      <SendMessageForm/>
    </section>
  }
}

export default Dashboard
