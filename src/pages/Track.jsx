import { Link } from "react-router"

export default function Track() {
  return (
    <main class="mx-auto container max-w-272 grow px-4 mt-10 md:mt-16">
      <div class="grid md:grid-cols-[auto_1fr] gap-4 md:gap-8 mx-auto items-start">
        <div class=" flex flex-col max-w-150 gap-6 p-8 rounded-2xl bg-surface-container border border-outline">
          <div>
            <hgroup
              class="*:first:text-xs *:first:text-on-surface-low *:first:font-mono *:first:font-medium *:first:uppercase *:last:font-serif *:last:text-secondary *:last:font-semibold *:last:text-4xl *:last:mt-2">
              <p>Citizen Portal</p>
              <h1>Track your complaint</h1>
            </hgroup>
            <p class="text-sm mt-2">
              Enter your official case reference number to view real-time triage progress, inspector
              assignment,
              and official replies.
            </p>
          </div>
          <form class="flex flex-col gap-4">
            <label class="font-mono uppercase text-xs flex flex-col font-medium">
              Complaint Reference ID *
              <input type="text" class="border p-3 mt-2 border-outline rounded-xl"
                placeholder="e.g. CMP-2026-8841" />
            </label>
            <label class="font-mono uppercase text-xs flex flex-col font-medium">
              Email address or phone (optional verification)
              <input type="email" class="border p-3 mt-2 border-outline rounded-xl"
                placeholder="citizen@example.com" />
            </label>
            <button
              class="inline-flex items-center px-5 py-3 gap-2 bg-primary text-on-primary text-xs font-semibold rounded-full w-fit">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"
                stroke="currentColor">
                <path
                  d="M9.75008 5.95835C9.75008 8.05243 8.05249 9.75002 5.95841 9.75002C3.86434 9.75002 2.16675 8.05243 2.16675 5.95835C2.16675 3.86427 3.86434 2.16669 5.95841 2.16669C8.05249 2.16669 9.75008 3.86427 9.75008 5.95835Z" />
                <path d="M11.3751 11.375L9.0459 9.04584" />
              </svg>
              <span>Lookup report status</span>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"
                stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round" stroke="
                            currentColor">
                <path d="M2.70825 6.5H10.2916" stroke-width="1.08333" />
                <path d="M6.5 2.70831L10.2917 6.49998L6.5 10.2916" />
              </svg>
            </button>
          </form>
          <p class="flex flex-wrap gap-1 border-t border-outline pt-4 text-xs text-on-surface-low">
            Try a sample record:
            <Link href="/report1.html" class="font-semibold font-mono text-primary">CMP-2026-8841</Link>
            ·
            <Link href="/report3.html" class="font-semibold font-mono text-primary">CMP-2026-8794 (Resolved)</Link>
          </p>
        </div>
        <aside class="grid grid-cols-[auto_1fr] gap-4 text-xs text-sm max-w-150 md:max-w-none">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
            stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"
            stroke="currentColor" class="row-span-2 text-on-surface-low">
            <path
              d="M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" />
            <path
              d="M7.58325 7.5C7.79055 6.95969 8.17887 6.50804 8.68198 6.22207C9.18509 5.9361 9.77183 5.83354 10.3421 5.93186C10.9124 6.03019 11.4309 6.32332 11.8092 6.76125C12.1875 7.19919 12.4022 7.7548 12.4166 8.33333C12.4166 10 9.91658 10.8333 9.91658 10.8333" />
            <path d="M10 14.1667H10.0083" />

          </svg>
          <p>
            Your tracking ID was displayed on your confirmation receipt and
            sent to your registered email address immediately upon intake.
          </p>
          <p>
            Reports filed anonymously can only be tracked using this unique
            key; officers cannot retrieve records by name without it.
          </p>
          <Link href="/feed.html"
            class="col-span-2 mt-4 pt-4 border-t border-outline font-semibold text-primary">Lost your tracking
            ID? Search
            recent reports by location →</Link>
        </aside>
      </div>
    </main>
  )
}