class MessageRelayJob < ApplicationJob
  def perform(message, channel_id)

    message = Api::MessagesController.render(
      partial: 'api/messages/sent_message',
      locals: { message: message, user_id: message.id }
    )

    ActionCable.server.broadcast("channel_#{channel_id}",
                                 message: JSON.parse(message))
  end
end
