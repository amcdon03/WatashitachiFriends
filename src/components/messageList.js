import React from "react"

class MessageList extends React.Component {
  constructor(props) {
    super(props)
    //boilerplate
    this.addMsgObject = this.addMsgObject.bind(this)

    this.state = {
      messages: [
        { user: "bubble sender", name: "angel", text: "Hey there!" },
        {
          user: "bubble recipient",
          name: "andrew",
          text: "Hi! How's it going!",
        },
        {
          user: "bubble sender",
          name: "angel",
          text: "Oh, things are going fine!",
        },
        {
          user: "bubble recipient",
          name: "andrew",
          text: "What about for you?",
        },
        { user: "bubble sender", name: "angel", text: "It's all good!" },
        {
          user: "bubble sender",
          name: "angel",
          text: "Although, I do have Maths today! 😬",
        },
        {
          user: "bubble recipient",
          name: "andrew",
          text: "Noooo 😬",
        },
      ],
    }
  }

  addMsgObject = () => {
    // add function code here
    const { messages } = this.state
    this.setState({
      messages: [
        ...messages,
        {
          user: "bubble sender",
          name: "angel",
          text: "Exactly! Oh No!",
        },
      ],
    })
    //console.log(this.messages)
  }

  render() {
    return (
      <section className="messageArea">
        {this.state.messages.map(function (item) {
          return <div className={item.user}>{item.text}</div>
        })}
        <button onClick={this.addMsgObject}>add</button>
      </section>
    )
  }
}
export default MessageList
