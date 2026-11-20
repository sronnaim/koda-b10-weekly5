import { useCallback, useEffect } from "react"
import { useLocalStorage } from "./useLocalStorage"
import { useUsers } from "./useUsers"

/**
 * @typedef {Omit<import("../schemas/users").User, 'password'>} SessionUser
 */

export const useUser = () => {
  const [user, setUser, removeUser] = useLocalStorage('user')
  const { authenticate, findById } = useUsers()

  /**
   * @param {string} email
   * @param {string} pw
   * 
   */
  function login(email, pw) {
    const user = authenticate(email, pw)

    if (!user)
      return null

    const { password, ...rest } = user
    setUser(rest)

    return rest
  }

  const logout = useCallback(() => {
    removeUser()
  }, [removeUser])


  useEffect(() => {
    if (!user)
      return

    const foundUser = findById(user.id)

    if (!foundUser) {
      logout()
      return
    }

    const { password, ...rest } = foundUser

    if (JSON.stringify(rest) !== JSON.stringify(user)) {
      setUser(rest)
    }
  }, [logout, findById, user, setUser])

  return {
    user,
    isLoggedIn: user !== null,
    login,
    logout,
  }
}