# frozen_string_literal: true

ActiveSupport.on_load(:active_storage_blob) do
  class ActiveStorage::Blob
    before_create do
      self.resumable_url = service.url_for_resumable_upload(key, content_type)
    end

    scope :resumable, -> { unattached.where.not(resumable_url: nil) }
    scope :active_resumable, -> { resumable.where('active_storage_blobs.created_at >= ?', 7.days.ago) }
    scope :expired_resumable, -> { resumable.where('active_storage_blobs.created_at < ?', 7.days.ago) }

    def self.find_or_create_before_resumable_upload!(filename:, byte_size:, checksum:, content_type: nil, metadata: nil)
      ActiveStorage::Blob.expired_resumable.destroy_all
      find_or_create_by! filename: filename, byte_size: byte_size, checksum: checksum, content_type: content_type,
                         metadata: metadata
    end

    def uploaded_bytes
      return unless resumable_url

      @uploaded_bytes ||= begin
        uri = URI(resumable_url)
        req = Net::HTTP::Put.new(resumable_url, 'Content-Range': "bytes */#{byte_size}")
        http = Net::HTTP.new(uri.hostname, uri.port)
        http.use_ssl = true
        res = http.request(req)
        res['Range'].split('-').last.to_i + 1
      end
    end

    def service_url_for_resumable_upload(expires_in: ActiveStorage.service_urls_expire_in)
      service.url_for_resumable_upload key, expires_in: expires_in, content_type: content_type,
                                            content_length: byte_size, checksum: checksum
    end
  end
end
