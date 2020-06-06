import React from "react"

export default () => {
  //a callback
  const updateInput = (e) => {
    console.log(e)
    this.setState({ messageContent: e }) //extract the value of input from the event
  }

  //a callback
  const sendMessage = (e) => {
    e.preventDefault()
    console.log("message sent")
    console.log(this.state.messageContent) //use a library to send to the server - fetch api
  }

  return (
    <section className="sendForm">
      <form onSubmit={sendMessage}>
        <input onChange={updateInput} type="text"></input>
        <button type="submit">Send</button>
      </form>
    </section>
  )
}
