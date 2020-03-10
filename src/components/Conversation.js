import React from 'react'

const dummyData = [
  { name: 'angel', message: 'Hey there!' },
  { name: 'andrew', message: "Hi! How's it going!" },
  { name: 'angel', message: 'Oh, things are going fine!' },
  { name: 'andrew', message: 'What about for you?' },
  { name: 'angel', message: "It's all good!" },
  {
    name: 'angel',
    message: 'Although, I do have Maths today! <span> 😬 </span>'
  },
  {
    name: 'andrew',
    message: '<span> 😬 </span>'
  }
]
/*
if (dummData == 'angel' ? dummData == 'sender' : dummData == 'recipient');

<div className='bubble sender'>{props.dummyData}</div>

<div className='bubble recipient'>{props.dummyData}</div>
*/

class Conversation extends React.Component {
  render() {
    //can only return 1 element inside of return
    //but can do many if only 1 outside element, eg section
    return (
      <section className='chat-window'>
        <form onSubmit={e => this.sendMessage(e)}>
          <input onChange={e => this.updateInput(e)} type='text'></input>
          <button type='submit'>Send</button>
        </form>
      </section>
    )
  }
  updateInput = e => {
    console.log(e)
  }

  sendMessage = e => {
    e.preventDefault()
    console.log('message sent')
  }
}

export default Conversation
