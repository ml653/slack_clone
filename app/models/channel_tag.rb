class ChannelTag < ApplicationRecord
  validates :user_id, :channel_id, :info, presence: true
  belongs_to :user
  belongs_to :channel
end

