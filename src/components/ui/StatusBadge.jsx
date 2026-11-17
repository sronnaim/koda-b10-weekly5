import { LuArchive, LuCircleAlert, LuCircleCheckBig, LuClock, LuInbox, LuSearch, LuUserCheck } from 'react-icons/lu'

const ICONS = {
  "submitted": LuClock,
  "received": LuInbox,
  "in-review": LuSearch,
  "assigned": LuUserCheck,
  "awaiting-info": LuCircleAlert,
  "resolved": LuCircleCheckBig,
  "closed": LuArchive,
}

const TEXTS = {
  "submitted": 'Submitted',
  "received": 'Received',
  "in-review": "In review",
  "assigned": "Assigned",
  "awaiting-info": "Awaiting your info",
  "resolved": "Resolved",
  "closed": "Closed",
}

const CNS = {
  "submitted": 'text-on-surface bg-surface border-outline',
  "received": 'text-on-success-container bg-success-container border-on-success-container/25',
  "in-review": "text-on-warning-container bg-warning-container border-on-warning-container/25",
  "assigned": "text-on-info-container bg-info-container border-on-info-container/25",
  "awaiting-info": "text-on-warning-container bg-warning-container border-on-warning-container/25",
  "resolved": 'text-on-success-container bg-success-container border-on-success-container/25',
  "closed": 'text-on-surface bg-surface border-outline',
}

const SZS = {
  sm: 'text-2xs px-2 py-0.5 gap-1',
  md: 'text-xs px-3 py-1 gap-1.5',
  lg: 'text-sm px-4 py-2 gap-2',
}

/**
 * @typedef {Object} StatusBadgeProps
 * @property {'submitted' | 'received' | 'in-review' | 'assigned' | 'awaiting-info' | 'resolved' | 'closed'} status 
 * @property {'sm'| 'md' | 'lg'} [size]
 */


/**
 * @param {StatusBadgeProps} props
 */
function StatusBadge({ status, size = 'md' }) {
  const Icon = ICONS[status]

  return (
    <span className={`inline-flex items-center border font-semibold rounded-full ${CNS[status]} ${SZS[size]}`}>
      <Icon />
      {TEXTS[status]}
    </span>
  )
}

export default StatusBadge