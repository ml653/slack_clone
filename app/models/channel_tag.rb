class ChannelTag < ApplicationRecord
  validates :user_id, :channel_id:, presence: true
end
