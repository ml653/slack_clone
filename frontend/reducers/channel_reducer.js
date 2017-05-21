import * as channelActions from '../actions/channel_actions'
import { merge } from 'lodash'

export default (state = { channel: null, messages: {} }, action) => {
  switch(action.type) {
  case channelActions.RECEIVE_MESSAGES:
    return merge({}, state, { messages: action.messages })
  case channelActions.RECEIVE_MESSAGE: {
    const newState = merge({}, state)
    newState.messages[action.message.id] = action.message
    return newState
  }
  case channelActions.REMOVE_MESSAGES: {
    const newState = merge({}, state)
    delete newState.messages[action.id]
    return newState
  }
  default:
    return state
  }
}
