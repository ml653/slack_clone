import { connect } from 'react-redux'
import { subscribeToChannel } from 'Actions/session_actions'
import JoinChannel from './join_channel'

const mapStateToProps = (state) => ({
  userId: state.session.user.id
})

export default connect(mapStateToProps, {
  subscribeToChannel
})(JoinChannel)
