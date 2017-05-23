import React from 'react'
import FeedContainer from './feed/feed_container'
import SidebarContainer from './sidebar/sidebar_container'
import UserInputContainer from './user_input/user_input_container'
// import NewGroup from 'Components/modals/new_group'
// import NewDirectMessage from 'Components/modals/new_direct_message'

class Team extends React.Component {

  componentDidMount() {
    this.resetSubscriptions()

    // const firstChannelId = this.props.user.channels[0].id
    this.props.receiveChannelId(1)
    this.props.loadMessages(1)
  }

  componentWillUnmount() {
    this.unsubscribeFromAll()
  }

  resetSubscriptions() {
    this.unsubscribeFromAll()
    this.subscribeToAll()
  }

  unsubscribeFromAll(){
    window.App.cable.subscriptions.subscriptions.forEach(sub => {
      window.App.cable.subscriptions.remove(sub)
    })
  }

  subscribeToAll() {
    Object.values(this.props.user.channels).forEach(({ id }) => {

      window.App.cable.subscriptions.create({
        channel: 'ChannelChannel',
        channel_id: id
      }, {
        connected: () => {},
        disconnected: () => {},
        received: ({ message }) => {
          this.props.receiveMessage(message)
        }
      })
    })
  }

  render() {
    return (
      <div>
        <SidebarContainer/>
        <div id='messenger'>
          <FeedContainer/>
          <UserInputContainer/>
        </div>
      </div>
    )
  }
}

export default Team
