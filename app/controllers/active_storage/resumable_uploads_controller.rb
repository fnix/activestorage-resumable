# frozen_string_literal: true

module ActiveStorage
  class ResumableUploadsController < ActiveStorage::BaseController
    def create
      blob = ActiveStorage::Blob.find_or_create_before_resumable_upload!(blob_args)
      render json: resumable_upload_json(blob)
    end

    def update
      blob = ActiveStorage::Blob.find_by(key: params[:signed_blob_id])
      blob.update(blob_args)
      render json: resumable_upload_json(blob)
    end

    private

    def blob_args
      params.require(:blob).permit(:filename, :byte_size, :checksum, :content_type, :metadata).to_h.symbolize_keys
    end

    def resumable_upload_json(blob)
      blob.as_json(root: false, methods: :signed_id)
    end
  end
end
