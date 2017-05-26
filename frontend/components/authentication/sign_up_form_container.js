import { connect } from 'react-redux'
import SignUpForm from './sign_up_form'
import { signup } from '../../actions/session_actions'

const mapStateToProps = (store) => ({
  user: store.session.user,
  errors: store.session.errors
})

export default connect(
  mapStateToProps,
  { signup }
)(SignUpForm)
