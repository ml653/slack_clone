class Api::ReactionsController < ApplicationController

  def create
    @reaction = Reaction.new(reaction_params)
    if @reaction.save
      render 'api/reactions/show'
    else
      render json: @reaction.errors.full_messages, status: :unprocessable_entity
    end
  end

  def reaction_params
    params.require(:reaction).permit(:user_id, :message_id, :emoji)
  end

end
