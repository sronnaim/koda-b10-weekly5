import { LuSearch } from "react-icons/lu"

function MyComplaints() {
  return (
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
  )
}

export default MyComplaints