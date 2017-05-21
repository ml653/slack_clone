import { connect } from 'react-redux'
import Team from './team'
import { receiveMessage } from '../../actions/channel_actions'

function mapStateToProps(state){
  return {
    user: state.session.user
  }
}

export default connect(mapStateToProps, { receiveMessage })(Team)
