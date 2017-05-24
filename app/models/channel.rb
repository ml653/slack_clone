class Channel < ApplicationRecord
  validates :name, uniqueness: true

  has_many :members,
    through: :participations,
    source: :user

  has_many :participations

end
