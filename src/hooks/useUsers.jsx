import { useLocalStorage } from "./useLocalStorage"

export const useUsers = () => {
  const [users, setUsers] = useLocalStorage('users')

  function updateUser(id, update) {
    const foundUser = findById(id)

    if (!foundUser)
      return null

    const updatedUsers = users.map(user => {
      if (user.id === id)
        return { ...user, ...update, id }

      return user
    })

    setUsers(updatedUsers)

    return id
  }

  function findByEmail(email) {
    return (users ?? []).find(u => u.email === email.toLowerCase()) ?? null
  }

  function findById(id) {
    return (users ?? []).find(u => u.id === id) ?? null
  }

  function register({ email, fullName, phone, nik, password }) {
    if (findByEmail(email)) return null

    const newUser = {
      id: crypto.randomUUID(),
      email: email.toLowerCase(),
      fullName,
      phone,
      nik: nik || null,
      role: 'citizen',
      password,
      alerts: [],
      createdAt: Date.now(),
    }
    setUsers([...(users ?? []), newUser])
    return newUser
  }

  /**
   * 
   * @param {string} email 
   * @param {string} password 
   * @returns {import("../schemas/users").User}
   */
  function authenticate(email, password) {
    const u = findByEmail(email)
    return u && u.password === password ? u : null
  }

  return { register, authenticate, findByEmail, findById, updateUser }
}