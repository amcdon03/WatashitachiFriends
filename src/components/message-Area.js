import React from "react"

const dummyData = [
  { user: "bubble sender", name: "angel", message: "Hey there!" },
  { user: "bubble recipient", name: "andrew", message: "Hi! How's it going!" },
  {
    user: "bubble sender",
    name: "angel",
    message: "Oh, things are going fine!",
  },
  { user: "bubble recipient", name: "andrew", message: "What about for you?" },
  { user: "bubble sender", name: "angel", message: "It's all good!" },
  {
    user: "bubble sender",
    name: "angel",
    message: "Although, I do have Maths today! 😬",
  },
  {
    user: "bubble recipient",
    name: "andrew",
    message: "Noooo 😬",
  },
]
/*
if (dummyData == 'angel' ? dummyData == 'sender' : dummyData == 'recipient');

<div className='bubble sender'>{props.dummyData}</div>

<div className='bubble recipient'>{props.dummyData}</div>
*/

//function code
let addMsgObject = () => {
  dummyData.push({
    user: "bubble sender",
    name: "angel",
    message: "Yeah, noooooooooooo!",
  },)
  console.log(dummyData)
}

const MessageArea = (props) => {
  //can only return 1 element inside of return
  //but can do many if only 1 outside element, eg section
  return (
    <section className="messageList">
      {dummyData.map(function (item) {
        return <div className={item.user}>{item.message}</div>
      })}
      <button onClick={addMsgObject}>add</button>
      {/* 
      <div className="bubble sender">{dummyData[0].message}</div>
      <div className="bubble recipient">{dummyData[1].message}</div>
      <div className="bubble sender">{dummyData[2].message}</div>
      <div className="bubble recipient">{dummyData[3].message}</div>
      <div className="bubble sender">{dummyData[4].message}</div>
      <div className="bubble sender">{dummyData[5].message}</div>
      <div className="bubble recipient">{dummyData[6].message}</div> */}
    </section>
  )
}

export default MessageArea
