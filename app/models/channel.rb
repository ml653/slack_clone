class Channel < ApplicationRecord

  has_many :members,
    through: :participations,
    source: :user

  has_many :participations

end
