class Spot < ApplicationRecord
  validates :title, :description, :price, :lat, :lng, presence: true

  has_many :bookings
  has_many :spot_images

  # belongs_to :user

  def self.in_bounds(bounds)
    # {
    #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
    #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
    # }
    bound_benches = []
    Bench.all.each do |bench|
      if (
        bench.lat <= bounds["northEast"][lat]
        && bench.lat >= bounds["southWest"][lat]
        && bench.lng >= bounds["southWest"][lng]
        && bench.lng <= bounds["northEast"][lng]
      )
        bound_benches << bench
      end
    end
    bound_benches
  end
end
