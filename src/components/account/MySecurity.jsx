import { useForm } from 'react-hook-form'
import PasswordField from '../PasswordField'
import { yupResolver } from '@hookform/resolvers/yup'
import { UpdatePasswordSchema } from '../../schemas/users'
import { useOutletContext } from 'react-router'
import FieldError from '../ui/FieldError'
import { authenticate, updatePassword } from '../../api/users'
import { refresh } from '../../redux/slices/auth.slice'
import { useDispatch } from 'react-redux'

function MySecurity() {
  const user = useOutletContext()
  const rdxDispatch = useDispatch()

  const { register, handleSubmit, setError, formState: { errors } } = useForm({
    resolver: yupResolver(UpdatePasswordSchema)
  })

  function onSubmit(data) {
    const validUser = authenticate(user.email, data.current)

    if (!validUser) {
      setError('current', { type: 'manual', message: 'Invalid current password' })
      return
    }

    updatePassword(validUser.id, data.newPassword)
    rdxDispatch(refresh())
    window.alert('Password updated!')
  }

  return (
    <div className="flex flex-col gap-4 bg-surface-container rounded-2xl px-8 py-6 border border-outline md:max-w-160 mt-4"
      id="security">
      <hgroup>
        <h2 className="text-lg font-serif font-semibold text-secondary">Security
        </h2>
        <p className="text-xs">Change the password used to sign in to your WargaReport account.</p>
      </hgroup>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <PasswordField label='Current Password' placeholder="Current password" {...register('current')}>
          <FieldError error={errors.current} />
        </PasswordField>
        <PasswordField label='New Password' placeholder="At least 8 characters" {...register('newPassword')}>
          <FieldError error={errors.newPassword} />
        </PasswordField>
        <PasswordField label='Confirm New Password' placeholder="Confirm new password" {...register('confirm')}>
          <FieldError error={errors.confirm} />
        </PasswordField>
        <button type="submit"
          className="w-fit font-semibold px-4 py-2 bg-primary mt-2 text-on-primary rounded-full">Update
          password</button>
      </form>
    </div>
  )
}

export default MySecurity