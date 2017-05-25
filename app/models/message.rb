class Message < ApplicationRecord

  # after_commit { MessageRelayJob.perform_later(self, self.channel_id) }
  after_commit :send_message

  validates :text, :user_id, :channel_id, presence: true

  belongs_to :user

  belongs_to :channel

  def send_message()
    self.channel.members.each do |member|
      MessageRelayJob.perform_later(self, "user_#{member.id}")
    end

    # if self.isDirectMessage
    #   self.channel.members.each do |members|
    #     MessageRelayJob.perform_later(self, "user_#{member.id}")
    #   end
    # else
    #   MessageRelayJob.perform_later(self, "user_#{member.id}")
    # end
  end

end
