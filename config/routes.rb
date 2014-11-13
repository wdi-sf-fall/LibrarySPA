Rails.application.routes.draw do
  resources :instruments

  root 'welcome#home'
  resources :books
  
end
