class Api::BookingsController < ApplicationController

  before_action :require_login, only: [:create]

  def index
    @bookings = Booking.all
  end

  def show
    @booking = Booking.find(params[:id])
  end

  def create
    @booking = Booking.new(booking_params)
    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  private

  def booking_params
    params.require(:booking).permit(:user_id, :spot_id, :start_date, :end_date)
  end
end
