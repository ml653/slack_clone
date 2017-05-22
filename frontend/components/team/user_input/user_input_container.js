import UserInput from './user_input'
import connect from 'react-redux'
import { sendMessage } from '../../../actions/channel_actions'

const mapStateToProps = (state) => ({
  channel_id: state.channel.current_channel.id,
  user_id: state.session.user.id
})

export default connect(mapStateToProps, { sendMessage })(UserInput)
