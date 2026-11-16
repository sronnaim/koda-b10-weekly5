import { Link } from "react-router"

export default function Footer() {
  return (
    <footer class="bg-surface-container border-t border-outline mt-30 px-4 py-13">
      <div class="max-w-272 container m-auto grid gap-4 md:grid-cols-2">
        <div class="md:max-w-100 grid gap-6">
          <Link to="/" class="font-serif text-xl font-bold text-secondary">WargaReport</Link>
          <p class="text-sm">WargaReport is an independent civic reporting platform for municipal infrastructure
            issues across
            Indonesia. Residents submit evidence, follow SLA countdowns, and track resolution updates from the
            responsible agencies.</p>
          <p class="text-danger font-medium"><em class="not-italic">Not for life-threatening emergencies, call <Link
            to="tel:112">112</Link>
            (National Emergency Call Center) or BPBD DKI directly.</em></p>
        </div>

        <nav
          class="grid text-sm gap-4 md:grid-cols-3 [&_h3]:font-medium [&_h3]:font-mono [&_h3]:text-primary [&_h3]:mb-2 [&_h3]:uppercase [&_h3]:text-xs [&_ul]:grid [&_ul]:gap-2">
          <div>
            <h3>Citizens</h3>
            <ul>
              <li>
                <Link to="/file-report">File a report</Link>
              </li>
              <li>
                <Link to="/track">Track complaint</Link>
              </li>
              <li>
                <Link to="/reports-registry">Public reports registry</Link>
              </li>
              <li>
                <Link to="/myfiling">My filing history</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Agencies</h3>
            <ul>
              <li>
                <Link to="/agencies">Participating bureaus</Link>
              </li>
              <li>
                <Link to="/triage">Officer triage queue</Link>
              </li>
              <li>
                <Link to="/benchmarks">SLA benchmarks</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Civic Trust</h3>
            <ul>
              <li>
                <Link to="/help">Help &amp; FAQs</Link>
              </li>
              <li>
                <Link to="/guidelines">Evidence guidelines</Link>
              </li>
              <li>
                <Link to="/policy">PII &amp; redaction policy</Link>
              </li>
            </ul>
          </div>
        </nav>
        <section class="flex border-t border-outline pt-5 flex-wrap justify-between gap-2 text-xs md:col-span-2">
          <p>
            © 2026 WargaReport. All rights reserved.
          </p>
          <p class="font-mono">
            UU No. 25/2009 Compliant
          </p>
        </section>
      </div>
    </footer>
  )
}