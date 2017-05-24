class Participation < ApplicationRecord
  # validates :channel_id, uniqueness: { scope: :user_id }

  validates :user, :channel, presence: true

  belongs_to :user

  belongs_to :channel

end
