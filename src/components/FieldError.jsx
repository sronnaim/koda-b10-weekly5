function FieldError({ error }) {
  if (!error) return null
  return <span className="text-xs text-danger mt-2 text-2xs">{error.message}</span>
}

export default FieldError