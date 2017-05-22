class Api::ChannelsController < ApplicationController

  def show
    @channel = Channel.find(params[:id])
    if @channel
      render 'api/channels/show'
    else
      render json: ["Channel not found"]
    end
  end

end
