import { useOutletContext } from "react-router"
import StatusBadge from "../ui/StatusBadge"
import moment from "moment"
import { useSelector } from "react-redux"

function MyComplaints() {
  const user = useOutletContext()
  const reports = useSelector(state => state.reports).filter(r => r.authorId === user.id)

  return (
    <div id="complaints">
      {reports && reports.length > 0
        ? <>
          <span className="text-xs flex justify-between items-center my-8">
            <h2 className="font-mono uppercase text-on-surface-low">Your Tracked Record (2)</h2>
            <span className="font-semibold px-4 py-2 bg-primary text-on-primary rounded-full">+ File new
              complaint</span>
          </span>
          <div className="border border-outline rounded-2xl overflow-x-auto">
            <table className="border-collapse w-full">
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
                {reports && reports.length > 0 && reports.map(report => (
                  <tr key={`report-${report.id}`}>
                    <th scope="row">{report.id}</th>
                    <td className="font-semibold">
                      <div className="flex flex-col">
                        <span className="text-secondary">{report.id}
                        </span>
                        <span className="text-on-surface-low">{report.address}</span>
                      </div>
                    </td>
                    <td>AGENCY PLACEHOLDER</td>
                    <td>
                      <StatusBadge status={report.status} />
                    </td>
                    <td className="font-mono">{report.status}</td>
                    <td className="font-mono text-on-surface-low">{moment(report).format('MMM D')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
        : <span className="text-xs flex justify-between items-center my-8">
          <h2 className="font-mono uppercase text-on-surface-low">You have not filed any report</h2>
        </span>
      }
    </div>
  )
}

export default MyComplaints