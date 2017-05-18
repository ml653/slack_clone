Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static#index'

  mount ActionCable.server => '/cable'

  namespace :api, defaults: { format: :json } do
    get '/users/find/', to: 'users#find'

    resources :users, only: [ :create ]
    resource :session, only: [ :create, :destroy ]
  end

end
