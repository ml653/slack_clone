import React from 'react'
import Twemoji from 'react-twemoji';

export default class ReactionBar extends React.Component {
  initialize(){

  }

  render(){
    let Omega = '\u03A9';
    // \u03A9
    // &#937;
    // &#2764;
    // {Omega}
    // {'\u03A9'}
    // \u03A9

    return <div className='reaction-bar'>
      <ul>
        <div className='reaction'>
          <Twemoji className='twemoji'>
            😂
            {Omega}
          </Twemoji>
          1
        </div>
      </ul>
    </div>
  }
}
