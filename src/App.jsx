import { Outlet, useLocation } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import { useEffect, useRef } from 'react'
import AuthModal from './components/AuthModal'

const USERS_SEED_URL = "/users.seed.json"

function App() {
  const authDialogRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    authDialogRef.current?.close()
  }, [pathname])

  useEffect(() => {
    (async () => {
      try {
        const users = JSON.parse(localStorage.getItem('users'))

        if (Array.isArray(users) && users.length > 0)
          return

        const res = await fetch(USERS_SEED_URL)
        localStorage.setItem('users', JSON.stringify(await res.json()))
      } catch (err) {
        console.error(err)
      }
    })()
  }, [])

  return (
    <>
      <AuthModal dialogRef={authDialogRef} />
      <Header authDialogRef={authDialogRef} />
      <Outlet />
      <Footer />
    </>
  )
}

export default App