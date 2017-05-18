// const wrapAjaxAsPromise = (options) => (
//   new Promise((resolve, reject) => {
//     $.ajax(options)
//       .then(
//         res => resolve(res),
//         err => reject(err))
//   })
// )

export const sendMessage = (message) => (
  $.ajax({
    method: 'POST',
    url: '/api/',
    data: { message }
  })
)

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
    url: '/api/sessions',
    data: user
  })
)

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/sessions'
  })
)
