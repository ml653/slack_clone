import React from 'react'
import FeedContainer from './feed/feed_container'
import Sidebar from './sidebar/sidebar'
import UserInputContainer from './user_input/user_input_container'

class Team extends React.Component {

  componentDidMount() {
    this.resetSubscriptions()

    const firstChannelId = this.props.user.channels[0].id
    this.props.receiveChannelId(firstChannelId)
    this.props.loadMessages(firstChannelId)
  }

  // componentWillReceiveProps(newProps) {
  //   this.resetSubscriptions()
  //

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
    this.props.user.channels.forEach(({ id }) => {

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
        <Sidebar/>
        <div id='messenger'>
          <FeedContainer/>
          <UserInputContainer/>
          {/* <UserInput/> */}
        </div>
      </div>
    )
  }
}

export default Team
