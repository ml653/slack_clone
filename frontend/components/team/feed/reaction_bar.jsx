import React from 'react'
import Twemoji from 'react-twemoji';

export default class ReactionBar extends React.Component {
  initialize(){

  }

  render(){
    return <div className='reaction-bar'>
      <ul>
        <div className='reaction'>
          <Twemoji className='twemoji'>😂</Twemoji>
          1
        </div>
      </ul>
    </div>
  }
}
