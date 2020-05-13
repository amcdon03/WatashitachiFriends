import React from "react"

class Messages extends React.Component {
  constructor() {
    super();
    this.addMsgObject = this.addMsgObject.bind(this);    this.state = {
      dummyData: [
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
    };
  } 
  
  addMsgObject = () => {
    // add function code here
    this.dummyData.push({
      user: "bubble sender",
      name: "angel",
      message: "Exactly! Oh No!",
    },)
    console.log(this.dummyData)
  }; 
  
  render() {
    return (
      <section>
        {
        //if it doesn't work, need to Google how to map through a state in react
        //Object.keys(this.state.dummyData).map            
        
        this.state.dummyData.map
        
        }   
        <button onClick={this.addMsgObject}>add</button>     
      </section>
    );
  }
}
export default Messages
