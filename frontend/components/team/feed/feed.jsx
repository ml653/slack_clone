import React from 'react'
import Message from './message'

class Feed extends React.Component {

  render() {
    const messages = Object.values(this.props.messages).map(message => (
      <Message key={message.id} message={message} />
    ))

    return <div id='style-1' className='scroll'>
      <ul id='feed'>
        {messages}
      </ul>
    </div>
  }
}

export default Feed
