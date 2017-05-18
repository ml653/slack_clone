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

  def find
    @users = User.all
    render json: @users
  end

  def user_params
    params.require(:user).permit(
      :username,
      :email,
      :img_url,
      :password
    )
  end

  # def check
  #   if User.find_by(username: params[:username])
  #     render json: ["Sorry username not available..."], status: 422
  #   else
  #     render json: {}
  #   end
  # end

  # def count
  #   render json: User.count
  # end

  # def search
  #   @users = User.all.sort_by { |user| user.username.downcase }
  #   render :search_results
  # end

  # def username_check_params
  #   params.permit(:username)
  # end

end
