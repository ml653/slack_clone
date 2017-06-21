import React from 'react'
import Twemoji from 'react-twemoji';
import { keys, values } from 'lodash'

export default class ReactionBar extends React.Component {

  render(){
    const aggregate = values( this.props.reactions )
      .reduce((agg, reaction) => {
        agg[reaction.emoji] = agg[reaction.emoji] || 0
        agg[reaction.emoji] += 1
        return agg
      }, {}
    )

    const emojis = keys(aggregate)
      .map(( emoji, i ) => {
        return <div className='reaction'
          key={i}>
          <Twemoji className='twemoji'>
            {emoji}
          </Twemoji>
          {aggregate[emoji]}
        </div>
      })


    return <div className='reaction-bar'>
      <ul>
        {emojis}
      </ul>
    </div>
  }
}

    // let Omega = '\u03A9';
    // \u03A9
    // &#937;
    // &#2764;
    // {Omega}
    // {'\u03A9'}
    // \u03A9
