import Upload from "@fnix/gcs-browser-upload"
import { getMetaValue } from "./helpers"

export class ResumableBlobUpload {
  constructor(blob) {
    this.blob = blob
    this.file = blob.file

    this.gcsBrowserUpload = new Upload({
      id: this.blob.attributes.key,
      url: this.blob.attributes.resumable_url,
      file: this.file,
      contentType: this.file.type
    })
  }

  async create(callback) {
    this.callback = callback
    try {
      await this.gcsBrowserUpload.start()
      
      const { headers } = this.gcsBrowserUpload.lastResult
      let updateHeaders = {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
      const csrfToken = getMetaValue("csrf-token")
      if (csrfToken != undefined) {
        updateHeaders["X-CSRF-Token"] = csrfToken
      }
      
      const response = await fetch(`/rails/active_storage/resumable_uploads/${this.blob.attributes.key}`, {
        method: "PUT",
        headers: updateHeaders,
        body: JSON.stringify({
          blob: { checksum: headers["x-goog-hash"].match("md5=(.*)")[1] }
        })
      })

      if (!response.ok) {
        this.callback(`Failed to update ${this.blob.attributes.key} blob checksum`)
      } else {
        this.callback(null, this.gcsBrowserUpload.lastResult)
      }
    } catch (e) {
      this.requestDidError(e)
    } finally {
      this.gcsBrowserUpload = null
    }
  }

  requestDidError() {
    const status = !!this.gcsBrowserUpload.lastResult && this.gcsBrowserUpload.lastResult.status
    this.callback(`Error storing "${this.file.name}". Status: ${status}`)
  }
}
