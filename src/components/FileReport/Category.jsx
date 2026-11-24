import { useFormContext } from "react-hook-form"
import FieldError from "../ui/FieldError"
import { REPORT_CATEGORIES, REPORT_FIELDS } from "../../schemas/report"

const categories = Object.entries(REPORT_CATEGORIES)

function FileReportCategory() {
  const { register, formState: { errors } } = useFormContext()
  return (
    <fieldset id="new-report-1">
      <legend className="sr-only">
        Select the municipal service category that best matches the issue observed.
      </legend>
      <div className="grid grid-cols-2 gap-2 mt-6">
        {categories.map(([key, value]) => (
          <label
            key={key}
            className="px-4 py-5 flex flex-col gap-2 border border-outline rounded-xl [&:has(input:checked)]:bg-success-container [&:has(input:checked)]:border-on-success-container">
            <span className="flex flex-wrap items-center gap-2" key={key}>
              <value.Icon className="text-primary" />
              <span className="text-sm font-semibold text-secondary grow">{value.label}</span>
              <span
                className="px-2 py-1 bg-success-container text-on-success-container text-2xs rounded-full">{value.sla}
                SLA</span>
            </span>
            <span className="text-xs font-medium">{value.short}</span>
            <span className="text-xs text-on-surface-low">{value.long}</span>
            <input className="hidden" type="radio" name={REPORT_FIELDS.cat} value={key} {...register('cat')} />
          </label>
        ))}
      </div>
      <FieldError error={errors.cat} />
    </fieldset>
  )
}

export default FileReportCategory