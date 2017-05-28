class Api::ChannelsController < ApplicationController

  def index
    @channels = Channel.where(private: false)
    render :index
  end

  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      # If Channel is for direct messages, add all members to channel
      if @channel.isDirectMessage
        @members = channel_member_params.map { |member_id| Participation.new(channel_id: @channel.id, user_id: member_id) }
        @members << Participation.new(channel_id: @channel.id, user_id: @channel.author_id)
        membersValid = @members.all? { |member| puts "\n\n\n\n"; p member.valid? }
        if membersValid
          @members.each { |member| member.save }
        else
          @channel.delete
          render ['Member suggestion is not valid'], status: :unprocessable_entity
        end
      else
      # If Channel is for not direct messages, only add author
        participant = Participation.new(channel_id: @channel.id, user_id: @channel.author_id)
        if !participant.save
          @channel.delete
          render ['Member suggestion is not valid'], status: :unprocessable_entity
        end
      end

      render :show
    else
      puts @channel.errors.full_messages
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
