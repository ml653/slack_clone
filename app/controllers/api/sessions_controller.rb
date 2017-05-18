class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render 'api/users/show.json.jbuilder'
    else
      render json: ["invalid credentials"], status: 422
    end
  end

  def destroy
    if !logged_in?
      render json: ["Not logged in!"], status: 404
    else
      user = current_user
      logout!
      render json: user
    end
  end

end
