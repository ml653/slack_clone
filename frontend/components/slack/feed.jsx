import React from 'react'
import Message from './message'

class Feed extends React.Component {

  render(){

    const message = {
      username: 'steven',
      created_at: new Date(),
      img_url: '/assets/profile_img_1.png',
      text: 'The quick brown fox jumped over the lazy dog.',
    }

    return <ul id='feed'>
      <Message message={message} />
      <Message message={message} />
      <Message message={message} />
    </ul>
  }
}

export default Feed
