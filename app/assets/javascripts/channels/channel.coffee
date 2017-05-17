App.channel = App.cable.subscriptions.create "ChannelChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (message) ->
    console.log(message)

  message: (message) ->
    @perform 'message', message: message
    # Called when there's incoming data on the websocket for this channel
