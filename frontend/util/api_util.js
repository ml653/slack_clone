// const wrapAjaxAsPromise = (options) => (
//   new Promise((resolve, reject) => {
//     $.ajax(options)
//       .then(
//         res => resolve(res),
//         err => reject(err))
//   })
// )

export const createChannel = (channel, members) => (
  $.ajax({
    method: 'POST',
    url: `/api/channels/`,
    data: { channel, members }
  })
)

export const subscribeToChannel = (participation) => (
  $.ajax({
    method: 'POST',
    url: `/api/participations/`,
    data: { participation }
  })
)

export const loadMessages = (channelId) => (
  $.ajax({
    method: 'GET',
    url: `/api/messages/${channelId}`
  })
)

export const sendMessage = (message) => (
  $.ajax({
    method: 'POST',
    url: '/api/messages',
    data: { message }
  })
)

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
)

export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
)

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
)

export const loadUsers = () => (
  $.ajax({ url: 'api/users', method: 'GET' })
)

export const loadChannels = () => (
  $.ajax({ url: 'api/channels', method: 'GET' })
)
