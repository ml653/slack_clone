class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
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

  def index
    @users = User.all
    render :index, users: @user
  end

end
