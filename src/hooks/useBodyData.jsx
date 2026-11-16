import { useEffect } from "react";

/**
 * 
 * @param {string} key 
 * @param {string} value 
 */
export function useBodyData(key, value) {
  useEffect(() => {
    document.body.setAttribute(key, value)

    return () => {
      document.body.removeAttribute(key)
    }
  }, [key, value])
}