import { ResumableUpload } from "./resumable_upload"
import { dispatchEvent } from "./helpers"

export class ResumableUploadController {
  constructor(input, file) {
    this.input = input
    this.file = file
    this.resumableUpload = new ResumableUpload(this.file, this.url, this)
    this.dispatch("initialize")
  }

  start(callback) {
    const hiddenInput = document.createElement("input")
    hiddenInput.type = "hidden"
    hiddenInput.name = this.input.name
    this.input.insertAdjacentElement("beforebegin", hiddenInput)

    this.dispatch("start")

    this.resumableUpload.create((error, attributes) => {
      if (error) {
        hiddenInput.parentNode.removeChild(hiddenInput)
        this.dispatchError(error)
      } else {
        hiddenInput.value = attributes.signed_id
      }

      this.dispatch("end")
      callback(error)
    })
  }

  uploadRequestDidProgress(event) {
    const progress = event.loaded / event.total * 100
    if (progress) {
      this.dispatch("progress", { progress })
    }
  }

  get url() {
    return this.input.getAttribute("data-resumable-upload-url")
  }

  dispatch(name, detail = {}) {
    detail.file = this.file
    detail.id = this.resumableUpload.id
    return dispatchEvent(this.input, `resumable-upload:${name}`, { detail })
  }

  dispatchError(error) {
    const event = this.dispatch("error", { error })
    if (!event.defaultPrevented) {
      alert(error)
    }
  }

  // ResumableUpload delegate

  resumableUploadWillCreateBlobWithXHR(xhr) {
    this.dispatch("before-blob-request", { xhr })
  }

  resumableUploadWillStoreFileWithGcsBrowserUpload(gcsBrowserUpload) {
    this.dispatch("before-storage-request", { gcsBrowserUpload })
    gcsBrowserUpload.opts.onChunkUpload = (event) => {
      this.uploadRequestDidProgress({ lengthComputable: true, loaded: event.uploadedBytes, total: event.totalBytes })
    }
  }
}
