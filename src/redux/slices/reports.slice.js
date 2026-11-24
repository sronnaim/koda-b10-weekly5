import { createSlice } from "@reduxjs/toolkit";

/**
 * @typedef {import("../../schemas/report").Report} Report
 */

/** 
 * @param {Report[]} prev
 * @param {{ payload: Report}}
 * @returns {Report[]}
 */
function rCreateReport(prev, { payload: data }) {
  return [...prev, data]
}

/**
 * @param {Report[]} prev
 * @param {{ payload: string }}
 * @returns {Report[]}
 */
function rUpvoteReport(prev, { payload: id }) {
  return prev.map(r => (r.id === id ? { ...r, upvotes: r.upvotes + 1 } : r))
}

/**
 * @param {Report[]} prev
 * @param {{ payload: Pick<Report, 'id' | 'status'> }}
 * @returns {Report[]}
 */
function rUpdateReportStatus(prev, { payload: { id, status } }) {
  return prev.map(r => (r.id === id ? { ...r, status } : r))
}

/**
 * @param {Report[]} prev
 * @param {{ payload: string }}
 * @returns {Report[]}
 */
function rRemoveReport(prev, { payload: id }) {
  return prev.filter(r => r.id !== id)
}

const reportsSlice = createSlice({
  name: 'reports',
  initialState: [],
  reducers: {
    createReport: rCreateReport,
    upvoteReport: rUpvoteReport,
    updateReportStatus: rUpdateReportStatus,
    removeReport: rRemoveReport
  }
})

export const { createReport, upvoteRepor, updateReportStatus, removeReport } = reportsSlice.actions
export default reportsSlice.reducer
