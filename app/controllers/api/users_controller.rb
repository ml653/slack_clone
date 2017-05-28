class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      set_up_channel_subscriptions(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def set_up_channel_subscriptions user
    default_subscriptions = [
      Participation.new(channel_id: 1, user_id: user.id),
      # Participation.new(channel_id: 2, user_id: user.id)
    ]

    default_subscriptions.each do |participation|
      if !participation.save
        user.delete
        render json: @participation.errors.full_messages, status: 422
      end
    end

  end

  def user_params
    params.require(:user).permit(
      :username,
      :email,
      :img_url,
      :password
    )
  end

  def index
    @users = User.all
    render :index, users: @user
  end

end
