const wrapAjaxAsPromise = (options) => (
  new Promise((resolve, reject) => {
    $.ajax(options)
      .then(
        res => resolve(res),
        err => reject(err))
  })
)

export const sendMessage = (message) => (
  wrapAjaxAsPromise({
    method: 'POST',
    url: '/api/',
    data: { message }
  })
)

export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  })
)

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/user',
    data: user
  })
)

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
)
