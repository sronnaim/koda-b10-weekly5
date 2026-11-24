import { LuMapPin, LuThumbsUp } from 'react-icons/lu'
import { Link } from 'react-router'
import StatusBadge from './ui/StatusBadge'
import { APP_PATHS } from '../libs/router'

/**
 * @typedef {Object} HomeCardProps
 * @property {import('../schemas/report').Report} report
 */

/**
 * 
 * @param {HomeCardProps} props 
 * @returns 
 */
function Card({ report }) {
  return (
    <li className='w-full'>
      <div>
        <img src="/placehold.jpg" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <StatusBadge status={report.status} size='sm' />
          <span className="font-mono text-xs">
            {report.id}
          </span>
        </div>

        <h3 className="font-serif font-semibold text-sm text-secondary">
          {report.title}
        </h3>
        <p className="flex text-xs text-on-surface-low items-center">
          <LuMapPin />
          {report.address}
        </p>

        <div className="flex items-center font-medium justify-between text-xs text-primary">
          <button
            className="font-mono flex items-center gap-1 border border-outline px-2 py-1 rounded-full">
            <LuThumbsUp />
            <span className="sr-only">Give a like</span>
            <span className="sr-only">Liked by {report.upvotes} citizens</span>
            <span aria-hidden="true">{report.upvotes}</span>
          </button>
          <Link to={`${APP_PATHS.report.root}/${report.id}`}>
            Inspect →
          </Link>
        </div>
      </div>
    </li>
  )
}

/**
 * @typedef {Object} HomeFeedProps
 * @property {import('../schemas/report').Report[]} reports
 */

/**
 * 
 * @param {HomeFeedProps} props 
 * @returns 
 */
function HomeFeed({ reports }) {
  return (
    <section className="mt-8 pt-6 border-t border-outline">
      <div className="flex items-end flex-wrap gap-2">
        <div className="grow">
          <h2 className="text-xl font-serif text-secondary font-semibold">Recent Community Reports</h2>
          <p className="text-xs">Verified reports lodged in Jakarta and surrounding regions</p>
        </div>
        <Link to={APP_PATHS.feed} className="text-xs flex flex-col font-semibold text-primary md:translate-y-4">
          View live feed →
        </Link>
      </div>
      <ol
        className="mt-6 grid md:grid-cols-2 gap-4 [&_li]:grid [&_li]:gap-2 [&_li]:lg:grid-cols-[auto_1fr] [&_li]:p-4 [&_li]:rounded-2xl [&_li]:border [&_li]:border-outline [&_li]:max-w-96 [&_li]:lg:max-w-none [&_li]:mx-auto [&_li]:bg-surface-container [&_li>:first-child,&_li_img]:aspect-square [&_li>:first-child]:rounded-2xl [&_li>:first-child]:overflow-hidden [&_li>:first-child]:lg:max-w-24 [&_li_img]:w-full [&_li_img]:object-cover">
        {reports && reports.length > 0 && reports.slice(0, 4).map(r => <Card report={r} />)}
      </ol>
    </section>

  )
}

export default HomeFeed