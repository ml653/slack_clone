import React from 'react'
import FeedContainer from './feed/feed_container'
import SidebarContainer from './sidebar/sidebar_container'
import UserInputContainer from './user_input/user_input_container'

class Team extends React.Component {

  componentWillMount() {
    this.props.loadChannel(this.props.user.channels[1].id)
    this.initializeUserConnection()
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
    },{
      connected: () => {},
      disconnected: () => {},
      received: ({ message }) => {
        this.props.receiveMessage(message)
        this.props.receiveChannelMessage(message)
      }
    })
  }

  render() {
    return (
      <div>
        <SidebarContainer/>
        <div id='messenger'>
          <FeedContainer/>
          {/* <Route path='/:channel/' component={FeedContainer}/> */}
          {/* <Redirect path='/' to={`/${this.props.user.channels[1].id}`}/> */}
          {/* TODO: Annoying bug; redirect doesn't work on history.push */}
          <UserInputContainer/>
        </div>
      </div>
    )
  }
}

export default Team
