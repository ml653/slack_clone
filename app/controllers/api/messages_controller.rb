class Api::MessagesController < ApplicationController

  # Loads messages by channel
  def index
    @messages = Message.where("channel_id = ?", params[:channel_id]).order(:created_at)
    render partial: 'api/messages/index', locals: {
      messages: @messages
    }
  end

  def create
    @message = Message.new(message_params)
    @user_id = current_user.id
    if @message.save
      # Save participation to channel
      render 'api/messages/show'
    else
      render json: @message.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def message_params
    params.require(:message).permit(:user_id, :channel_id, :text)
  end

end
