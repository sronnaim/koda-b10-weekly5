// useUsers.js
import { useLocalStorage } from "./useLocalStorage"

export const useUsers = () => {
  const [users, setUsers] = useLocalStorage('users')

  function findByEmail(email) {
    return (users ?? []).find(u => u.email === email.toLowerCase()) ?? null
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
      createdAt: Date.now(),
    }
    setUsers([...(users ?? []), newUser])
    return newUser
  }

  function authenticate(email, password) {
    const u = findByEmail(email)
    return u && u.password === password ? u : null
  }

  return { register, authenticate, findByEmail }
}