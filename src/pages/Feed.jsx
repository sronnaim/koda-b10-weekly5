import { LuBuilding, LuDroplet, LuFileText, LuMap, LuMapPin, LuMenu, LuSearch, LuSun, LuThumbsUp, LuTrash2, LuTrees, LuTriangleAlert, LuVolume2 } from 'react-icons/lu'
import { Link } from 'react-router'

export default function Feed() {
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
                <input type="radio" name="cat" />
                <span>All Issues (6)</span>
              </label>
              <label>
                <input type="radio" name="cat" />
                <LuTriangleAlert />

                <span>Roads & Transit</span>
              </label>
              <label>
                <input type="radio" name="cat" />
                <LuDroplet />
                <span>Water & Sewage</span>
              </label>
              <label>
                <input type="radio" name="cat" />
                <LuSun />
                <span>Street Lighting</span>
              </label>
              <label>
                <input type="radio" name="cat" />
                <LuTrash2 />
                <span>Sanitation & Waste</span>
              </label>
              <label>
                <input type="radio" name="cat" />
                <LuTrees />
                <span>Public Parks & Trees</span>
              </label>
              <label>
                <input type="radio" name="cat" />
                <LuVolume2 />
                <span>Noise & Disturbance</span>
              </label>
              <label>
                <input type="radio" name="cat" />
                <LuBuilding />
                <span>Building & Zoning</span>
              </label>
            </fieldset>
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <fieldset
                className="w-fit flex text-xs flex-wrap bg-surface-container border border-outline rounded-full items-center px-3 py-1 [&_input]:hidden gap-2 [&_label]:rounded-full [&_label]:px-3 [&_label]:py-1 [&_label:has(input:checked)]:bg-primary [&_label:has(input:checked)]:text-on-primary [&_label:has(input:checked)]:font-medium">
                <legend
                  className="float-left text-2xs font-mono uppercase text-on-surface-low font-light">
                  Status:
                </legend>
                <label>
                  <input type="radio" name="status" />
                  <span>All</span>
                </label>
                <label>
                  <input type="radio" name="status" />
                  <span>Submitted</span>
                </label>
                <label>
                  <input type="radio" name="status" />
                  <span>Received</span>
                </label>
                <label>
                  <input type="radio" name="status" />
                  <span>In review</span>
                </label>
                <label>
                  <input type="radio" name="status" />
                  <span>Assigned</span>
                </label>
                <label>
                  <input type="radio" name="status" />
                  <span>Awaiting your info</span>
                </label>
                <label>
                  <input type="radio" name="status" />
                  <span>Resolved</span>
                </label>
                <label>
                  <input type="radio" name="status" />
                  <span>Closed</span>
                </label>
              </fieldset>

              <div
                className="flex items-center text-xs gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline">
                <input type="checkbox" name="proof" id="proof" />
                <label for="proof">With photos/proof only</label>
              </div>
            </div>
          </form>
        </search>
        <ol className="bg-surface-container rounded-2xl overflow-hidden border border-outline mt-6 grid">
          <li className="flex items-center gap-4 p-4">
            <div className="max-w-19 aspect-square rounded-xl overflow-hidden *:aspect-square *:object-cover">
              <img src="/assets/r1.jpg" />
            </div>
            <div className="flex flex-col gap-2 grow">
              <div className="flex flex-wrap items-center gap-1">
                <span
                  className="inline-flex items-center text-xs border px-2 font-semibold gap-1 py-1 rounded-full bg-warning-container text-on-warning-container border-on-warning-container/25">
                  <LuSearch />
                  <span>In review</span>
                </span>
                <span className="font-mono text-xs uppercase text-on-surface-low">
                  CMP-2026-8841
                </span>
                <span className="font-mono text-xs uppercase text-on-surface-low">
                  ·
                </span>
                <span className="font-semibold text-xs text-secondary">
                  Perumda PAM JAYA (Clean Drinking Water)
                </span>
              </div>
              <div className="flex flex-wrap gap-2 items-center justify-between">
                <div className="flex flex-col gap-2">
                  <h2 className="text-sm font-semibold text-secondary">PAM clean drinking water pipeline burst
                    flooding
                    sidewalk in
                    front
                    of Cipete Raya MRT</h2>
                  <p className="flex items-center text-xs gap-2 text-on-surface-low">
                    <span className="flex">
                      <LuMapPin />
                      Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
                    </span>
                    <span className="font-mono text-xs uppercase text-on-surface-low">
                      ·
                    </span>
                    <span>
                      Water & Sewage
                    </span>
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 font-mono [&_svg]:text-primary text-xs">
                  <button
                    className="flex items-center gap-2 font-mono border text-xs border-outline rounded-full px-2 py-1">
                    <LuThumbsUp />
                    <span className="sr-only">Give a like</span>
                    <span className="sr-only">Liked by 148 citizens</span>
                    <span aria-hidden="true" className="text-on-surface">148</span>
                  </button>
                  <span className="flex items-center gap-1">
                    <LuFileText />
                    <span>2 proofs</span>
                  </span>
                  <span>Oct 9</span>
                  <Link to="/report1" className="text-primary font-semibold font-sans">Track
                    → </Link>
                </div>
              </div>
            </div>
          </li>
          <li className="flex items-center gap-4 p-4">
            <div className="max-w-19 aspect-square rounded-xl overflow-hidden *:aspect-square *:object-cover">
              <img src="/assets/r1.jpg" />
            </div>
            <div className="flex flex-col gap-2 grow">
              <div className="flex flex-wrap items-center gap-1">
                <span
                  className="inline-flex items-center text-xs border px-2 font-semibold gap-1 py-1 rounded-full bg-warning-container text-on-warning-container border-on-warning-container/25">
                  <LuSearch />
                  <span>In review</span>
                </span>
                <span className="font-mono text-xs uppercase text-on-surface-low">
                  CMP-2026-8841
                </span>
                <span className="font-mono text-xs uppercase text-on-surface-low">
                  ·
                </span>
                <span className="font-semibold text-xs text-secondary">
                  Perumda PAM JAYA (Clean Drinking Water)
                </span>
              </div>
              <div className="flex flex-wrap gap-2 items-center justify-between">
                <div className="flex flex-col gap-2">
                  <h2 className="text-sm font-semibold text-secondary">PAM clean drinking water pipeline burst
                    flooding
                    sidewalk in
                    front
                    of Cipete Raya MRT</h2>
                  <p className="flex items-center text-xs gap-2 text-on-surface-low">
                    <span className="flex">
                      <LuMapPin />
                      Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
                    </span>
                    <span className="font-mono text-xs uppercase text-on-surface-low">
                      ·
                    </span>
                    <span>
                      Water & Sewage
                    </span>
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 font-mono [&_svg]:text-primary text-xs">
                  <button
                    className="flex items-center gap-2 font-mono border text-xs border-outline rounded-full px-2 py-1">
                    <LuThumbsUp />
                    <span className="sr-only">Give a like</span>
                    <span className="sr-only">Liked by 148 citizens</span>
                    <span aria-hidden="true" className="text-on-surface">148</span>
                  </button>
                  <span className="flex items-center gap-1">
                    <LuFileText />
                    <span>2 proofs</span>
                  </span>
                  <span>Oct 9</span>
                  <Link to="/report1" className="text-primary font-semibold font-sans">Track
                    → </Link>
                </div>
              </div>
            </div>
          </li>
          <li className="flex items-center gap-4 p-4">
            <div className="max-w-19 aspect-square rounded-xl overflow-hidden *:aspect-square *:object-cover">
              <img src="/assets/r1.jpg" />
            </div>
            <div className="flex flex-col gap-2 grow">
              <div className="flex flex-wrap items-center gap-1">
                <span
                  className="inline-flex items-center text-xs border px-2 font-semibold gap-1 py-1 rounded-full bg-warning-container text-on-warning-container border-on-warning-container/25">
                  <LuSearch />
                  <span>In review</span>
                </span>
                <span className="font-mono text-xs uppercase text-on-surface-low">
                  CMP-2026-8841
                </span>
                <span className="font-mono text-xs uppercase text-on-surface-low">
                  ·
                </span>
                <span className="font-semibold text-xs text-secondary">
                  Perumda PAM JAYA (Clean Drinking Water)
                </span>
              </div>
              <div className="flex flex-wrap gap-2 items-center justify-between">
                <div className="flex flex-col gap-2">
                  <h2 className="text-sm font-semibold text-secondary">PAM clean drinking water pipeline burst
                    flooding
                    sidewalk in
                    front
                    of Cipete Raya MRT</h2>
                  <p className="flex items-center text-xs gap-2 text-on-surface-low">
                    <span className="flex">
                      <LuMapPin />
                      Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
                    </span>
                    <span className="font-mono text-xs uppercase text-on-surface-low">
                      ·
                    </span>
                    <span>
                      Water & Sewage
                    </span>
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 font-mono [&_svg]:text-primary text-xs">
                  <button
                    className="flex items-center gap-2 font-mono border text-xs border-outline rounded-full px-2 py-1">
                    <LuThumbsUp />
                    <span className="sr-only">Give a like</span>
                    <span className="sr-only">Liked by 148 citizens</span>
                    <span aria-hidden="true" className="text-on-surface">148</span>
                  </button>
                  <span className="flex items-center gap-1">
                    <LuFileText />
                    <span>2 proofs</span>
                  </span>
                  <span>Oct 9</span>
                  <Link to="/report1" className="text-primary font-semibold font-sans">Track
                    → </Link>
                </div>
              </div>
            </div>
          </li>
          <li className="flex items-center gap-4 p-4">
            <div className="max-w-19 aspect-square rounded-xl overflow-hidden *:aspect-square *:object-cover">
              <img src="/assets/r1.jpg" />
            </div>
            <div className="flex flex-col gap-2 grow">
              <div className="flex flex-wrap items-center gap-1">
                <span
                  className="inline-flex items-center text-xs border px-2 font-semibold gap-1 py-1 rounded-full bg-warning-container text-on-warning-container border-on-warning-container/25">
                  <LuSearch />
                  <span>In review</span>
                </span>
                <span className="font-mono text-xs uppercase text-on-surface-low">
                  CMP-2026-8841
                </span>
                <span className="font-mono text-xs uppercase text-on-surface-low">
                  ·
                </span>
                <span className="font-semibold text-xs text-secondary">
                  Perumda PAM JAYA (Clean Drinking Water)
                </span>
              </div>
              <div className="flex flex-wrap gap-2 items-center justify-between">
                <div className="flex flex-col gap-2">
                  <h2 className="text-sm font-semibold text-secondary">PAM clean drinking water pipeline burst
                    flooding
                    sidewalk in
                    front
                    of Cipete Raya MRT</h2>
                  <p className="flex items-center text-xs gap-2 text-on-surface-low">
                    <span className="flex">
                      <LuMapPin />
                      Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
                    </span>
                    <span className="font-mono text-xs uppercase text-on-surface-low">
                      ·
                    </span>
                    <span>
                      Water & Sewage
                    </span>
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 font-mono [&_svg]:text-primary text-xs">
                  <button
                    className="flex items-center gap-2 font-mono border text-xs border-outline rounded-full px-2 py-1">
                    <LuThumbsUp />
                    <span className="sr-only">Give a like</span>
                    <span className="sr-only">Liked by 148 citizens</span>
                    <span aria-hidden="true" className="text-on-surface">148</span>
                  </button>
                  <span className="flex items-center gap-1">
                    <LuFileText />
                    <span>2 proofs</span>
                  </span>
                  <span>Oct 9</span>
                  <Link to="/report1" className="text-primary font-semibold font-sans">Track
                    → </Link>
                </div>
              </div>
            </div>
          </li>
          <li className="flex items-center gap-4 p-4">
            <div className="max-w-19 aspect-square rounded-xl overflow-hidden *:aspect-square *:object-cover">
              <img src="/assets/r1.jpg" />
            </div>
            <div className="flex flex-col gap-2 grow">
              <div className="flex flex-wrap items-center gap-1">
                <span
                  className="inline-flex items-center text-xs border px-2 font-semibold gap-1 py-1 rounded-full bg-warning-container text-on-warning-container border-on-warning-container/25">
                  <LuSearch />
                  <span>In review</span>
                </span>
                <span className="font-mono text-xs uppercase text-on-surface-low">
                  CMP-2026-8841
                </span>
                <span className="font-mono text-xs uppercase text-on-surface-low">
                  ·
                </span>
                <span className="font-semibold text-xs text-secondary">
                  Perumda PAM JAYA (Clean Drinking Water)
                </span>
              </div>
              <div className="flex flex-wrap gap-2 items-center justify-between">
                <div className="flex flex-col gap-2">
                  <h2 className="text-sm font-semibold text-secondary">PAM clean drinking water pipeline burst
                    flooding
                    sidewalk in
                    front
                    of Cipete Raya MRT</h2>
                  <p className="flex items-center text-xs gap-2 text-on-surface-low">
                    <span className="flex">
                      <LuMapPin />
                      Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
                    </span>
                    <span className="font-mono text-xs uppercase text-on-surface-low">
                      ·
                    </span>
                    <span>
                      Water & Sewage
                    </span>
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 font-mono [&_svg]:text-primary text-xs">
                  <button
                    className="flex items-center gap-2 font-mono border text-xs border-outline rounded-full px-2 py-1">
                    <LuThumbsUp />
                    <span className="sr-only">Give a like</span>
                    <span className="sr-only">Liked by 148 citizens</span>
                    <span aria-hidden="true" className="text-on-surface">148</span>
                  </button>
                  <span className="flex items-center gap-1">
                    <LuFileText />
                    <span>2 proofs</span>
                  </span>
                  <span>Oct 9</span>
                  <Link to="/report1" className="text-primary font-semibold font-sans">Track
                    → </Link>
                </div>
              </div>
            </div>
          </li>
          <li className="flex items-center gap-4 p-4">
            <div className="max-w-19 aspect-square rounded-xl overflow-hidden *:aspect-square *:object-cover">
              <img src="/assets/r1.jpg" />
            </div>
            <div className="flex flex-col gap-2 grow">
              <div className="flex flex-wrap items-center gap-1">
                <span
                  className="inline-flex items-center text-xs border px-2 font-semibold gap-1 py-1 rounded-full bg-warning-container text-on-warning-container border-on-warning-container/25">
                  <LuSearch />
                  <span>In review</span>
                </span>
                <span className="font-mono text-xs uppercase text-on-surface-low">
                  CMP-2026-8841
                </span>
                <span className="font-mono text-xs uppercase text-on-surface-low">
                  ·
                </span>
                <span className="font-semibold text-xs text-secondary">
                  Perumda PAM JAYA (Clean Drinking Water)
                </span>
              </div>
              <div className="flex flex-wrap gap-2 items-center justify-between">
                <div className="flex flex-col gap-2">
                  <h2 className="text-sm font-semibold text-secondary">PAM clean drinking water pipeline burst
                    flooding
                    sidewalk in
                    front
                    of Cipete Raya MRT</h2>
                  <p className="flex items-center text-xs gap-2 text-on-surface-low">
                    <span className="flex">
                      <LuMapPin />
                      Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
                    </span>
                    <span className="font-mono text-xs uppercase text-on-surface-low">
                      ·
                    </span>
                    <span>
                      Water & Sewage
                    </span>
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 font-mono [&_svg]:text-primary text-xs">
                  <button
                    className="flex items-center gap-2 font-mono border text-xs border-outline rounded-full px-2 py-1">
                    <LuThumbsUp />
                    <span className="sr-only">Give a like</span>
                    <span className="sr-only">Liked by 148 citizens</span>
                    <span aria-hidden="true" className="text-on-surface">148</span>
                  </button>
                  <span className="flex items-center gap-1">
                    <LuFileText />
                    <span>2 proofs</span>
                  </span>
                  <span>Oct 9</span>
                  <Link to="/report1" className="text-primary font-semibold font-sans">Track
                    → </Link>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </main >
  )
}