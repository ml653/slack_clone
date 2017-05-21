class ChannelChannel < ApplicationCable::Channel
  def subscribed
    stream_from "channel_#{params[:channel_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def message(data)
    ActionCable.server.broadcast "channel_#{data['channel_id']}", message: data["message"]
  end
end
