import { connect } from 'react-redux'
import Team from './team'
import { loadMessages, sendMessage, receiveMessage } from '../../actions/channel_actions'

function mapStateToProps(state) {
  return {
    user: state.session.user //Get channels to subscribe to; pass it receiveMessage prop
  }
}

export default connect(mapStateToProps, { loadMessages, sendMessage, receiveMessage })(Team)
