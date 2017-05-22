Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static#index'

  mount ActionCable.server => '/cable'

  namespace :api, defaults: { format: :json } do
    get '/users/find/', to: 'users#find'

    resources :users, only: [ :create ]
    resource :session, only: [ :create, :destroy ]
    resources :messages, only: [:create, :update, :destroy]
    get '/messages/:channel_id', to: 'messages#index'
    resources :channels, only: [:show]
  end

end
