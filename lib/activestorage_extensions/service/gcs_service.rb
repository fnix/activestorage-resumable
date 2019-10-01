# frozen_string_literal: true

ActiveSupport.on_load(:after_initialize) do
  require 'active_storage/service/gcs_service'

  module ActiveStorage
    class Service::GCSService
      def url_for_resumable_upload(key, content_type, **)
        instrument :url, key: key do |payload|
          signed_url = bucket.signed_url(key, method: 'PUT', content_type: content_type, version: :v4)

          uri = URI.parse(signed_url)
          https = Net::HTTP.new(uri.host, uri.port)
          https.use_ssl = true

          headers = {
            'Origin': ActiveStorage::Resumable.upload_origin_url,
            'x-goog-resumable': 'start'
          }
          request = Net::HTTP::Put.new(uri.request_uri, headers)
          response = https.request(request)

          generated_url = response['location']

          payload[:url] = generated_url

          generated_url
        end
      end
    end
  end
end
