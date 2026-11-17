import { useLocalStorage } from "./useLocalStorage"

/**
 * @typedef {Omit<import("../schemas/users").User, 'password'>} SessionUser
 */

export const useUser = () => {
  const [user, setUser, removeUser] = useLocalStorage('user')

  /**
   * @param {SessionUser & { password?: string }} data
   */
  function login(data) {
    const { password, ...rest } = data
    setUser(rest)
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