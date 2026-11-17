import { useFormContext } from 'react-hook-form'
import { LuChevronDown, LuChevronUp, LuMapPin } from 'react-icons/lu'
import FieldError from './FieldError'

function FileReportLocation() {
  const { register, formState: { errors } } = useFormContext()
  return (
    <div id="new-report-2" className="flex flex-col gap-6 mt-8">
      <div className="flex flex-col">
        <label htmlFor="area-select"
          className="font-mono uppercase text-xs flex flex-col font-medium">Kelurahan / Kecamatan
          & Wilayah</label>
        <div className="relative mt-2">
          <select name="area" id="area-select"
            className="p-3 border border-outline rounded-xl appearance-none w-full peer" {...register('area')}>
            <option value="a1">Coblong</option>
            <option value="a2">Jl. Dago</option>
            <option value="a3">Institut Teknologi Bandung (ITB)</option>
            <option value="a4">Simpang Dago</option>
            <option value="a5">Pasar Dago</option>
            <option value="a6">Jl. Ir. H. Juanda</option>
          </select>
          <LuChevronDown className="absolute right-4 top-4 inline-block peer-[:open]:hidden" />
          <LuChevronUp className="absolute right-4 top-4 hidden peer-[:open]:inline-block" />
        </div>
        <FieldError error={errors.area} />
      </div>
      <fieldset className="flex flex-wrap items-center gap-2">
        <legend className="mb-2 font-mono uppercase text-xs font-medium">
          Common areas in Coblong · Kota Bandung</legend>
        <label
          className="inline-flex items-center text-xs border px-3 border-outline font-medium gap-1 py-2 rounded-full [&:has(input:checked)]:bg-primary [&:has(input:checked)]:text-on-primary cursor-pointer">
          Jl. Dago
          <input type="radio" name="common-area" value="ca1" className="hidden" />
        </label>
        <label
          className="inline-flex items-center text-xs border px-3 border-outline font-medium gap-1 py-2 rounded-full [&:has(input:checked)]:bg-primary [&:has(input:checked)]:text-on-primary cursor-pointer">
          Institut Teknologi Bandung (ITB)
          <input type="radio" name="common-area" value="ca2" className="hidden" />
        </label>
        <label
          className="inline-flex items-center text-xs border px-3 border-outline font-medium gap-1 py-2 rounded-full [&:has(input:checked)]:bg-primary [&:has(input:checked)]:text-on-primary cursor-pointer">
          Simpang Dago
          <input type="radio" name="common-area" value="ca3" className="hidden" />
        </label>
        <label
          className="inline-flex items-center text-xs border px-3 border-outline font-medium gap-1 py-2 rounded-full [&:has(input:checked)]:bg-primary [&:has(input:checked)]:text-on-primary cursor-pointer">
          Pasar Dago
          <input type="radio" name="common-area" value="ca4" className="hidden" />
        </label>
        <label
          className="inline-flex items-center text-xs border px-3 border-outline font-medium gap-1 py-2 rounded-full [&:has(input:checked)]:bg-primary [&:has(input:checked)]:text-on-primary cursor-pointer">
          Jl. Ir. H. Juanda
          <input type="radio" name="common-area" value="ca5" className="hidden" />
        </label>
      </fieldset>
      <label className="font-mono uppercase text-xs flex flex-col font-medium">
        Street Address, RT/RW, or Landmark *
        <input type="text" autoComplete="street-address"
          className="border p-3 mt-2 border-outline rounded-xl"
          placeholder="e.g. Jl. Tamansari depan Kebun Binatang" name="address" {...register('address')} />
        <FieldError error={errors.address} />
      </label>
      <label role="button"
        className="flex text-xs justify-between rounded-lg border border-outline bg-surface p-3 flex-wrap gap-2 items-center font-semibold">
        <LuMapPin />
        Coordinates auto-pinned
        <span className="font-mono text-sm text-on-surface-low">6.2088° S, 106.8456° E (WIB)</span>
        <input type="text" className="hidden" value="6.2088,106.8456" name="location" />
      </label>
    </div>
  )
}

export default FileReportLocation