Rails.application.routes.draw do
  resources :konsekis, only: [:new, :create]
  resources :starforces, only: [:new]
  root 'items#index'
end