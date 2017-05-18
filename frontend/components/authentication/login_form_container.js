import { connect } from 'react-redux'
import LoginForm from './login_form'
import { login, signup, logout } from '../../actions/session_actions'

const mapStateToProps = (store) => ({
  user: store.session.user
})

export default connect(
  mapStateToProps,
  { login, signup, logout }
)(LoginForm)
