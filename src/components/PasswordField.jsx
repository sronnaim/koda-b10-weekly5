import { useState } from 'react'
import { LuEye, LuEyeClosed, LuLock } from 'react-icons/lu'

/**
 * @typedef {Object} PwFieldProps
 * @property {string} label
 */

/**
 * 
 * @param {React.ButtonHTMLAttributes<HTMLInputElement> & PwFieldProps} props 
 * @returns 
 */
function PasswordField({ label, children, ...props }) {
  const [show, setShow] = useState(false)

  return (
    <label className="font-mono uppercase text-xs flex flex-col font-medium">
      {label}
      <span className="focus-within:shadow-[0_0_0_3px_black] focus-within:shadow-primary/50 focus-within:outline-primary focus-within:outline-1 flex items-center gap-2 text-on-surface-low border px-3 mt-2 border-outline rounded-xl">
        <LuLock />
        <input className="py-3 w-full focus:shadow-none! focus:outline-none! focus:border-none! appearance-none" {...props} type={show ? 'text' : 'password'} />
        <button type="button" onClick={() => setShow(!show)}>
          {show ? <LuEyeClosed /> : <LuEye />}
        </button>
      </span>
      {children}
    </label>
  )
}

export default PasswordField