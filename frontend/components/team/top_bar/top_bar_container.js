
import { connect } from 'react-redux'
import TopBar from './top_bar'
import { toggleChannelDetails } from 'Actions/channel_actions'

function mapStateToProps(state, ownProps) {
  console.log(ownProps)
  return {
    userId: state.session.user.id,
    channel: ownProps.channel
  }
}

export default connect(mapStateToProps, { toggleChannelDetails })(TopBar)
