# frozen_string_literal: true

require 'activestorage/resumable/engine'
require 'activestorage_extensions/service/gcs_service'
require 'activestorage_extensions/blob'
require 'actionview_extensions/helpers/form_tag_helper'

module ActiveStorage
  module Resumable
    mattr_accessor :upload_origin_url
    @@upload_origin_url = ENV['UPLOAD_ORIGIN_URL']

    def self.configure
      yield self
    end
  end
end
