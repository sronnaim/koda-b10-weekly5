import { useFormContext } from 'react-hook-form'
import { LuLock } from 'react-icons/lu'
import FieldError from './FieldError'
import { useUser } from '../hooks/useUser'

function FileReportDetails() {
  const { user } = useUser()
  const { register, formState: { errors } } = useFormContext()

  return (
    <div id="new-report-4" className="mt-6 flex flex-col gap-4">
      <label className="font-mono uppercase text-xs flex flex-col font-medium">
        <span>Concise Title *</span>
        <input name="title"
          className="border p-3 mt-2 border-outline rounded-xl font-sans text-sm text-secondary"
          type="text"{...register('title')} />
        <FieldError error={errors.title} />
      </label>
      <label>
        <span
          className="flex flex-wrap gap-2 justify-between font-mono uppercase text-xs font-medium">
          <span>Incident Observation Details *</span>
          <span className="text-on-surface-low text-normal normal-case">100 chars (min 15)</span>
        </span>
        <textarea name="details"
          className="w-full border p-3 mt-2 border-outline rounded-xl font-sans text-sm text-secondary"
          {...register('details')}
        />
        <FieldError error={errors.details} />
      </label>
      <label
        className="bg-success-container border border-on-success-container/25 text-on-success-container p-4 gap-2 rounded-2xl flex flex-wrap items-center">
        <LuLock />
        <span className="flex flex-col text-xs grow">
          <span className="font-semibold text-secondary">Post anonymously on public feed</span>
          <span className="text-on-surface-low">Your name will be masked as Warga Anonim on open
            records.</span>
        </span>
        <input type="checkbox" name="as-anon" {...register('asAnon')} />
        <FieldError error={errors.asAnon} />
      </label>
      <div className="grid md:grid-cols-2 gap-4">
        <label className="font-mono uppercase text-xs flex flex-col font-medium">
          Filer Name *
          <input
            className="border p-3 mt-2 border-outline rounded-xl font-sans text-sm text-secondary"
            name="name" type="text" autocomplete="name" defaultValue={user?.fullName} {...register('name')} />
          <FieldError error={errors.name} />
        </label>

        <label className="font-mono uppercase text-xs flex flex-col font-medium">
          Email for Status Alerts *
          <input
            className="border p-3 mt-2 border-outline rounded-xl font-sans text-sm text-secondary"
            name="email" type="email" defaultValue={user?.email} autocomplete="email" {...register('email')} />
          <FieldError error={errors.email} />
        </label>
        <label className="font-mono uppercase text-xs flex flex-col font-medium">
          Phone / Whatsapp
          <input
            className="border p-3 mt-2 border-outline rounded-xl font-sans text-sm text-secondary"
            name="phone" type="tel" defaultValue={user?.phone} autocomplete="tel" {...register('phone')} />
          <FieldError error={errors.phone} />
        </label>
        <fieldset className="grid grid-cols-2 w-fit items-end text-xs [&_label]:py-2 *:flex *:gap-2">
          <legend className="font-mono uppercase flex flex-col font-medium">
            Status
            Alert
            Channels</legend>
          <label>
            <input type="checkbox" name="alert-email" {...register('alertEmail')} />
            Email
            <FieldError error={errors.alertEmail} />
          </label>
          <label>
            <input type="checkbox" name="alert-sms" {...register('alertSms')} />
            SMS
            <FieldError error={errors.alertSms} />
          </label>
        </fieldset>
      </div>
      <label className="text-xs flex gap-2 items-start">
        <input type="checkbox" name="confirmation" className="translate-y-[0.2rem]" {...register('confirmation')} />
        I confirm this incident was authentically observed on-site under Law No.
        25/2009.
      </label>
      <FieldError error={errors.confirmation} />
    </div>
  )
}

export default FileReportDetails