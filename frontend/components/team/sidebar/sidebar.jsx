import React from 'react'
import { getDirectMessageMembers } from 'Util/selector_util'
import { withRouter } from 'react-router-dom';

class Sidebar extends React.Component {

  constructor(props) {
    super(props)
    this.loadChannel = this.loadChannel.bind(this)
    this.showFindChannel = this.showFindChannel.bind(this)
    this.showNewChannel = this.showNewChannel.bind(this)
    this.showDirectMessage = this.showDirectMessage.bind(this)
    this.logout = this.logout.bind(this)
  }

  logout() {
    this.props.logout()
  }

  loadChannel(channelId) {
    return () => {
      this.props.loadChannel(channelId)
    }
  }

  showNewChannel(e) {
    e.preventDefault()
    e.stopPropagation()
    this.props.history.push('/new-channel')
  }

  showFindChannel(e) {
    e.preventDefault()
    e.stopPropagation()
    this.props.history.push('/join-channel')
  }

  showDirectMessage(e) {
    e.preventDefault()
    e.stopPropagation()
    this.props.history.push('/new-direct-message')
  }

  render() {
    const starred = this.props.starred.map(channel => (
      <li key={channel.id}
        onClick={this.loadChannel(channel.id)}
        className={`channel sidebar-item ${this.props.currentChannelId === channel.id ? 'selected' : ''}`}>
        #{channel.name}
        <img src='/images/circle_x.png'/>
      </li>
    ))

    const groups = this.props.groups.map(channel => (
      <li key={channel.id}
        onClick={this.loadChannel(channel.id)}
        className={`channel sidebar-item ${this.props.currentChannelId === channel.id ? 'selected' : ''}`}>
        #{channel.name}
        <img src='/images/circle_x.png'/>
      </li>
    ))

    const directMessages = this.props.directMessages.map(channel => (
      <li key={channel.id}
        onClick={this.loadChannel(channel.id)}
        className={`channel sidebar-item ${this.props.currentChannelId === channel.id ? 'selected' : ''}`}>
          <div>
            <i className="fa fa-heart-o" aria-hidden="true"/>
            {getDirectMessageMembers(this.props.user.id, channel.members)
              .map(member => member.username)
              .join(', ')}
          </div>
          <img src='/images/circle_x.png'/>
      </li>
    ))

    return <div id='sidebar' className='sidebar-menu'>

      <div id='user' className='sidebar-item'>
        <h2>Slack</h2>
        <p id='username' onClick={this.logout}>{ this.props.user.username }</p>
      </div>

      <div id='channels'>
        <ul id='starred'>
          <li className='title sidebar-item'>
              <p>
                <i className="fa fa-star" aria-hidden="true"/>
                Starred
              </p>
          </li>
          { starred }
        </ul>

        <ul id='groups'>
          <li className='title sidebar-item'
            onClick={this.showFindChannel}>
            Channels
            <img src='/images/circle_plus.png' onClick={this.showNewChannel}/>
          </li>
          { groups }
        </ul>

        <ul id='direct-messages'>
          <li className='title sidebar-item' onClick={this.showDirectMessage}>
            Direct Messages
            <img src='/images/circle_plus.png'/>
          </li>
          { directMessages }
        </ul>
      </div>

    </div>
  }
}

export default withRouter(Sidebar)
