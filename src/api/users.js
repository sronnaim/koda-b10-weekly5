/**
 * @typedef {import("../schemas/users").User} UserNotSafe
 */


/**
 * @typedef {Omit<UserNotSafe, 'password'>} User
 */

/**
 * @typedef {import("../schemas/users").UserRole} UserRole
 */

/**
 * 
 * @returns {User[]}
 */
export function getUsers() {
  const raw = localStorage.getItem('users')

  if (!raw)
    return []

  try {
    const users = window.JSON.parse(raw)

    if (!Array.isArray(users))
      return []

    return users.map((user) => {
      delete user.password

      return user
    })
  } catch (err) {
    console.error(err)
    return []
  }
}

/**
 * 
 * @param {string} id
 * @returns {User | null} 
 */
export function findUserById(id) {
  const foundUser = getUsers().find(user => user.id === id)

  if (!foundUser)
    return null

  return foundUser
}

/**
 * @param {import("../schemas/users").CreateUser & { role: UserRole | undefined }} createUserData
 * @returns {User | null}
 */
export function createUser(createUserData) {
  const users = getUsers()
  const foundDuplicate = users.find(user => user.email === createUserData.email.toLowerCase().trim())

  if (foundDuplicate)
    return null

  const id = window.crypto.randomUUID()
  const role = createUserData.role ? createUserData.role : 'citizen'

  const newUser = {
    id,
    role,
    alerts: [],
    createdAt: window.Date.now() * 1000,
    ...createUserData,
  }

  users.push(newUser)

  return {
    id,
    role,
    ...createUserData
  }
}

/**
 * 
 * @param {string} id 
 * @param {Omit<Partial<User>, 'id'>} update
 * @returns {User | null} 
 */
export function updateUserById(id, update) {
  const users = getUsers()

  const foundUser = users.find(user => user.id === id)

  if (!foundUser)
    return null

  const updatedUser = {
    id,
    ...foundUser,
    ...update
  }

  const newUsers = users.map(user => {
    if (user.id === id)
      return updatedUser

    return user
  })

  try {
    localStorage.setItem('users', JSON.stringify(newUsers))

    return updatedUser
  } catch (err) {
    console.error(err)
    return null
  }
}

/**
 * 
 * @param {string} id 
 * @returns {string}
 */
export function deleteUserById(id) {
  const users = getUsers()
  const foundUser = users.find(user => user.id === id)

  if (!foundUser)
    return null

  const newUsers = users.filter(user => user.id !== id)

  try {
    localStorage.set('users', JSON.stringify(newUsers))
    return id
  } catch (err) {
    console.error(err)
    return null
  }
}

/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns {Pick<User, 'id' | 'email' | 'role' | 'fullName'> | null}
 */
export function authenticate(email, password) {
  /**
   * @returns {UserNotSafe[]}
   */
  function getUsersNotSafe() {
    const raw = localStorage.getItem('users')

    if (!raw)
      return []

    try {
      const users = window.JSON.parse(raw)

      if (!Array.isArray(users))
        return []

      return users
    } catch (err) {
      console.error(err)
      return []
    }
  }

  const foundUser = getUsersNotSafe().find(user => user.email === email.trim().toLowerCase())

  if (!foundUser)
    return null

  return foundUser.password === password
    ? { id: foundUser.id, email: foundUser.email, fullName: foundUser.fullName, role: foundUser.role }
    : null
}