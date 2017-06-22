import { connect } from 'react-redux'
import TopBar from './top_bar'
import { toggleChannelDetails } from 'Actions/channel_actions'
import { createChannelTag, deleteChannelTag } from 'Actions/session_actions'

function mapStateToProps(state, ownProps) {
  return {
    userId: state.session.user.id,
    channel: ownProps.channel
  }
}

export default connect(mapStateToProps, {
  toggleChannelDetails,
  createChannelTag,
  deleteChannelTag
})(TopBar)
