Rails.application.routes.draw do
  
  resources :sequences
  resources :tasks, only: [:index, :update]
  resources :projects, only: [:index, :create, :show, :update]
  resources :users, only: [:index, :create, :show]

  post "/login", to: 'sessions#create'
  get "/me", to: 'sessions#show'
  delete "/logout", to: 'sessions#destroy'



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
