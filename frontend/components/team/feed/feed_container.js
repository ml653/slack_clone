import { connect } from 'react-redux'
import Feed from './feed'
import { loadChannel } from 'Actions/channel_actions'

function mapStateToProps(state) {
  return {
    user: state.session.user,
    messages: state.channel.messages
  }
}

export default connect(mapStateToProps, { loadChannel })(Feed)
