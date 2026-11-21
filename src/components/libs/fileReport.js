import { REPORT_FIELDS } from "../../schemas/report";
import { APP_PATHS } from "./paths";

export const FILE_REPORT_STEPS = {
  cat: {
    handle: 'cat',
    label: 'Topic',
    title: 'What needs fixing?',
    desc: 'Select the municipal service category that best matches the issue observed.',
    path: APP_PATHS.report.new.root,
    fields: [REPORT_FIELDS.cat]
  },
  location: {
    handle: 'location',
    label: 'Location',
    title: 'Where is it located?',
    desc: 'Provide street address, RT/RW, or notable landmark for inspection crews.',
    path: APP_PATHS.report.new.location,
    fields: [REPORT_FIELDS.area, REPORT_FIELDS.address]
  },
  evidence: {
    handle: 'evidence',
    label: 'Proof',
    title: 'Attach evidence',
    desc: 'Reports with photographic proof or audio notes are prioritized by field dispatchers.',
    path: APP_PATHS.report.new.evidence,
    fields: []
  },
  details: {
    handle: 'details',
    label: 'Review & Send',
    title: 'Report summary & declaration',
    desc: 'Review the report and choose notifications before final submission.',
    path: APP_PATHS.report.new.details,
    fields: [REPORT_FIELDS.title, REPORT_FIELDS.details, REPORT_FIELDS.asAnon, REPORT_FIELDS.name, REPORT_FIELDS.email, REPORT_FIELDS.phone, REPORT_FIELDS.alertEmail, REPORT_FIELDS.alertSms, REPORT_FIELDS.confirmation]
  }
}

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
  if (idx === Object.keys(FILE_REPORT_STEPS).length -1)
    return null 

  return Object.values(FILE_REPORT_STEPS).at(idx + 1)
}

export function getPrevStep(currentHandle) {
  const idx = getStepIndexByHandle(currentHandle)
  if (idx === 0)
    return null 

  return Object.values(FILE_REPORT_STEPS).at(idx - 1)
}