Rails.application.routes.draw do

  root 'static#index'

  mount ActionCable.server => '/cable'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [ :index, :create ]
    resource :session, only: [ :create, :destroy ]

    resources :channels, only: [:index, :create]
    resources :participations, only: [ :create ]

    resources :messages, only: [:create, :update, :destroy]
    resources :reactions, only: [:create, :destroy]
    get '/messages/:channel_id', to: 'messages#index'
    get '/channels/loadDMChannelsAndUsers/:user_id', to: 'channels#load_dm_channels_and_users'
    get '/channels/public_channels/:user_id', to: 'channels#public_channels'

  end

end
