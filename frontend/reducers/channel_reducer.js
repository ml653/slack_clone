import * as ChannelActions from 'Actions/channel_actions'
import { merge } from 'lodash'

const defaultState = { currentChannelId: null, messages: {} }

export default (state = defaultState, action) => {
  switch(action.type) {
  case ChannelActions.RECEIVE_CHANNEL_ID:
    return merge({}, state, { currentChannelId: action.channelId })

  case ChannelActions.RECEIVE_MESSAGES: {
    const newState = merge({}, state)
    newState.messages = action.messages
    return newState
  }

  case ChannelActions.RECEIVE_MESSAGE: {
    const newState = merge({}, state)
    if(newState.currentChannelId === action.message.channel.id) {
      newState.messages[action.message.id] = action.message
    }
    return newState
  }

  case ChannelActions.REMOVE_MESSAGES: {
    const newState = merge({}, state)
    delete newState.messages[action.id]
    return newState
  }

  default:
    return state
  }
}
