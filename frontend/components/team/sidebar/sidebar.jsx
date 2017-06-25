import React from 'react'
import { getChannelDisplayName } from 'Util/selector_util'
import { withRouter } from 'react-router-dom';

class Sidebar extends React.Component {

  constructor(props) {
    super(props)
    this.loadChannel = this.loadChannel.bind(this)
    this.showFindChannel = this.showFindChannel.bind(this)
    this.showNewChannel = this.showNewChannel.bind(this)
    this.showDirectMessage = this.showDirectMessage.bind(this)
    this.logout = this.logout.bind(this)
    this.createSilentChannelTag = this.createSilentChannelTag.bind(this)
  }

  logout() {
    this.props.logout()
  }

  loadChannel(channelId) {
    return () => {
      this.props.loadChannel(channelId)
    }
  }

  createSilentChannelTag(user_id, channel_id) {
    return () => {
      this.props.createChannelTag({
        user_id,
        channel_id,
        info: 'SILENT'
      })
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
      <ChannelItem
        key={channel.id}
        userId={this.props.user.id}
        channel={channel}
        load={this.loadChannel(channel.id)}
        currentChannelId={this.props.currentChannelId} />
    ))

    const groups = this.props.groups.map(channel => (
      <ChannelItem
        key={channel.id}
        userId={this.props.user.id}
        channel={channel}
        load={this.loadChannel(channel.id)}
        currentChannelId={this.props.currentChannelId} />
   ))

    const directMessages = this.props.directMessages.map(channel => (
      <DirectMessageItem
        key={channel.id}
        userId={this.props.user.id}
        channel={channel}
        load={this.loadChannel(channel.id)}
        currentChannelId={this.props.currentChannelId}
        createSilentChannelTag=
          {this.createSilentChannelTag(this.props.user.id, channel.id)} />
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

const ChannelItem = ({channel, userId, currentChannelId, load}) => {
  const displayName = getChannelDisplayName(channel, userId, { prefix: true, includeUserId: false })

  return <li key={channel.id}
      onClick={load}
      className={`channel sidebar-item ${currentChannelId === channel.id ? 'selected' : ''}`}>
    <div>
      {displayName}
    </div>
  </li>
}

const DirectMessageItem = ({channel, userId, currentChannelId, load, createSilentChannelTag}) => {
  const displayName = getChannelDisplayName(channel, userId, { prefix: false, includeUserId: false })

  return <li key={channel.id}
      onClick={load}
      className={`channel sidebar-item ${currentChannelId === channel.id ? 'selected' : ''}`}>
    <div>
      <i className="fa fa-heart-o" aria-hidden="true"/>
      {displayName}
    </div>
      { channel.isDirectMessage && <img src='/images/circle_x.png'
        onClick={createSilentChannelTag}/> }
  </li>
}
export default withRouter(Sidebar)
