import React from 'react'
import { values } from 'lodash'

export default class Sidebar extends React.Component {

  constructor(props) {
    super(props)
    this.loadChannel = this.loadChannel.bind(this)
  }

  loadChannel(channelId) {
    return () => {
      console.log(this, channelId)
      this.props.loadChannel(channelId)
    }
  }

  render() {
    const groups = this.props.groups.map(channel => (
      <li key={channel.id}
        onClick={this.loadChannel(channel.id)}
        className={`channel sidebar-item ${
          this.props.currentChannelId === channel.id ? 'selected' : ''}`}>
        #{channel.name}
      </li>
    ))

    const directMessages = this.props.directMessages.map(channel => (
      <li key={channel.id}
        onClick={this.loadChannel(channel.id)}
        className={`channel sidebar-item ${
          this.props.currentChannelId === channel.id ? 'selected' : ''}`}>
        {values(channel.members)
          .filter(member => member.id !== this.props.user.id)
          .map(member => member.username).join(', ')}
      </li>
    ))

    return <div id='sidebar' className='sidebar-menu'>

        <div id='user' className='sidebar-item'>
          <h2>Slack</h2>
          <p id='username'>{ this.props.user.username }</p>
        </div>

        <div id='channels'>
          <ul id='groups'>
            <li className='channel sidebar-item'>CHANNELS</li>
            { groups }
          </ul>

          <ul id='direct-messages'>
            <li className='channel sidebar-item'>DIRECT MESSAGES</li>
            <li className='channel sidebar-item'>#Slackbot</li>
            { directMessages }
          </ul>
        </div>

      </div>
  }
}
