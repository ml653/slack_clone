import { connect } from 'react-redux'
import { loadChannel } from 'Actions/channel_actions'
import { logout } from 'Actions/session_actions'
import Sidebar from './sidebar'
import { values } from 'lodash'


function mapStateToProp(state) {
  return {
    user: state.session.user,
    currentChannelId: state.channel.currentChannelId,
    groups: values(state.session.user.channels)
      .filter(channel => channel.isDirectMessage === false),
    directMessages: values(state.session.user.channels)
      .filter(channel => channel.isDirectMessage === true)
  }
}

export default connect(mapStateToProp, { loadChannel, logout })(Sidebar)
