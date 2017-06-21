import * as ApiUtil from 'Util/api_util'
export const RECEIVE_CHANNEL_ID = 'RECEIVE_CHANNEL_ID'
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE'
export const TOGGLE_CHANNEL_DETAILS = 'TOGGLE_CHANNEL_DETAILS'

export const receiveChannelId = (channelId) => ({
  type: RECEIVE_CHANNEL_ID,
  channelId
})

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
})

export const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES,
  messages
})

// Default to load channel object in state
export const loadChannel = (channelId) => dispatch => {
  ApiUtil.loadMessages(channelId)
    .then(messages => {
      dispatch(receiveChannelId(channelId))
      dispatch(receiveMessages(messages))
    })
}

export const sendMessage = message => dispatch => (
  ApiUtil.sendMessage(message)
    .then(message => dispatch(receiveMessage(message)))
)

export const toggleChannelDetails = () => ({
  type: TOGGLE_CHANNEL_DETAILS
})

// export const loadMessages = channelId => dispatch => (
//   ApiUtil.loadMessages(channelId)
//     .then(messages => dispatch(receiveMessages(messages)))
// )
