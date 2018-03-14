class Booking < ApplicationRecord
  validates :user_id, :spot_id, :start_date, :end_date, presence: true
  validate :require_start_date_before_end
  validate :does_not_overlap_booking

  def require_start_date_before_end
    return if start_date < end_date
    errors[:start_date] << 'must be before end date'
    errors[:end_date] << 'must be after start date'
  end

  def overlapping_requests
    Booking
    .where.not(id: self.id)
    .where(spot_id: spot_id)
    .where.not('start_date > :end_date OR end_date < :start_date',
               start_date: start_date, end_date: end_date)
  end

  def does_not_overlap_booking
    return if overlapping_requests.empty?
    errors[:booking] << 'request conflicts with existing booking'
  end

end
