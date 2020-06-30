Rails.application.routes.draw do
  resources :konsekis, only: [:new, :create]
  root 'items#index'
end