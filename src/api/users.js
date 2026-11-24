import moment from "moment"

const KEY = 'users'
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
 * @returns {UserNotSafe []}
 */
function readAll() {
  try {
    const users = JSON.parse(localStorage.getItem(KEY))
    return Array.isArray(users) ? users : []
  } catch (err) {
    console.error(err)
    return []
  }
}

/**
 * 
 * @param {UserNotSafe[]} data 
 */
function save(data) {
  localStorage.setItem(KEY, JSON.stringify(data))
}

/**
 * 
 * @param {UserNotSafe}
 * @returns {User}
 */
function mapToSafe({ password, ...user }) {
  return user
}

/**
 * 
 * @returns {User[]}
 */
export function getUsers() {
  return readAll().map(mapToSafe)
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
  const users = readAll()
  const email = createUserData.email.toLowerCase().trim()
  const foundDuplicate = users.find(user => user.email === email)

  if (foundDuplicate)
    return null

  const id = window.crypto.randomUUID()
  const role = createUserData.role ? createUserData.role : 'citizen'

  const newUser = {
    ...createUserData,
    id,
    role,
    email,
    alerts: [],
    createdAt: moment().unix(),
  }

  users.push(newUser)

  save(users)

  delete newUser.password
  return newUser
}

/**
 * 
 * @param {string} id 
 * @param {Omit<Partial<User>, 'id'>} update
 * @returns {User | null} 
 */
export function updateUserById(id, update) {
  try {
    const users = readAll()

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

    localStorage.setItem('users', JSON.stringify(newUsers))

    return mapToSafe(newUsers)
  } catch (err) {
    console.error(err)
    return null
  }
}

/**
 * 
 * @param {string} id 
 * @param {string} newPassword 
 */
export function updatePassword(id, newPassword) {
  try {
    const users = readAll()
    const foundUser = users.find(user => user.id === id)

    if (!foundUser)
      return null

    const newUsers = users.map(user => {
      if (user.id === id)
        return {
          ...user,
          password: newPassword
        }

      return user
    })

    save(newUsers)
    return id
  } catch (err) {
    console.error(err)
    return null
  }
}

/**
 * 
 * @param {string} id 
 */
export function deleteUserById(id) {
  const users = readAll()
  save(users.filter(u => u.id !== id))
}

/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns {Pick<User, 'id' | 'email' | 'role' | 'fullName'> | null}
 */
export function authenticate(email, password) {
  const foundUser = readAll()
    .find(user => user.email === email.trim().toLowerCase())

  if (!foundUser)
    return null

  return foundUser.password === password
    ? { id: foundUser.id, email: foundUser.email, fullName: foundUser.fullName, role: foundUser.role }
    : null
}