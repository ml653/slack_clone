import React from 'react'
import Message from './message'
import { values } from 'lodash'

class Feed extends React.Component {

  componentDidUpdate() {
    this.scrollToBottom()
  }

  scrollToBottom() {
    $('.scroll').scrollTop(100000)
  }

  render() {
    const messages = values(this.props.messages).map((message, i, arr) => (
      <div key={message.id}
        id={ i === arr.length - 1 ? 'last-child' : '' }
        ref={((message) => {
          this.lastMessage = message
      })}>

        <Message message={message}/>
      </div>
    ))

    return <div className='scroll'>
      <ul id='feed'>
        {messages}
      </ul>
    </div>
  }
}

export default Feed
