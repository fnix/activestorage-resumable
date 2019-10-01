import { ResumableUploadController } from "./resumable_upload_controller"
import { findElements, dispatchEvent, toArray } from "./helpers"

const inputSelector = "input[type=file][data-resumable-upload-url]:not([disabled])"

export class ResumableUploadsController {
  constructor(form) {
    this.form = form
    this.inputs = findElements(form, inputSelector).filter(input => input.files.length)
  }

  start(callback) {
    const controllers = this.createResumableUploadControllers()

    const startNextController = () => {
      const controller = controllers.shift()
      if (controller) {
        controller.start(error => {
          if (error) {
            callback(error)
            this.dispatch("end")
          } else {
            startNextController()
          }
        })
      } else {
        callback()
        this.dispatch("end")
      }
    }

    this.dispatch("start")
    startNextController()
  }

  createResumableUploadControllers() {
    const controllers = []
    this.inputs.forEach(input => {
      toArray(input.files).forEach(file => {
        const controller = new ResumableUploadController(input, file)
        controllers.push(controller)
      })
    })
    return controllers
  }

  dispatch(name, detail = {}) {
    return dispatchEvent(this.form, `resumable-uploads:${name}`, { detail })
  }
}
