class ChannelTag < ApplicationRecord
  validates :user_id, :channel_id, :info, presence: true
  belongs_to :user
  belongs_to :channel
end

# Channel.includes(:channel_tags).where("channel_tags.user_id = 1").references(:channel_tags)
