import React from "react"

const dummyData = [
  { name: "angel", message: "Hey there!" },
  { name: "andrew", message: "Hi! How's it going!" },
  { name: "angel", message: "Oh, things are going fine!" },
  { name: "andrew", message: "What about for you?" },
  { name: "angel", message: "It's all good!" },
  {
    name: "angel",
    message: "Although, I do have Maths today! 😬",
  },
  {
    name: "andrew",
    message: "😬",
  },
]
/*
if (dummData == 'angel' ? dummData == 'sender' : dummData == 'recipient');

<div className='bubble sender'>{props.dummyData}</div>

<div className='bubble recipient'>{props.dummyData}</div>
*/

const MessageArea = (props) => {
  //can only return 1 element inside of return
  //but can do many if only 1 outside element, eg section
  const now = new Date()
  return (
    <section className="conversation">
      <div className="bubble sender">{dummyData[0].message}</div>
      <div className="bubble recipient">{dummyData[1].message}</div>
      <div className="bubble sender">{dummyData[2].message}</div>
      <div className="bubble recipient">{dummyData[3].message}</div>
      <div className="bubble sender">{dummyData[4].message}</div>
      <div className="bubble sender">{dummyData[5].message}</div>
      <div className="bubble recipient">{dummyData[6].message}</div>
      <p>{now.toString()}</p>
    </section>
  )
}

export default MessageArea
