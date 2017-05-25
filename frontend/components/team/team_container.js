import { connect } from 'react-redux'
import Team from './team'
import { receiveMessage, loadChannel } from 'Actions/channel_actions'
import { receiveChannelMessage } from 'Actions/session_actions'

function mapStateToProps(state) {
  return {
    user: state.session.user //Get channels to subscribe to; pass it receiveMessage prop
  }
}

export default connect(mapStateToProps, {
  receiveMessage,
  loadChannel,
  receiveChannelMessage
})(Team)
