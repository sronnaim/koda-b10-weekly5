import { LuDownload, LuEye, LuSearch } from "react-icons/lu";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function Profile() {
  const { user } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user)
      navigate('/')

  }, [user, navigate])

  return (
    <main className="max-w-272 mt-10 md:mt-16 container grow mx-auto px-4">
      <div>
        <div className="flex flex-col gap-4 pb-4 border-b border-outline">
          <hgroup
            className="grid md:grid-cols-[1fr_auto] gap-4 *:first:text-xs sm:*:first:col-span-2 *:first:text-on-surface-low *:first:font-mono *:first:font-medium *:first:uppercase">
            <p>Citizen Management</p>
            <h1 className="font-serif text-secondary font-semibold text-4xl">Account & Case History</h1>
          </hgroup>
          <h2 className="sr-only">Profile tabs</h2>
          <ul className="flex items-center gap-1 flex-wrap">
            <li className="bg-primary font-medium text-on-primary rounded-full px-4 py-2">
              <a href="#" data-current="true">My complaints</a>
            </li>
            <li className="font-medium rounded-full px-4 py-2">
              <a href="#profile">Profile</a>
            </li>
            <li className="font-medium rounded-full px-4 py-2">
              <a href="#notif">Notifications</a>
            </li>
            <li className="font-medium rounded-full px-4 py-2">
              <a href="#privacy">Privacy & data</a>
            </li>
            <li className="font-medium rounded-full px-4 py-2">
              <a href="#security">Security</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 bg-surface-container rounded-2xl px-8 py-6 border border-outline md:max-w-160 mt-4"
          id="security">
          <hgroup>
            <h2 className="text-lg font-serif font-semibold text-secondary">Security
            </h2>
            <p className="text-xs">Change the password used to sign in to your WargaReport account.</p>
          </hgroup>
          <form action="#security" className="flex flex-col gap-4">
            <label
              className="font-mono uppercase text-xs flex flex-col font-medium [&_input:focus]:shadow-none [&_input:focus]:border-none [&_input:focus]:rounded-none">
              Current Password
              <span className="border flex items-center p-3 mt-2 border-outline rounded-xl">
                <input type="password" autocomplete="current-password" name="current"
                  placeholder="Enter current password" className="grow" />
                <button type="button">
                  <LuEye />
                  <span className="sr-only">Show passowrd</span>
                </button>
              </span>
            </label>
            <label
              className="font-mono uppercase text-xs flex flex-col font-medium [&_input:focus]:shadow-none [&_input:focus]:border-none [&_input:focus]:rounded-none">
              New Password
              <span className="border flex items-center p-3 mt-2 border-outline rounded-xl">
                <input type="password" autocomplete="new-password" name="new"
                  placeholder="At least 8 characters" className="grow" />
                <button type="button">
                  <LuEye />
                  <span className="sr-only">Show passowrd</span>
                </button>
              </span>
            </label>
            <label
              className="font-mono uppercase text-xs flex flex-col font-medium [&_input:focus]:shadow-none [&_input:focus]:border-none [&_input:focus]:rounded-none">
              Confirm New Password
              <span className="border flex items-center p-3 mt-2 border-outline rounded-xl">
                <input type="password" autocomplete="new-password" name="new"
                  placeholder="Re-enter new password" className="grow" />
                <button type="button">
                  <LuEye />
                  <span className="sr-only">Show passowrd</span>
                </button>
              </span>

            </label>
            <button type="submit"
              className="w-fit font-semibold px-4 py-2 bg-primary mt-2 text-on-primary rounded-full">Update
              password</button>
          </form>
        </div>
        <div className="flex flex-col gap-4 bg-surface-container rounded-2xl px-8 py-6 border border-outline md:max-w-160 mt-4"
          id="privacy">
          <hgroup>
            <h2 className="text-lg font-serif font-semibold text-secondary">Privacy Rights & Data Portability
            </h2>
            <p className="text-xs">Review personal records retained under municipal open data laws.</p>
          </hgroup>
          <p className="text-sm">Under Indonesian Law No. 27/2022 on Personal Data Protection (UU PDP) and Law No.
            14/2008
            on Public Information Openness (UU KIP), personal citizen identifiers are strictly segregated
            from public registers.</p>

          <div className="text-xs border border-dashed border-outline bg-surface p-4 rounded-xl flex flex-col gap-2">
            <h3 className="font-semibold text-secondary">Download your case archive</h3>
            <p className="text-on-surface-low">Export all submitted complaints, attached media metadata, and officer
              replies as standard JSON.
            </p>
            <button
              className="cursor-pointer inline-flex gap-2 px-4 py-3 bg-surface-container rounded-full w-fit border border-outline"
              type="button">
              <LuDownload />
              Download JSON archive
            </button>
          </div>
        </div>
        <div className="bg-surface-container rounded-2xl px-8 py-6 border border-outline md:max-w-160 mt-4" id="alerts">
          <hgroup>
            <h2 className="text-lg font-serif font-semibold text-secondary">Dispatch Notification Preferences</h2>
            <p className="text-xs">Control when municipal bureaus may send automated status alerts.</p>
          </hgroup>
          <form action="#notif" className="flex flex-col gap-4 mt-4">
            <label for="email-status" className="text-xs grid grid-cols-[auto_1fr] items-start gap-2">
              <input type="checkbox" name="email-status" id="email-status" className="row-span-2" />
              <span className="font-semibold text-secondary">Email Status Transitions</span>
              <span className="text-on-surface-low">Receive an email whenever an inspector triages, assigns, or
                resolves your case.</span>
            </label>
            <label for="email-status" className="text-xs grid grid-cols-[auto_1fr] items-start gap-2">
              <input type="checkbox" name="sms-urgent" id="sms-urgent" className="row-span-2" />
              <span className="font-semibold text-secondary">Urgent SMS Alerts</span>
              <span className="text-on-surface-low">Receive text messages when emergency crews need physical gate
                access.</span>
            </label>
            <label for="email-status" className="text-xs grid grid-cols-[auto_1fr] items-start gap-2">
              <input type="checkbox" name="email-status" id="email-status" className="row-span-2" />
              <span className="font-semibold text-secondary">Weekly Ward Resolution Digest</span>
              <span className="text-on-surface-low">Summary of all public infrastructure projects completed in
                your postal code.</span>
            </label>
            <button type="submit"
              className="w-fit font-semibold px-4 py-2 bg-primary mt-2 text-on-primary rounded-full">Update alert
              preferences</button>
          </form>
        </div>
        <div className="bg-surface-container rounded-2xl px-8 py-6 border border-outline md:max-w-160 mt-4"
          id="profile">
          <hgroup>
            <h2 className="text-lg font-serif font-semibold text-secondary">Filer Identity & Preferences</h2>
            <p className="text-xs">Used to pre-fill future complaint forms and verify status inquiries.</p>
          </hgroup>
          <form action="/myprofile.html" className="flex flex-col gap-4 mt-4">
            <div>
              <label className="flex flex-wrap gap-4 items-center cursor-pointer">
                <span
                  className="w-18 h-18 bg-success-container text-on-success-container border-2 border-on-success-container/35 rounded-full inline-flex items-center justify-center">FS</span>
                <span className="flex flex-col text-xs gap-1">
                  <span className="font-semibold text-secondary">Profile photo</span>
                  <span className="text-on-surface-low">JPG, PNG, or WebP. Square images work best.</span>
                  <span className="text-secondary px-4 py-2 border border-outline w-fit rounded-full">Upload
                    photo</span>
                  <input type="file" name="profile-img" className="hidden" />
                </span>
              </label>
            </div>
            <label className="border-t border-outline py-4 font-mono uppercase text-xs flex flex-col font-medium">
              Full Legal Name
              <input type="text" name="fullname" autocomplete="name" value="Fahrul Septiana"
                className="border p-3 mt-2 border-outline rounded-xl" />
            </label>
            <label className="font-mono uppercase text-xs flex flex-col font-medium">
              Primary Notification Email
              <input type="email" name="email" autocomplete="email" value="fahrul@wargareport.id"
                className="border p-3 mt-2 border-outline rounded-xl" />
            </label>
            <label className="font-mono uppercase text-xs flex flex-col font-medium">
              SMS Contact Number
              <input type="tel" name="phone" autocomplete="tel-local" value="+62 812-9842-1054"
                className="border p-3 mt-2 border-outline rounded-xl" />
            </label>
            <label className="font-mono uppercase text-xs flex flex-col font-medium">
              NIK
              <input type="text" name="nik" value="3174051809900004"
                className="border p-3 mt-2 border-outline rounded-xl" />
            </label>
            <button type="submit"
              className="w-fit font-semibold px-4 py-2 bg-primary text-on-primary rounded-full">Save
              profile
              change</button>
          </form>
        </div>
        <div id="complaints">
          <span className="text-xs flex justify-between items-center my-8">
            <h2 className="font-mono uppercase text-on-surface-low">Your Tracked Record (2)</h2>
            <span className="font-semibold px-4 py-2 bg-primary text-on-primary rounded-full">+ File new
              complaint</span>
          </span>
          <div className="border border-outline rounded-2xl overflow-x-auto">
            <table className="border-collapse">
              <thead className="bg-surface">
                <tr>
                  <th scope="col" className="p-3 text-left text-2xs font-mono uppercase">Case ID
                  </th>
                  <th scope="col" className="p-3 text-left text-2xs font-mono uppercase">Title /
                    Location</th>
                  <th scope="col" className="p-3 text-left text-2xs font-mono uppercase">Agency</th>
                  <th scope="col" className="p-3 text-left text-2xs font-mono uppercase">Status</th>
                  <th scope="col" className="p-3 text-left text-2xs font-mono uppercase">SLA Target</th>
                  <th scope="col" className="p-3 text-left text-2xs font-mono uppercase">Last Update
                  </th>
                </tr>
              </thead>
              <tbody
                className="text-xs bg-surface-container divide-y divide-outline [&_th]:text-primary [&_th]:text-start [&_th,&_td]:px-3 [&_th,&_td]:py-4">
                <tr>
                  <th scope="row">CMP-2026-
                    9472</th>
                  <td className="font-semibold">
                    <div className="flex flex-col">
                      <span className="text-secondary">PAM clean drinking water pipeline burst
                        flooding sidewalk in
                        front of Cipete Raya MRT
                      </span>
                      <span className="text-on-surface-low">Jl. Fatmawati Raya No. 42 (depan Stasiun MRT
                        Cipete Raya)</span>
                    </div>
                  </td>
                  <td>Perumda PAM JAYA (Clean
                    Drinking Water)</td>
                  <td>
                    <span
                      className="whitespace-nowrap px-2 py-1 inline-flex bg-surface rounded-full font-semibold items-center">
                      <LuSearch />
                      In review
                    </span>
                  </td>
                  <td className="font-mono">Awaiting verification</td>
                  <td className="font-mono text-on-surface-low">Oct 30</td>
                </tr>
                <tr>
                  <th scope="row">CMP-2026-
                    9472</th>
                  <td className="font-semibold">
                    <div className="flex flex-col">
                      <span className="text-secondary">PAM clean drinking water pipeline burst
                        flooding sidewalk in
                        front of Cipete Raya MRT
                      </span>
                      <span className="text-on-surface-low">Jl. Fatmawati Raya No. 42 (depan Stasiun MRT
                        Cipete Raya)</span>
                    </div>
                  </td>
                  <td>Perumda PAM JAYA (Clean
                    Drinking Water)</td>
                  <td>
                    <span
                      className="whitespace-nowrap px-2 py-1 inline-flex bg-surface rounded-full font-semibold items-center">
                      <LuSearch />

                      In review
                    </span>
                  </td>
                  <td className="font-mono">Awaiting verification</td>
                  <td className="font-mono text-on-surface-low">Oct 30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}