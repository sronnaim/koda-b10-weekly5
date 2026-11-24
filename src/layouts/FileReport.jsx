import { yupResolver } from "@hookform/resolvers/yup"
import { FormProvider, useForm } from "react-hook-form"
import { LuShield } from "react-icons/lu"
import { Link, Navigate, Outlet, ScrollRestoration, useMatches, useNavigate } from "react-router"
import { CreateReportSchema, FILE_REPORT_STEPS, REPORT_STATUSES } from "../schemas/report"
import { useDispatch, useSelector } from "react-redux"
import { findUserById } from "../api/users"
import { createReport } from "../redux/slices/reports.slice"
import { generateId } from "../utils/generateReportId"
import moment from "moment"
import { getNextStep, getPrevStep, getStepIndexByHandle, getStepsLength } from "../utils/fileReport"
import { APP_PATHS } from "../libs/router"

export default function FileReport() {
  const navigate = useNavigate()
  const handle = useMatches().at(-1)?.handle
  const step = FILE_REPORT_STEPS[handle]
  const stepsLength = getStepsLength()
  const nthStep = getStepIndexByHandle(handle) + 1
  const next = getNextStep(handle)
  const prev = getPrevStep(handle)
  const authenticatedUser = useSelector(state => state.auth)
  const user = authenticatedUser ? findUserById(authenticatedUser.id) : null
  const rdxDispatch = useDispatch()
  const reports = useSelector(state => state.reports)

  const methods = useForm({
    resolver: yupResolver(CreateReportSchema),
    mode: 'onSubmit',
  })

  function onSubmit(data) {
    if (!user.id)
      return

    let id = generateId()

    while (reports.find(r => r.id === id)) {
      id = generateId()
    }

    const newReport = {
      ...data,
      id,
      authorId: user.id,
      status: REPORT_STATUSES.SUBMITTED,
      createdAt: moment().unix()
    }
    rdxDispatch(createReport(newReport))

    navigate(`${APP_PATHS.receipt.root}/${id}`)
  }

  async function handleContinue(e) {
    e.preventDefault()
    const valid = await methods.trigger(FILE_REPORT_STEPS[handle].fields)
    if (valid)
      navigate(next.path)
  }

  if (!user)
    return <Navigate to={APP_PATHS.home} />

  return (
    <main className="mx-auto container max-w-272 grow px-4 mt-10 md:mt-16" id="new-report">
      <ScrollRestoration />
      <div className="grid gap-8 md:grid-cols-[auto_1fr]">
        <section className="md:max-w-64 flex flex-col gap-4">
          <div>
            <hgroup
              className="*:first:text-xs *:first:text-on-surface-low *:first:font-mono *:first:font-medium *:first:uppercase *:last:font-serif *:last:text-secondary *:last:font-semibold *:last:text-xl *:last:mt-2">
              <p>Community Intake</p>
              <h1>Report an Issue</h1>
            </hgroup>
            <p className="text-sm mt-2">
              Public civic reporting for Indonesian
              municipal services.</p>
          </div>
          <ol className="flex flex-col text-xs gap-1 text-on-surface-low">
            {Object.values(FILE_REPORT_STEPS).map(step => (<li
              className="px-4 py-3 flex gap-2 rounded-full data-[current=true]:bg-primary data-[current=true]:font-semibold data-[current=true]:text-on-primary data-[current=true]:*:first:text-white/75"
              key={step.handle}
              data-current={step.handle === handle}
            >
              <span className="font-mono">{String(getStepIndexByHandle(step.handle) + 1).padStart(2, '0')}</span>
              {step.label}
            </li>))}
          </ol>
          <div className="rounded-xl text-xs bg-surface-container p-4 border border-dashed border-outline">
            <h2 className="flex items-center gap-1 text-secondary font-semibold">
              <LuShield />
              Independent Verification
            </h2>
            <p className="mt-2 text-on-surface-low">Our verification desk checks each report and
              routes it to the municipal agency (Bina
              Marga, PAM JAYA, Dishub, DLH, Satpol PP,
              Citata). Resolution timestamps are tracked
              publicly.</p>
          </div>
          <Link to="/feed" className="text-sm font-semibold text-primary">Cancel and return to feed</Link>
        </section>
        <section className="bg-surface-container p-8 rounded-2xl border border-outline">
          <div>
            <div>
              <hgroup
                className="*:first:text-xs *:first:text-on-surface-low *:first:font-mono *:first:font-medium *:first:uppercase *:last:font-serif *:last:text-secondary *:last:font-semibold *:last:text-2xl *:last:mt-2">
                <p>Step {String(nthStep).padStart(2, '0')} of {String(stepsLength).padStart(2, '0')}</p>
                <h2>{step.title}</h2>
              </hgroup>
              <p className="text-sm mt-2">{step.desc}</p>
            </div>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
                <Outlet />
                <div
                  className="mt-4 pt-6 flex flex-wrap justify-between font-semibold text-sm items-center border-t border-outline">
                  {prev
                    ? <Link className="text-primary" to={prev.path}>← Back</Link>
                    : <Link className="text-primary" to={APP_PATHS.home}>Cancel</Link>
                  }
                  {!next
                    ? <button type="submit" key="submit" className="flex items-center px-5 py-3 bg-primary text-on-primary rounded-full">Dispatch report →</button>
                    : <Link key="next" className="flex items-center px-5 py-3 bg-primary text-on-primary rounded-full" to={next.path} onClick={handleContinue}>Continue →</Link>}

                </div>
              </form>
            </FormProvider>
          </div>
        </section>
      </div>
    </main>
  )
}