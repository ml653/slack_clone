import { connect } from 'react-redux'
import * as SessionActions from 'Actions/session_actions'
import NewDirectMessage from './new_direct_message'

const mapStateToProps = (state) => ({
  userId: state.session.user.id
})

export default connect(mapStateToProps, {
  createChannel: SessionActions.createChannel
})(NewDirectMessage)
