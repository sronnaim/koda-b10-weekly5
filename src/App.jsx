import { Outlet, useLocation } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import { useEffect, useRef } from 'react'
import AuthModal from './components/AuthModal'

function App() {
  const authDialogRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    authDialogRef.current?.close()
  }, [pathname])

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