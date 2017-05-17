class Message < ApplicationRecord

  validates :text, :user_id, :channel_id, presence: true

  belongs_to :user

end
