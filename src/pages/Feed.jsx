import { Link } from 'react-router'

export default function Feed() {
  return (
    <main class="max-w-272 container grow mx-auto px-4 mt-10 md:mt-16">
      <div>
        <div>
          <hgroup
            class="*:first:text-xs *:first:text-on-surface-low *:first:font-mono *:first:font-medium *:first:uppercase *:last:font-serif *:last:text-secondary *:last:font-semibold *:last:text-4xl *:last:mt-2">
            <p>Public Incident Registry</p>
            <h1>Community Report & Fixes</h1>
          </hgroup>
          <div class="flex flex-wrap gap-6 justify-between items-end">
            <p class="mt-2 text-sm md:max-w-[60ch]">
              Open incident feed in Jakarta and surrounding urban regions. Public visitors may browse; sign in
              to interact.
            </p>
            <div
              class="font-medium [&,&_button]:flex p-1 *:px-3 *:py-1 [&,&_button]:rounded-full [&,&_button]:items-center *:gap-2 *:data-active:bg-primary *:data-active:text-on-primary flex-wrap justify-between bg-surface-container border border-outline">
              <button data-active="true">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-width="1.08333"
                  stroke-linecap="round" stroke-linejoin="round" stroke="currentColor">
                  <path d="M4.33325 3.25H11.3749" />
                  <path d="M4.33325 6.5H11.3749" />
                  <path d="M4.33325 9.75H11.3749" />
                  <path d="M1.625 3.25H1.63042" />
                  <path d="M1.625 6.5H1.63042" />
                  <path d="M1.625 9.75H1.63042" />
                </svg>
                Feed
              </button>
              <button>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-width="1.08333"
                  stroke-linecap="round" stroke-linejoin="round" stroke="currentColor">
                  <path
                    d="M0.541748 3.24998V11.9166L4.33341 9.74998L8.66675 11.9166L12.4584 9.74998V1.08331L8.66675 3.24998L4.33341 1.08331L0.541748 3.24998Z" />
                  <path d="M4.33325 1.08331V9.74998" />
                  <path d="M8.66675 3.25V11.9167" />
                </svg>
                Map
              </button>
            </div>
          </div>
        </div>
        <search class="mt-6">
          <form action="feed" class="flex flex-col gap-4">
            <div
              class="bg-surface-container max-w-110 px-3 py-2 rounded-xl border border-outline gap-3 flex flex-row-reverse items-center [&:has(input:focus)]:shadow-[0_0_0_3px_black] [&:has(input:focus)]:shadow-primary/50">
              <input type="search" name="search"
                class="grow focus:shadow-none! focus:border-none rounded-none!"
                placeholder="Search by street name, complaint ID, or keyword..." />
              <button class="text-on-surface">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-width="1.25"
                  stroke-linecap="round" stroke-linejoin="round" stroke="currentColor">
                  <path
                    d="M11.25 6.875C11.25 9.29125 9.29125 11.25 6.875 11.25C4.45875 11.25 2.5 9.29125 2.5 6.875C2.5 4.45875 4.45875 2.5 6.875 2.5C9.29125 2.5 11.25 4.45875 11.25 6.875Z" />
                  <path d="M13.125 13.125L10.4375 10.4375" />
                </svg>
              </button>
            </div>

            <fieldset
              class="flex gap-2 flex-wrap [&_label]:px-4 [&_label]:py-2 [&_label]:flex [&_label]:items-center [&_label_input]:hidden [&_label]:gap-2 [&_label]:font-medium [&_label]:text-xs [&_label]:border [&_label]:border-outline [&_label]:rounded-full [&_label]:bg-surface-container [&_label:has(input:checked)]:bg-primary [&_label:has(input:checked)]:text-on-primary">
              <legend class="sr-only">Category</legend>
              <label>
                <input type="radio" name="cat" />
                <span>All Issues (6)</span>
              </label>
              <label>
                <input type="radio" name="cat" />
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                  xmlns="http://www.w3.org/2000/svg" stroke-width="1.16667" stroke-linecap="round"
                  stroke-linejoin="round" stroke="currentColor">
                  <path
                    d="M6.00245 2.25166L1.06162 10.5C0.959749 10.6764 0.905848 10.8764 0.905278 11.0801C0.904708 11.2838 0.957487 11.4842 1.05837 11.6611C1.15925 11.8381 1.30471 11.9856 1.48028 12.0889C1.65585 12.1922 1.85542 12.2478 2.05912 12.25H11.9408C12.1445 12.2478 12.344 12.1922 12.5196 12.0889C12.6952 11.9856 12.8407 11.8381 12.9415 11.6611C13.0424 11.4842 13.0952 11.2838 13.0946 11.0801C13.0941 10.8764 13.0402 10.6764 12.9383 10.5L7.99745 2.25166C7.89346 2.08023 7.74704 1.93848 7.57231 1.84011C7.39759 1.74174 7.20046 1.69006 6.99995 1.69006C6.79944 1.69006 6.60231 1.74174 6.42759 1.84011C6.25286 1.93848 6.10644 2.08023 6.00245 2.25166Z" />
                  <path d="M7 5.25V7.58333" />
                  <path d="M7 9.91669H7.00583" />
                </svg>

                <span>Roads & Transit</span>
              </label>
              <label>
                <input type="radio" name="cat" />
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                  xmlns="http://www.w3.org/2000/svg" stroke-width="1.16667" stroke-linecap="round"
                  stroke-linejoin="round" stroke="currentColor">
                  <path
                    d="M7.00004 1.57501L3.32504 5.25001C2.78589 5.93892 2.45123 6.76551 2.35925 7.63546C2.26726 8.50542 2.42166 9.38371 2.80482 10.1701C3.18799 10.9566 3.78449 11.6195 4.52627 12.0832C5.26805 12.5469 6.12524 12.7928 7.00004 12.7928C7.87485 12.7928 8.73204 12.5469 9.47382 12.0832C10.2156 11.6195 10.8121 10.9566 11.1953 10.1701C11.5784 9.38371 11.7328 8.50542 11.6408 7.63546C11.5489 6.76551 11.2142 5.93892 10.675 5.25001L7.00004 1.57501Z" />
                </svg>
                <span>Water & Sewage</span>
              </label>
              <label>
                <input type="radio" name="cat" />
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                  xmlns="http://www.w3.org/2000/svg" stroke-width="1.16667" stroke-linecap="round"
                  stroke-linejoin="round" stroke="currentColor">
                  <path
                    d="M9.33329 7.00002C9.33329 8.28868 8.28862 9.33335 6.99996 9.33335C5.71129 9.33335 4.66663 8.28868 4.66663 7.00002C4.66663 5.71136 5.71129 4.66669 6.99996 4.66669C8.28862 4.66669 9.33329 5.71136 9.33329 7.00002Z" />
                  <path d="M7 1.16669V2.33335" />
                  <path d="M7 11.6667V12.8334" />
                  <path d="M2.85828 2.85834L3.67494 3.675" />
                  <path d="M10.325 10.325L11.1416 11.1417" />
                  <path d="M1.16663 7H2.33329" />
                  <path d="M11.6666 7H12.8333" />
                  <path d="M3.67494 10.325L2.85828 11.1417" />
                  <path d="M11.1416 2.85834L10.325 3.675" />
                </svg>
                <span>Street Lighting</span>
              </label>
              <label>
                <input type="radio" name="cat" />
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                  xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                  <g clip-path="url(#clip0_2_255)">
                    <path d="M1.75 3.5H12.25" stroke-width="1.16667" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path
                      d="M11.0833 3.5L10.5 11.6667C10.5 11.9761 10.377 12.2728 10.1582 12.4916C9.93946 12.7104 9.64271 12.8333 9.33329 12.8333H4.66663C4.35721 12.8333 4.06046 12.7104 3.84167 12.4916C3.62288 12.2728 3.49996 11.9761 3.49996 11.6667L2.91663 3.5" />
                    <path d="M5.83337 6.41669V9.91669" />
                    <path d="M8.16663 6.41669V9.91669" />
                    <path
                      d="M5.25 3.5V2.33333C5.25 2.17862 5.31146 2.03025 5.42085 1.92085C5.53025 1.81146 5.67862 1.75 5.83333 1.75H8.16667C8.32138 1.75 8.46975 1.81146 8.57915 1.92085C8.68854 2.03025 8.75 2.17862 8.75 2.33333V3.5" />
                  </g>
                </svg>
                <span>Sanitation & Waste</span>
              </label>
              <label>
                <input type="radio" name="cat" />
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                  xmlns="http://www.w3.org/2000/svg" stroke-width="1.16667" stroke-linecap="round"
                  stroke-linejoin="round" stroke="currentColor">
                  <path d="M7 1.16669L4.375 4.95835H9.625L7 1.16669Z" />
                  <path d="M7 4.08331L3.5 8.74998H10.5L7 4.08331Z" />
                  <path d="M7 8.75V12.8333" />
                </svg>
                <span>Public Parks & Trees</span>
              </label>
              <label>
                <input type="radio" name="cat" />
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                  xmlns="http://www.w3.org/2000/svg" stroke-width="1.16667" stroke-linecap="round"
                  stroke-linejoin="round" stroke="currentColor">
                  <path
                    d="M6.41675 2.91669L3.50008 5.25002H1.16675V8.75002H3.50008L6.41675 11.0834V2.91669Z" />
                  <path
                    d="M9.04175 4.95831C9.34624 5.20438 9.59183 5.51543 9.76055 5.8687C9.92927 6.22196 10.0168 6.60849 10.0168 6.99998C10.0168 7.39147 9.92927 7.778 9.76055 8.13126C9.59183 8.48453 9.34624 8.79558 9.04175 9.04165" />
                  <path
                    d="M10.7917 3.20831C11.3441 3.67375 11.7881 4.25423 12.0927 4.90917C12.3972 5.56411 12.555 6.27768 12.555 6.99998C12.555 7.72227 12.3972 8.43585 12.0927 9.09079C11.7881 9.74573 11.3441 10.3262 10.7917 10.7916" />
                </svg>
                <span>Noise & Disturbance</span>
              </label>
              <label>
                <input type="radio" name="cat" />
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                  xmlns="http://www.w3.org/2000/svg" stroke-width="1.16667" stroke-linecap="round"
                  stroke-linejoin="round" stroke="currentColor">
                  <path d="M1.75 12.25H12.25" />
                  <path d="M2.91663 12.25V3.5L6.99996 1.75V12.25" stroke-width="1.16667"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M11.0833 12.25V5.83331L7 4.08331" />
                  <path d="M4.66663 4.66669H5.24996" />
                  <path d="M4.66663 7H5.24996" />
                  <path d="M4.66663 9.33331H5.24996" />
                  <path d="M8.75 6.41669H9.33333" />
                  <path d="M8.75 8.75H9.33333" />
                </svg>
                <span>Building & Zoning</span>
              </label>
            </fieldset>
            <div class="flex flex-wrap gap-4 items-center justify-between">
              <fieldset
                class="w-fit flex text-xs flex-wrap bg-surface-container border border-outline rounded-full items-center px-3 py-1 [&_input]:hidden gap-2 [&_label]:rounded-full [&_label]:px-3 [&_label]:py-1 [&_label:has(input:checked)]:bg-primary [&_label:has(input:checked)]:text-on-primary [&_label:has(input:checked)]:font-medium">
                <legend
                  class="float-left text-2xs font-mono uppercase text-on-surface-low font-light">
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
                class="flex items-center text-xs gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline">
                <input type="checkbox" name="proof" id="proof" />
                <label for="proof">With photos/proof only</label>
              </div>
            </div>
          </form>
        </search>
        <ol class="bg-surface-container rounded-2xl overflow-hidden border border-outline mt-6 grid">
          <li class="flex items-center gap-4 p-4">
            <div class="max-w-19 aspect-square rounded-xl overflow-hidden *:aspect-square *:object-cover">
              <img src="/assets/r1.jpg" />
            </div>
            <div class="flex flex-col gap-2 grow">
              <div class="flex flex-wrap items-center gap-1">
                <span
                  class="inline-flex items-center text-xs border px-2 font-semibold gap-1 py-1 rounded-full bg-warning-container text-on-warning-container border-on-warning-container/25">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 5.5C9 7.433 7.433 9 5.5 9C3.567 9 2 7.433 2 5.5C2 3.567 3.567 2 5.5 2C7.433 2 9 3.567 9 5.5Z"
                      stroke-linecap="round" stroke-linejoin="round" stroke="#96680F" />
                    <path d="M10.5 10.5L8.34998 8.34998" stroke-linecap="round" stroke-linejoin="round"
                      stroke="#96680F" />
                  </svg>
                  <span>In review</span>
                </span>
                <span class="font-mono text-xs uppercase text-on-surface-low">
                  CMP-2026-8841
                </span>
                <span class="font-mono text-xs uppercase text-on-surface-low">
                  ·
                </span>
                <span class="font-semibold text-xs text-secondary">
                  Perumda PAM JAYA (Clean Drinking Water)
                </span>
              </div>
              <div class="flex flex-wrap gap-2 items-center justify-between">
                <div class="flex flex-col gap-2">
                  <h2 class="text-sm font-semibold text-secondary">PAM clean drinking water pipeline burst
                    flooding
                    sidewalk in
                    front
                    of Cipete Raya MRT</h2>
                  <p class="flex items-center text-xs gap-2 text-on-surface-low">
                    <span class="flex">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-linecap="round"
                        stroke-linejoin="round" stroke="currentColor" class="text-primary shrink-0">
                        <path
                          d="M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z" />
                        <path
                          d="M7.5 5C7.5 5.82843 6.82843 6.5 6 6.5C5.17157 6.5 4.5 5.82843 4.5 5C4.5 4.17157 5.17157 3.5 6 3.5C6.82843 3.5 7.5 4.17157 7.5 5Z" />
                      </svg>
                      Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
                    </span>
                    <span class="font-mono text-xs uppercase text-on-surface-low">
                      ·
                    </span>
                    <span>
                      Water & Sewage
                    </span>
                  </p>
                </div>
                <div class="flex flex-wrap items-center gap-3 font-mono [&_svg]:text-primary text-xs">
                  <button
                    class="flex items-center gap-2 font-mono border text-xs border-outline rounded-full px-2 py-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-linecap="round"
                      stroke-linejoin="round" stroke="currentColor">
                      <path d="M3.5 5V11" />
                      <path
                        d="M7.5 2.94L7 5H9.915C10.0702 5 10.2234 5.03614 10.3622 5.10557C10.5011 5.175 10.6219 5.2758 10.715 5.4C10.8081 5.5242 10.8711 5.66837 10.8989 5.82111C10.9266 5.97386 10.9185 6.13096 10.875 6.28L9.71 10.28C9.64942 10.4877 9.5231 10.6702 9.35 10.8C9.1769 10.9298 8.96637 11 8.75 11H2C1.73478 11 1.48043 10.8946 1.29289 10.7071C1.10536 10.5196 1 10.2652 1 10V6C1 5.73478 1.10536 5.48043 1.29289 5.29289C1.48043 5.10536 1.73478 5 2 5H3.38C3.56604 4.9999 3.74837 4.94791 3.90648 4.84986C4.06459 4.75181 4.19221 4.61161 4.275 4.445L6 1C6.23579 1.00292 6.46787 1.05908 6.6789 1.1643C6.88994 1.26951 7.07446 1.42105 7.2187 1.6076C7.36294 1.79415 7.46316 2.01088 7.51187 2.2416C7.56058 2.47232 7.55652 2.71107 7.5 2.94Z" />
                    </svg>
                    <span class="sr-only">Give a like</span>
                    <span class="sr-only">Liked by 148 citizens</span>
                    <span aria-hidden="true" class="text-on-surface">148</span>
                  </button>
                  <span class="flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg" stroke-linecap="round"
                      stroke-linejoin="round" stroke="currentColor">
                      <path
                        d="M7 1H3C2.73478 1 2.48043 1.10536 2.29289 1.29289C2.10536 1.48043 2 1.73478 2 2V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H9C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V4L7 1Z" />
                      <path d="M7 1V4H10" />
                      <path d="M8 6.5H4" />
                      <path d="M8 8.5H4" />
                      <path d="M5 4.5H4" />
                    </svg>
                    <span>2 proofs</span>
                  </span>
                  <span>Oct 9</span>
                  <Link to="/report1" class="text-primary font-semibold font-sans">Track
                    → </Link>
                </div>
              </div>
            </div>
          </li>
          <li class="flex items-center gap-4 p-4">
            <div class="max-w-19 aspect-square rounded-xl overflow-hidden *:aspect-square *:object-cover">
              <img src="/assets/r1.jpg" />
            </div>
            <div class="flex flex-col gap-2 grow">
              <div class="flex flex-wrap items-center gap-1">
                <span
                  class="inline-flex items-center text-xs border px-2 font-semibold gap-1 py-1 rounded-full bg-warning-container text-on-warning-container border-on-warning-container/25">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 5.5C9 7.433 7.433 9 5.5 9C3.567 9 2 7.433 2 5.5C2 3.567 3.567 2 5.5 2C7.433 2 9 3.567 9 5.5Z"
                      stroke-linecap="round" stroke-linejoin="round" stroke="#96680F" />
                    <path d="M10.5 10.5L8.34998 8.34998" stroke-linecap="round" stroke-linejoin="round"
                      stroke="#96680F" />
                  </svg>
                  <span>In review</span>
                </span>
                <span class="font-mono text-xs uppercase text-on-surface-low">
                  CMP-2026-8841
                </span>
                <span class="font-mono text-xs uppercase text-on-surface-low">
                  ·
                </span>
                <span class="font-semibold text-xs text-secondary">
                  Perumda PAM JAYA (Clean Drinking Water)
                </span>
              </div>
              <div class="flex flex-wrap gap-2 items-center justify-between">
                <div class="flex flex-col gap-2">
                  <h2 class="text-sm font-semibold text-secondary">PAM clean drinking water pipeline burst
                    flooding
                    sidewalk in
                    front
                    of Cipete Raya MRT</h2>
                  <p class="flex items-center text-xs gap-2 text-on-surface-low">
                    <span class="flex">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-linecap="round"
                        stroke-linejoin="round" stroke="currentColor" class="text-primary shrink-0">
                        <path
                          d="M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z" />
                        <path
                          d="M7.5 5C7.5 5.82843 6.82843 6.5 6 6.5C5.17157 6.5 4.5 5.82843 4.5 5C4.5 4.17157 5.17157 3.5 6 3.5C6.82843 3.5 7.5 4.17157 7.5 5Z" />
                      </svg>
                      Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
                    </span>
                    <span class="font-mono text-xs uppercase text-on-surface-low">
                      ·
                    </span>
                    <span>
                      Water & Sewage
                    </span>
                  </p>
                </div>
                <div class="flex flex-wrap items-center gap-3 font-mono [&_svg]:text-primary text-xs">
                  <button
                    class="flex items-center gap-2 font-mono border text-xs border-outline rounded-full px-2 py-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-linecap="round"
                      stroke-linejoin="round" stroke="currentColor">
                      <path d="M3.5 5V11" />
                      <path
                        d="M7.5 2.94L7 5H9.915C10.0702 5 10.2234 5.03614 10.3622 5.10557C10.5011 5.175 10.6219 5.2758 10.715 5.4C10.8081 5.5242 10.8711 5.66837 10.8989 5.82111C10.9266 5.97386 10.9185 6.13096 10.875 6.28L9.71 10.28C9.64942 10.4877 9.5231 10.6702 9.35 10.8C9.1769 10.9298 8.96637 11 8.75 11H2C1.73478 11 1.48043 10.8946 1.29289 10.7071C1.10536 10.5196 1 10.2652 1 10V6C1 5.73478 1.10536 5.48043 1.29289 5.29289C1.48043 5.10536 1.73478 5 2 5H3.38C3.56604 4.9999 3.74837 4.94791 3.90648 4.84986C4.06459 4.75181 4.19221 4.61161 4.275 4.445L6 1C6.23579 1.00292 6.46787 1.05908 6.6789 1.1643C6.88994 1.26951 7.07446 1.42105 7.2187 1.6076C7.36294 1.79415 7.46316 2.01088 7.51187 2.2416C7.56058 2.47232 7.55652 2.71107 7.5 2.94Z" />
                    </svg>
                    <span class="sr-only">Give a like</span>
                    <span class="sr-only">Liked by 148 citizens</span>
                    <span aria-hidden="true" class="text-on-surface">148</span>
                  </button>
                  <span class="flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg" stroke-linecap="round"
                      stroke-linejoin="round" stroke="currentColor">
                      <path
                        d="M7 1H3C2.73478 1 2.48043 1.10536 2.29289 1.29289C2.10536 1.48043 2 1.73478 2 2V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H9C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V4L7 1Z" />
                      <path d="M7 1V4H10" />
                      <path d="M8 6.5H4" />
                      <path d="M8 8.5H4" />
                      <path d="M5 4.5H4" />
                    </svg>
                    <span>2 proofs</span>
                  </span>
                  <span>Oct 9</span>
                  <Link to="/report1" class="text-primary font-semibold font-sans">Track
                    → </Link>
                </div>
              </div>
            </div>
          </li>
          <li class="flex items-center gap-4 p-4">
            <div class="max-w-19 aspect-square rounded-xl overflow-hidden *:aspect-square *:object-cover">
              <img src="/assets/r1.jpg" />
            </div>
            <div class="flex flex-col gap-2 grow">
              <div class="flex flex-wrap items-center gap-1">
                <span
                  class="inline-flex items-center text-xs border px-2 font-semibold gap-1 py-1 rounded-full bg-warning-container text-on-warning-container border-on-warning-container/25">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 5.5C9 7.433 7.433 9 5.5 9C3.567 9 2 7.433 2 5.5C2 3.567 3.567 2 5.5 2C7.433 2 9 3.567 9 5.5Z"
                      stroke-linecap="round" stroke-linejoin="round" stroke="#96680F" />
                    <path d="M10.5 10.5L8.34998 8.34998" stroke-linecap="round" stroke-linejoin="round"
                      stroke="#96680F" />
                  </svg>
                  <span>In review</span>
                </span>
                <span class="font-mono text-xs uppercase text-on-surface-low">
                  CMP-2026-8841
                </span>
                <span class="font-mono text-xs uppercase text-on-surface-low">
                  ·
                </span>
                <span class="font-semibold text-xs text-secondary">
                  Perumda PAM JAYA (Clean Drinking Water)
                </span>
              </div>
              <div class="flex flex-wrap gap-2 items-center justify-between">
                <div class="flex flex-col gap-2">
                  <h2 class="text-sm font-semibold text-secondary">PAM clean drinking water pipeline burst
                    flooding
                    sidewalk in
                    front
                    of Cipete Raya MRT</h2>
                  <p class="flex items-center text-xs gap-2 text-on-surface-low">
                    <span class="flex">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-linecap="round"
                        stroke-linejoin="round" stroke="currentColor" class="text-primary shrink-0">
                        <path
                          d="M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z" />
                        <path
                          d="M7.5 5C7.5 5.82843 6.82843 6.5 6 6.5C5.17157 6.5 4.5 5.82843 4.5 5C4.5 4.17157 5.17157 3.5 6 3.5C6.82843 3.5 7.5 4.17157 7.5 5Z" />
                      </svg>
                      Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
                    </span>
                    <span class="font-mono text-xs uppercase text-on-surface-low">
                      ·
                    </span>
                    <span>
                      Water & Sewage
                    </span>
                  </p>
                </div>
                <div class="flex flex-wrap items-center gap-3 font-mono [&_svg]:text-primary text-xs">
                  <button
                    class="flex items-center gap-2 font-mono border text-xs border-outline rounded-full px-2 py-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-linecap="round"
                      stroke-linejoin="round" stroke="currentColor">
                      <path d="M3.5 5V11" />
                      <path
                        d="M7.5 2.94L7 5H9.915C10.0702 5 10.2234 5.03614 10.3622 5.10557C10.5011 5.175 10.6219 5.2758 10.715 5.4C10.8081 5.5242 10.8711 5.66837 10.8989 5.82111C10.9266 5.97386 10.9185 6.13096 10.875 6.28L9.71 10.28C9.64942 10.4877 9.5231 10.6702 9.35 10.8C9.1769 10.9298 8.96637 11 8.75 11H2C1.73478 11 1.48043 10.8946 1.29289 10.7071C1.10536 10.5196 1 10.2652 1 10V6C1 5.73478 1.10536 5.48043 1.29289 5.29289C1.48043 5.10536 1.73478 5 2 5H3.38C3.56604 4.9999 3.74837 4.94791 3.90648 4.84986C4.06459 4.75181 4.19221 4.61161 4.275 4.445L6 1C6.23579 1.00292 6.46787 1.05908 6.6789 1.1643C6.88994 1.26951 7.07446 1.42105 7.2187 1.6076C7.36294 1.79415 7.46316 2.01088 7.51187 2.2416C7.56058 2.47232 7.55652 2.71107 7.5 2.94Z" />
                    </svg>
                    <span class="sr-only">Give a like</span>
                    <span class="sr-only">Liked by 148 citizens</span>
                    <span aria-hidden="true" class="text-on-surface">148</span>
                  </button>
                  <span class="flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg" stroke-linecap="round"
                      stroke-linejoin="round" stroke="currentColor">
                      <path
                        d="M7 1H3C2.73478 1 2.48043 1.10536 2.29289 1.29289C2.10536 1.48043 2 1.73478 2 2V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H9C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V4L7 1Z" />
                      <path d="M7 1V4H10" />
                      <path d="M8 6.5H4" />
                      <path d="M8 8.5H4" />
                      <path d="M5 4.5H4" />
                    </svg>
                    <span>2 proofs</span>
                  </span>
                  <span>Oct 9</span>
                  <Link to="/report1" class="text-primary font-semibold font-sans">Track
                    → </Link>
                </div>
              </div>
            </div>
          </li>
          <li class="flex items-center gap-4 p-4">
            <div class="max-w-19 aspect-square rounded-xl overflow-hidden *:aspect-square *:object-cover">
              <img src="/assets/r1.jpg" />
            </div>
            <div class="flex flex-col gap-2 grow">
              <div class="flex flex-wrap items-center gap-1">
                <span
                  class="inline-flex items-center text-xs border px-2 font-semibold gap-1 py-1 rounded-full bg-warning-container text-on-warning-container border-on-warning-container/25">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 5.5C9 7.433 7.433 9 5.5 9C3.567 9 2 7.433 2 5.5C2 3.567 3.567 2 5.5 2C7.433 2 9 3.567 9 5.5Z"
                      stroke-linecap="round" stroke-linejoin="round" stroke="#96680F" />
                    <path d="M10.5 10.5L8.34998 8.34998" stroke-linecap="round" stroke-linejoin="round"
                      stroke="#96680F" />
                  </svg>
                  <span>In review</span>
                </span>
                <span class="font-mono text-xs uppercase text-on-surface-low">
                  CMP-2026-8841
                </span>
                <span class="font-mono text-xs uppercase text-on-surface-low">
                  ·
                </span>
                <span class="font-semibold text-xs text-secondary">
                  Perumda PAM JAYA (Clean Drinking Water)
                </span>
              </div>
              <div class="flex flex-wrap gap-2 items-center justify-between">
                <div class="flex flex-col gap-2">
                  <h2 class="text-sm font-semibold text-secondary">PAM clean drinking water pipeline burst
                    flooding
                    sidewalk in
                    front
                    of Cipete Raya MRT</h2>
                  <p class="flex items-center text-xs gap-2 text-on-surface-low">
                    <span class="flex">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-linecap="round"
                        stroke-linejoin="round" stroke="currentColor" class="text-primary shrink-0">
                        <path
                          d="M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z" />
                        <path
                          d="M7.5 5C7.5 5.82843 6.82843 6.5 6 6.5C5.17157 6.5 4.5 5.82843 4.5 5C4.5 4.17157 5.17157 3.5 6 3.5C6.82843 3.5 7.5 4.17157 7.5 5Z" />
                      </svg>
                      Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
                    </span>
                    <span class="font-mono text-xs uppercase text-on-surface-low">
                      ·
                    </span>
                    <span>
                      Water & Sewage
                    </span>
                  </p>
                </div>
                <div class="flex flex-wrap items-center gap-3 font-mono [&_svg]:text-primary text-xs">
                  <button
                    class="flex items-center gap-2 font-mono border text-xs border-outline rounded-full px-2 py-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-linecap="round"
                      stroke-linejoin="round" stroke="currentColor">
                      <path d="M3.5 5V11" />
                      <path
                        d="M7.5 2.94L7 5H9.915C10.0702 5 10.2234 5.03614 10.3622 5.10557C10.5011 5.175 10.6219 5.2758 10.715 5.4C10.8081 5.5242 10.8711 5.66837 10.8989 5.82111C10.9266 5.97386 10.9185 6.13096 10.875 6.28L9.71 10.28C9.64942 10.4877 9.5231 10.6702 9.35 10.8C9.1769 10.9298 8.96637 11 8.75 11H2C1.73478 11 1.48043 10.8946 1.29289 10.7071C1.10536 10.5196 1 10.2652 1 10V6C1 5.73478 1.10536 5.48043 1.29289 5.29289C1.48043 5.10536 1.73478 5 2 5H3.38C3.56604 4.9999 3.74837 4.94791 3.90648 4.84986C4.06459 4.75181 4.19221 4.61161 4.275 4.445L6 1C6.23579 1.00292 6.46787 1.05908 6.6789 1.1643C6.88994 1.26951 7.07446 1.42105 7.2187 1.6076C7.36294 1.79415 7.46316 2.01088 7.51187 2.2416C7.56058 2.47232 7.55652 2.71107 7.5 2.94Z" />
                    </svg>
                    <span class="sr-only">Give a like</span>
                    <span class="sr-only">Liked by 148 citizens</span>
                    <span aria-hidden="true" class="text-on-surface">148</span>
                  </button>
                  <span class="flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg" stroke-linecap="round"
                      stroke-linejoin="round" stroke="currentColor">
                      <path
                        d="M7 1H3C2.73478 1 2.48043 1.10536 2.29289 1.29289C2.10536 1.48043 2 1.73478 2 2V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H9C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V4L7 1Z" />
                      <path d="M7 1V4H10" />
                      <path d="M8 6.5H4" />
                      <path d="M8 8.5H4" />
                      <path d="M5 4.5H4" />
                    </svg>
                    <span>2 proofs</span>
                  </span>
                  <span>Oct 9</span>
                  <Link to="/report1" class="text-primary font-semibold font-sans">Track
                    → </Link>
                </div>
              </div>
            </div>
          </li>
          <li class="flex items-center gap-4 p-4">
            <div class="max-w-19 aspect-square rounded-xl overflow-hidden *:aspect-square *:object-cover">
              <img src="/assets/r1.jpg" />
            </div>
            <div class="flex flex-col gap-2 grow">
              <div class="flex flex-wrap items-center gap-1">
                <span
                  class="inline-flex items-center text-xs border px-2 font-semibold gap-1 py-1 rounded-full bg-warning-container text-on-warning-container border-on-warning-container/25">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 5.5C9 7.433 7.433 9 5.5 9C3.567 9 2 7.433 2 5.5C2 3.567 3.567 2 5.5 2C7.433 2 9 3.567 9 5.5Z"
                      stroke-linecap="round" stroke-linejoin="round" stroke="#96680F" />
                    <path d="M10.5 10.5L8.34998 8.34998" stroke-linecap="round" stroke-linejoin="round"
                      stroke="#96680F" />
                  </svg>
                  <span>In review</span>
                </span>
                <span class="font-mono text-xs uppercase text-on-surface-low">
                  CMP-2026-8841
                </span>
                <span class="font-mono text-xs uppercase text-on-surface-low">
                  ·
                </span>
                <span class="font-semibold text-xs text-secondary">
                  Perumda PAM JAYA (Clean Drinking Water)
                </span>
              </div>
              <div class="flex flex-wrap gap-2 items-center justify-between">
                <div class="flex flex-col gap-2">
                  <h2 class="text-sm font-semibold text-secondary">PAM clean drinking water pipeline burst
                    flooding
                    sidewalk in
                    front
                    of Cipete Raya MRT</h2>
                  <p class="flex items-center text-xs gap-2 text-on-surface-low">
                    <span class="flex">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-linecap="round"
                        stroke-linejoin="round" stroke="currentColor" class="text-primary shrink-0">
                        <path
                          d="M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z" />
                        <path
                          d="M7.5 5C7.5 5.82843 6.82843 6.5 6 6.5C5.17157 6.5 4.5 5.82843 4.5 5C4.5 4.17157 5.17157 3.5 6 3.5C6.82843 3.5 7.5 4.17157 7.5 5Z" />
                      </svg>
                      Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
                    </span>
                    <span class="font-mono text-xs uppercase text-on-surface-low">
                      ·
                    </span>
                    <span>
                      Water & Sewage
                    </span>
                  </p>
                </div>
                <div class="flex flex-wrap items-center gap-3 font-mono [&_svg]:text-primary text-xs">
                  <button
                    class="flex items-center gap-2 font-mono border text-xs border-outline rounded-full px-2 py-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-linecap="round"
                      stroke-linejoin="round" stroke="currentColor">
                      <path d="M3.5 5V11" />
                      <path
                        d="M7.5 2.94L7 5H9.915C10.0702 5 10.2234 5.03614 10.3622 5.10557C10.5011 5.175 10.6219 5.2758 10.715 5.4C10.8081 5.5242 10.8711 5.66837 10.8989 5.82111C10.9266 5.97386 10.9185 6.13096 10.875 6.28L9.71 10.28C9.64942 10.4877 9.5231 10.6702 9.35 10.8C9.1769 10.9298 8.96637 11 8.75 11H2C1.73478 11 1.48043 10.8946 1.29289 10.7071C1.10536 10.5196 1 10.2652 1 10V6C1 5.73478 1.10536 5.48043 1.29289 5.29289C1.48043 5.10536 1.73478 5 2 5H3.38C3.56604 4.9999 3.74837 4.94791 3.90648 4.84986C4.06459 4.75181 4.19221 4.61161 4.275 4.445L6 1C6.23579 1.00292 6.46787 1.05908 6.6789 1.1643C6.88994 1.26951 7.07446 1.42105 7.2187 1.6076C7.36294 1.79415 7.46316 2.01088 7.51187 2.2416C7.56058 2.47232 7.55652 2.71107 7.5 2.94Z" />
                    </svg>
                    <span class="sr-only">Give a like</span>
                    <span class="sr-only">Liked by 148 citizens</span>
                    <span aria-hidden="true" class="text-on-surface">148</span>
                  </button>
                  <span class="flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg" stroke-linecap="round"
                      stroke-linejoin="round" stroke="currentColor">
                      <path
                        d="M7 1H3C2.73478 1 2.48043 1.10536 2.29289 1.29289C2.10536 1.48043 2 1.73478 2 2V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H9C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V4L7 1Z" />
                      <path d="M7 1V4H10" />
                      <path d="M8 6.5H4" />
                      <path d="M8 8.5H4" />
                      <path d="M5 4.5H4" />
                    </svg>
                    <span>2 proofs</span>
                  </span>
                  <span>Oct 9</span>
                  <Link to="/report1" class="text-primary font-semibold font-sans">Track
                    → </Link>
                </div>
              </div>
            </div>
          </li>
          <li class="flex items-center gap-4 p-4">
            <div class="max-w-19 aspect-square rounded-xl overflow-hidden *:aspect-square *:object-cover">
              <img src="/assets/r1.jpg" />
            </div>
            <div class="flex flex-col gap-2 grow">
              <div class="flex flex-wrap items-center gap-1">
                <span
                  class="inline-flex items-center text-xs border px-2 font-semibold gap-1 py-1 rounded-full bg-warning-container text-on-warning-container border-on-warning-container/25">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 5.5C9 7.433 7.433 9 5.5 9C3.567 9 2 7.433 2 5.5C2 3.567 3.567 2 5.5 2C7.433 2 9 3.567 9 5.5Z"
                      stroke-linecap="round" stroke-linejoin="round" stroke="#96680F" />
                    <path d="M10.5 10.5L8.34998 8.34998" stroke-linecap="round" stroke-linejoin="round"
                      stroke="#96680F" />
                  </svg>
                  <span>In review</span>
                </span>
                <span class="font-mono text-xs uppercase text-on-surface-low">
                  CMP-2026-8841
                </span>
                <span class="font-mono text-xs uppercase text-on-surface-low">
                  ·
                </span>
                <span class="font-semibold text-xs text-secondary">
                  Perumda PAM JAYA (Clean Drinking Water)
                </span>
              </div>
              <div class="flex flex-wrap gap-2 items-center justify-between">
                <div class="flex flex-col gap-2">
                  <h2 class="text-sm font-semibold text-secondary">PAM clean drinking water pipeline burst
                    flooding
                    sidewalk in
                    front
                    of Cipete Raya MRT</h2>
                  <p class="flex items-center text-xs gap-2 text-on-surface-low">
                    <span class="flex">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-linecap="round"
                        stroke-linejoin="round" stroke="currentColor" class="text-primary shrink-0">
                        <path
                          d="M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z" />
                        <path
                          d="M7.5 5C7.5 5.82843 6.82843 6.5 6 6.5C5.17157 6.5 4.5 5.82843 4.5 5C4.5 4.17157 5.17157 3.5 6 3.5C6.82843 3.5 7.5 4.17157 7.5 5Z" />
                      </svg>
                      Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
                    </span>
                    <span class="font-mono text-xs uppercase text-on-surface-low">
                      ·
                    </span>
                    <span>
                      Water & Sewage
                    </span>
                  </p>
                </div>
                <div class="flex flex-wrap items-center gap-3 font-mono [&_svg]:text-primary text-xs">
                  <button
                    class="flex items-center gap-2 font-mono border text-xs border-outline rounded-full px-2 py-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-linecap="round"
                      stroke-linejoin="round" stroke="currentColor">
                      <path d="M3.5 5V11" />
                      <path
                        d="M7.5 2.94L7 5H9.915C10.0702 5 10.2234 5.03614 10.3622 5.10557C10.5011 5.175 10.6219 5.2758 10.715 5.4C10.8081 5.5242 10.8711 5.66837 10.8989 5.82111C10.9266 5.97386 10.9185 6.13096 10.875 6.28L9.71 10.28C9.64942 10.4877 9.5231 10.6702 9.35 10.8C9.1769 10.9298 8.96637 11 8.75 11H2C1.73478 11 1.48043 10.8946 1.29289 10.7071C1.10536 10.5196 1 10.2652 1 10V6C1 5.73478 1.10536 5.48043 1.29289 5.29289C1.48043 5.10536 1.73478 5 2 5H3.38C3.56604 4.9999 3.74837 4.94791 3.90648 4.84986C4.06459 4.75181 4.19221 4.61161 4.275 4.445L6 1C6.23579 1.00292 6.46787 1.05908 6.6789 1.1643C6.88994 1.26951 7.07446 1.42105 7.2187 1.6076C7.36294 1.79415 7.46316 2.01088 7.51187 2.2416C7.56058 2.47232 7.55652 2.71107 7.5 2.94Z" />
                    </svg>
                    <span class="sr-only">Give a like</span>
                    <span class="sr-only">Liked by 148 citizens</span>
                    <span aria-hidden="true" class="text-on-surface">148</span>
                  </button>
                  <span class="flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg" stroke-linecap="round"
                      stroke-linejoin="round" stroke="currentColor">
                      <path
                        d="M7 1H3C2.73478 1 2.48043 1.10536 2.29289 1.29289C2.10536 1.48043 2 1.73478 2 2V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H9C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V4L7 1Z" />
                      <path d="M7 1V4H10" />
                      <path d="M8 6.5H4" />
                      <path d="M8 8.5H4" />
                      <path d="M5 4.5H4" />
                    </svg>
                    <span>2 proofs</span>
                  </span>
                  <span>Oct 9</span>
                  <Link to="/report1" class="text-primary font-semibold font-sans">Track
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