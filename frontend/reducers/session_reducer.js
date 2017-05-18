import {
  RECEIVE_USER,
  LOGOUT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/session_actions'
import merge from 'lodash/merge'

const defaultState = {
  user: {},
  errors: []
}

export default (oldState = defaultState, action) => {
  switch (action.type) {
  case RECEIVE_USER:
    return merge({}, oldState, { user: action.user })
  case LOGOUT_USER:
    return defaultState
  case RECEIVE_ERRORS:
    return merge({}, oldState, { errors: action.errors })
  case CLEAR_ERRORS:
    return merge({}, oldState, { errors: [] })
  default:
    return oldState
  }
}
