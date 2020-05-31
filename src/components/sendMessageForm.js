import React from "react"

class SendMessageForm extends React.Component {
  render() {
    return (
      <section className="sendForm">
        <form onSubmit={(e) => this.sendMessage(e)}>
          <input onChange={(e) => this.updateInput(e)} type="text"></input>
          <button type="submit">Send</button>
        </form>
      </section>
    )
  }
  //a callback
  updateInput = (e) => {
    console.log(e)
    this.setState({messageContent: e
    })   //extract the value of input from the event
  }

  //a callback
  sendMessage = (e) => {
    e.preventDefault()
    console.log("message sent")
    console.log(this.state.messageContent)  //use a library to send to the server - fetch api
  }
}

export default SendMessageForm
