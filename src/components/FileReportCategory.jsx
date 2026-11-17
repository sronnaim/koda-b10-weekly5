import { useFormContext } from "react-hook-form"
import { LuBuilding, LuDroplet, LuSun, LuTrash2, LuTrees, LuTriangleAlert, LuVolume2 } from "react-icons/lu"
import FieldError from "./FieldError"

function FileReportCategory() {
  const { register, formState: { errors } } = useFormContext()

  return (
    <fieldset id="new-report-1">
      <legend className="sr-only">
        Select the municipal service category that best matches the issue observed.
      </legend>
      <div className="grid grid-cols-2 gap-2 mt-6">
        <label
          className="px-4 py-5 flex flex-col gap-2 border border-outline rounded-xl [&:has(input:checked)]:bg-success-container [&:has(input:checked)]:border-on-success-container">
          <span className="flex flex-wrap items-center gap-2" >
            <LuTriangleAlert />
            <span className="text-sm font-semibold text-secondary grow">Roads &
              Transit</span>
            <span
              className="px-2 py-1 bg-success-container text-on-success-container text-2xs rounded-full">48h
              SLA</span>
          </span>
          <span className="text-xs font-medium">Pothole / Sidewalk (Trotoar)</span>
          <span className="text-xs text-on-surface-low">Potholes, broken sidewalk slabs, damaged
            drainage
            grates</span>
          <input className="hidden" type="radio" name="cat" value="cat-1" {...register('cat')} />
        </label>
        <label
          className="px-4 py-5 flex flex-col gap-2 border border-outline rounded-xl [&:has(input:checked)]:bg-success-container [&:has(input:checked)]:border-on-success-container">
          <span className="flex flex-wrap items-center gap-2">
            <LuDroplet />

            <span className="text-sm font-semibold text-secondary grow">Water &
              Sewage</span>
            <span
              className="px-2 py-1 bg-success-container text-on-success-container text-2xs rounded-full">24h
              SLA</span>
          </span>
          <span className="text-xs font-medium">Water Burst / Pipa Bocor</span>
          <span className="text-xs text-on-surface-low">Pipeline bursts, flooding tap leaks, dry
            taps</span>
          <input className="hidden" type="radio" name="cat" value="cat-2" {...register('cat')} />
        </label>
        <label
          className="px-4 py-5 flex flex-col gap-2 border border-outline rounded-xl [&:has(input:checked)]:bg-success-container [&:has(input:checked)]:border-on-success-container">
          <span className="flex flex-wrap items-center gap-2">
            <LuSun />

            <span className="text-sm font-semibold text-secondary grow">Street Lighting</span>
            <span
              className="px-2 py-1 bg-success-container text-on-success-container text-2xs rounded-full">72h
              SLA</span>
          </span>
          <span className="text-xs font-medium">Dark Street / PJU Padam</span>
          <span className="text-xs text-on-surface-low">Dark street lamps (PJU), damaged base
            poles, broken traffic
            signals</span>
          <input className="hidden" type="radio" name="cat" value="cat-3" {...register('cat')} />
        </label>
        <label
          className="px-4 py-5 flex flex-col gap-2 border border-outline rounded-xl [&:has(input:checked)]:bg-success-container [&:has(input:checked)]:border-on-success-container">
          <span className="flex flex-wrap items-center gap-2">
            <LuTrash2 />

            <span className="text-sm font-semibold text-secondary grow">Sanitation &
              Waste</span>
            <span
              className="px-2 py-1 bg-success-container text-on-success-container text-2xs rounded-full">36h
              SLA</span>
          </span>
          <span className="text-xs font-medium">Trash Pile / Sampah Liar</span>
          <span className="text-xs text-on-surface-low">Illegal dump spots in alleys, overflowing
            TPS bins, river refuse</span>
          <input className="hidden" type="radio" name="cat" value="cat-4" {...register('cat')} />
        </label>
        <label
          className="px-4 py-5 flex flex-col gap-2 border border-outline rounded-xl [&:has(input:checked)]:bg-success-container [&:has(input:checked)]:border-on-success-container">
          <span className="flex flex-wrap items-center gap-2">
            <LuTrees />
            <span className="text-sm font-semibold text-secondary grow">Public Parks &
              Trees</span>
            <span
              className="px-2 py-1 bg-success-container text-on-success-container text-2xs rounded-full">48h
              SLA</span>
          </span>
          <span className="text-xs font-medium">Hazardous Tree / Rawan Tumbang</span>
          <span className="text-xs text-on-surface-low">Falling branches (pohon rawan tumbang),
            RPTRA playground
            hazards</span>
          <input className="hidden" type="radio" name="cat" value="cat-5" {...register('cat')} />
        </label>
        <label
          className="px-4 py-5 flex flex-col gap-2 border border-outline rounded-xl [&:has(input:checked)]:bg-success-container [&:has(input:checked)]:border-on-success-container">
          <span className="flex flex-wrap items-center gap-2">
            <LuVolume2 />
            <span className="text-sm font-semibold text-secondary grow">Noise &
              Disturbance</span>
            <span
              className="px-2 py-1 bg-success-container text-on-success-container text-2xs rounded-full">48h
              SLA</span>
          </span>
          <span className="text-xs font-medium">Late-night Noise / Ketertiban</span>
          <span className="text-xs text-on-surface-low">Nocturnal construction past 22:00 WIB,
            sidewalk
            encroachment</span>
          <input className="hidden" type="radio" name="cat" value="cat-6" {...register('cat')} />
        </label>
        <label
          className="px-4 py-5 flex flex-col gap-2 border border-outline rounded-xl [&:has(input:checked)]:bg-success-container [&:has(input:checked)]:border-on-success-container">
          <span className="flex flex-wrap items-center gap-2">
            <LuBuilding />

            <span className="text-sm font-semibold text-secondary grow">Building &
              Zoning</span>
            <span
              className="px-2 py-1 bg-success-container text-on-success-container text-2xs rounded-full">72h
              SLA</span>
          </span>
          <span className="text-xs font-medium">Unsafe Construction / Bangunan</span>
          <span className="text-xs text-on-surface-low">Unsafe scaffolding, structural hazards,
            building boundary
            violations</span>
          <input className="hidden" type="radio" name="cat" value="cat-7" {...register('cat')} />
        </label>
      </div>
      <FieldError error={errors.cat} />
    </fieldset>
  )
}

export default FileReportCategory