class Message < ApplicationRecord

  after_commit { MessageRelayJob.perform_later(self, self.channel_id) }

  validates :text, :user_id, :channel_id, presence: true

  belongs_to :user

  belongs_to :channel

end
