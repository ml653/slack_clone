import path from 'path'
// const apiUtilPath = path.join(__dirname, 'frontend', 'util', 'api_util')
// import ApiUtil from apiUtilPath

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'
export const SEND_MESSAGE = 'SEND_MESSAGE'

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
})

export const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES,
       messages
})

export const sendMessage = dispatch => message => (
    ApiUtil.sendMessage(message)
    .then(message => dispatch(receiveMessage(message)))
)

export const editMessage = dispatch => message => (
    APIUtil.editMessage(message)
    .then(message => dispatch(receiveMessage(message)))
)

export const deleteMessage = dispatch => id => (
  APIUtil.deleteMessage(id)
    .then(message => dispatch(removeMessage(message.id)))
)
