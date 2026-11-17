import { useEffect, useState } from "react"

export const useLocalStorage = (key) => {
  const [value, setValue] = useState()

  function set(newValue) {
    window.localStorage.setItem(key, JSON.stringify(newValue))
    window.dispatchEvent(new Event('storage'))
  }

  useEffect(() => {
    function getData() {
      const data = localStorage.getItem(key)

      if (!data)
        return null

      setValue(JSON.parse(data))
    }

    window.addEventListener('storage', getData)

    window.dispatchEvent(new Event('storage'))

    return () => {
      window.removeEventListener('storage', getData)
    }
  }, [setValue, key])

  return [value, set]
}