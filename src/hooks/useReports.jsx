// useReports.js
import { useLocalStorage } from "./useLocalStorage"

/**
 * 
 * @returns {`CMP-${string}-${string}`}
 */
function generateId() {
  const d = new Date()

  const tail = Math.floor(window.Math.random() * 10000).toString().padStart(5, '0')

  return `CMP-${d.getUTCFullYear()}-${tail}`
}

export function useReports() {
  const [reports, setReports, clearReports] = useLocalStorage('reports')
  const list = reports ?? []

  /** 
   * @param {Omit<import('../schemas/reports').Report, 'id' | 'status' | 'upvotes' | 'createdAt' | 'authorId'>} data
   *  @param {string} authorId 
   */
  function create(data, authorId) {
    const report = {
      ...data,
      id: generateId(),
      status: 'submitted',
      upvotes: 0,
      createdAt: Date.now(),
      authorId,
    }
    setReports([report, ...list])
    return report
  }

  function getById(id) {
    return list.find(r => r.id === id) ?? null
  }

  function getByAuthor(authorId) {
    return list.filter(r => r.authorId === authorId)
  }

  function upvote(id) {
    setReports(list.map(r => (r.id === id ? { ...r, upvotes: r.upvotes + 1 } : r)))
  }

  function updateStatus(id, status) {
    setReports(list.map(r => (r.id === id ? { ...r, status } : r)))
  }

  function remove(id) {
    setReports(list.filter(r => r.id !== id))
  }

  return {
    reports: list,
    create,
    getById,
    getByAuthor,
    upvote,
    updateStatus,
    remove,
    clearAll: clearReports,
  }
}