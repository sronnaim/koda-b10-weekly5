import { useFormContext } from 'react-hook-form'
import { LuChevronDown, LuChevronUp, LuMapPin } from 'react-icons/lu'
import FieldError from '../ui/FieldError'
import { useEffect, useState } from 'react'
import { getAreas } from '../../api/areas'

function FileReportLocation() {
  const { register, watch, setValue, formState: { errors } } = useFormContext()
  const [areas, setAreas] = useState([])

  const areaId = watch('area')
  const area = areas.find(area => area.id === areaId)

  useEffect(() => {
    (async () => {
      setAreas(await getAreas())
    })()
  }, [setAreas])

  return (
    <div id="new-report-2" className="flex flex-col gap-6 mt-8">
      <div className="flex flex-col">
        <label htmlFor="area-select"
          className="font-mono uppercase text-xs flex flex-col font-medium">Kelurahan / Kecamatan
          & Wilayah</label>
        <div className="relative mt-2">
          {
            areas.length > 0 &&
            <select name="area" id="area-select"
              className="p-3 border border-outline rounded-xl appearance-none w-full peer" {...register('area')}>
              {areas.map(area => <option value={area.id} key={area.id}>{area.label}</option>)}
            </select>
          }

          <LuChevronDown className="absolute right-4 top-4 inline-block peer-[:open]:hidden" />
          <LuChevronUp className="absolute right-4 top-4 hidden peer-[:open]:inline-block" />
        </div>
        <FieldError error={errors.area} />
      </div>
      {
        areas.length > 0 && <fieldset className="flex flex-wrap items-center gap-2">
          <legend className="mb-2 font-mono uppercase text-xs font-medium">
            Common areas in {area && area.label}</legend>
          {area && area.places.length > 0 && area.places.map(place => <label key={place.label}
            className="inline-flex items-center text-xs border px-3 border-outline font-medium gap-1 py-2 rounded-full [&:has(input:checked)]:bg-primary [&:has(input:checked)]:text-on-primary cursor-pointer">
            {place.label}
            <input type="radio" name="places-set" value={place.address} className="hidden" onClick={(e) => setValue('address', e.currentTarget.value)} />
          </label>)
          }
        </fieldset>
      }
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
        {/* <input type="text" className="hidden" value="6.2088,106.8456" name="location" /> */}
      </label>
    </div>
  )
}

export default FileReportLocation