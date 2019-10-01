class AddResumableUrlToActiveStorageBlobs < ActiveRecord::Migration[6.0]
  def change
    add_column :active_storage_blobs, :resumable_url, :text
  end
end
