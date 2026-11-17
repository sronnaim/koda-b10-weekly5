import { Outlet } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import { useRef, useState } from 'react'
import AuthModal from './components/AuthModal'

function App() {
  const [authOpen, setAuthOpen] = useState(false)
  const authDialogRef = useRef(null)

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