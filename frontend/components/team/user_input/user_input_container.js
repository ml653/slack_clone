import UserInput from './user_input'
import { connect } from 'react-redux'
import { sendMessage } from '../../../actions/channel_actions'

function mapStateToProps(state) {
  return {
    channelId: state.channel.currentChannelId,
    userId: state.session.user.id
  }
}

export default connect(mapStateToProps, { sendMessage })(UserInput)
