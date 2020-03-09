import React from 'react'

function Conversation() {
  return (
    <section className='Comments'>
      <div className='bubble sender first'>Hello there!</div>
      <div className='bubble sender last'>How are you today?</div>

      <div className='bubble recipient first'>Oh, I'm fine.</div>
      <div className='bubble recipient last'>And you?</div>

      <div className='bubble sender first'>Yeah, I'm great!</div>
      <div className='bubble sender middle'>
        I'm not. Today, I have Maths!{' '}
        <span role='img' aria-label='smiley-face'>
          😃
        </span>
      </div>
      <div className='bubble sender last'>It's really hard!</div>

      <div className='bubble recipient'>
        No, it's not really. It just takes a bit of logic. You can do it!
      </div>

      <div className='bubble sender first'>
        Yeah, but I give it a go though. I don't waste time in class like some
        people.
      </div>
      <div className='bubble sender middle'>
        Some students don't care about their education ...
      </div>
      <div className='bubble sender last'>
        I think it's really important that I do well so I can get a good job. Do
        you?
      </div>
    </section>
  )
}

export default Conversation
