class User < ApplicationRecord
  validates :username, :email, :password_digest, :img_url, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { within: 6...64, allow_blank: true }

  before_validation :ensure_session_token, :set_defaults

  has_many :messages

  has_many :participations

  has_many :channels,
    through: :participations

  has_many :authored,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: "Channel"

  attr_accessor :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(email, password)
    # user = User.includes(:channels).find_by(email: email)
    user = User
      .includes(channels: :channel_tags)
      .where('channel_tags.user_id = users.id or channel_tags is null').references(:channel_tags)
      .find_by(email: email)
    user && user.password_is?(password) ? user : nil
  end

  def password_is?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(32)
  end

  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def set_defaults
    self.img_url = "/images/profile_img_#{rand(6) + 1}.png"
  end
end
