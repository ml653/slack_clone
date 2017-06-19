import React from 'react'
import ReactionBar from './reaction_bar'

export default class Message extends React.Component {

  formatDate(date) {
    const parsedDate = new Date(date)
    return parsedDate.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")
  }

  render() {
    return <div className='message-group'>
      <li className='message'>
        <div className='message-avatar'>
          <img src={this.props.message.user.img_url}/>
        </div>

        <div className='message-content'>
          <div className='message-info'>
            <span className='message-username'>{this.props.message.user.username}</span>
            <span className='message-date'>{this.formatDate(this.props.message.created_at)}</span>
          </div>
          <div className='message-text'>
            {this.props.message.text}
          </div>
          <ReactionBar/>
        </div>
      </li>
    </div>
  }
}
