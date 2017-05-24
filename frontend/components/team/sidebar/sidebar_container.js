import { connect } from 'react-redux'
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

export default connect(mapStateToProp, { logout })(Sidebar)
