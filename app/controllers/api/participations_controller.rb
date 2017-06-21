class Api::ParticipationsController < ApplicationController

  def create
    @participation = Participation.new(participation_params)
    if @participation.save
      @channel = @participation.channel
      render template: 'api/channels/show', channel: @channel
    else
      render json: @participation.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @participation = Participation.find(params[:id])
    if @participation.delete
      @channel = @participation.channel
      render template: 'api/channels/show', channel: @channel
    else
      render json: @participation.errors.full_messages, status: :unprocessable_entity
    end
  end

  def participation_params
    params.require(:participation).permit(:channel_id, :user_id)
  end

end
