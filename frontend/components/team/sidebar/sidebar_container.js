import { connect } from 'react-redux'
import { logout } from 'Actions/session_actions'
import { loadChannel } from 'Actions/channel_actions'
import Sidebar from './sidebar'
import { values } from 'lodash'

function mapStateToProp(state) {
  const starred = values(state.session.user.channels)
      .filter(channel => channel.channel_tags && channel.channel_tags.STAR)
  const publicChannels = values(state.session.user.channels)
      .filter(channel => channel.isDirectMessage === false && starred.indexOf(channel) < 0)
  const directMessages = values(state.session.user.channels)
      .filter(channel => channel.isDirectMessage === true)

  return {
    user: state.session.user,
    currentChannelId: state.channel.currentChannelId,
    groups: publicChannels,
    starred: starred,
    directMessages: directMessages
  }
}

export default connect(mapStateToProp, { logout, loadChannel })(Sidebar)
