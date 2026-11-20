import { useForm } from "react-hook-form"
import { useOutletContext } from "react-router"
import { ALERT_OPTIONS, UpdateAlertsSchema } from "../../schemas/users"
import { yupResolver } from "@hookform/resolvers/yup"
import { useUsers } from "../../hooks/useUsers"
import FieldError from "../ui/FieldError"

function MyAlerts() {
  const user = useOutletContext()
  const { updateUser } = useUsers()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(UpdateAlertsSchema),
    defaultValues: { alerts: user.alerts }
  })

  function onSubmit(data) {
    updateUser(user.id, { ...user, alerts: data.alerts })
    window.alert('Preferences updated')
  }

  return (
    <div className="bg-surface-container rounded-2xl px-8 py-6 border border-outline md:max-w-160 mt-4" id="alerts">
      <hgroup>
        <h2 className="text-lg font-serif font-semibold text-secondary">Dispatch Notification Preferences</h2>
        <p className="text-xs">Control when municipal bureaus may send automated status alerts.</p>
      </hgroup>
      <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email-status" className="text-xs grid grid-cols-[auto_1fr] items-start gap-2">
          <input type="checkbox" value={ALERT_OPTIONS.STATUS_UPDATE} id="email-status" className="row-span-2" {...register('alerts')} />
          <span className="font-semibold text-secondary">Email Status Transitions</span>
          <span className="text-on-surface-low">Receive an email whenever an inspector triages, assigns, or
            resolves your case.</span>
        </label>
        <label htmlFor="urgent-sms" className="text-xs grid grid-cols-[auto_1fr] items-start gap-2">
          <input type="checkbox" value={ALERT_OPTIONS.URGENT_SMS} id="urgent-sms" className="row-span-2" {...register('alerts')} />
          <span className="font-semibold text-secondary">Urgent SMS Alerts</span>
          <span className="text-on-surface-low">Receive text messages when emergency crews need physical gate
            access.</span>
        </label>
        <label htmlFor="weekly-digest" className="text-xs grid grid-cols-[auto_1fr] items-start gap-2">
          <input type="checkbox" value={ALERT_OPTIONS.WEEKLY_DIGEST} id="weekly-digest" className="row-span-2" {...register('alerts')} />
          <span className="font-semibold text-secondary">Weekly Ward Resolution Digest</span>
          <span className="text-on-surface-low">Summary of all public infrastructure projects completed in
            your postal code.</span>
        </label>
        <button type="submit"
          className="w-fit font-semibold px-4 py-2 bg-primary mt-2 text-on-primary rounded-full">Update alert
          preferences</button>
        <FieldError error={errors.alerts} />
      </form>
    </div>
  )
}

export default MyAlerts