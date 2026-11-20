import { LuEye } from 'react-icons/lu'

function MySecurity() {
  return (
    <div className="flex flex-col gap-4 bg-surface-container rounded-2xl px-8 py-6 border border-outline md:max-w-160 mt-4"
      id="security">
      <hgroup>
        <h2 className="text-lg font-serif font-semibold text-secondary">Security
        </h2>
        <p className="text-xs">Change the password used to sign in to your WargaReport account.</p>
      </hgroup>
      <form action="#security" className="flex flex-col gap-4">
        <label
          className="font-mono uppercase text-xs flex flex-col font-medium [&_input:focus]:shadow-none [&_input:focus]:border-none [&_input:focus]:rounded-none">
          Current Password
          <span className="border flex items-center p-3 mt-2 border-outline rounded-xl">
            <input type="password" autocomplete="current-password" name="current"
              placeholder="Enter current password" className="grow" />
            <button type="button">
              <LuEye />
              <span className="sr-only">Show passowrd</span>
            </button>
          </span>
        </label>
        <label
          className="font-mono uppercase text-xs flex flex-col font-medium [&_input:focus]:shadow-none [&_input:focus]:border-none [&_input:focus]:rounded-none">
          New Password
          <span className="border flex items-center p-3 mt-2 border-outline rounded-xl">
            <input type="password" autocomplete="new-password" name="new"
              placeholder="At least 8 characters" className="grow" />
            <button type="button">
              <LuEye />
              <span className="sr-only">Show passowrd</span>
            </button>
          </span>
        </label>
        <label
          className="font-mono uppercase text-xs flex flex-col font-medium [&_input:focus]:shadow-none [&_input:focus]:border-none [&_input:focus]:rounded-none">
          Confirm New Password
          <span className="border flex items-center p-3 mt-2 border-outline rounded-xl">
            <input type="password" autocomplete="new-password" name="new"
              placeholder="Re-enter new password" className="grow" />
            <button type="button">
              <LuEye />
              <span className="sr-only">Show passowrd</span>
            </button>
          </span>

        </label>
        <button type="submit"
          className="w-fit font-semibold px-4 py-2 bg-primary mt-2 text-on-primary rounded-full">Update
          password</button>
      </form>
    </div>
  )
}

export default MySecurity