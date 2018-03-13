class Api::SpotsController < ApplicationController

  before_action :require_login, only: [:create]

  def index
    @spots = bounds ? Spot.in_bounds(params[:bounds]) : Spot.all

    if params[:minPrice] && params[:maxPrice]
      @spots = @spots.where(price: price_range)
    end

  end

  def show
    @spot = Spot.find(params[:id]).includes(:bookings)
  end

  def create
    @spot = Spot.new(spot_params)

    if @spot.save
      render :show
    else
      render json: @spot.errors.full_messages, status: 422
    end
  end

  private

  def price_range
    (params[:minPrice]..params[:maxPrice])
  end

  def spot_params
    params.require(:spot).permit(:title, :description, :price, :lat, :lng)
  end

  def bounds
    params[:bounds]
  end
end
