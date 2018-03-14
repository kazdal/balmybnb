class Review < ApplicationRecord
  validates :title, :body, :rating, presence: true

  belongs_to :spot
  belongs_to :user
end
