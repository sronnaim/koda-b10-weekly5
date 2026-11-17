import { useLocalStorage } from "./useLocalStorage"
import { useUsers } from "./useUsers"

/**
 * @typedef {Omit<import("../schemas/users").User, 'password'>} SessionUser
 */

export const useUser = () => {
  const [user, setUser, removeUser] = useLocalStorage('user')
  const { authenticate } = useUsers()

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

  function logout() {
    removeUser()
  }

  return {
    user,
    isLoggedIn: user !== null,
    login,
    logout,
  }
}