import { useFormContext } from 'react-hook-form'
import { LuCamera, LuCloudUpload, LuMic, LuTrash2, LuVideo } from 'react-icons/lu'
import FieldError from '../ui/FieldError'
import { useEffect } from 'react'

function FileReportEvidence() {
  const { watch, setValue, formState: { errors } } = useFormContext()
  const evidences = watch('evidences')
  const previews = Array.from(evidences ?? []).map(f => ({
    meta: f,
    url: URL.createObjectURL(f)
  }))

  useEffect(() => {
    return () => previews.forEach(p => URL.revokeObjectURL(p.url))
  }, [previews])

  function handleRemove(index) {
    console.log(index)
    setValue('evidences', evidences.filter((_, i) => i !== index), { shouldDirty: true, shouldValidate: true })
  }

  function handleUpload(e) {
    const picked = Array.from(e.currentTarget.files)
    setValue('evidences', [...(evidences ?? []), ...picked].slice(0, 2), { shouldDirty: true, shouldValidate: true })

    e.currentTarget.value = ''
  }

  return (
    <div id="new-report-3">
      <div
        className="border relative border-dashed border-outline flex flex-col justify-center items-center rounded-2xl p-6 text-xs gap-4">
        <label htmlFor="file-upload-all"
          className="flex flex-col items-center after:content-[''] after:absolute cursor-pointer after:inset-0 text-center">
          <LuCloudUpload className="text-primary" size={30} />
          <span className="font-medium text-secondary">Upload evidence files or use camera
            simulation</span>
          <span className="text-2xs text-on-surface-low">Images, audio voice notes, inspection
            video
            clips (JPG, MP4,
            M4A)</span>
          <input type="file" id="file-upload-all" name="file" multiple className="hidden" onChange={handleUpload} />
        </label>
        <FieldError error={errors.evidences} />
        <div
          className="flex flex-wrap items-center gap-2 justify-center pointer-events-none *:pointer-events-none *:cursor-pointer z-10">
          <label
            className="flex items-center border border-outline rounded-full gap-2 py-2 px-3 text-secondary font-semibold">
            <LuCamera />
            Capture Photo
            {/* <input type="file" id="file-upload-image" accept="image/*" name="file"
              className="hidden" /> */}
          </label>
          <label
            className="flex items-center border border-outline rounded-full gap-2 py-2 px-3 text-secondary font-semibold">
            <LuMic />
            Record Audio Memo
            {/* <input type="file" id="file-upload-audio" accept="audio/*" name="file"
              className="hidden" /> */}
          </label>
          <label
            className="flex items-center border border-outline rounded-full gap-2 py-2 px-3 text-secondary font-semibold">
            <LuVideo />
            Attach Video Clip
            {/* <input type="file" id="file-upload-video" accept="video/*" name="file"
              className="hidden" /> */}
          </label>
        </div>
      </div>
      <div>
        {previews.length > 0 && <> <div className="flex flex-wrap justify-between items-center gap-2 my-4">
          <h3 className="font-mono uppercase text-2xs font-semibold">Attached Evidence {evidences.length > 0 && `(${evidences.length})`}</h3>
          <p className="text-xs text-primary">Click any card to inspect</p>
        </div>
          <ul className="grid md:grid-cols-2 gap-4">
            {previews.map((file, i) => <li key={i} className="rounded-2xl overflow-hidden border border-outline">
              <div className="aspect-[1.78/1] border-b border-outline">
                <img src={file.url} alt="Evidence 1"
                  className="object-cover aspect-[1.78/1]" />
              </div>
              <div className="p-3 flex flex-col">
                <span className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold text-secondary">
                    {file.meta.name}</h4>
                  <button type='button' onClick={() => handleRemove(i)}>
                    <span className='sr-only'>Remove evidence</span>
                    <LuTrash2 />
                  </button>
                </span>
                <span className="text-2xs font-mono text-on-surface-low">
                  {file.meta.type} · {(file.meta.size / (1000 * 1000)).toFixed(2)} MB
                </span>
                {/* <span className="text-xs">Photographed live on-site by resident
                    camera.</span> */}
              </div>
            </li>
            )}
          </ul>
        </>
        }

      </div>
    </div>
  )
}

export default FileReportEvidence