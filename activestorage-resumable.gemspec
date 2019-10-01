# frozen_string_literal: true

$LOAD_PATH.push File.expand_path('lib', __dir__)

# Maintain your gem's version:
require 'activestorage/resumable/version'

# Describe your gem and declare its dependencies:
Gem::Specification.new do |spec|
  spec.name        = 'activestorage-resumable'
  spec.version     = ActiveStorage::Resumable::VERSION
  spec.authors     = ['Kadu Diógenes']
  spec.email       = ['kadu@fnix.com.br']
  spec.homepage    = 'https://github.com/fnix/activestorage-resumable'
  spec.summary     = 'Adds resumable support for ActiveStorage.'
  spec.description = 'Adds resumable support for ActiveStorage.'
  spec.license     = 'MIT'

  spec.files = Dir['{app,config,db,lib}/**/*', 'MIT-LICENSE', 'Rakefile', 'README.md']

  spec.add_dependency 'activestorage', '>= 5.2.0'
  spec.add_dependency 'rails', '>= 5.2.0'

  spec.add_development_dependency 'sqlite3'
end
