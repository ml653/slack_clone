class Api::ChannelsController < ApplicationController

  # Load DMUCs
  def load_dm_channels_and_users
    user_id = params.require(:user_id)
    @users = User.all.where.not(id: user_id)
    @channels = Channel.joins(:members)
      .where("participations.user_id = #{user_id}")
      .where(private: true)
    render :load_dm_channels_and_users
  end

  def index
    @channels = Channel.where(private: false)
    render :index
  end

  def build_public_channel
    @channel = Channel.new(channel_params)
    if @channel.save
      # If Channel is for not direct messages, only add author
      participant = Participation.new(channel_id: @channel.id, user_id: @channel.author_id)
      if !participant.save
        @channel.delete
        render ['Member suggestion is not valid'], status: :unprocessable_entity and return
      end
      return @channel
    else
      render json: @channel.errors.full_messages, status: :unprocessable_entity and return
    end
  end

  # Returns channel if it exists; else creates new channel
  def build_direct_message_channel
    @channel = direct_message_channel_exists?(
      params.require(:channel)[:author_id],
      channel_member_params)
    if @channel
      return @channel
    else
      @channel = Channel.new(channel_params)
      # If Channel is for direct messages, add all members to channel
      if @channel.save
        @members = channel_member_params.map { |member_id| Participation.new(channel_id: @channel.id, user_id: member_id) }
        membersValid = @members.all? { |member| member.valid? }
        if membersValid
          @members.each { |member| member.save }
        else
          @channel.delete
          render ['Member suggestion is not valid'], status: :unprocessable_entity
        end
        return @channel
      else
        render json: @channel.errors.full_messages, status: :unprocessable_entity
      end
    end
  end

  def direct_message_channel_exists? user_id, new_member_ids
    @user = User.find(user_id)
    @user.channels
      .select { |channel| channel.isDirectMessage }
      .each do |channel|
      new_member_ids = new_member_ids.map { |member_id| member_id.to_i }
      member_id_arr = channel.members.map { |member| member.id  }
      if new_member_ids.uniq.sort == member_id_arr.uniq.sort
        return channel
      end
    end
    return nil
  end

  def create
    if params.require(:channel)[:isDirectMessage] == 'true'
      @channel = build_direct_message_channel
    else
      @channel = build_public_channel
    end
    @user_id = @current_user.id
    render :show
  end

  def channel_params
    params.require(:channel).permit(:name, :description, :private, :isDirectMessage, :author_id)
  end

  def channel_member_params
    defaults = {members: []}
    defaults.merge(params)
    params.require(:members) + [current_user.id]
  end

  def public_channels
    user_id = params[:user_id]

    @channels = Channel.where(private: false)
      .joins(
        "Left Join
          (Select *
          From Participations
          Where user_id = #{user_id}) as Participations
        On Channels.id = Participations.channel_id")
        .where('Participations.channel_id Is Null')
      render :index
  end

end
