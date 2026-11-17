import { useUser } from "../hooks/useUser";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateReportSchema } from "../schemas/report";
import FileReportCategory from "../components/FileReportCategory";
import { LuShield } from "react-icons/lu";
import FileReportLocation from "../components/FileReportLocation";
import FileReportEvidence from "../components/FileReportEvidence";
import FileReportDetails from "../components/FileReportDetails";
import { useReports } from "../hooks/useReports";

const STEPS = [
  { title: "What needs fixing?", desc: "Select the municipal service category that best matches the issue observed.", fields: ['cat'], Component: FileReportCategory },
  { title: "Where is it located?", desc: "Provide street address, RT/RW, or notable landmark for inspection crews.", fields: ['area', 'address'], Component: FileReportLocation },
  { title: "Attach evidence", desc: "Reports with photographic proof or audio notes are prioritized by field dispatchers.", fields: [], Component: FileReportEvidence },
  { title: "Report summary & declaration", desc: "Review the report and choose notifications before final submission.", fields: ['title', 'details', 'asAnon', 'name', 'email', 'phone', 'alertEmail', 'alertSms', 'confirmation'], Component: FileReportDetails }
]

export default function FileReport() {
  const { user } = useUser()
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const { create } = useReports()

  const { Component, fields, title, desc } = STEPS[step]
  const isLast = step === STEPS.length - 1

  async function next() {
    const valid = await methods.trigger(fields)
    if (valid) setStep(s => s + 1)
  }

  const methods = useForm({
    resolver: yupResolver(CreateReportSchema),
    mode: 'onSubmit',
  })

  useEffect(() => {
    if (!user)
      navigate('/')

  }, [user, navigate])


  function onSubmit(data) {
    if (!user.id)
      return

    const created = create(data, user.id)

    navigate(`/receipt/${created.id}`)
  }

  return (
    <main className="mx-auto container max-w-272 grow px-4 mt-10 md:mt-16" id="new-report">
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
            <li data-current={step === 0}
              className="px-4 py-3 flex gap-2 rounded-full data-[current=true]:bg-primary data-[current=true]:text-on-primary data-[current=true]:*:first:text-white/75">
              <span className="font-mono">01</span>
              Topic
            </li>
            <li data-current={step === 1}
              className="px-4 py-3 flex gap-2 rounded-full data-[current=true]:bg-primary data-[current=true]:text-on-primary data-[current=true]:*:first:text-white/75">              <span className="font-mono">02</span>
              Location
            </li>
            <li data-current={step === 2}
              className="px-4 py-3 flex gap-2 rounded-full data-[current=true]:bg-primary data-[current=true]:text-on-primary data-[current=true]:*:first:text-white/75">              <span className="font-mono">03</span>
              Proof
            </li>
            <li data-current={step === 3}
              className="px-4 py-3 flex gap-2 rounded-full data-[current=true]:bg-primary data-[current=true]:text-on-primary data-[current=true]:*:first:text-white/75">
              <span className="font-mono">04</span>
              Review & Send
            </li>
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
          <a href="/feed.html" className="text-sm font-semibold text-primary">Cancel and return to feed</a>
        </section>
        <section className="bg-surface-container p-8 rounded-2xl border border-outline">
          <div>
            <div>
              <hgroup
                className="*:first:text-xs *:first:text-on-surface-low *:first:font-mono *:first:font-medium *:first:uppercase *:last:font-serif *:last:text-secondary *:last:font-semibold *:last:text-2xl *:last:mt-2">
                <p>Step {step + 1} of {STEPS.length}</p>
                <h2>{title}</h2>
              </hgroup>
              <p className="text-sm mt-2">{desc}</p>
            </div>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
                <Component />
                <div
                  className="mt-4 pt-6 flex flex-wrap justify-between font-semibold text-sm items-center border-t border-outline">
                  {step > 0
                    ? <button type="button" className="text-primary" onClick={() => setStep(s => s - 1)}>← Back</button>
                    : <Link className="text-primary" to="/">Cancel</Link>
                  }
                  {isLast
                    ? <button type="submit" key="submit" className="flex items-center px-5 py-3 bg-primary text-on-primary rounded-full">Dispatch report →</button>
                    : <button type="button" key="next" className="flex items-center px-5 py-3 bg-primary text-on-primary rounded-full" onClick={next}>Continue →</button>}

                </div>
              </form>
            </FormProvider>
          </div>
        </section>
      </div>
    </main>)
}