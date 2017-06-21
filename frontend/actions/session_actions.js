import * as ApiUtil from '../util/api_util'
import {loadChannel} from './channel_actions'
export const RECEIVE_USER = 'RECEIVE_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

export const logoutUser = () => ({
  type: LOGOUT_USER
})

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})

export const signup = user => dispatch => (
  ApiUtil.signup(user)
    .done(user => {
      dispatch(receiveUser(user))
    })
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
)

export const login = user => dispatch => (
  ApiUtil.login(user)
    .done(user => {
      dispatch(receiveUser(user))
    })
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
)

export const logout = () => dispatch => (
  ApiUtil.logout()
    .then(_user => dispatch(logoutUser()))
)

// Channels
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL'

// Updates appropriate channel in state
export const receiveChannel = (channel, options) => ({
  type: RECEIVE_CHANNEL,
  channel,
  unread: options.unread
})

// Creates public channel
export const createChannel = (channel, members) => dispatch => (
  ApiUtil.createChannel(channel, members)
    .then(channel => {
      dispatch(receiveChannel(channel, { unread: false }))
      dispatch(loadChannel(channel.id))
    })
)

// Subscribes to public channel
export const subscribeToChannel = (participation) => dispatch => (
  ApiUtil.subscribeToChannel(participation)
    .then(channel => {
      dispatch(receiveChannel(channel, { unread: false }))
      dispatch(loadChannel(channel.id))
    })
)

// Handles new direct message
export const receiveChannelMessage = (message) => dispatch => {
  dispatch(receiveChannel(message.channel, { unread: true }))
}
