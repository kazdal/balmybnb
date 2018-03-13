class Booking < ApplicationRecord
  validates :user_id, :spot_id, :start_date, :end_date, presence: true

  
end
