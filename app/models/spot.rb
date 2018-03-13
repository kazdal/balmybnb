class Spot < ApplicationRecord
  validates :title, :description, :price, :lat, :lng, presence: true

  has_many :bookings
  has_many :spot_images

  # belongs_to :user

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end
end
