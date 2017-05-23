import UserInput from './user_input'
import { connect } from 'react-redux'
import { sendMessage } from '../../../actions/channel_actions'

function mapStateToProps(state) {
  const currentChannelId = state.channel.currentChannelId
  return {
    channel: state.session.user.channels[currentChannelId],
    userId: state.session.user.id
  }
}

export default connect(mapStateToProps, { sendMessage })(UserInput)
