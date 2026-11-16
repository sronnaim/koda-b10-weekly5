import { useState } from "react"
import { LuMail, LuArrowRight, LuX, LuUser, LuCircleCheckBig } from "react-icons/lu"
import PasswordField from "./PasswordField"

/**
 * @typedef {Object} ModeBtnProps
 * @property {'reg' | 'login'} type
 * @property {'reg' | 'login'} mode
 * @property {('reg' | 'login') => void} setMode
 */

/**
 * @param {ModeBtnProps} props
 */
function ModeBtn({ mode, type, setMode }) {
  const cn = mode === type ? 'bg-primary text-on-primary' : 'bg-surface'
  return (
    <button className={`text-medium py-4 rounded-full ${cn}`} onClick={() => setMode(type === 'login' ? 'login' : 'reg')}>{mode === 'login' ? 'Sign In Existing Account' : 'Register as Citizen'}</button>
  )
}

function LoginForm() {
  return (
    <form className="mt-4 flex flex-col gap-4">
      <label className="font-mono uppercase text-xs flex flex-col font-medium">
        Email Address
        <span className="focus-within:shadow-[0_0_0_3px_black] focus-within:shadow-primary/50 focus-within:outline-primary focus-within:outline-1 flex items-center text-on-surface-low gap-2 border px-3 mt-2 border-outline rounded-xl">
          <LuMail />
          <input type="email" autoComplete="email" name="email"
            placeholder="Enter your Email" className="py-3 w-full [&:focus]:shadow-none [&:focus]:outline-none [&:focus]:border-none" />
        </span>
      </label>
      <PasswordField type="password" autoComplete="current-password" name="password"
        placeholder="Enter your password" label="Password" />
      <button type="submit" className="mb-6 mt-4 flex items-center w-full justify-center bg-primary text-on-primary text-xs rounded-full gap-2 p-2">Sign In <LuArrowRight /></button>
    </form>
  )
}

function RegisterForm() {
  return (
    <form className="mt-4 flex flex-col gap-4">
      <label className="font-mono uppercase text-xs flex flex-col font-medium">
        Full Name (Nama Lengkap) *
        <span className="focus-within:shadow-[0_0_0_3px_black] focus-within:shadow-primary/50 focus-within:outline-primary focus-within:outline-1 flex items-center text-on-surface-low gap-2 border px-3 mt-2 border-outline rounded-xl">
          <LuUser />
          <input type="text" autoComplete="name"
            placeholder="e.g Budi Santoso" name="name" className="py-3 w-full [&:focus]:shadow-none [&:focus]:outline-none [&:focus]:border-none" />
        </span>
      </label>
      <div className="flex items-center gap-4 w-full flex-wrap">
        <label className="font-mono uppercase text-xs flex flex-col font-medium grow">
          Email Address *
          <input type="email" autoComplete="email" className="border p-3 mt-2 border-outline rounded-xl text-on-surface-low"
            placeholder="e.g. budi@wargareport.id" name="email" />
        </label>
        <label className="font-mono uppercase text-xs flex flex-col font-medium">
          Phone / Whatsapp *
          <input type="tel" autoComplete="tel" className="border p-3 mt-2 border-outline rounded-xl text-on-surface-low"
            placeholder="+62 851-6666-7777" name="phone" />
        </label>
      </div>
      <label className="font-mono uppercase text-xs flex flex-col font-medium">
        NIK
        <input type="text" className="border p-3 mt-2 border-outline rounded-xl text-on-surface-low"
          placeholder="16 digits for verified resident badge (e.g. 3174...)" name="nik" />
      </label>
      <PasswordField type="password" autoComplete="new-password"
        placeholder="Create a password" name="password" label="Password *" />
      <button type="submit" className="mb-6 flex items-center w-full justify-center bg-primary text-on-primary text-xs rounded-full gap-2 p-2">
        <LuCircleCheckBig /> Create Account & Continue</button>
    </form>
  )
}

/**
 * @typedef {Object} AuthModalProps
 * @property {(boolean) => void} onClose
 */

/**
 * 
 * @param {AuthModalProps} props 
 */
function AuthModal({ onClose }) {
  const [mode, setMode] = useState("login")

  return (
    <dialog id="login" className="absolute inset-0 bg-secondary/55 backdrop-blur-sm flex justify-center items-center w-full h-full z-100">
      <div className="bg-surface-container rounded-2xl overflow-hidden border w-full max-w-139 border-outline mx-4 *:px-6 ">
        <hgroup className="bg-surface py-6 relative grid grid-cols-[1fr_auto]">
          <h1 className="text-lg text-secondary font-semibold font-serif">Sign In to WargaReport</h1>
          <p className="text-xs col-span-2">Sign in to lodge a complaint or upvote issues</p>
          <button id="close-auth" type="button" className="row-start-1 col-start-2 aspect-square flex justify-center items-center" onClick={onClose}>
            <span className="sr-only">Close Authentication Modal</span>
            <LuX />
          </button>
        </hgroup>
        <div className="mt-4 grid gap-2 grid-cols-2 text-sm *:truncate">
          <ModeBtn mode={mode} type="login" setMode={setMode} />
          <ModeBtn mode={mode} type="reg" setMode={setMode} />
        </div>
        {mode === 'login' ? <LoginForm /> : <RegisterForm />}
      </div>
    </dialog>
  )
}

export default AuthModal