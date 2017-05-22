import * as ApiUtil from '../util/api_util'
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE'

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
})

export const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES,
  messages
})

export const removeMessage = (id) => ({
  type: REMOVE_MESSAGE,
  id
})

export const receiveChannel = (channel) => ({
  type: RECEIVE_CHANNEL,
  channel
})

export const subscribe = (channelId) => dispatch => (
  ApiUtil.subscribe(channelId)
    .then(({channel, messages}) => {
      dispatch(receiveChannel(channel))
      dispatch(receiveMessages(messages))
    })
)

export const loadMessages = channelId => dispatch => {
  ApiUtil.loadMessages(channelId)
    .then(messages => dispatch(receiveMessages(messages)))
}

export const sendMessage = dispatch => message => (
  ApiUtil.sendMessage(message)
    .then(message => dispatch(receiveMessage(message)))
)

export const editMessage = dispatch => message => (
  ApiUtil.editMessage(message)
    .then(message => dispatch(receiveMessage(message)))
)

export const deleteMessage = dispatch => id => (
  ApiUtil.deleteMessage(id)
    .then(message => dispatch(removeMessage(message.id)))
)
