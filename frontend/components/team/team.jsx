import React from 'react'
import { Route, Redirect } from 'react-router'
import FeedContainer from './feed/feed_container'
import SidebarContainer from './sidebar/sidebar_container'
import UserInputContainer from './user_input/user_input_container'

class Team extends React.Component {

  componentDidMount() {
    this.resetSubscriptions()
  }

  componentWillUnmount() {
    this.unsubscribeFromAll()
  }

  resetSubscriptions() {
    this.unsubscribeFromAll()
    this.subscribeToAll()
  }

  unsubscribeFromAll() {
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
          { this.props.user.channels
            ? <Redirect from="/" to={`/${this.props.user.channels[1].id }`} /> : null }
          <Route path='/:channel/' component={FeedContainer}/>
          <UserInputContainer/>
        </div>
      </div>
    )
  }
}

export default Team
