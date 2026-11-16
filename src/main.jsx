import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import AppLayout from './App'
import HomePage from './pages/HomePage'
import FileReport from './pages/FileReport'
import Profile from './pages/Profile'

const router = createBrowserRouter([{
  Component: AppLayout,
  children: [{
    path: '',
    Component: HomePage
  }, {
    path: 'file-report',
    Component: FileReport,
  }, {
    path: 'profile',
    Component: Profile
  }]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
