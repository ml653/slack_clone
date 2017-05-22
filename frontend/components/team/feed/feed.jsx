import React from 'react'
import Message from './message'

class Feed extends React.Component {

  componentWillMount() {
    this.props.loadMessages(1)
  }

  render() {
    const messages = Object.values(this.props.messages).map(message => (
      <Message key={message.id} message={message} />
    ))

    const message = {
      user: {
        id: 1,
        username: 'steven',
        img_url: '/assets/profile_img_1.png'
      },
      channel: 1,
      created_at: '2017-05-22T13:30:45.334Z',
      text: 'The quick brown fox jumped over the lazy dog.'
    }

    return <ul id='feed'>
      {messages}
      <Message message={message} />
    </ul>
  }
}

export default Feed
