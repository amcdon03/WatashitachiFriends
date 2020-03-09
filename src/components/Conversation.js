import React from 'react'

function Conversation() {
  return (
    <section className='Comments'>
      <div className='bubble sender first'>Hello</div>
      <div className='bubble sender last'>
        This is a CSS demo of the Messenger chat bubbles, that merge when
        stacked together.
      </div>

      <div className='bubble recipient first'>Oh that's cool!</div>
      <div className='bubble recipient last'>
        Did you use JavaScript to perform that kind of effect?
      </div>

      <div className='bubble sender first'>No, that's full CSS3!</div>
      <div className='bubble sender middle'>
        Take a look to the 'JS' section of this Pen... it's empty!{' '}
        <span role='img' aria-label='smiley-face'>
          😃
        </span>
      </div>
      <div className='bubble sender last'>
        And it's also really lightweight!
      </div>

      <div className='bubble recipient'>Dope!</div>

      <div className='bubble sender first'>
        Yeah, but I still didn't succeed to get rid of these stupid .first and
        .last classes.
      </div>
      <div className='bubble sender middle'>
        The only solution I see is using JS, or a &lt;div&gt; to group elements
        together, but I don't want to ...
      </div>
      <div className='bubble sender last'>
        I think it's more transparent and easier to group .bubble elements in
        the same parent.
      </div>
    </section>
  )
}

export default Conversation
