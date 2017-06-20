class Message < ApplicationRecord

  after_commit :send_message

  validates :text, :user_id, :channel_id, presence: true

  belongs_to :user

  belongs_to :channel

  has_many :reactions

  def send_message()
    self.channel.members.each do |member|
      MessageRelayJob.perform_later(self, "user_#{member.id}")
    end
  end

end
