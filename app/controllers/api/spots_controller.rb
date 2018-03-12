class Api::SpotsController < ApplicationController

  before_action :require_login, only: [:create]

  def index
    @spots = Spot.all
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

  def spot_params
    params.require(:spot).permit(:title, :description, :price, :location)
  end
end
