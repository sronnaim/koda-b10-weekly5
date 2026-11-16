import { LuArrowLeft, LuShare, LuSearch, LuClock, LuThumbsUp, LuUser, LuCpu, LuShieldCheck, LuInbox } from 'react-icons/lu'
import { Link } from 'react-router'
function Report() {
  return (
    <main class="max-w-272 mx-auto px-4">
      <div class="mt-10 md:mt-16 grid md:grid-cols-[1fr_auto] gap-6">
        <span class="flex justify-between items-center w-full md:col-span-2">
          <Link to="/feed" class="text-sm inline-flex items-center text-primary font-semibold">
            <LuArrowLeft />
            Back to Live Feed
          </Link>
          <button class="text-xs px-3 gap-1 font-semibold text-secondary border bg-surface-container border-outline rounded-full py-2 inline-flex items-center">
            <LuShare />
            Share
          </button>
        </span>
        <div class="flex flex-col gap-6">
          <div class="bg-surface-container border border-outline p-7 rounded-2xl flex flex-col gap-4">
            <div class="flex flex-wrap gap-4">
              <span class="px-4 py-2 text-sm font-semibold inline-flex gap-2 items-center bg-warning-container text-on-warning-container border rounded-full border-on-warning-container/25">
                <LuSearch />
                In review
              </span>
              <span class="font-mono text-xs inline-flex items-center gap-2 grow">
                <LuClock />
                <time datetime="">18h 59h</time>left</span>
              <button class="font-semibold px-4 py-3 border border-outline rounded-full inline-flex items-center gap-1 text-xs">
                <LuThumbsUp className='text-primary' />
                <span class="text-on-surface">Upvote</span>
                <span class="sr-only">Give a like</span>
                <span class="sr-only">Liked by 148 citizens</span>
                <span aria-hidden="true" class="text-secondary font-mono">(148)</span>
              </button>
            </div>
            <h1 class="font-serif text-3xl font-bold text-secondary">PAM clean drinking water pipeline burst
              flooding sidewalk in front of Cipete Raya MRT</h1>
            <p class="font-body text-sm">Clean drinking water is bursting through the sidewalk pavement outside Jl.
              Fatmawati Raya No. 42
              (RT 04 / RW 07, Cilandak Barat) right in front of Cipete Raya MRT. Clean water has been flooding
              the roadway for 4 hours, causing motorbikes to slip.</p>
            <h2 class="border-t pt-6 border-outline uppercase font-mono font-medium text-on-surface-low text-xs">
              Resolution
              Pipeline</h2>
            <ol
              class="grid text-2xs text-primary sm:grid-cols-2 gap-4 md:grid-cols-4 *:border *:gap-2 *:text-center *:justify-center *:bg-success-container *:border-on-surface *:flex *:rounded-xl *:flex-col *:items-center *:p-2 [&>*_span]:font-mono [&>*_span]:font-normal *:font-semibold">
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
            <h2 class="font-serif text-secondary text-xl font-bold">
              Evidence on File
            </h2>
            <p class="text-on-surface-low text-xs">2 attachments (tap to expand)</p>
          </hgroup>
          <ul
            class="grid gap-4 md:grid-cols-2 *:bg-surface-container *:rounded-2xl *:flex *:flex-col *:overflow-hidden *:border *:border-outline">
            <li>
              <a href="assets/evd1.png">
                <div className="h-fit w-full">
                  <img class="w-full aspect-[1.78/1] object-cover" src="/assets/evd1.png"
                    alt="Evidence 1" />
                </div>
                <div class="p-3 flex flex-col gap-1">
                  <span>
                    <h3 className="text-xs text-secondary font-semibold">incident_capture_camera.jpg</h3>
                  </span>
                  <span className="text-2xs">
                    IMAGE · 2.4 MB
                  </span>
                  <span class="truncate text-xs">Photographed live on-site by resident camera.</span>
                </div>
              </a>
            </li>
            <li>
              <a href="assets/evd2.mp4">
                <div className='w-full h-fit'>
                  <video controls class="w-full aspect-[1.78/1] object-cover">
                    <source src="/assets/evd2.mp4" type="video/mp4" />
                  </video>
                </div>
                <div class="p-3 flex flex-col gap-1">
                  <span>
                    <h3 className="text-xs text-secondary font-semibold">quick_site_clip.mp4</h3>
                  </span>
                  <span className="text-2xs">
                    AUDIO · 4.8 MB
                  </span>
                  <span class="truncate text-xs">12-second horizontal pan of incident.</span>
                </div>
              </a>
            </li>
          </ul>
          <hgroup>
            <h2 class="font-serif text-secondary text-xl font-bold">Action History</h2>
            <p class="text-on-surface-low text-xs">Chronological updates from intake router and field teams</p>
          </hgroup>
          <ol>
            <li class="grid grid-cols-[auto_1fr] grid-rows-[auto_auto_auto]">
              <div class="max-w-fit row-span-3 mr-1 relative text-primary">
                <span class="inline-flex p-1 aspect-square border border-outline bg-surface-container rounded-full">
                  <LuUser />
                </span>
                <div class="bg-outline absolute w-px -z-1 mx-auto h-full translate-y-2 inset-0 transform"
                  aria-hidden="true"></div>
              </div>
              <hgroup class="flex gap-2 text-xs items-center">
                <h3 class="font-semibold text-secondary text-sm">Report submitted via WargaReport intake</h3>
                <span
                  class="inline-flex gap-1 items-center border border-outline px-2 py-1 rounded-full font-semibold">
                  <LuClock />

                  Submitted
                </span>
              </hgroup>
              <span class="flex text-xs flex-wrap font-semibold gap-1">Fahrul Septiana<time
                class="font-mono text-on-surface-low font-normal"
                datetime="2026-11-06">· Nov 6,
                05:09 PM
                GMT+7</time></span>
              <span class="text-xs my-2 border border-outline p-4 rounded-2xl">Citizen attached visual photo evidence
                and
                acoustic audio note.</span>
            </li>
            <li class="grid grid-cols-[auto_1fr] grid-rows-[auto_auto_auto]">
              <div class="max-w-fit row-span-3 mr-1 relative text-primary">
                <span class="inline-flex p-1 aspect-square border border-outline bg-surface-container rounded-full">
                  <LuCpu />
                </span>
                <div class="bg-outline absolute w-px -z-1 mx-auto h-full inset-0 transform"
                  aria-hidden="true"></div>
              </div>
              <hgroup class="flex gap-2 text-xs items-center">
                <h3 class="font-semibold text-secondary text-sm">Verified by WargaReport & dispatched to Perumda PAM
                  JAYA</h3>
                <span
                  class="inline-flex gap-1 items-center border px-2 py-1 rounded-full font-semibold bg-success-container text-on-success-container border-on-success-container/25">
                  <LuInbox />
                  Received
                </span>
              </hgroup>
              <span class="flex text-xs flex-wrap font-semibold gap-1">WargaReport Civic Router <time datetime="2026-11-06"
                class="font-mono text-on-surface-low font-normal">· Nov
                6, 05:12 PM GMT+7</time></span>
              <span class="text-xs my-2 border border-outline p-4 rounded-2xl">Priority: High. Clean water conservation
                target. 24h statutory countdown initiated.</span>
            </li>
            <li class="grid grid-cols-[auto_1fr] grid-rows-[auto_auto_auto]">
              <div class="max-w-fit row-span-3 mr-1 relative text-primary">
                <span class="inline-flex p-1 aspect-square border border-outline bg-surface-container rounded-full">
                  <LuShieldCheck />
                </span>
                <div class="bg-outline absolute w-px -z-1 mx-auto h-[90%] -translate-y-2 inset-0 transform"
                  aria-hidden="true"></div>
              </div>
              <hgroup class="flex gap-2 text-xs items-center">
                <h3 class="font-semibold text-secondary text-sm">Case accepted by Duty Triage Coordinator</h3>
                <span
                  class="inline-flex gap-1 items-center border px-2 py-1 rounded-full font-semibold bg-warning-container text-on-warning-container border-on-warning-container/25">
                  <LuSearch />
                  In review
                </span>
              </hgroup>
              <span class="flex text-xs flex-wrap font-semibold gap-1">Hendra Kurniawan <time datetime="2026-11-06"
                class="font-mono text-on-surface-low font-normal">· Nov
                6, 06:39 PM GMT+7</time></span>
              <span class="text-xs my-2 border border-outline p-4 rounded-2xl">Dispatched secondary valve isolation
                team
                from Cilandak
                maintenance station.</span>
            </li>
          </ol>
        </div>
        <div class="mx-auto max-w-86">
          <aside class="bg-surface-container p-6 rounded-2xl border border-outline">
            <hgroup class="font-mono uppercase flex flex-col gap-2 pb-4 border-b border-outline">
              <span class="text-on-surface-low text-xs font-medium">Tracking Code</span>
              <h2 class="text-xl font-semibold text-primary">CMP-2026-8841</h2>
            </hgroup>
            <ul
              class="flex flex-col gap-4 pt-4 [&_h3]:text-2xs [&_h3]:font-mono [&_h3]:text-on-surface-low [&_h3]:uppercase [&_p]:text-secondary [&_p]:text-xs [&_p]:font-semibold">
              <li>
                <h3>Assigned Authority</h3>
                <p>Perumda PAM JAYA (Clean Drinking Water)</p>
              </li>
              <li>
                <h3>Category</h3>
                <p>Water & Sewage</p>
              </li>
              <li>
                <h3>Location</h3>
                <p>
                  <span>Jl. Fatmawati Raya No. 42 (depan Stasiun MRT
                    Cipete Raya)
                  </span>
                  <span>Cilandak Barat, Jakarta Selatan</span>
                </p>
              </li>
              <li>
                <h3>Reported</h3>
                <p>Nov 6, 2026</p>
              </li>
              <li>
                <h3>Reported By</h3>
                <p>Fahrul S.</p>
              </li>
              <li>
                <h3>Field Officer</h3>
                <p class="flex flex-col gap-2">
                  <span>
                    Hendra Kurniawan
                  </span>
                  <span class="font-mono text-on-surface-low text-2xs font-normal">
                    Tim Reaksi Cepat PAM JAYA [PAM-JKT-044]
                  </span>
                </p>
              </li>
            </ul>
            <div class="flex mt-6 pt-4 border-t border-outline h-fit">
              <a href="./report-an-issue.html"
                class="bg-primary text-xs text-on-primary rounded-full md:w-full text-center p-2 font-semibold">Report
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