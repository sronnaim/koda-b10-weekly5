import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { LuArrowRight, LuSearch } from "react-icons/lu"
import { VscQuestion } from "react-icons/vsc"
import { Link, useNavigate } from "react-router"
import { object, string } from "yup"
import FieldError from "../components/ui/FieldError"

const searchSchema = object({
  q: string().matches(/^CMP-20[2-9][0-9]-\d{5}$/, 'Invalid Report ID').required('Report ID required')
})

export default function Track() {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(searchSchema) })

  function onSubmit(data) {
    navigate(`/report/${data.q}`)
  }
  return (
    <main className="mx-auto container max-w-272 grow px-4 mt-10 md:mt-16">
      <div className="grid md:grid-cols-[auto_1fr] gap-4 md:gap-8 mx-auto items-start">
        <div className=" flex flex-col max-w-150 gap-6 p-8 rounded-2xl bg-surface-container border border-outline">
          <div>
            <hgroup
              className="*:first:text-xs *:first:text-on-surface-low *:first:font-mono *:first:font-medium *:first:uppercase *:last:font-serif *:last:text-secondary *:last:font-semibold *:last:text-4xl *:last:mt-2">
              <p>Citizen Portal</p>
              <h1>Track your complaint</h1>
            </hgroup>
            <p className="text-sm mt-2">
              Enter your official case reference number to view real-time triage progress, inspector
              assignment,
              and official replies.
            </p>
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <label className="font-mono uppercase text-xs flex flex-col font-medium">
              Complaint Reference ID *
              <input type="text" className="border p-3 mt-2 border-outline rounded-xl"
                placeholder="e.g. CMP-2026-8841" name="q" {...register('q')} />
              <FieldError error={errors.q} />
            </label>
            <label className="font-mono uppercase text-xs flex flex-col font-medium">
              Email address or phone (optional verification)
              <input type="email" className="border p-3 mt-2 border-outline rounded-xl"
                placeholder="citizen@example.com" />
            </label>
            <button
              className="inline-flex items-center px-5 py-3 gap-2 bg-primary text-on-primary text-xs font-semibold rounded-full w-fit">
              <LuSearch />
              Lookup report status
              <LuArrowRight />
            </button>
          </form>
          <p className="flex flex-wrap gap-1 border-t border-outline pt-4 text-xs text-on-surface-low">
            Try a sample record:
            <Link href="/report1.html" className="font-semibold font-mono text-primary">CMP-2026-8841</Link>
            ·
            <Link href="/report3.html" className="font-semibold font-mono text-primary">CMP-2026-8794 (Resolved)</Link>
          </p>
        </div>
        <aside className="grid grid-cols-[auto_1fr] gap-4 text-xs max-w-150 md:max-w-none">
          <VscQuestion className="text-on-surface-low row-span-2" />
          <p>
            Your tracking ID was displayed on your confirmation receipt and
            sent to your registered email address immediately upon intake.
          </p>
          <p>
            Reports filed anonymously can only be tracked using this unique
            key; officers cannot retrieve records by name without it.
          </p>
          <Link href="/feed.html"
            className="col-span-2 mt-4 pt-4 border-t border-outline font-semibold text-primary">Lost your tracking
            ID? Search
            recent reports by location →</Link>
        </aside>
      </div>
    </main>
  )
}