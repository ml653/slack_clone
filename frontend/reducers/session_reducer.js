import * as SessionActions from 'Actions/session_actions'
import merge from 'lodash/merge'

const defaultState = {
  user: {},
  errors: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
  case SessionActions.RECEIVE_USER:
    return merge({}, state, { user: action.user })

  case SessionActions.LOGOUT_USER:
    return defaultState

  case SessionActions.RECEIVE_ERRORS:
    return merge({}, state, { errors: action.errors })

  case SessionActions.CLEAR_ERRORS:
    return merge({}, state, { errors: [] })

  case SessionActions.RECEIVE_CHANNEL: {
    const newState = merge({}, state)
    const channels = newState.user.channels
    channels[action.channel.id] = action.channel
    return newState
  }

  default:
    return state
  }
}
