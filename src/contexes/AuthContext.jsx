import { createContext, useContext, useState } from "react";

export const AuthContext = createContext([])

export const useAuth = () => {
  return useContext(AuthContext)
}

/**
 * 
 */
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  return (
    <AuthContext.Provider value={{ currentUser, }}>
      {children}
    </AuthContext.Provider>
  )
}