// const wrapAjaxAsPromise = (options) => (
//   new Promise((resolve, reject) => {
//     $.ajax(options)
//       .then(
//         res => resolve(res),
//         err => reject(err))
//   })
// )

export const loadMessages = (channel_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/channels/${channel_id}`
  })
)

// export const sendMessage = (message) => (
//   $.ajax({
//     method: 'POST',
//     url: '/api/channels',
//     data: { message }
//   })
// )

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: user
  })
)

export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  })
)

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
)
