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
    url: '',
    data: { message }
  })
)
