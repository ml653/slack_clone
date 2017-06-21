class Api::ChannelTagsController < ApplicationController

  def create
    @channel_tag = ChannelTag.new(channel_tag_params)
    if @channel_tag.save
      @channel = Channel
        .includes(:channel_tags)
        .where('channel_tags.user_id = ? or channel_tags.id is null', @channel_tag.user_id) #TODO: Change channel_tags to .id
        .references(:channel_tags)
        .find(@channel_tag.channel_id)
      render 'api/channels/show'
    else
      render json: @channel_tag.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @channel_tag = ChannelTag.find(params[:id])
    if @channel_tag.delete
      @channel = Channel
        .includes(:channel_tags)
        .where('channel_tags.user_id = ? or channel_tags.id is null', @channel_tag.user_id)
        .references(:channel_tags)
        .find(@channel_tag.channel_id)
      render 'api/channels/show'
    else
      render json: @channel_tag.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def channel_tag_params
    params.require(:channel_tag).permit(:user_id, :channel_id, :info)
  end

end
