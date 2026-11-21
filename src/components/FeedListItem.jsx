import { LuFileText, LuMapPin, LuThumbsUp } from 'react-icons/lu'
import StatusBadge from './ui/StatusBadge'
import { Link } from 'react-router'
import { REPORT_CATEGORIES } from '../schemas/report'
import moment from 'moment'
import { APP_PATHS } from './libs/paths'

/**
 * @typedef {Object} FeedListItemProps
 * @property {Report} report
 */

/**
 * 
 * @param {FeedListItemProps} props 
 * @returns 
 */
function FeedListItem({ report }) {
  const cat = REPORT_CATEGORIES[report.cat]

  return (
    <li className="flex items-center gap-4 p-4">
      <div className="max-w-19 aspect-square rounded-xl overflow-hidden *:aspect-square *:object-cover">
        <img src="/placehold.jpg" />
      </div>
      <div className="flex flex-col gap-2 grow">
        <div className="flex flex-wrap items-center gap-1">
          <StatusBadge size='sm' status={report.status} />
          <span className="font-mono text-xs uppercase text-on-surface-low">
            {report.id}
          </span>
          <span className="font-mono text-xs uppercase text-on-surface-low">
            ·
          </span>
          <span className="font-semibold text-xs text-secondary">
            AGENCY PLACEHOLDER
          </span>
        </div>
        <div className="flex flex-wrap gap-2 items-center justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold text-secondary">{report.title}</h2>
            <p className="flex items-center text-xs gap-2 text-on-surface-low">
              <span className="flex">
                <LuMapPin />
                {report.address}
              </span>
              <span className="font-mono text-xs uppercase text-on-surface-low">
                ·
              </span>
              <span>
                {cat.label}
              </span>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 font-mono [&_svg]:text-primary text-xs">
            <button
              className="flex items-center gap-2 font-mono border text-xs border-outline rounded-full px-2 py-1">
              <LuThumbsUp />
              <span className="sr-only">Give a like</span>
              <span className="sr-only">Liked by {report.upvotes} citizens</span>
              <span aria-hidden="true" className="text-on-surface">{report.upvotes}</span>
            </button>
            <span className="flex items-center gap-1">
              <LuFileText />
              <span>x proofs</span>
            </span>
            <span>{moment(report.createdAt).format('MMM E')}</span>
            <Link to={`${APP_PATHS.report.root}/${report.id}`} className="text-primary font-semibold font-sans">Track
              → </Link>
          </div>
        </div>
      </div>
    </li>
  )
}

export default FeedListItem