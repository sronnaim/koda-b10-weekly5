const URL = '/areas.json'

/**
 * @typedef {import("../schemas/areas").Area} Area
 * @typedef {import("../schemas/areas").Place} Place
 */

/**
 * 
 * @returns {Promise<Area[]>}
 */
export async function getAreas() {
  try {
    const res = await fetch(URL)
    return await res.json()
  } catch (err) {
    console.error(err)
    return []
  }
}