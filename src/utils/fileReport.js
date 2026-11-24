import { FILE_REPORT_STEPS } from "../schemas/report"

export function getStepsLength() {
  return Object.keys(FILE_REPORT_STEPS).length
}
export function getStepIndexByHandle(handle) {
  return Object.entries(FILE_REPORT_STEPS).findIndex(([_, entry]) => {
    return entry.handle === handle
  })
}

export function getNextStep(currentHandle) {
  const idx = getStepIndexByHandle(currentHandle)
  if (idx === Object.keys(FILE_REPORT_STEPS).length - 1)
    return null

  return Object.values(FILE_REPORT_STEPS).at(idx + 1)
}

export function getPrevStep(currentHandle) {
  const idx = getStepIndexByHandle(currentHandle)
  if (idx === 0)
    return null

  return Object.values(FILE_REPORT_STEPS).at(idx - 1)
}