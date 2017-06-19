import React from 'react'
import FeedContainer from './feed/feed_container'
import SidebarContainer from './sidebar/sidebar_container'
import UserInputContainer from './user_input/user_input_container'
import TopBar from './top_bar/top_bar'
import ChannelDetails from './channel_details/channel_details'

class Team extends React.Component {

  componentWillMount() {
    this.initializeUserConnection()
    if(!this.props.messages) {
      const defaultChannelId = Object.values(this.props.user.channels)[0].id
      this.props.loadChannel(defaultChannelId)
    }
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  unsubscribe() {
    window.App.cable.subscriptions.subscriptions.forEach(sub => {
      window.App.cable.subscriptions.remove(sub)
    })
  }

  initializeUserConnection(){
    window.App.cable.subscriptions.create({
      channel: 'ChannelChannel',
      channel_id: `user_${this.props.user.id}`
    }, {
      connected: () => {},
      disconnected: () => {},
      received: ({ message }) => {
        this.props.receiveMessage(message)
        this.props.receiveChannelMessage(message)
      }
    })
  }

  render() {
    const defaultChannelId = Object.values(this.props.user.channels)[0].id
    const channel = this.props.user.channels[this.props.currentChannelId ?
      this.props.currentChannelId : defaultChannelId]
    return (
      <div>
        <SidebarContainer/>
        <div id='messenger'>
          <TopBar channel={channel} userId={this.props.user.id}/>
          <div id='main'>
            <div id='left-panel'>
              <FeedContainer/>
              <UserInputContainer/>
            </div>
            <ChannelDetails channel={channel}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Team
