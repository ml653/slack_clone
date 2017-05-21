import { connect } from 'react-redux'
import Feed from './feed'
import { receiveMessage } from '../../../actions/channel_actions'

function mapStateToProps(state) {
  return {
    messages: state.channel.messages
  }
}

export default connect(mapStateToProps, { receiveMessage })(Feed)
