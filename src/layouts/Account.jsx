import { useSelector } from "react-redux"
import { Navigate, NavLink, Outlet } from "react-router"
import { findUserById } from "../api/users"
import { APP_PATHS } from "../libs/router"

function Account() {
  const authenticatedUser = useSelector(state => state.auth)
  const user = authenticatedUser ? findUserById(authenticatedUser.id) : null

  if (!user)
    return <Navigate to={APP_PATHS.home} />

  return (
    <main className="max-w-272 mt-10 md:mt-16 container grow mx-auto px-4">
      <div>
        <div className="flex flex-col gap-4 pb-4 border-b border-outline">
          <hgroup
            className="grid md:grid-cols-[1fr_auto] gap-4 *:first:text-xs sm:*:first:col-span-2 *:first:text-on-surface-low *:first:font-mono *:first:font-medium *:first:uppercase">
            <p>Citizen Management</p>
            <h1 className="font-serif text-secondary font-semibold text-4xl">Account & Case History</h1>
          </hgroup>
          <h2 className="sr-only">Profile tabs</h2>
          <ul className="flex items-center gap-1 flex-wrap">
            <li className="font-medium rounded-full px-4 py-2 has-[[aria-current=page]]:bg-primary has-[[aria-current=page]]:text-on-primary transition-colors duration-200">
              <NavLink to="/account/complaints" data-current="true">My complaints</NavLink>
            </li>
            <li className="font-medium rounded-full px-4 py-2 has-[[aria-current=page]]:bg-primary has-[[aria-current=page]]:text-on-primary transition-colors duration-200">
              <NavLink to="/account/profile">Profile</NavLink>
            </li>
            <li className="font-medium rounded-full px-4 py-2 has-[[aria-current=page]]:bg-primary has-[[aria-current=page]]:text-on-primary transition-colors duration-200">
              <NavLink to="/account/alerts">Notifications</NavLink>
            </li>
            <li className="font-medium rounded-full px-4 py-2 has-[[aria-current=page]]:bg-primary has-[[aria-current=page]]:text-on-primary transition-colors duration-200">
              <NavLink to="/account/privacy">Privacy & data</NavLink>
            </li>
            <li className="font-medium rounded-full px-4 py-2 has-[[aria-current=page]]:bg-primary has-[[aria-current=page]]:text-on-primary transition-colors duration-200">
              <NavLink to="/account/security">Security</NavLink>
            </li>
          </ul>
        </div>
        <Outlet context={user} />
      </div>
    </main>
  )
}

export default Account