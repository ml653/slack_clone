import * as channelActions from '../actions/channel_actions'
import { merge } from 'lodash'

export default (state = { currentChannelId: null, messages: {} }, action) => {
  switch(action.type) {
  case channelActions.RECEIVE_CHANNEL_ID:
    return merge({}, state, { currentChannelId: action.channelId })

  case channelActions.RECEIVE_MESSAGES: {
    const newState = merge({}, state)
    newState.messages = action.messages
    return newState
  }

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
