Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static#index'

  mount ActionCable.server => '/cable'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [ :index, :create ]
    resource :session, only: [ :create, :destroy ]

    resources :channels, only: [:index, :create]
    resources :participations, only: [ :create ]

    resources :messages, only: [:create, :update, :destroy]
    get '/messages/:channel_id', to: 'messages#index'
  end

end
