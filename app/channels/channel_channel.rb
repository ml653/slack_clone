class ChannelChannel < ApplicationCable::Channel

  def subscribed
    stream_from "channel_#{params[:channel_id]}"
  end

  def unsubscribed
  end

  def message(data)
  end

end
