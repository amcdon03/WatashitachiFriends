import React from 'react'

function Conversation() {
  return (
    <section className='Comments'>
      <div className='bubble sender'>Hey there!</div>
      <div className='bubble sender'>How's it going?</div>

      <div className='bubble recipient'>Oh, I'm fine.</div>
      <div className='bubble recipient'>You?</div>

      <div className='bubble sender'>Yeah, mate. I'm great!</div>
      <div className='bubble sender'>
        Me, too. Today, I have Maths!{' '}
        <span role='img' aria-label='smiley-face'>
          😃
        </span>
      </div>
      <div className='bubble sender'>It's really hard, but I love it!</div>

      <div className='bubble recipient'>
        Mn!, but it's not that hard really. It just takes a bit of logic. You
        can do it!
      </div>

      <div className='bubble sender'>
        Yeah, I can coz I give it a good go. I don't waste time in class like
        some people.
      </div>
      <div className='bubble sender'>
        People who don't care about their education .....
      </div>
      <div className='bubble sender'>
        I'm trying to get good at it so I can get a good job in cyber.
      </div>
    </section>
  )
}

export default Conversation
