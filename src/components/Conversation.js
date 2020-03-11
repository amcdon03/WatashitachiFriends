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
    const now = new Date()
    return (
      <section className='message-window'>
        <div className='bubble sender'>Hey there!</div>
        <div className='bubble recipient'>Hi! How's it going!</div>
        <div className='bubble sender'>Oh, things are going fine!</div>
        <div className='bubble recipient'>What about for you?</div>
        <div className='bubble sender'>It's all good!</div>
        <div className='bubble sender'>
          Although, I do have Maths today!
          <span role='img' aria-label='emoji grimace'>
            😬
          </span>
        </div>
        <div className='bubble recipient'>
          <span role='img' aria-label='emoji grimace'>
            😬
          </span>
        </div>
        <p>{now.toString()}</p>
      </section>
    )
  }
}

export default Conversation
