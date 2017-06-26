class Channel < ApplicationRecord
  # validates :name, uniqueness: true
  # validates :private, :isDirectMessage, :author_id, presence: true
  validates_uniqueness_of :name, allow_blank: true, case_sensitive: false
  validate :only_null_name_for_direct_message

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

  def tags_by_user(user_id)
    self.channel_tags.where("channel_tags.user_id = #{user_id}")
  end

  def delete_silent_tag(user_id)
    tag = ChannelTag.find_by(channel_id: self.id, user_id: user_id, info: 'SILENT')
    p tag
    tag.delete if tag
  end
end
