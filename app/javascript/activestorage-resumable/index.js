import { start } from "./ujs-resumable"
import { ResumableUpload } from "./resumable_upload"
export { start, ResumableUpload }

function autostart() {
  if (window.ActiveStorageResumable) {
    start()
  }
}

setTimeout(autostart, 1)
