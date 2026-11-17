import { LuCopy, LuPrinter } from "react-icons/lu"
import StatusBadge from "../components/ui/StatusBadge"
import { Link } from "react-router"

/**
 * 
 * @param {import("../schemas/report").Report} report 
 */
function Receipt(report) {
  return (
    <main className="container mx-auto max-w-272 px-4">
      <div className="rounded-2xl border border-outline mt-10 mx-auto md:mx-0 md:mt-16 max-w-145 bg-surface-container px-9 py-8">
        <div>
          <div className="flex items-center justify-between mb-8 flex-wrap">
            <StatusBadge status="submitted" size="lg" />
            <time className="font-mono text-xs">Logged 04:41 PM</time>
          </div>
          <hgroup className="flex flex-col gap-2">
            <p className="font-mono text-xs uppercase font-medium">Official Tracking Reference</p>
            <span className="flex items-center flex-wrap gap-2">
              <h1 className="text-4xl font-mono text-primary font-semibold">CMP-2026-9472</h1>
              <button className="inline-flex items-center justify-center border border-outline rounded-full p-2.5">
                <LuCopy />
              </button>
            </span>
          </hgroup>
          <div className="rounded-lg border border-dashed bg-surface my-6 px-4 py-4.5">
            <h2 className="text-secondary font-semibold">Pohon tumbang di depan Kebun Binatang samping Kampus ITB</h2>
            <p className="font-mono text-xs text-on-surface-low">Dinas Pertamanan dan Hutan Kota · Jl. Tamansari depan Kebun
              Binatang</p>
          </div>

          <div className="border-t border-outline pt-4">
            <h3 className="font-semibold text-secondary">What happens next</h3>
            <ol className="text-sm list-decimal *:marker:text-primary *:ms-[2ch] flex flex-col gap-2 mt-2">
              <li>Your report is awaiting evidence verification. Proposed bureau: <strong>Dinas Pertamanan dan
                Hutan Kota</strong></li>
              <li>A duty inspector will assess site urgency within the target <strong>48-hour SLA
                window</strong> once routed.
              </li>
              <li>Status transitions and official statements will appear directly on your tracking
                page.</li>
            </ol>
          </div>

          <div className="flex gap-3 items-center flex-wrap text-sm mt-6 border-t border-outline pt-6">
            <Link to='/report/123' className="bg-primary text-on-primary px-5 py-2.5 rounded-full">
              Track report status →
            </Link>
            <button className="inline-flex text-secondary font-semibold items-center gap-2 px-5 py-2.5 rounded-full border border-outline">
              <LuPrinter />
              Print receipt
            </button>
            <Link to={'feed'} className="text-primary font-semibold">Back to Feed</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Receipt