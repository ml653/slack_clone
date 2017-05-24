import React from 'react'
import { getDirectMessageMembers } from 'Util/selector_util'
import { withRouter } from 'react-router-dom';

class Sidebar extends React.Component {

  constructor(props) {
    super(props)
    this.loadChannel = this.loadChannel.bind(this)
    this.showNewChannel = this.showNewChannel.bind(this)
    this.showDirectMessage = this.showDirectMessage.bind(this)
    this.logout = this.logout.bind(this)
  }

  logout() {
    this.props.logout()
  }

  loadChannel(channelId) {
    return () => {
      this.props.history.push(`/${channelId}`)
    }
  }

  showNewChannel() {
    this.props.history.push('/new-channel')
  }

  findChannel() {
  }

  showDirectMessage() {
    this.props.history.push('/new-direct-message')
  }

  render() {
    const groups = this.props.groups.map(channel => (
      <li key={channel.id}
        onClick={this.loadChannel(channel.id)}
        className={`channel sidebar-item ${
          this.props.currentChannelId === channel.id ? 'selected' : ''}`}>
        #{channel.name}
        <img src='/assets/circle_x.png'/>
      </li>
    ))

    const directMessages = this.props.directMessages.map(channel => (
      <li key={channel.id}
        onClick={this.loadChannel(channel.id)}
        className={`channel sidebar-item
          ${this.props.currentChannelId === channel.id ? 'selected' : ''}`}>
        {getDirectMessageMembers(this.props.user.id, channel.members)}
        <img src='/assets/circle_x.png'/>
      </li>
    ))

    return <div id='sidebar' className='sidebar-menu'>

      <div id='user' className='sidebar-item'>
        <h2>Slack</h2>
        <p id='username'
          onClick={this.logout}>{ this.props.user.username }</p>
      </div>

      <div id='channels'>
        <ul id='groups'>
          <li id='title' className='title sidebar-item'
              onClick={this.showNewChannel}>
            Channels
            <img src='/assets/circle_plus.png'/>
          </li>
          { groups }
        </ul>

        <ul id='direct-messages'>
          <li className='title sidebar-item'
              onClick={this.showDirectMessage}>
            Direct Messages
            <img src='/assets/circle_plus.png'/>
          </li>
          <li className='channel sidebar-item'>#Slackbot</li>
          { directMessages }
        </ul>
      </div>

    </div>
  }
}

export default withRouter(Sidebar)
