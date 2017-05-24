import { connect } from 'react-redux'
import Team from './team'
import { loadMessages, receiveMessage, receiveChannelId } from 'Actions/channel_actions'

function mapStateToProps(state) {
  return {
    user: state.session.user //Get channels to subscribe to; pass it receiveMessage prop
  }
}

export default connect(mapStateToProps, { loadMessages, receiveMessage, receiveChannelId })(Team)
