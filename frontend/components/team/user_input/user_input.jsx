import React from 'react'

export default class UserInput extends React.Component {

  buildMessage(text, channel_id, user_id) {
    return {
      text,
      channel_id,
      user_id
    }
  }

  onKeyPress(e) {
    if(e.key === 'Enter'){
      e.preventDefault()
      this.props.sendMessage({
        text: e.target.value,
        channel_id: this.props.channelId,
        user_id: this.props.userId
      })
    }
  }

  render() {
    return <div id='user-input'>
      <input type='textarea' onKeyPress={this.onKeyPress.bind(this)}
        placeholder='Message'/>
    </div>
  }
}
