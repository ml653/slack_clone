import * as ApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const clearErrors = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

export const signup = user => dispatch => (
  ApiUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
)

export const login = user => dispatch => (
  ApiUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
)

export const logout = () => dispatch => (
  ApiUtil.logout().then(_user => (
    dispatch(receiveCurrentUser(null))
  ))
)
