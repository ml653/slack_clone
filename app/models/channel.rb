class Channel < ApplicationRecord
  # validates :name, uniqueness: true
  # validates :private, :isDirectMessage, :author_id, presence: true
  validates_uniqueness_of :name, allow_blank: true, case_sensitive: false
  validate :only_null_name_for_direct_message

  def tags_by_user(user_id)
    self.channel_tags.where("channel_tags.user_id = #{user_id}")
    # ChannelTag.joins(:channel)
    # .where("channel_tags.user_id = #{user_id} AND channel_tags.channel_id = channels.id")
    # Channel.joins("LEFT JOIN (SELECT * FROM channel_tags WHERE channel_tags.user_id = #{userId})
    #   AS channel_tags ON channel_tags.channel_id = channels.id")
    #   .where("channel_tags.user_id = #{userId} AND channel_tags.channel_id = #{self.id}")
  end

  has_many :members,
    through: :participations,
    source: :user

  has_many :participations

  belongs_to :author,
    foreign_key: :author_id,
    class_name: 'User'

  has_many :channel_tags

  def only_null_name_for_direct_message
    if !self.name && !self.isDirectMessage
      errors.add(:expiration_date, "Channel requires a name.")
    end
  end

end
