import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppLayout from './layouts/App'
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
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor, store } from './redux/store'
import './index.css'
import { FILE_REPORT_STEPS } from './schemas/report'
import { APP_PATHS } from './libs/router'

export const router = createBrowserRouter([{
  Component: AppLayout,
  children: [{
    path: APP_PATHS.home,
    Component: HomePage
  }, {
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
  }, {
    index: true,
    element: Navigate
  }, {
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
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </ReduxProvider>
  </StrictMode>,
)
