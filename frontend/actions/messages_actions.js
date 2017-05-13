import path from 'path'
// const apiUtilPath = path.join(__dirname, 'frontend', 'util', 'api_util')

// import ApiUtil from apiUtilPath

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES"
export const SEND_MESSAGE = "RECEIVE_MESSAGE"

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE
})

export const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES,
  messages
})

export const sendMessage = dispatch => message => (
  ApiUtil.sendMessage(message)
  .then(message => dispatch(receiveMessage(message)))
)
