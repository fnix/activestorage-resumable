import { ResumableFileChecksum } from "./resumable_file_checksum"
import { ResumableBlobRecord } from "./resumable_blob_record"
import { ResumableBlobUpload } from "./resumable_blob_upload"

let id = 0

export class ResumableUpload {
  constructor(file, url, delegate) {
    this.id = ++id
    this.file = file
    this.url = url
    this.delegate = delegate
  }

  create(callback) {
    ResumableFileChecksum.create(this.file, (error, checksum) => {
      if (error) {
        callback(error)
        return
      }

      const blob = new ResumableBlobRecord(this.file, checksum, this.url)
      notify(this.delegate, "resumableUploadWillCreateBlobWithXHR", blob.xhr)

      blob.create(error => {
        if (error) {
          callback(error)
        } else {
          const upload = new ResumableBlobUpload(blob)
          notify(this.delegate, "resumableUploadWillStoreFileWithGcsBrowserUpload", upload.gcsBrowserUpload)
          upload.create(error => {
            if (error) {
              callback(error)
            } else {
              callback(null, blob.toJSON())
            }
          })
        }
      })
    })
  }
}

function notify(object, methodName, ...messages) {
  if (object && typeof object[methodName] == "function") {
    return object[methodName](...messages)
  }
}
