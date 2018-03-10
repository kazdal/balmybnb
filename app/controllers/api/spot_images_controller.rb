class Api::SpotImagesController < ApplicationController

  before_action :require_login, only: [:create]

  def show
    @spot_image = SpotImage.find(params[:id])
  end

  def index
    @spot_images = SpotImage.all
  end

  def create
    @spot_image = SpotImage.new(spot_image_params)

    if @spot_image.save
      render :show
    else
      render json: @spot_image.errors.full_messages, status: 422
    end
  end

  def spot_image_params
    params.require(:spot_image).permit(:image_url, :spot_id)
  end
end
