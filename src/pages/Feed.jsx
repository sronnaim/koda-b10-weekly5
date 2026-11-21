import { LuBuilding, LuDroplets, LuMap, LuMenu, LuSearch, LuSun, LuTrash2, LuTrees, LuTriangleAlert, LuVolume2 } from "react-icons/lu"
import { useReports } from "../hooks/useReports"
import FeedListItem from "../components/FeedListItem"

export default function Feed() {
  const { reports } = useReports()
  return (
    <main className="max-w-272 container grow mx-auto px-4 mt-10 md:mt-16">
      <div>
        <div>
          <hgroup
            className="*:first:text-xs *:first:text-on-surface-low *:first:font-mono *:first:font-medium *:first:uppercase *:last:font-serif *:last:text-secondary *:last:font-semibold *:last:text-4xl *:last:mt-2">
            <p>Public Incident Registry</p>
            <h1>Community Report & Fixes</h1>
          </hgroup>
          <div className="flex flex-wrap gap-6 justify-between items-end">
            <p className="mt-2 text-sm md:max-w-[60ch]">
              Open incident feed in Jakarta and surrounding urban regions. Public visitors may browse; sign in
              to interact.
            </p>
            <div
              className="font-medium [&,&_button]:flex p-1 *:px-3 *:py-1 [&,&_button]:rounded-full [&,&_button]:items-center *:gap-2 *:data-active:bg-primary *:data-active:text-on-primary flex-wrap justify-between bg-surface-container border border-outline">
              <button data-active="true">
                <LuMenu />
                Feed
              </button>
              <button>
                <LuMap />
                Map
              </button>
            </div>
          </div>
        </div>
        <search className="mt-6">
          <form action="feed" className="flex flex-col gap-4">
            <div
              className="bg-surface-container max-w-110 px-3 py-2 rounded-xl border border-outline gap-3 flex flex-row-reverse items-center [&:has(input:focus)]:shadow-[0_0_0_3px_black] [&:has(input:focus)]:shadow-primary/50">
              <input type="search" name="search"
                className="grow focus:shadow-none! focus:border-none rounded-none!"
                placeholder="Search by street name, complaint ID, or keyword..." />
              <button className="text-on-surface">
                <LuSearch />
              </button>
            </div>

            <fieldset
              className="flex gap-2 flex-wrap [&_label]:px-4 [&_label]:py-2 [&_label]:flex [&_label]:items-center [&_label_input]:hidden [&_label]:gap-2 [&_label]:font-medium [&_label]:text-xs [&_label]:border [&_label]:border-outline [&_label]:rounded-full [&_label]:bg-surface-container [&_label:has(input:checked)]:bg-primary [&_label:has(input:checked)]:text-on-primary">
              <legend className="sr-only">Category</legend>
              <label>
                <input type="radio" name="cat" value="all" defaultChecked />
                <span>All Issues (6)</span>
              </label>
              <label>
                <input type="radio" name="cat" value="cat-1" />
                <LuTriangleAlert />

                <span>Roads & Transit</span>
              </label>
              <label>
                <input type="radio" name="cat" value="cat-2" />
                <LuDroplets />
                <span>Water & Sewage</span>
              </label>
              <label>
                <input type="radio" name="cat" value="cat-3" />
                <LuSun />
                <span>Street Lighting</span>
              </label>
              <label>
                <input type="radio" name="cat" value="cat-4" />
                <LuTrash2 />
                <span>Sanitation & Waste</span>
              </label>
              <label>
                <input type="radio" name="cat" value="cat-5" />
                <LuTrees />
                <span>Public Parks & Trees</span>
              </label>
              <label>
                <input type="radio" name="cat" value="cat-6" />
                <LuVolume2 />
                <span>Noise & Disturbance</span>
              </label>
              <label>
                <input type="radio" name="cat" value="cat-7" />
                <LuBuilding />
                <span>Building & Zoning</span>
              </label>
            </fieldset>
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <fieldset
                className="w-fit flex text-xs flex-wrap bg-surface-container border border-outline rounded-2xl lg:rounded-full items-center px-3 py-1 [&_input]:hidden gap-2 [&_label]:rounded-full [&_label]:px-3 [&_label]:py-1 [&_label:has(input:checked)]:bg-primary [&_label:has(input:checked)]:text-on-primary [&_label:has(input:checked)]:font-medium">
                <legend
                  className="float-left text-2xs font-mono uppercase text-on-surface-low font-light">
                  Status:
                </legend>
                <label>
                  <input type="radio" name="status" value="all" defaultChecked />
                  <span>All</span>
                </label>
                <label>
                  <input type="radio" name="status" value="submitted" />
                  <span>Submitted</span>
                </label>
                <label>
                  <input type="radio" name="status" value="received" />
                  <span>Received</span>
                </label>
                <label>
                  <input type="radio" name="status" value="in-review" />
                  <span>In review</span>
                </label>
                <label>
                  <input type="radio" name="status" value="assigned" />
                  <span>Assigned</span>
                </label>
                <label>
                  <input type="radio" name="status" value="awaiting-info" />
                  <span>Awaiting your info</span>
                </label>
                <label>
                  <input type="radio" name="status" value="resolved" />
                  <span>Resolved</span>
                </label>
                <label>
                  <input type="radio" name="status" value="closed" />
                  <span>Closed</span>
                </label>
              </fieldset>

              <div
                className="flex items-center text-xs gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline">
                <input type="checkbox" name="proof" id="proof" />
                <label htmlFor="proof">With photos/proof only</label>
              </div>
            </div>
          </form>
        </search>
        <ol className="bg-surface-container rounded-2xl overflow-hidden border border-outline mt-6 grid">
          {reports && reports.length > 0 && reports.map(r => <FeedListItem key={`r-${r.id}`} report={r} />)}
        </ol>
      </div>
    </main >
  )
}