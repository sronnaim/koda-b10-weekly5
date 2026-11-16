import { Link } from 'react-router'

export default function HomePage() {
  return (
    <main class="max-w-272 container grow mx-auto px-4">
      <section class="flex flex-col gap-6">
        <h1
          class="text-3xl max-w-[21ch] text-center md:text-start md:text-5xl mt-10 md:mt-16 font-serif text-secondary font-semibold">
          See something broken? Snap it. We push the city to fix it.
        </h1>
        <p class="max-w-[55ch] text-center md:text-start">Potholes, dark streetlights, PAM water leaks, or trash
          piles. Drop photos, track
          fixes like a food
          delivery order, and keep authorities accountable.</p>
        <div class="flex flex-wrap items-center gap-2">
          <a href="/report-an-issue.html"
            class="font-semibold flex items-center gap-2 py-2 px-4 bg-primary rounded-full text-on-primary">
            <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
              stroke="currentColor" fill="none">
              <path d=" M9.0625 2.5H5.9375L4.375 4.375H2.5C2.16848 4.375 1.85054 4.5067 1.61612 4.74112C1.3817
                        4.97554 1.25 5.29348 1.25 5.625V11.25C1.25 11.5815 1.3817 11.8995 1.61612 12.1339C1.85054
                        12.3683 2.16848 12.5 2.5 12.5H12.5C12.8315 12.5 13.1495 12.3683 13.3839 12.1339C13.6183 11.8995
                        13.75 11.5815 13.75 11.25V5.625C13.75 5.29348 13.6183 4.97554 13.3839 4.74112C13.1495 4.5067
                        12.8315 4.375 12.5 4.375H10.625L9.0625 2.5Z" />
              <path
                d="M10 8.125C10 9.50571 8.88071 10.625 7.5 10.625C6.11929 10.625 5 9.50571 5 8.125C5 6.74429 6.11929 5.625 7.5 5.625C8.88071 5.625 10 6.74429 10 8.125Z" />
            </svg>
            Snap a report
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
              stroke="currentColor">
              <path d="M3.125 7.5H11.875" />
              <path d="M7.5 3.125L11.875 7.5L7.5 11.875" />
            </svg>
          </a>

          <a href="/track.html"
            class="font-semibold flex items-center gap-2 py-2 px-4 rounded-full bg-surface-container text-secondary border border-outline">
            Track a case
          </a>
        </div>

        <ul
          class="flex flex-wrap font-mono font-normal [&_strong]:font-semibold [&_strong]:text-primary [&_li:first-child_strong]:text-secondary text-xs [&>*:not(:last-child)::after]:content-['·'] [&>*:not(:last-child)::after]:mr-2">
          <li className="flex gap-2"><strong>48</strong>reports today</li>
          <li className="flex gap-2"><strong>194</strong>fixed this week</li>
          <li className="flex gap-2"><strong>2.3</strong>days avg response</li>
        </ul>
      </section>
      <section class="mt-8 pt-6 border-t border-outline">
        <ol
          class="grid gap-3 [&_li]:border [&_li]:border-outline sm:grid-cols-2 md:grid-cols-4 [&_li]:p-5 [&_li]:bg-surface-container [&_li]:rounded-2xl [&_li]:flex [&_li]:flex-col [&_li]:gap-1">
          <li>
            <div
              class="font-mono font-semibold text-xs text-on-success-container bg-success-container border-succes/50 aspect-square w-8 inline-flex justify-center items-center rounded-full border">
              01</div>
            <h3 class="font-serif font-semibold text-secondary">
              Snap & Tag
            </h3>
            <p class="text-xs">Take a photo or quick audio of the issue and provide the street
              location.</p>
          </li>
          <li>
            <div
              class="font-mono font-semibold text-xs text-on-success-container bg-success-container border-succes/50 aspect-square w-8 inline-flex justify-center items-center rounded-full border">
              02</div>
            <h3 class="font-serif font-semibold text-secondary">
              Report Review
            </h3>
            <p class="text-xs">Take a photo or quick audio of the issue and provide the street
              location.</p>
          </li>
          <li>
            <div
              class="font-mono font-semibold text-xs text-on-success-container bg-success-container border-succes/50 aspect-square w-8 inline-flex justify-center items-center rounded-full border">

              03</div>
            <h3 class="font-serif font-semibold text-secondary">
              Field Fix
            </h3>
            <p class="text-xs">Take a photo or quick audio of the issue and provide the street
              location.</p>
          </li>
          <li>
            <div
              class="font-mono font-semibold text-xs text-on-success-container bg-success-container border-succes/50 aspect-square w-8 inline-flex justify-center items-center rounded-full border">

              04</div>
            <h3 class="font-serif font-semibold text-secondary">
              Proof & Close
            </h3>
            <p class="text-xs">Take a photo or quick audio of the issue and provide the street
              location.</p>
          </li>
        </ol>
      </section>
      <section class="mt-8 pt-6 border-t border-outline">
        <div class="flex items-end flex-wrap gap-2">
          <div class="grow">
            <h2 class="text-xl font-serif text-secondary font-semibold">Recent Community Reports</h2>
            <p class="text-xs">Verified reports lodged in Jakarta and surrounding regions</p>
          </div>
          <a href="/feed" class="text-xs flex flex-col font-semibold text-primary md:translate-y-4">
            View live feed →
          </a>
        </div>
        <ol
          class="mt-6 grid md:grid-cols-2 gap-4 [&_li]:grid [&_li]:gap-2 [&_li]:lg:grid-cols-[auto_1fr] [&_li]:p-4 [&_li]:rounded-2xl [&_li]:border [&_li]:border-outline [&_li]:max-w-96 [&_li]:lg:max-w-none [&_li]:mx-auto [&_li]:bg-surface-container [&_li>:first-child,&_li_img]:aspect-square [&_li>:first-child]:rounded-2xl [&_li>:first-child]:overflow-hidden [&_li>:first-child]:lg:max-w-24 [&_li_img]:w-full [&_li_img]:object-cover">
          <li>
            <div>
              <img src="/assets/r1.jpg" />
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-2">
                <span
                  class="inline-flex items-center text-xs  border px-2 font-semibold gap-1 py-1 bg-warning-container rounded-full text-on-warning-container border-on-warning-container/25">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path
                      d="M9 5.5C9 7.433 7.433 9 5.5 9C3.567 9 2 7.433 2 5.5C2 3.567 3.567 2 5.5 2C7.433 2 9 3.567 9 5.5Z"
                      stroke-linecap="round" stroke-linejoin="round" stroke="#96680F" />
                    <path d="M10.5 10.5L8.35 8.34998" stroke-linecap="round" stroke-linejoin="round"
                      stroke="#96680F" />
                  </svg>
                  In review
                </span>
                <span class="font-mono text-xs">
                  CMP-2026-8841
                </span>
              </div>

              <h3 class="font-serif font-semibold text-sm text-secondary">
                PAM clean drinking water pipeline burst flooding sidewalk in front of Cipete Raya MRT
              </h3>
              <p class="flex text-xs text-on-surface-low items-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-linecap="round"
                  stroke-linejoin="round" stroke="currentColor" class="shrink-0">
                  <path
                    d="M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z" />
                  <path
                    d="M7.5 5C7.5 5.82843 6.82843 6.5 6 6.5C5.17157 6.5 4.5 5.82843 4.5 5C4.5 4.17157 5.17157 3.5 6 3.5C6.82843 3.5 7.5 4.17157 7.5 5Z" />
                </svg>
                Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
              </p>

              <div class="flex items-center font-medium justify-between text-xs text-primary">
                <button
                  class="font-mono flex items-center gap-1 border border-outline px-2 py-1 rounded-full">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-linecap="round"
                    stroke-linejoin="round" stroke="currentColor">
                    <path d="M3.5 5V11" />
                    <path
                      d="M7.5 2.94L7 5H9.915C10.0702 5 10.2234 5.03614 10.3622 5.10557C10.5011 5.175 10.6219 5.2758 10.715 5.4C10.8081 5.5242 10.8711 5.66837 10.8989 5.82111C10.9266 5.97386 10.9185 6.13096 10.875 6.28L9.71 10.28C9.64942 10.4877 9.5231 10.6702 9.35 10.8C9.1769 10.9298 8.96637 11 8.75 11H2C1.73478 11 1.48043 10.8946 1.29289 10.7071C1.10536 10.5196 1 10.2652 1 10V6C1 5.73478 1.10536 5.48043 1.29289 5.29289C1.48043 5.10536 1.73478 5 2 5H3.38C3.56604 4.9999 3.74837 4.94791 3.90648 4.84986C4.06459 4.75181 4.19221 4.61161 4.275 4.445L6 1C6.23579 1.00292 6.46787 1.05908 6.6789 1.1643C6.88994 1.26951 7.07446 1.42105 7.2187 1.6076C7.36294 1.79415 7.46316 2.01088 7.51187 2.2416C7.56058 2.47232 7.55652 2.71107 7.5 2.94Z" />
                  </svg>
                  <span class="sr-only">Give a like</span>
                  <span class="sr-only">Liked by 148 citizens</span>
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
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-2">
                <span
                  class="inline-flex items-center text-xs  border px-2 font-semibold gap-1 py-1 bg-warning-container rounded-full text-on-warning-container border-on-warning-container/25">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path
                      d="M9 5.5C9 7.433 7.433 9 5.5 9C3.567 9 2 7.433 2 5.5C2 3.567 3.567 2 5.5 2C7.433 2 9 3.567 9 5.5Z"
                      stroke-linecap="round" stroke-linejoin="round" stroke="#96680F" />
                    <path d="M10.5 10.5L8.35 8.34998" stroke-linecap="round" stroke-linejoin="round"
                      stroke="#96680F" />
                  </svg>
                  In review
                </span>
                <span class="font-mono text-xs">
                  CMP-2026-8841
                </span>
              </div>

              <h3 class="font-serif font-semibold text-sm text-secondary">
                PAM clean drinking water pipeline burst flooding sidewalk in front of Cipete Raya MRT
              </h3>
              <p class="flex text-xs text-on-surface-low items-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-linecap="round"
                  stroke-linejoin="round" stroke="currentColor" class="shrink-0">
                  <path
                    d="M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z" />
                  <path
                    d="M7.5 5C7.5 5.82843 6.82843 6.5 6 6.5C5.17157 6.5 4.5 5.82843 4.5 5C4.5 4.17157 5.17157 3.5 6 3.5C6.82843 3.5 7.5 4.17157 7.5 5Z" />
                </svg>
                Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
              </p>

              <div class="flex items-center font-medium justify-between text-xs text-primary">
                <button
                  class="font-mono flex items-center gap-1 border border-outline px-2 py-1 rounded-full">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-linecap="round"
                    stroke-linejoin="round" stroke="currentColor">
                    <path d="M3.5 5V11" />
                    <path
                      d="M7.5 2.94L7 5H9.915C10.0702 5 10.2234 5.03614 10.3622 5.10557C10.5011 5.175 10.6219 5.2758 10.715 5.4C10.8081 5.5242 10.8711 5.66837 10.8989 5.82111C10.9266 5.97386 10.9185 6.13096 10.875 6.28L9.71 10.28C9.64942 10.4877 9.5231 10.6702 9.35 10.8C9.1769 10.9298 8.96637 11 8.75 11H2C1.73478 11 1.48043 10.8946 1.29289 10.7071C1.10536 10.5196 1 10.2652 1 10V6C1 5.73478 1.10536 5.48043 1.29289 5.29289C1.48043 5.10536 1.73478 5 2 5H3.38C3.56604 4.9999 3.74837 4.94791 3.90648 4.84986C4.06459 4.75181 4.19221 4.61161 4.275 4.445L6 1C6.23579 1.00292 6.46787 1.05908 6.6789 1.1643C6.88994 1.26951 7.07446 1.42105 7.2187 1.6076C7.36294 1.79415 7.46316 2.01088 7.51187 2.2416C7.56058 2.47232 7.55652 2.71107 7.5 2.94Z" />
                  </svg>
                  <span class="sr-only">Give a like</span>
                  <span class="sr-only">Liked by 148 citizens</span>
                  <span aria-hidden="true">148</span>
                </button>
                <a href="/report1.html">
                  Inspect →
                </a>
              </div>
            </div>
          </li>
          <li>
            <div>
              <img src="/assets/r1.jpg" />
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-2">
                <span
                  class="inline-flex items-center text-xs  border px-2 font-semibold gap-1 py-1 bg-warning-container rounded-full text-on-warning-container border-on-warning-container/25">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path
                      d="M9 5.5C9 7.433 7.433 9 5.5 9C3.567 9 2 7.433 2 5.5C2 3.567 3.567 2 5.5 2C7.433 2 9 3.567 9 5.5Z"
                      stroke-linecap="round" stroke-linejoin="round" stroke="#96680F" />
                    <path d="M10.5 10.5L8.35 8.34998" stroke-linecap="round" stroke-linejoin="round"
                      stroke="#96680F" />
                  </svg>
                  In review
                </span>
                <span class="font-mono text-xs">
                  CMP-2026-8841
                </span>
              </div>

              <h3 class="font-serif font-semibold text-sm text-secondary">
                PAM clean drinking water pipeline burst flooding sidewalk in front of Cipete Raya MRT
              </h3>
              <p class="flex text-xs text-on-surface-low items-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-linecap="round"
                  stroke-linejoin="round" stroke="currentColor" class="shrink-0">
                  <path
                    d="M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z" />
                  <path
                    d="M7.5 5C7.5 5.82843 6.82843 6.5 6 6.5C5.17157 6.5 4.5 5.82843 4.5 5C4.5 4.17157 5.17157 3.5 6 3.5C6.82843 3.5 7.5 4.17157 7.5 5Z" />
                </svg>
                Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
              </p>

              <div class="flex items-center font-medium justify-between text-xs text-primary">
                <button
                  class="font-mono flex items-center gap-1 border border-outline px-2 py-1 rounded-full">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-linecap="round"
                    stroke-linejoin="round" stroke="currentColor">
                    <path d="M3.5 5V11" />
                    <path
                      d="M7.5 2.94L7 5H9.915C10.0702 5 10.2234 5.03614 10.3622 5.10557C10.5011 5.175 10.6219 5.2758 10.715 5.4C10.8081 5.5242 10.8711 5.66837 10.8989 5.82111C10.9266 5.97386 10.9185 6.13096 10.875 6.28L9.71 10.28C9.64942 10.4877 9.5231 10.6702 9.35 10.8C9.1769 10.9298 8.96637 11 8.75 11H2C1.73478 11 1.48043 10.8946 1.29289 10.7071C1.10536 10.5196 1 10.2652 1 10V6C1 5.73478 1.10536 5.48043 1.29289 5.29289C1.48043 5.10536 1.73478 5 2 5H3.38C3.56604 4.9999 3.74837 4.94791 3.90648 4.84986C4.06459 4.75181 4.19221 4.61161 4.275 4.445L6 1C6.23579 1.00292 6.46787 1.05908 6.6789 1.1643C6.88994 1.26951 7.07446 1.42105 7.2187 1.6076C7.36294 1.79415 7.46316 2.01088 7.51187 2.2416C7.56058 2.47232 7.55652 2.71107 7.5 2.94Z" />
                  </svg>
                  <span class="sr-only">Give a like</span>
                  <span class="sr-only">Liked by 148 citizens</span>
                  <span aria-hidden="true">148</span>
                </button>
                <a href="/report1.html">
                  Inspect →
                </a>
              </div>
            </div>
          </li>
          <li>
            <div>
              <img src="/assets/r1.jpg" />
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-2">
                <span
                  class="inline-flex items-center text-xs  border px-2 font-semibold gap-1 py-1 bg-warning-container rounded-full text-on-warning-container border-on-warning-container/25">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path
                      d="M9 5.5C9 7.433 7.433 9 5.5 9C3.567 9 2 7.433 2 5.5C2 3.567 3.567 2 5.5 2C7.433 2 9 3.567 9 5.5Z"
                      stroke-linecap="round" stroke-linejoin="round" stroke="#96680F" />
                    <path d="M10.5 10.5L8.35 8.34998" stroke-linecap="round" stroke-linejoin="round"
                      stroke="#96680F" />
                  </svg>
                  In review
                </span>
                <span class="font-mono text-xs">
                  CMP-2026-8841
                </span>
              </div>

              <h3 class="font-serif font-semibold text-sm text-secondary">
                PAM clean drinking water pipeline burst flooding sidewalk in front of Cipete Raya MRT
              </h3>
              <p class="flex text-xs text-on-surface-low items-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-linecap="round"
                  stroke-linejoin="round" stroke="currentColor" class="shrink-0">
                  <path
                    d="M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z" />
                  <path
                    d="M7.5 5C7.5 5.82843 6.82843 6.5 6 6.5C5.17157 6.5 4.5 5.82843 4.5 5C4.5 4.17157 5.17157 3.5 6 3.5C6.82843 3.5 7.5 4.17157 7.5 5Z" />
                </svg>
                Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
              </p>

              <div class="flex items-center font-medium justify-between text-xs text-primary">
                <button
                  class="font-mono flex items-center gap-1 border border-outline px-2 py-1 rounded-full">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-linecap="round"
                    stroke-linejoin="round" stroke="currentColor">
                    <path d="M3.5 5V11" />
                    <path
                      d="M7.5 2.94L7 5H9.915C10.0702 5 10.2234 5.03614 10.3622 5.10557C10.5011 5.175 10.6219 5.2758 10.715 5.4C10.8081 5.5242 10.8711 5.66837 10.8989 5.82111C10.9266 5.97386 10.9185 6.13096 10.875 6.28L9.71 10.28C9.64942 10.4877 9.5231 10.6702 9.35 10.8C9.1769 10.9298 8.96637 11 8.75 11H2C1.73478 11 1.48043 10.8946 1.29289 10.7071C1.10536 10.5196 1 10.2652 1 10V6C1 5.73478 1.10536 5.48043 1.29289 5.29289C1.48043 5.10536 1.73478 5 2 5H3.38C3.56604 4.9999 3.74837 4.94791 3.90648 4.84986C4.06459 4.75181 4.19221 4.61161 4.275 4.445L6 1C6.23579 1.00292 6.46787 1.05908 6.6789 1.1643C6.88994 1.26951 7.07446 1.42105 7.2187 1.6076C7.36294 1.79415 7.46316 2.01088 7.51187 2.2416C7.56058 2.47232 7.55652 2.71107 7.5 2.94Z" />
                  </svg>
                  <span class="sr-only">Give a like</span>
                  <span class="sr-only">Liked by 148 citizens</span>
                  <span aria-hidden="true">148</span>
                </button>
                <a href="/report1.html">
                  Inspect →
                </a>
              </div>
            </div>
          </li>
        </ol>
      </section>
    </main>
  )
}