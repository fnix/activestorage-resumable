# frozen_string_literal: true

Rails.application.routes.draw do
  scope ActiveStorage.routes_prefix do
    post '/resumable_uploads' => 'active_storage/resumable_uploads#create', as: :rails_resumable_uploads
    put '/resumable_uploads/:signed_blob_id' => 'active_storage/resumable_uploads#update', as: :update_rails_resumable_upload
  end
end
