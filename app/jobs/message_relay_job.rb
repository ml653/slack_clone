class MessageRelayJob < ApplicationJob
  def perform(message, channel_id)
    message = Api::MessagesController.render(
      partial: 'api/messages/message',
      locals: { message: message }
    )

    ActionCable.server.broadcast("channel_#{channel_id}",
                                 message: JSON.parse(message))
  end
end
