Rails.application.routes.draw do
  
  resources :tasks, only: [:index, :update, :destroy, :create]
  resources :projects, only: [:index, :create, :show, :update, :destroy]
  resources :users, only: [:index, :create, :show]

  post "/login", to: 'sessions#create'
  get "/me", to: 'sessions#show'
  delete "/logout", to: 'sessions#destroy'



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
