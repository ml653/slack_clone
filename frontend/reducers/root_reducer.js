import { combineReducers } from 'redux'
import sessionReducer from './session_reducer'
import channelReducer from './channel_reducer'

const RootReducer = combineReducers({
  session: sessionReducer,
  channel: channelReducer
})

export default RootReducer
