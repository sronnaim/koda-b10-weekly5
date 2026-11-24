/**
 * @returns {`CMP-${string}-${string}`}
 */
export function generateId() {
  const d = new Date()

  const tail = Math.floor(window.Math.random() * 10000).toString().padStart(5, '0')

  return `CMP-${d.getUTCFullYear()}-${tail}`
}