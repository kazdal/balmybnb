class SpotImage < ApplicationRecord
  validates :image_url, :spot_id, presence: true

  belongs_to :spot
end
