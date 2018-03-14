class Api::ReviewsController < ApplicationController

  before_action :require_login, only: [:create]

  def index
    @reviews = Review.all
  end

  def show
    @review = Review.find(params[:id])
  end

  def create
    @review = Review.new(review_params)
    @review.spot_id = params[:spot_id]
    @review.user_id = current_user.id

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:title, :body, :rating)
  end
end
