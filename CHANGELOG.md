# Changelog

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.1] - 2019-10-27
### Fixes
- Our ActiveStorage::Blob extensions was interacting with non-resumable blobs, creating resumable URLs for non-resumable
  blobs and finding blobs for resumable upload without a resumable URL.
- Missing information about upload origin URL.

## [1.0.0] - 2019-10-01
### Birthdate
- Adds support for Google Cloud Storage resumable uploads to ActiveStorage.

[Unreleased]: https://github.com/fnix/activestorage-resumable/compare/v1.0.1...HEAD
[1.0.1]: https://github.com/fnix/activestorage-resumable/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/fnix/activestorage-resumable/compare/ba4fc7ce0ad5ac51ebe11512d694ebd2db33124d...v1.0.0
