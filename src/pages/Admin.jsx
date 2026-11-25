import { useRef } from "react"
import { LuShield, LuX } from "react-icons/lu"

function Admin() {
  const dialogRef = useRef(null)

  return (
    <main className="mx-auto grow container max-w-272 px-4">
      <dialog ref={dialogRef} className="w-full max-w-md min-w-0 border min-h-screen bg-surface-container border-outline text-on-surface backdrop:bg-on-surface-high/25 backdrop:backdrop-blur-lg">
        <hgroup className="p-4 bg-surface border-b border-outline">
          <span className="flex items-center justify-between">
            <p className="font-mono uppercase text-2xs text-on-surface-low">Escalation Desk</p>
            <button type="button" className="text-on-surface-low" onClick={() => dialogRef.current?.close()}>
              <LuX />
            </button>
          </span>
          <h1 className="font-serif font-semibold text-xl text-secondary">Verify incoming report</h1>
        </hgroup>
        <article className="p-4 text-sm">
          <div className="grid gap-2 border border-dashed border-outline rounded-2xl bg-surface p-4">
            <hgroup>
              <p className="text-primary text-xs">CMP-2026-8601</p>
              <h2 className="text-secondary text-base font-semibold mt-2">Heavy excavation equipment operating past
                22:00 WIB in residential alley</h2>
            </hgroup>
            <p>
              Continuous hydraulic jackhammer and pile driver
              activity past 22:00 WIB at commercial construction site
              behind Jl. Senopati No. 18. Violates peaceful night hours
              under Perda No. 8/2007.
            </p>
            <address className="font-mono text-on-surface-low not-italic">
              Jl. Senopati No. 18, RT 06 / RW 02 ·
              Selong, Kebayoran Baru, Jakarta Selatan
            </address>
            <p className="font-mono text-on-surface-low">Reported by an anonymous resident</p>
            <p className="font-mono text-on-surface-low">1 evidence file · submitted <time>Nov 20, 07:09
              AM GMT+7</time></p>
            <a href="#" className="text-primary font-semibold">Open full case record →</a>
          </div>
        </article>
        <div className="box-border">
          <button className="text-xs py-3 text-start px-5 mx-4 rounded-xl border border-outline font-semibold">
            Review attached evidence (1)
          </button>
        </div>
        <form className="p-4">
          <label className="grid">
            <span className="uppercase font-mono text-2xs font-medium">Category</span>
            <select name="cat" id="" className="text-xs">
              <option>Noise & Disturbance</option>
            </select>
          </label>
          <label className="grid">
            <span className="uppercase font-mono text-2xs font-medium">Route to agency</span>
            <select name="agency" id="" className="text-xs">
              <option>Satpol PP Provinsi DKI Jakarta (Public Order)</option>
            </select>

          </label>
        </form>
      </dialog>
      <div className="mt-10 md:mt-16">
        <div>
          <div>
            <hgroup
              className="*:first:text-xs *:first:text-on-surface-low *:first:font-mono *:first:font-medium *:first:uppercase *:last:font-serif *:last:text-secondary *:last:font-semibold *:last:text-4xl *:last:mt-2">
              <p>System Governance</p>
              <h1>Civic Administration & Policies</h1>
            </hgroup>
            <p className="text-sm mt-2 max-w-[60ch]">
              Verify incoming citizen reports, route them to the responsible bureau, and
              configure statutory SLA benchmarks, taxonomy, and agency contacts.
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap font-medium border-b border-outline mt-4">
          <a href="#" className="px-4 py-2.5 text-sm rounded-full">Escalation Desk</a>
          <a href="#" className="px-4 py-2.5 text-sm rounded-full">SLA Benchmarks</a>
          <a href="#" className="px-4 py-2.5 text-sm rounded-full">Categories</a>
          <a href="#" className="px-4 py-2.5 text-sm rounded-full">Agencies</a>
          <a href="#" className="px-4 py-2.5 text-sm rounded-full">Officer Accounts</a>
          <a href="#" className="px-4 py-2.5 text-sm rounded-full">Moderation</a>
        </nav>
        <section>
          <div className="flex flex-wrap gap-4 justify-between items-center my-8">
            <span className="text-on-surface-low text-xs">
              <h2 className="font-mono uppercase">Verification & agency routing</h2>
              <p>1 report awaiting evidence review and agency routing. Oldest submitted Nov 20, 07:09 AM GMT+7.</p>
            </span>
            <button type="button" className="inline-flex items-center gap-2 rounded-full border border-outline bg-surface-container font-semibold text-secondary text-xs px-4 py-2.5">
              <LuShield />
              Open officer queue
            </button>
          </div>
          <search>
            <form action="feed" className="flex flex-col gap-4">
              <div
                className="bg-surface-container max-w-110 px-3 py-2 rounded-xl border border-outline gap-3 flex flex-row-reverse items-center [&:has(input:focus)]:shadow-[0_0_0_3px_black] [&:has(input:focus)]:shadow-primary/50">
                <input type="search" name="search"
                  className="grow focus:shadow-none! focus:outline-0 focus:border-none rounded-none!"
                  placeholder="Search by street name, complaint ID, or keyword..." />
              </div>
            </form>
          </search>
          <div className="border mt-4 border-outline rounded-2xl overflow-x-auto">
            <table className="border-collapse w-full">
              <thead className="bg-surface">
                <tr>
                  <th scope="col" className="p-3 text-left text-2xs font-mono uppercase">Case</th>
                  <th scope="col" className="p-3 text-left text-2xs font-mono uppercase">Proposed Route</th>
                  <th scope="col" className="p-3 text-left text-2xs font-mono uppercase">Submitted At</th>
                  <th scope="col" className="p-3 text-left text-2xs font-mono uppercase">Evidence</th>
                  <th scope="col" className="p-3 text-left text-2xs font-mono uppercase">Action</th>
                </tr>
              </thead>

              <tbody
                className="text-xs bg-surface-container divide-y divide-outline">
                <tr className="*:text-start *:px-3 *:py-2 text-xs text-secondary">
                  <th scope="row">
                    <span>Heavy excavation equipment operating past 22:00 WIB in residential alley</span>
                    <br />
                    <span className="font-mono text-on-surface-low font-normal">CMP-2026-8601</span>
                  </th>
                  <td>
                    <span className="font-medium">Noise & Disturbance</span>
                    <br />
                    <span className="text-on-surface-low">Satpol PP Provinsi DKI Jakarta (Public Order)</span>
                  </td>
                  <td className="font-mono">
                    <time dateTime="">Nov 20, 07:09 AM GMT+7</time>
                  </td>
                  <td className="font-mono">
                    1 file
                  </td>
                  <td>
                    <button onClick={() => dialogRef.current?.showModal()} className="py-1.5 px-2.5 font-semibold bg-surface-container border rounded-full border-outline">
                      Review
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div >
    </main >
  )
}

export default Admin