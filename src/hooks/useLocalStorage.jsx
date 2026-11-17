import { useEffect, useState } from "react"

function read(key) {
  try {
    const data = window.localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  } catch {
    return null
  }
}

export const useLocalStorage = (key) => {
  const [value, setValue] = useState(() => read(key))

  function set(newValue) {
    window.localStorage.setItem(key, JSON.stringify(newValue))
    window.dispatchEvent(new Event('storage'))
  }

  function remove() {
    window.localStorage.removeItem(key)
    window.dispatchEvent(new Event('storage'))
  }

  useEffect(() => {
    function getData() {
      const data = localStorage.getItem(key)

      setValue(data ? JSON.parse(data) : null)
    }

    window.addEventListener('storage', getData)
    getData()

    return () => {
      window.removeEventListener('storage', getData)
    }
  }, [setValue, key])

  return [value, set, remove]
}