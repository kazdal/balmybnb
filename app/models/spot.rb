class Spot < ApplicationRecord
  validates :title, :description, :price, :location, presence: true
  validates :location, uniqueness: true

  has_many :bookings
  has_many :spot_images

  # belongs_to :user
end
