function MyAlerts() {
  return (
    <div className="bg-surface-container rounded-2xl px-8 py-6 border border-outline md:max-w-160 mt-4" id="alerts">
      <hgroup>
        <h2 className="text-lg font-serif font-semibold text-secondary">Dispatch Notification Preferences</h2>
        <p className="text-xs">Control when municipal bureaus may send automated status alerts.</p>
      </hgroup>
      <form action="#notif" className="flex flex-col gap-4 mt-4">
        <label for="email-status" className="text-xs grid grid-cols-[auto_1fr] items-start gap-2">
          <input type="checkbox" name="email-status" id="email-status" className="row-span-2" />
          <span className="font-semibold text-secondary">Email Status Transitions</span>
          <span className="text-on-surface-low">Receive an email whenever an inspector triages, assigns, or
            resolves your case.</span>
        </label>
        <label for="email-status" className="text-xs grid grid-cols-[auto_1fr] items-start gap-2">
          <input type="checkbox" name="sms-urgent" id="sms-urgent" className="row-span-2" />
          <span className="font-semibold text-secondary">Urgent SMS Alerts</span>
          <span className="text-on-surface-low">Receive text messages when emergency crews need physical gate
            access.</span>
        </label>
        <label for="email-status" className="text-xs grid grid-cols-[auto_1fr] items-start gap-2">
          <input type="checkbox" name="email-status" id="email-status" className="row-span-2" />
          <span className="font-semibold text-secondary">Weekly Ward Resolution Digest</span>
          <span className="text-on-surface-low">Summary of all public infrastructure projects completed in
            your postal code.</span>
        </label>
        <button type="submit"
          className="w-fit font-semibold px-4 py-2 bg-primary mt-2 text-on-primary rounded-full">Update alert
          preferences</button>
      </form>
    </div>
  )
}

export default MyAlerts