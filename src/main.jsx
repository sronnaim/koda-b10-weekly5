import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import './index.css'
import AppLayout from './App'
import HomePage from './pages/HomePage'
import FileReport from './pages/FileReport'
import Feed from './pages/Feed'
import Track from './pages/Track'
import Help from './pages/Help'
import Report from './pages/Report'
import Receipt from './pages/Receipt'
import AccountLayout from './layouts/Account'
import MyComplaints from './components/account/MyComplaints'
import MyProfile from './components/account/MyProfile'
import MyAlerts from './components/account/MyAlerts'
import MyPrivacy from './components/account/MyPrivacy'
import MySecurity from './components/account/MySecurity'

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
      path: '/report/:id',
      Component: Report
    }]
  }, {
    path: 'account',
    Component: AccountLayout,
    children: [{
      path: 'complaints',
      Component: MyComplaints,
    }, { index: true, element: <Navigate to="profile" replace /> }, {
      path: 'profile',
      Component: MyProfile,
    }, {
      path: 'alerts',
      Component: MyAlerts
    }, {
      path: 'privacy',
      Component: MyPrivacy
    }, {
      path: 'security',
      Component: MySecurity
    }]
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
    path: '/receipt/:id',
    Component: Receipt,
  }]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
