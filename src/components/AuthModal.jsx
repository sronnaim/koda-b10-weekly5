import { LuMail, LuArrowRight, LuX, LuUser, LuCircleCheckBig } from "react-icons/lu"
import PasswordField from "./PasswordField"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { CreateUserSchema } from "../schemas/users"
import { useUsers } from "../hooks/useUsers"
import { useNavigate } from "react-router"
import { LoginSchema } from "../schemas/auth"
import { useUser } from "../hooks/useUser"
import FieldError from "./FieldError"

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
    <button className={`text-medium grow py-4 rounded-full ${cn}`} onClick={() => setMode(type === 'login' ? 'login' : 'reg')}>{mode === 'login' ? 'Sign In Existing Account' : 'Register as Citizen'}</button>
  )
}

function LoginForm() {
  const { login } = useUser()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) })

  function onSubmit(data) {
    const user = login(data.email, data.password)

    if (!user) {
      setError('password', { message: "Incorrect credentials" })
      return
    }

    window.alert('Logged in successfully!')
    navigate('/profile')
  }

  return (
    <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
      <label className="font-mono uppercase text-xs flex flex-col font-medium">
        Email Address
        <span className="focus-within:shadow-[0_0_0_3px_black] focus-within:shadow-primary/50 focus-within:outline-primary focus-within:outline-1 flex items-center text-on-surface-low gap-2 border px-3 mt-2 border-outline rounded-xl">
          <LuMail />
          <input type="email" autoComplete="email" name="email"
            placeholder="Enter your Email" className="py-3 w-full focus:shadow-none! focus:outline-none! focus:border-none!" {...register('email')} />
        </span>
        <FieldError error={errors.email} />
      </label>
      <PasswordField type="password" autoComplete="current-password" name="password"
        placeholder="Enter your password" label="Password" {...register('password')}>
        <FieldError error={errors.password} />
      </PasswordField>
      <button type="submit" className="mb-6 mt-4 flex items-center w-full justify-center bg-primary text-on-primary text-xs rounded-full gap-2 p-2">Sign In <LuArrowRight /></button>
    </form>
  )
}

function RegisterForm() {
  const { register: registerUser } = useUsers()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(CreateUserSchema) })

  async function onSubmit(data) {
    const user = registerUser(data)

    if (!user) {
      setError('email', { message: 'Email is already registered' })
      return
    }

    window.alert('Account created successfully!')
    navigate('/feed')
  }

  return (
    <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
      <label className="font-mono uppercase text-xs flex flex-col font-medium">
        Full Name (Nama Lengkap) *
        <span className="focus-within:shadow-[0_0_0_3px_black] focus-within:shadow-primary/50 focus-within:outline-primary focus-within:outline-1 flex items-center text-on-surface-low gap-2 border px-3 mt-2 border-outline rounded-xl">
          <LuUser />
          <input type="text" autoComplete="name"
            placeholder="e.g Budi Santoso" name="name" className="py-3 w-full focus:shadow-none! focus:outline-none! focus:border-none!"
            {...register('fullName')}
          />
        </span>
        <FieldError error={errors.fullName} />
      </label>
      <div className="flex items-center gap-4 w-full flex-wrap">
        <label className="font-mono uppercase text-xs flex flex-col font-medium grow">
          Email Address *
          <input type="email" autoComplete="email" className="border p-3 mt-2 border-outline rounded-xl text-on-surface-low"
            placeholder="e.g. budi@wargareport.id" name="email" {...register('email')} />
          <FieldError error={errors.email} />
        </label>
        <label className="font-mono uppercase text-xs flex flex-col font-medium">
          Phone / Whatsapp *
          <input type="tel" autoComplete="tel" className="border p-3 mt-2 border-outline rounded-xl text-on-surface-low"
            placeholder="+62 851-6666-7777" name="phone" {...register('phone')} />
          <FieldError error={errors.phone} />
        </label>
      </div>
      <label className="font-mono uppercase text-xs flex flex-col font-medium">
        NIK
        <input type="text" className="border p-3 mt-2 border-outline rounded-xl text-on-surface-low"
          placeholder="16 digits for verified resident badge (e.g. 3174...)" name="nik" {...register('nik')} />
        <FieldError error={errors.nik} />
      </label>
      <PasswordField type="password" autoComplete="new-password"
        placeholder="Create a password" name="password" label="Password *" {...register('password')}>
        <FieldError error={errors.password} />
      </PasswordField>
      <button type="submit" className="mb-6 flex items-center w-full justify-center bg-primary text-on-primary text-xs rounded-full gap-2 p-2">
        <LuCircleCheckBig /> Create Account & Continue</button>
    </form>
  )
}

/**
 * @typedef {Object} AuthModalProps
 * @property {import("react").RefObject} dialogRef
 */

/**
 * 
 * @param {AuthModalProps} props 
 */
function AuthModal({ dialogRef }) {
  const [mode, setMode] = useState('login')

  function handleClose() {
    if (dialogRef.current)
      dialogRef.current.close()
  }
  return (
    <dialog ref={dialogRef} id="login" className="text-on-surface backdrop:bg-on-surface-high/25 backdrop:backdrop-blur-lg justify-center w-full bg-transparent max-w-139 m-auto items-center z-100 open:flex">
      <div className="rounded-2xl overflow-hidden border w-full  bg-surface-container border-outline mx-4 *:px-6 ">
        <hgroup className="bg-surface py-6 relative grid grid-cols-[1fr_auto]">
          <h1 className="text-lg text-secondary font-semibold font-serif">Sign In to WargaReport</h1>
          <p className="text-xs col-span-2">Sign in to lodge a complaint or upvote issues</p>
          <button id="close-auth" type="button" className="row-start-1 col-start-2 aspect-square flex justify-center items-center" onClick={handleClose}>
            <span className="sr-only">Close Authentication Modal</span>
            <LuX size={14} className="text-on-surface" />
          </button>
        </hgroup>
        <div className="mt-4 gap-2 flex flex-wrap text-sm *:truncate">
          <ModeBtn mode={mode} type="login" setMode={setMode} />
          <ModeBtn mode={mode} type="reg" setMode={setMode} />
        </div>
        {mode === 'login' ? <LoginForm /> : <RegisterForm />}
      </div>
    </dialog>
  )
}

export default AuthModal