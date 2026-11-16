import { Outlet } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'
import { useBodyData } from './hooks/useBodyData'
import AuthModal from './components/AuthModal'

function App() {
  const [authOpen, setAuthOpen] = useState(false)
  useBodyData('data-auth', authOpen ? 'opened' : 'closed')

  return (
    <>
      {authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}
      <Header onLogin={() => setAuthOpen(true)} />
      <Outlet />
      <Footer />
    </>
  )
}

export default App