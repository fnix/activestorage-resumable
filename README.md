# Active Storage Resumable
Active Storage Resumable allow you to continue an upload even after a browser restart. Currently it only supports
[Google Cloud Storage](https://cloud.google.com/storage/docs/json_api/v1/how-tos/resumable-upload).

This library augments Active Storage
[direct uploads](https://guides.rubyonrails.org/active_storage_overview.html#direct-uploads) to support resumable
uploads with almost identical semantics. If you already uses direct upload, turn it resumable is straightforward.

## Installation
First [setup Active Storage](https://guides.rubyonrails.org/active_storage_overview.html#setup) to use GCS.

Add this line to your application's Gemfile:

```ruby
gem 'activestorage-resumable'
```

And then execute:
```bash
$ bundle
$ rails active_storage_resumable:install:migrations
$ rails db:migrate
```

## Resumable uploads
Active Storage Resumable, also includes a JavaScript library, that uploads file in chunks, saving the progress in
localStorage, allowing to resume an upload even after a browser restart.

### Resumable upload installation
1. Include `activestorage-resumable.js` in your application's JavaScript bundle.

    Using the asset pipeline:
    ```js
    //= require activestorage-resumable
    ```
    Using the npm package:
    ```js
    require("@fnix/activestorage-resumable").start()
    ```
2. Annotate file inputs with the resumable upload URL.

    ```ruby
    <%= form.file_field :attachments, multiple: true, resumable_upload: true %>
    ```
3. That's it! Uploads begin upon form submission.

### Resumable upload JavaScript events

| Event name | Event target | Event data (`event.detail`) | Description |
| --- | --- | --- | --- |
| `resumable-uploads:start` | `<form>` | None | A form containing files for resumable upload fields was submitted. |
| `resumable-upload:initialize` | `<input>` | `{id, file}` | Dispatched for every file after form submission. |
| `resumable-upload:start` | `<input>` | `{id, file}` | A resumable upload is starting. |
| `resumable-upload:before-blob-request` | `<input>` | `{id, file, xhr}` | Before making a request to your application for resumable upload metadata. |
| `resumable-upload:before-storage-request` | `<input>` | `{id, file, gcsBrowserUpload}` | Before making a request to store a file. |
| `resumable-upload:progress` | `<input>` | `{id, file, progress}` | As requests to store files progress. |
| `resumable-upload:error` | `<input>` | `{id, file, error}` | An error occurred. An `alert` will display unless this event is canceled. |
| `resumable-upload:end` | `<input>` | `{id, file}` | A resumable upload has ended. |
| `resumable-uploads:end` | `<form>` | None | All resumable uploads have ended. |

The events are almost identical to Active Storage direct upload. The bigger difference is in `before-storage-request`,
instead of a XHR, it uses an Upload object from
[@fnix/gcs-browser-upload](https://www.npmjs.com/package/@fnix/gcs-browser-upload). Resumable uploads are transfered in
chunks, so it's not very useful to return the XHR of the first chunk. Another small change is in the `progress` event
data, it's not a real [ProgressEvent](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent), it's only a faker
with the same [ProgressEvent properties](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent#Properties).

## Active Storage extensions
We added three scopes for `ActiveStorage::Blob`:
* `ActiveStorage::Blob.resumable`: Returns all resumable blobs not attached to any model;
* `ActiveStorage::Blob.active_resumable`: Returns all unfinished resumable blobs created in the last week ([the duration
  of a resumable session URI](https://cloud.google.com/storage/docs/json_api/v1/how-tos/resumable-upload#save-session-uri)).
  You can use this to show for your users the uploads that can be resumed;
* `ActiveStorage::Blob.expired_resumable`: This is most for internal use, we use it to cleanup unfinished resumable
  blobs.

We also added the instance method `uploaded_bytes` to `ActiveStorage::Blob` so you can show to your users the progress
of unfinished resumable blobs.

## License
The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
