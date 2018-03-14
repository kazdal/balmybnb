class Review < ApplicationRecord
  validates :title, :body, :rating

  belongs_to :spot
  belongs_to :user
end
