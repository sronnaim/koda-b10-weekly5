import { useState } from 'react'
import { LuChevronDown, LuChevronUp, LuLogOut, LuUser } from 'react-icons/lu'
import { Link, useNavigate } from 'react-router'
import { useUser } from '../hooks/useUser'

/**
 * 
 * @param {import('../hooks/useUser').SessionUser} user 
 * @returns 
 */
function UserChip(user) {
  const { logout } = useUser()
  const navigate = useNavigate()

  const [expanded, setExpanded] = useState(false)

  const initial = user.fullName.split(' ').length > 1 ? user.fullName.split(' ').splice(0, 2).reduce((prev, c) => `${prev}${c[0]}`, '').toUpperCase() : user.fullName[0].toUpperCase()

  function handleExpand() {
    setExpanded(!expanded)
  }

  function handleLogout() {
    logout()
    window.alert("You've been logged out!")
    navigate('/')
  }

  function handleBlur(e) {
    if (!e.currentTarget.contains(e.relatedTarget)) setExpanded(false)
  }

  return (
    <div className='relative' onBlur={handleBlur}>
      <button className='text-2xs flex justify-between gap-2 items-center px-1.5 py-0.5 border border-outline rounded-full' onClick={handleExpand}>
        <span className='w-6 h-6 flex items-center justify-center row-span-2 bg-success-container text-on-success-container border border-on-succes-container/25 rounded-full font-semibold'>{initial}</span>
        <span className='flex flex-col items-start justify-center'>
          <span className='font-semibold text-secondary'>{user.fullName}</span>
          <span className='capitalize text-primary font-mono text-start'>{user.role}</span>
        </span>
        {expanded ? <LuChevronUp size={8} /> : <LuChevronDown size={8} />}
      </button>
      {expanded && <div className='fixed top-[25%] md:top-8 md:absolute flex flex-col *:not-last:border-b *:not-last:border-outline overflow-hidden text-2xs rounded-lg border border-outline bg-surface-container px-3 py-2'>
        <span className='flex flex-col pb-1'>
          <span className='font-semibold text-secondary'>{user.fullName}</span>
          <span className='font-mono text-on-surface-low'>{user.email}</span>
        </span>
        <span className='flex items-center'>
          <LuUser size={10} />
          <Link to='/account/complaints' className='truncate'>My Filed Reports</Link>
        </span>
        <span className='flex items-center text-danger'>
          <LuLogOut size={10} />
          <Link to='/' onClick={handleLogout}>Sign Out</Link>
        </span>
      </div>
      }
    </div>
  )
}

export default UserChip