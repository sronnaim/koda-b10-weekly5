import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import AppLayout from './App'
import HomePage from './pages/HomePage'
import FileReport from './pages/FileReport'
import Profile from './pages/Profile'
import Feed from './pages/Feed'
import Track from './pages/Track'
import Help from './pages/Help'
import Report from './pages/Report'

const router = createBrowserRouter([{
  Component: AppLayout,
  children: [{
    path: '',
    Component: HomePage
  }, {
    path: '/report',
    children: [{
      path: '/report/new',
      Component: FileReport,
    }, {
      path: '/report/:slug',
      Component: Report
    }]
  }, {
    path: 'profile',
    Component: Profile
  }, {
    path: 'feed',
    Component: Feed
  }, {
    path: 'track',
    Component: Track
  }, {
    path: 'help',
    Component: Help
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
