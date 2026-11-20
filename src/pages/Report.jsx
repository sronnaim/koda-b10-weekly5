import { LuArrowLeft, LuShare, LuSearch, LuClock, LuThumbsUp, LuUser, LuCpu, LuShieldCheck, LuInbox } from 'react-icons/lu'
import { Link, useParams } from 'react-router'
import { useReports } from '../hooks/useReports'
import StatusBadge from '../components/ui/StatusBadge'
import { useUsers } from '../hooks/useUsers'
import moment from 'moment'
import { CATEGORIES } from '../schemas/report'

function Report() {
  const { id } = useParams()
  const { getById } = useReports()
  const { findById } = useUsers()

  const r = getById(id)
  console.log(r)
  const author = r ? findById(r.authorId) : null
  const d = r ? moment(r.createdAt) : null

  if (!r)
    return (
      <main className="mx-auto max-w-272 grow px-4 mt-16 text-center">
        <h1 className="font-serif text-xl text-secondary font-semibold">Report not found</h1>
        <p className="text-sm text-on-surface-low mt-2">
          It may have been removed, or the link is wrong.
        </p>
        <Link to="/feed" className="inline-block mt-4 text-primary text-sm">Back to live feed</Link>
      </main>
    )
  else
    return (
      <main className="max-w-272 mx-auto px-4">
        <div className="mt-10 md:mt-16 grid md:grid-cols-[1fr_auto] gap-6">
          <span className="flex justify-between items-center w-full md:col-span-2">
            <Link to="/feed" className="text-sm inline-flex items-center text-primary font-semibold">
              <LuArrowLeft />
              Back to Live Feed
            </Link>
            <button className="text-xs px-3 gap-1 font-semibold text-secondary border bg-surface-container border-outline rounded-full py-2 inline-flex items-center">
              <LuShare />
              Share
            </button>
          </span>
          <div className="flex flex-col gap-6">
            <div className="bg-surface-container border border-outline p-7 rounded-2xl flex flex-col gap-4">
              <div className="flex flex-wrap gap-4">
                <StatusBadge size='lg' status={r.status} />
                <span className="font-mono text-xs inline-flex items-center gap-2 grow">
                  <LuClock />
                  <time datetime="">18h 59h</time>left</span>
                <button className="font-semibold px-4 py-3 border border-outline rounded-full inline-flex items-center gap-1 text-xs">
                  <LuThumbsUp className='text-primary' />
                  <span className="text-on-surface">Upvote</span>
                  <span className="sr-only">Give a like</span>
                  <span className="sr-only">Liked by {r.upvotes} citizens</span>
                  <span aria-hidden="true" className="text-secondary font-mono">({r.upvotes})</span>
                </button>
              </div>
              <h1 className="font-serif text-3xl font-bold text-secondary">{r.title}</h1>
              <p className="font-body text-sm">{r.details}</p>
              <h2 className="border-t pt-6 border-outline uppercase font-mono font-medium text-on-surface-low text-xs">
                Resolution
                Pipeline</h2>
              <ol
                className="grid text-2xs text-primary sm:grid-cols-2 gap-4 md:grid-cols-4 *:border *:gap-2 *:text-center *:justify-center *:bg-success-container *:border-on-surface *:flex *:rounded-xl *:flex-col *:items-center *:p-2 [&>*_span]:font-mono [&>*_span]:font-normal *:font-semibold">
                <li>
                  <span>01</span>
                  Submitted
                </li>
                <li>
                  <span>02</span>
                  Verified by WargaReport
                </li>
                <li>
                  <span>03</span>
                  Dispatched to Agency
                </li>
                <li>
                  <span>04</span>
                  Fixed and Verified
                </li>
              </ol>
            </div>
            <hgroup>
              <h2 className="font-serif text-secondary text-xl font-bold">
                Evidence on File
              </h2>
              <p className="text-on-surface-low text-xs">2 attachments (tap to expand)</p>
            </hgroup>
            <ul
              className="grid gap-4 md:grid-cols-2 *:bg-surface-container *:rounded-2xl *:flex *:flex-col *:overflow-hidden *:border *:border-outline">
              <li>
                <Link to="/placehold.jpg">
                  <div className="h-fit w-full">
                    <img className="w-full aspect-[1.78/1] object-cover" src="/placehold.jpg"
                      alt="Evidence 1" />
                  </div>
                  <div className="p-3 flex flex-col gap-1">
                    <span>
                      <h3 className="text-xs text-secondary font-semibold">placehold.jpg</h3>
                    </span>
                    <span className="text-2xs">
                      IMAGE · 2.4 MB
                    </span>
                    <span className="truncate text-xs">Photographed live on-site by resident camera.</span>
                  </div>
                </Link>
              </li>
              <li>
                <a href="assets/evd2.mp4">
                  <div className='w-full h-fit'>
                    <video controls className="w-full aspect-[1.78/1] object-cover">
                      <source src="/assets/evd2.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="p-3 flex flex-col gap-1">
                    <span>
                      <h3 className="text-xs text-secondary font-semibold">quick_site_clip.mp4</h3>
                    </span>
                    <span className="text-2xs">
                      AUDIO · 4.8 MB
                    </span>
                    <span className="truncate text-xs">12-second horizontal pan of incident.</span>
                  </div>
                </a>
              </li>
            </ul>
            <hgroup>
              <h2 className="font-serif text-secondary text-xl font-bold">Action History</h2>
              <p className="text-on-surface-low text-xs">Chronological updates from intake router and field teams</p>
            </hgroup>
            <ol>
              <li className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto_auto]">
                <div className="max-w-fit row-span-3 mr-1 relative text-primary">
                  <span className="inline-flex p-1 aspect-square border border-outline bg-surface-container rounded-full">
                    <LuUser />
                  </span>
                  <div className="bg-outline absolute w-px -z-1 mx-auto h-full translate-y-2 inset-0 transform"
                    aria-hidden="true"></div>
                </div>
                <hgroup className="flex gap-2 text-xs items-center">
                  <h3 className="font-semibold text-secondary text-sm">Report submitted via WargaReport intake</h3>
                  <span
                    className="inline-flex gap-1 items-center border border-outline px-2 py-1 rounded-full font-semibold">
                    <LuClock />

                    Submitted
                  </span>
                </hgroup>
                <span className="flex text-xs flex-wrap font-semibold gap-1">{author ? author.fullName : "Anon"}<time
                  className="font-mono text-on-surface-low font-normal"
                  datetime={d.format()}>· {d.format('MMM D, HH:mm A')}</time></span>
                <span className="text-xs my-2 border border-outline p-4 rounded-2xl">Citizen attached evidences.</span>
              </li>
              <li className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto_auto]">
                <div className="max-w-fit row-span-3 mr-1 relative text-primary">
                  <span className="inline-flex p-1 aspect-square border border-outline bg-surface-container rounded-full">
                    <LuCpu />
                  </span>
                  <div className="bg-outline absolute w-px -z-1 mx-auto h-full inset-0 transform"
                    aria-hidden="true"></div>
                </div>
                <hgroup className="flex gap-2 text-xs items-center">
                  <h3 className="font-semibold text-secondary text-sm">Verified by WargaReport & dispatched to Perumda PAM
                    JAYA</h3>
                  <span
                    className="inline-flex gap-1 items-center border px-2 py-1 rounded-full font-semibold bg-success-container text-on-success-container border-on-success-container/25">
                    <LuInbox />
                    Received
                  </span>
                </hgroup>
                <span className="flex text-xs flex-wrap font-semibold gap-1">WargaReport Civic Router <time datetime="2026-11-06"
                  className="font-mono text-on-surface-low font-normal">· Nov
                  6, 05:12 PM GMT+7</time></span>
                <span className="text-xs my-2 border border-outline p-4 rounded-2xl">Priority: High. Clean water conservation
                  target. 24h statutory countdown initiated.</span>
              </li>
              <li className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto_auto]">
                <div className="max-w-fit row-span-3 mr-1 relative text-primary">
                  <span className="inline-flex p-1 aspect-square border border-outline bg-surface-container rounded-full">
                    <LuShieldCheck />
                  </span>
                  <div className="bg-outline absolute w-px -z-1 mx-auto h-[90%] -translate-y-2 inset-0 transform"
                    aria-hidden="true"></div>
                </div>
                <hgroup className="flex gap-2 text-xs items-center">
                  <h3 className="font-semibold text-secondary text-sm">Case accepted by Duty Triage Coordinator</h3>
                  <span
                    className="inline-flex gap-1 items-center border px-2 py-1 rounded-full font-semibold bg-warning-container text-on-warning-container border-on-warning-container/25">
                    <LuSearch />
                    In review
                  </span>
                </hgroup>
                <span className="flex text-xs flex-wrap font-semibold gap-1">Hendra Kurniawan <time datetime="2026-11-06"
                  className="font-mono text-on-surface-low font-normal">· Nov
                  6, 06:39 PM GMT+7</time></span>
                <span className="text-xs my-2 border border-outline p-4 rounded-2xl">Dispatched secondary valve isolation
                  team
                  from Cilandak
                  maintenance station.</span>
              </li>
            </ol>
          </div>
          <div className="mx-auto max-w-86">
            <aside className="bg-surface-container p-6 rounded-2xl border border-outline">
              <hgroup className="font-mono uppercase flex flex-col gap-2 pb-4 border-b border-outline">
                <span className="text-on-surface-low text-xs font-medium">Tracking Code</span>
                <h2 className="text-xl font-semibold text-primary">CMP-2026-8841</h2>
              </hgroup>
              <ul
                className="flex flex-col gap-4 pt-4 [&_h3]:text-2xs [&_h3]:font-mono [&_h3]:text-on-surface-low [&_h3]:uppercase [&_p]:text-secondary [&_p]:text-xs [&_p]:font-semibold">
                <li>
                  <h3>Assigned Authority</h3>
                  <p>AGENCY PLACEHOLDER</p>
                </li>
                <li>
                  <h3>Category</h3>
                  <p>{CATEGORIES[r.cat].label}</p>
                </li>
                <li>
                  <h3>Location</h3>
                  <p>
                    <span>{r.address}
                    </span>
                    <span>{r.area}</span>
                  </p>
                </li>
                <li>
                  <h3>Reported</h3>
                  <p>{d.format('MMM D, YYYY')}</p>
                </li>
                <li>
                  <h3>Reported By</h3>
                  <p>{author ? author.fullName : "anon"}</p>
                </li>
                <li>
                  <h3>Field Officer</h3>
                  <p className="flex flex-col gap-2">
                    <span>
                      Hendra Kurniawan
                    </span>
                    <span className="font-mono text-on-surface-low text-2xs font-normal">
                      Tim Reaksi AGENCY
                    </span>
                  </p>
                </li>
              </ul>
              <div className="flex mt-6 pt-4 border-t border-outline h-fit">
                <a href="./report-an-issue.html"
                  className="bg-primary text-xs text-on-primary rounded-full md:w-full text-center px-4 py-2 font-semibold">Report
                  similar issue
                  nearby
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>
    )
}

export default Report