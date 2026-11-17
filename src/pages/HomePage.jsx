import { Link } from 'react-router'
import { LuArrowRight, LuCamera, LuMapPin, LuSearch, LuThumbsUp } from 'react-icons/lu'

export default function HomePage() {
  return (
    <main className="max-w-272 container grow mx-auto px-4">
      <section className="flex flex-col gap-6">
        <h1
          className="text-3xl max-w-[21ch] text-center md:text-start md:text-5xl mt-10 md:mt-16 font-serif text-secondary font-semibold">
          See something broken? Snap it. We push the city to fix it.
        </h1>
        <p className="max-w-[55ch] text-center md:text-start">Potholes, dark streetlights, PAM water leaks, or trash
          piles. Drop photos, track
          fixes like a food
          delivery order, and keep authorities accountable.</p>
        <div className="flex flex-wrap items-center gap-2">
          <Link to="/report/new"
            className="font-semibold flex items-center gap-2 py-2 px-4 bg-primary rounded-full text-on-primary">
            <LuCamera />
            Snap a report
            <LuArrowRight />
          </Link>

          <Link to="/track"
            className="font-semibold flex items-center gap-2 py-2 px-4 rounded-full bg-surface-container text-secondary border border-outline">
            Track a case
          </Link>
        </div>

        <ul
          className="flex flex-wrap font-mono font-normal [&_strong]:font-semibold [&_strong]:text-primary [&_li:first-child_strong]:text-secondary text-xs [&>*:not(:last-child)::after]:content-['·'] [&>*:not(:last-child)::after]:mr-2">
          <li className="flex gap-2"><strong>48</strong>reports today</li>
          <li className="flex gap-2"><strong>194</strong>fixed this week</li>
          <li className="flex gap-2"><strong>2.3</strong>days avg response</li>
        </ul>
      </section>
      <section className="mt-8 pt-6 border-t border-outline">
        <ol
          className="grid gap-3 [&_li]:border [&_li]:border-outline sm:grid-cols-2 md:grid-cols-4 [&_li]:p-5 [&_li]:bg-surface-container [&_li]:rounded-2xl [&_li]:flex [&_li]:flex-col [&_li]:gap-1">
          <li>
            <div
              className="font-mono font-semibold text-xs text-on-success-container bg-success-container border-succes/50 aspect-square w-8 inline-flex justify-center items-center rounded-full border">
              01</div>
            <h3 className="font-serif font-semibold text-secondary">
              Snap & Tag
            </h3>
            <p className="text-xs">Take a photo or quick audio of the issue and provide the street
              location.</p>
          </li>
          <li>
            <div
              className="font-mono font-semibold text-xs text-on-success-container bg-success-container border-succes/50 aspect-square w-8 inline-flex justify-center items-center rounded-full border">
              02</div>
            <h3 className="font-serif font-semibold text-secondary">
              Report Review
            </h3>
            <p className="text-xs">Take a photo or quick audio of the issue and provide the street
              location.</p>
          </li>
          <li>
            <div
              className="font-mono font-semibold text-xs text-on-success-container bg-success-container border-succes/50 aspect-square w-8 inline-flex justify-center items-center rounded-full border">

              03</div>
            <h3 className="font-serif font-semibold text-secondary">
              Field Fix
            </h3>
            <p className="text-xs">Take a photo or quick audio of the issue and provide the street
              location.</p>
          </li>
          <li>
            <div
              className="font-mono font-semibold text-xs text-on-success-container bg-success-container border-succes/50 aspect-square w-8 inline-flex justify-center items-center rounded-full border">

              04</div>
            <h3 className="font-serif font-semibold text-secondary">
              Proof & Close
            </h3>
            <p className="text-xs">Take a photo or quick audio of the issue and provide the street
              location.</p>
          </li>
        </ol>
      </section>
      <section className="mt-8 pt-6 border-t border-outline">
        <div className="flex items-end flex-wrap gap-2">
          <div className="grow">
            <h2 className="text-xl font-serif text-secondary font-semibold">Recent Community Reports</h2>
            <p className="text-xs">Verified reports lodged in Jakarta and surrounding regions</p>
          </div>
          <a href="/feed" className="text-xs flex flex-col font-semibold text-primary md:translate-y-4">
            View live feed →
          </a>
        </div>
        <ol
          className="mt-6 grid md:grid-cols-2 gap-4 [&_li]:grid [&_li]:gap-2 [&_li]:lg:grid-cols-[auto_1fr] [&_li]:p-4 [&_li]:rounded-2xl [&_li]:border [&_li]:border-outline [&_li]:max-w-96 [&_li]:lg:max-w-none [&_li]:mx-auto [&_li]:bg-surface-container [&_li>:first-child,&_li_img]:aspect-square [&_li>:first-child]:rounded-2xl [&_li>:first-child]:overflow-hidden [&_li>:first-child]:lg:max-w-24 [&_li_img]:w-full [&_li_img]:object-cover">
          <li>
            <div>
              <img src="/assets/r1.jpg" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex items-center text-xs  border px-2 font-semibold gap-1 py-1 bg-warning-container rounded-full text-on-warning-container border-on-warning-container/25">
                  <LuSearch />
                  In review
                </span>
                <span className="font-mono text-xs">
                  CMP-2026-8841
                </span>
              </div>

              <h3 className="font-serif font-semibold text-sm text-secondary">
                PAM clean drinking water pipeline burst flooding sidewalk in front of Cipete Raya MRT
              </h3>
              <p className="flex text-xs text-on-surface-low items-center">
                <LuMapPin />
                Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
              </p>

              <div className="flex items-center font-medium justify-between text-xs text-primary">
                <button
                  className="font-mono flex items-center gap-1 border border-outline px-2 py-1 rounded-full">
                  <LuThumbsUp />
                  <span className="sr-only">Give a like</span>
                  <span className="sr-only">Liked by 148 citizens</span>
                  <span aria-hidden="true">148</span>
                </button>
                <Link href="/report/x">
                  Inspect →
                </Link>
              </div>
            </div>
          </li>

          <li>
            <div>
              <img src="/assets/r1.jpg" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex items-center text-xs  border px-2 font-semibold gap-1 py-1 bg-warning-container rounded-full text-on-warning-container border-on-warning-container/25">
                  <LuSearch />
                  In review
                </span>
                <span className="font-mono text-xs">
                  CMP-2026-8841
                </span>
              </div>

              <h3 className="font-serif font-semibold text-sm text-secondary">
                PAM clean drinking water pipeline burst flooding sidewalk in front of Cipete Raya MRT
              </h3>
              <p className="flex text-xs text-on-surface-low items-center">
                <LuMapPin />
                Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
              </p>

              <div className="flex items-center font-medium justify-between text-xs text-primary">
                <button
                  className="font-mono flex items-center gap-1 border border-outline px-2 py-1 rounded-full">
                  <LuThumbsUp />
                  <span className="sr-only">Give a like</span>
                  <span className="sr-only">Liked by 148 citizens</span>
                  <span aria-hidden="true">148</span>
                </button>
                <Link href="/report/x">
                  Inspect →
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div>
              <img src="/assets/r1.jpg" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex items-center text-xs  border px-2 font-semibold gap-1 py-1 bg-warning-container rounded-full text-on-warning-container border-on-warning-container/25">
                  <LuSearch />
                  In review
                </span>
                <span className="font-mono text-xs">
                  CMP-2026-8841
                </span>
              </div>

              <h3 className="font-serif font-semibold text-sm text-secondary">
                PAM clean drinking water pipeline burst flooding sidewalk in front of Cipete Raya MRT
              </h3>
              <p className="flex text-xs text-on-surface-low items-center">
                <LuMapPin />
                Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
              </p>

              <div className="flex items-center font-medium justify-between text-xs text-primary">
                <button
                  className="font-mono flex items-center gap-1 border border-outline px-2 py-1 rounded-full">
                  <LuThumbsUp />
                  <span className="sr-only">Give a like</span>
                  <span className="sr-only">Liked by 148 citizens</span>
                  <span aria-hidden="true">148</span>
                </button>
                <Link href="/report/x">
                  Inspect →
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div>
              <img src="/assets/r1.jpg" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex items-center text-xs  border px-2 font-semibold gap-1 py-1 bg-warning-container rounded-full text-on-warning-container border-on-warning-container/25">
                  <LuSearch />
                  In review
                </span>
                <span className="font-mono text-xs">
                  CMP-2026-8841
                </span>
              </div>

              <h3 className="font-serif font-semibold text-sm text-secondary">
                PAM clean drinking water pipeline burst flooding sidewalk in front of Cipete Raya MRT
              </h3>
              <p className="flex text-xs text-on-surface-low items-center">
                <LuMapPin />
                Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
              </p>

              <div className="flex items-center font-medium justify-between text-xs text-primary">
                <button
                  className="font-mono flex items-center gap-1 border border-outline px-2 py-1 rounded-full">
                  <LuThumbsUp />
                  <span className="sr-only">Give a like</span>
                  <span className="sr-only">Liked by 148 citizens</span>
                  <span aria-hidden="true">148</span>
                </button>
                <Link href="/report/x">
                  Inspect →
                </Link>
              </div>
            </div>
          </li>
        </ol>
      </section>
    </main>
  )
}