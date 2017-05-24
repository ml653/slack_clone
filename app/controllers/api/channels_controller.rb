class Api::ChannelsController < ApplicationController

  def create
    @channel = Channel.new(channel_params)
    if @channel.save

      # If Channel is for direct messages, add all members to channel
      if @channel.isDirectMessage
        @members = channel_member_params.map { |member_id| Particpation.new(@channel.id, member_id) }
        membersValid = @members.all? { |member| member.valid ? }
        if membersValid
          @members.each { |member| member.save }
        else
          render ['Member suggestion is not valid'], status: :unprocessable_entity
        end
      else
      # If Channel is for not direct messages, only add author
        participant = Participation.new(@channel.id, @channel.author_id)
        if participant.save
        else
          render ['Member suggestion is not valid'], status: :unprocessable_entity
        end
      end

      render :show
    else
      render json: @channel.errors.full_messages, status: :unprocessable_entity
    end
  end

  def channel_params
    params.require(:channel).permit(:name, :description, :private, :isDirectMessage, :author_id)
  end

  def channel_member_params
    params.require(:members)
  end

end
