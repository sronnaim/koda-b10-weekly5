export default function Profile() {
  return (
    <main class="max-w-[68rem] mt-10 md:mt-16 container grow mx-auto px-4">
      <div>
        <div class="flex flex-col gap-4 pb-4 border-b border-outline">
          <hgroup
            class="grid md:grid-cols-[1fr_auto] gap-4 *:first:text-xs sm:*:first:col-span-2 *:first:text-on-surface-low *:first:font-mono *:first:font-medium *:first:uppercase">
            <p>Citizen Management</p>
            <h1 class="font-serif text-secondary font-semibold text-4xl">Account & Case History</h1>
          </hgroup>
          <h2 class="sr-only">Profile tabs</h2>
          <ul class="flex items-center gap-1 flex-wrap">
            <li class="bg-primary font-medium text-on-primary rounded-full px-4 py-2">
              <a href="#" data-current="true">My complaints</a>
            </li>
            <li class="font-medium rounded-full px-4 py-2">
              <a href="#profile">Profile</a>
            </li>
            <li class="font-medium rounded-full px-4 py-2">
              <a href="#notif">Notifications</a>
            </li>
            <li class="font-medium rounded-full px-4 py-2">
              <a href="#privacy">Privacy & data</a>
            </li>
            <li class="font-medium rounded-full px-4 py-2">
              <a href="#security">Security</a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-4 bg-surface-container rounded-2xl px-8 py-6 border border-outline md:max-w-160 mt-4"
          id="security">
          <hgroup>
            <h2 class="text-lg font-serif font-semibold text-secondary">Security
            </h2>
            <p class="text-xs">Change the password used to sign in to your WargaReport account.</p>
          </hgroup>
          <form action="#security" class="flex flex-col gap-4">
            <label
              class="font-mono uppercase text-xs flex flex-col font-medium [&_input:focus]:shadow-none [&_input:focus]:border-none [&_input:focus]:rounded-none">
              Current Password
              <span class="border flex items-center p-3 mt-2 border-outline rounded-xl">
                <input type="password" autocomplete="current-password" name="current"
                  placeholder="Enter current password" class="grow" />
                <button type="button">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-width="1.33333"
                    stroke-linecap="round" stroke-linejoin="round" stroke="currentColor">
                    <path
                      d="M1.3335 8.00016C1.3335 8.00016 3.7335 3.3335 8.00016 3.3335C12.2668 3.3335 14.6668 8.00016 14.6668 8.00016C14.6668 8.00016 12.2668 12.6668 8.00016 12.6668C3.7335 12.6668 1.3335 8.00016 1.3335 8.00016Z" />
                    <path
                      d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z" />
                  </svg>
                  <span class="sr-only">Show passowrd</span>
                </button>
              </span>
            </label>
            <label
              class="font-mono uppercase text-xs flex flex-col font-medium [&_input:focus]:shadow-none [&_input:focus]:border-none [&_input:focus]:rounded-none">

              New Password
              <span class="border flex items-center p-3 mt-2 border-outline rounded-xl">
                <input type="password" autocomplete="new-password" name="new"
                  placeholder="At least 8 characters" class="grow" />
                <button type="button">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-width="1.33333"
                    stroke-linecap="round" stroke-linejoin="round" stroke="currentColor">
                    <path
                      d="M1.3335 8.00016C1.3335 8.00016 3.7335 3.3335 8.00016 3.3335C12.2668 3.3335 14.6668 8.00016 14.6668 8.00016C14.6668 8.00016 12.2668 12.6668 8.00016 12.6668C3.7335 12.6668 1.3335 8.00016 1.3335 8.00016Z" />
                    <path
                      d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z" />
                  </svg>
                  <span class="sr-only">Show passowrd</span>
                </button>
              </span>
            </label>
            <label
              class="font-mono uppercase text-xs flex flex-col font-medium [&_input:focus]:shadow-none [&_input:focus]:border-none [&_input:focus]:rounded-none">
              Confirm New Password
              <span class="border flex items-center p-3 mt-2 border-outline rounded-xl">
                <input type="password" autocomplete="new-password" name="new"
                  placeholder="Re-enter new password" class="grow" />
                <button type="button">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-width="1.33333"
                    stroke-linecap="round" stroke-linejoin="round" stroke="currentColor">
                    <path
                      d="M1.3335 8.00016C1.3335 8.00016 3.7335 3.3335 8.00016 3.3335C12.2668 3.3335 14.6668 8.00016 14.6668 8.00016C14.6668 8.00016 12.2668 12.6668 8.00016 12.6668C3.7335 12.6668 1.3335 8.00016 1.3335 8.00016Z" />
                    <path
                      d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z" />
                  </svg>
                  <span class="sr-only">Show passowrd</span>
                </button>
              </span>

            </label>
            <button type="submit"
              class="w-fit font-semibold px-4 py-2 bg-primary mt-2 text-on-primary rounded-full">Update
              password</button>
          </form>
        </div>
        <div class="flex flex-col gap-4 bg-surface-container rounded-2xl px-8 py-6 border border-outline md:max-w-160 mt-4"
          id="privacy">
          <hgroup>
            <h2 class="text-lg font-serif font-semibold text-secondary">Privacy Rights &amp; Data Portability
            </h2>
            <p class="text-xs">Review personal records retained under municipal open data laws.</p>
          </hgroup>
          <p class="text-sm">Under Indonesian Law No. 27/2022 on Personal Data Protection (UU PDP) and Law No.
            14/2008
            on Public Information Openness (UU KIP), personal citizen identifiers are strictly segregated
            from public registers.</p>

          <div class="text-xs border border-dashed border-outline bg-surface p-4 rounded-xl flex flex-col gap-2">
            <h3 class="font-semibold text-secondary">Download your case archive</h3>
            <p class="text-on-surface-low">Export all submitted complaints, attached media metadata, and officer
              replies as standard JSON.
            </p>
            <button
              class="cursor-pointer inline-flex gap-2 px-4 py-3 bg-surface-container rounded-full w-fit border border-outline"
              type="button">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor">
                <path
                  d="M10.5 7.5V9.5C10.5 9.76522 10.3946 10.0196 10.2071 10.2071C10.0196 10.3946 9.76522 10.5 9.5 10.5H2.5C2.23478 10.5 1.98043 10.3946 1.79289 10.2071C1.60536 10.0196 1.5 9.76522 1.5 9.5V7.5" />
                <path d="M3.5 5L6 7.5L8.5 5" />
                <path d="M6 7.5V1.5" />
              </svg>

              Download JSON archive
            </button>
          </div>
        </div>
        <div class="bg-surface-container rounded-2xl px-8 py-6 border border-outline md:max-w-160 mt-4" id="alerts">
          <hgroup>
            <h2 class="text-lg font-serif font-semibold text-secondary">Dispatch Notification Preferences</h2>
            <p class="text-xs">Control when municipal bureaus may send automated status alerts.</p>
          </hgroup>
          <form action="#notif" class="flex flex-col gap-4 mt-4">
            <label for="email-status" class="text-xs grid grid-cols-[auto_1fr] items-start gap-2">
              <input type="checkbox" name="email-status" id="email-status" class="row-span-2" />
              <span class="font-semibold text-secondary">Email Status Transitions</span>
              <span class="text-on-surface-low">Receive an email whenever an inspector triages, assigns, or
                resolves your case.</span>
            </label>
            <label for="email-status" class="text-xs grid grid-cols-[auto_1fr] items-start gap-2">
              <input type="checkbox" name="sms-urgent" id="sms-urgent" class="row-span-2" />
              <span class="font-semibold text-secondary">Urgent SMS Alerts</span>
              <span class="text-on-surface-low">Receive text messages when emergency crews need physical gate
                access.</span>
            </label>
            <label for="email-status" class="text-xs grid grid-cols-[auto_1fr] items-start gap-2">
              <input type="checkbox" name="email-status" id="email-status" class="row-span-2" />
              <span class="font-semibold text-secondary">Weekly Ward Resolution Digest</span>
              <span class="text-on-surface-low">Summary of all public infrastructure projects completed in
                your postal code.</span>
            </label>
            <button type="submit"
              class="w-fit font-semibold px-4 py-2 bg-primary mt-2 text-on-primary rounded-full">Update alert
              preferences</button>
          </form>
        </div>
        <div class="bg-surface-container rounded-2xl px-8 py-6 border border-outline md:max-w-160 mt-4"
          id="profile">
          <hgroup>
            <h2 class="text-lg font-serif font-semibold text-secondary">Filer Identity & Preferences</h2>
            <p class="text-xs">Used to pre-fill future complaint forms and verify status inquiries.</p>
          </hgroup>
          <form action="/myprofile.html" class="flex flex-col gap-4 mt-4">
            <div>
              <label class="flex flex-wrap gap-4 items-center cursor-pointer">
                <span
                  class="w-18 h-18 bg-success-container text-on-success-container border-[2px] border-on-success-container/35 rounded-full inline-flex items-center justify-center">FS</span>
                <span class="flex flex-col text-xs gap-1">
                  <span class="font-semibold text-secondary">Profile photo</span>
                  <span class="text-on-surface-low">JPG, PNG, or WebP. Square images work best.</span>
                  <span class="text-secondary px-4 py-2 border border-outline w-fit rounded-full">Upload
                    photo</span>
                  <input type="file" name="profile-img" class="hidden" />
                </span>
              </label>
            </div>
            <label class="border-t border-outline py-4 font-mono uppercase text-xs flex flex-col font-medium">
              Full Legal Name
              <input type="text" name="fullname" autocomplete="name" value="Fahrul Septiana"
                class="border p-3 mt-2 border-outline rounded-xl" />
            </label>
            <label class="font-mono uppercase text-xs flex flex-col font-medium">
              Primary Notification Email
              <input type="email" name="email" autocomplete="email" value="fahrul@wargareport.id"
                class="border p-3 mt-2 border-outline rounded-xl" />
            </label>
            <label class="font-mono uppercase text-xs flex flex-col font-medium">
              SMS Contact Number
              <input type="tel" name="phone" autocomplete="tel-local" value="+62 812-9842-1054"
                class="border p-3 mt-2 border-outline rounded-xl" />
            </label>
            <label class="font-mono uppercase text-xs flex flex-col font-medium">
              NIK
              <input type="text" name="nik" value="3174051809900004"
                class="border p-3 mt-2 border-outline rounded-xl" />
            </label>
            <button type="submit"
              class="w-fit font-semibold px-4 py-2 bg-primary text-on-primary rounded-full">Save
              profile
              change</button>
          </form>
        </div>
        <div id="complaints">
          <span class="text-xs flex justify-between items-center my-8">
            <h2 class="font-mono uppercase text-on-surface-low">Your Tracked Record (2)</h2>
            <span class="font-semibold px-4 py-2 bg-primary text-on-primary rounded-full">+ File new
              complaint</span>
          </span>
          <div class="border border-outline rounded-2xl overflow-x-auto">
            <table class="border-collapse">
              <thead class="bg-surface">
                <tr>
                  <th scope="col" class="p-3 text-left text-2xs font-mono uppercase">Case ID
                  </th>
                  <th scope="col" class="p-3 text-left text-2xs font-mono uppercase">Title /
                    Location</th>
                  <th scope="col" class="p-3 text-left text-2xs font-mono uppercase">Agency</th>
                  <th scope="col" class="p-3 text-left text-2xs font-mono uppercase">Status</th>
                  <th scope="col" class="p-3 text-left text-2xs font-mono uppercase">SLA Target</th>
                  <th scope="col" class="p-3 text-left text-2xs font-mono uppercase">Last Update
                  </th>
                </tr>
              </thead>
              <tbody
                class="text-xs bg-surface-container divide-y divide-outline [&_th]:text-primary [&_th]:text-start [&_th,&_td]:px-3 [&_th,&_td]:py-4">
                <tr>
                  <th scope="row">CMP-2026-
                    9472</th>
                  <td class="font-semibold">
                    <div class="flex flex-col">
                      <span class="text-secondary">PAM clean drinking water pipeline burst
                        flooding sidewalk in
                        front of Cipete Raya MRT
                      </span>
                      <span class="text-on-surface-low">Jl. Fatmawati Raya No. 42 (depan Stasiun MRT
                        Cipete Raya)</span>
                    </div>
                  </td>
                  <td>Perumda PAM JAYA (Clean
                    Drinking Water)</td>
                  <td>
                    <span
                      class="whitespace-nowrap px-2 py-1 inline-flex bg-surface rounded-full font-semibold items-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-linecap="round"
                        stroke-linejoin="round" stroke="currentColor">
                        <path
                          d="M9 5.5C9 7.433 7.433 9 5.5 9C3.567 9 2 7.433 2 5.5C2 3.567 3.567 2 5.5 2C7.433 2 9 3.567 9 5.5Z" />
                        <path d="M10.5 10.5001L8.34998 8.3501" />
                      </svg>

                      In review
                    </span>
                  </td>
                  <td class="font-mono">Awaiting verification</td>
                  <td class="font-mono text-on-surface-low">Oct 30</td>
                </tr>
                <tr>
                  <th scope="row">CMP-2026-
                    9472</th>
                  <td class="font-semibold">
                    <div class="flex flex-col">
                      <span class="text-secondary">PAM clean drinking water pipeline burst
                        flooding sidewalk in
                        front of Cipete Raya MRT
                      </span>
                      <span class="text-on-surface-low">Jl. Fatmawati Raya No. 42 (depan Stasiun MRT
                        Cipete Raya)</span>
                    </div>
                  </td>
                  <td>Perumda PAM JAYA (Clean
                    Drinking Water)</td>
                  <td>
                    <span
                      class="whitespace-nowrap px-2 py-1 inline-flex bg-surface rounded-full font-semibold items-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-linecap="round"
                        stroke-linejoin="round" stroke="currentColor">
                        <path
                          d="M9 5.5C9 7.433 7.433 9 5.5 9C3.567 9 2 7.433 2 5.5C2 3.567 3.567 2 5.5 2C7.433 2 9 3.567 9 5.5Z" />
                        <path d="M10.5 10.5001L8.34998 8.3501" />
                      </svg>

                      In review
                    </span>
                  </td>
                  <td class="font-mono">Awaiting verification</td>
                  <td class="font-mono text-on-surface-low">Oct 30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}