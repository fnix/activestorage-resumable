# frozen_string_literal: true

ActiveSupport.on_load(:action_view) do
  module ActionView
    module Helpers
      module FormTagHelper
        private

        def convert_direct_upload_option_to_url(options)
          if options.delete(:direct_upload) && main_app.respond_to?(:rails_direct_uploads_url)
            options['data-direct-upload-url'] = main_app.rails_direct_uploads_url
          elsif options.delete(:resumable_upload) && main_app.respond_to?(:rails_resumable_uploads_url)
            options['data-resumable-upload-url'] = main_app.rails_resumable_uploads_url
          end
          options
        end
      end
    end
  end
end
