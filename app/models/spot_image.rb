class SpotImage < ApplicationRecord
  validates :image_url, :spot_id, presence: true
  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :spot

end
