class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.image_url ||= 'https://a0.muscache.com/defaults/user_pic-50x50.png?v=3'
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :image_url, :password)
  end
end
