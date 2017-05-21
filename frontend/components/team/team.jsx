import React from 'react'
import FeedContainer from './feed/feed_container'
import Sidebar from './sidebar'
import UserInput from './user_input'

class Team extends React.Component {

  componentDidMount() {
    this.resetSubscriptions()
  }

  // componentWillReceiveProps(newProps) {
  //   this.resetSubscriptions()
  // }

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
        message: function (message) {
          this.perform('message', { message, channel_id: id })
        },
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
          <UserInput/>
        </div>
      </div>
    )
  }
}

export default Team
