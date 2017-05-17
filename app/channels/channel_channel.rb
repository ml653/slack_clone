class ChannelChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from 'channel_channel'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def message(data)
    ActionCable.server.broadcast 'channel_channel', message: data["message"]
  end
end
