class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      @user.set_channel_subscriptions
      render :show
    else
      render json: @user.errors.full_messages, status: 422
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

  # Used for pulling list of users for DM
  def index
    @users = User.all
    render :index, users: @user
  end

end
