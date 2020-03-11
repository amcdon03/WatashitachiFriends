import React from 'react'

class SendMessageForm extends React.Component {
  render() {
    //can only return 1 element inside of return
    return (
      <section className='send-form'>
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

export default SendMessageForm
