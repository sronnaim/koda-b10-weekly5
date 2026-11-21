import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppLayout from './App'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import HomePage from './pages/HomePage'
import FileReportCategory from './components/FileReport/Category'
import FileReportLayout from './layouts/FileReport'
import FileReportLocation from './components/FileReport/Location'
import FileReportEvidence from './components/FileReport/Evidence'
import FileReportDetails from './components/FileReport/Details'
import Report from './pages/Report'
import AccountLayout from './layouts/Account'
import MyComplaints from './components/Account/MyComplaints'
import MyProfile from './components/Account/MyProfile'
import MyAlerts from './components/Account/MyAlerts'
import MyPrivacy from './components/Account/MyPrivacy'
import MySecurity from './components/Account/MySecurity'
import Feed from './pages/Feed'
import Track from './pages/Track'
import Help from './pages/Help'
import Receipt from './pages/Receipt'
import { FILE_REPORT_STEPS } from './components/libs/fileReport'
import { APP_PATHS } from './components/libs/paths'

const router = createBrowserRouter([{
  Component: AppLayout,
  children: [{
    path: '',
    Component: HomePage
  }, {
    path: '/report',
    children: [{
      path: '/report/new',
      Component: FileReportLayout,
      children: [{
        index: true,
        Component: FileReportCategory,
        handle: FILE_REPORT_STEPS.cat.handle
      }, {
        path: '/report/new/location',
        Component: FileReportLocation,
        handle: FILE_REPORT_STEPS.location.handle
      }, {
        path: 'evidence',
        Component: FileReportEvidence,
        handle: FILE_REPORT_STEPS.evidence.handle
      }, {
        path: 'details',
        Component: FileReportDetails,
        handle: FILE_REPORT_STEPS.details.handle
      }]
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
    }, { index: true, element: <Navigate to={APP_PATHS.account.profile} replace /> }, {
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
