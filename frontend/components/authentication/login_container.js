import { connect } from 'react-redux'
import LoginForm from './login_form'
import { login } from '../../actions/session_actions'

const mapStateToProps = (store) => ({
  user: store.session.currentUser
})

export default connect(
  mapStateToProps,
  { login }
)(LoginForm)
