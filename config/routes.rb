Rails.application.routes.draw do

  namespace :api do
    get 'spot_images/show'
  end

  namespace :api do
    get 'spot_images/create'
  end

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :spots, only: [:index, :show, :create]
  end

end
