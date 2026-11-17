import { LuCamera, LuCloudUpload, LuMic, LuTrash2, LuVideo } from 'react-icons/lu'

function FileReportEvidence() {
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
          <input type="file" id="file-upload-all" name="file" className="hidden" />
        </label>
        <div
          className="flex flex-wrap items-center gap-2 justify-center pointer-events-none *:pointer-events-auto *:cursor-pointer z-10">
          <label
            className="flex items-center border border-outline rounded-full gap-2 py-2 px-3 text-secondary font-semibold">
            <LuCamera />
            Capture Photo
            <input type="file" id="file-upload-image" accept="image/*" name="file"
              className="hidden" />
          </label>
          <label
            className="flex items-center border border-outline rounded-full gap-2 py-2 px-3 text-secondary font-semibold">
            <LuMic />
            Record Audio Memo
            <input type="file" id="file-upload-audio" accept="audio/*" name="file"
              className="hidden" />
          </label>
          <label
            className="flex items-center border border-outline rounded-full gap-2 py-2 px-3 text-secondary font-semibold">
            <LuVideo />
            Attach Video Clip
            <input type="file" id="file-upload-video" accept="video/*" name="file"
              className="hidden" />
          </label>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap justify-between items-center gap-2 my-4">
          <h3 className="font-mono uppercase text-2xs font-semibold">Attached Evidence (2)</h3>
          <p className="text-xs text-primary">Click any card to inspect</p>
        </div>
        <ul className="grid md:grid-cols-2 gap-4">
          <li className="rounded-2xl overflow-hidden border border-outline">
            <a href="assets/evd1.png">
              <div className="aspect-[1.78/1] border-b border-outline">
                <img src="/assets/evd1.png" alt="Evidence 1"
                  className="object-cover aspect-[1.78/1]" />
              </div>
              <div className="p-3 flex flex-col">
                <span className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold text-secondary">
                    incident_capture_camera.jpg</h4>
                  <LuTrash2 />
                </span>
                <span className="text-2xs font-mono text-on-surface-low">
                  IMAGE · 2.4 MB
                </span>
                <span className="text-xs">Photographed live on-site by resident
                  camera.</span>
              </div>
            </a>
          </li>
          <li className="rounded-2xl overflow-hidden border border-outline">
            <a href="assets/evd2.mp4">
              <div className="aspect-[1.78/1] border-b border-outline">
                <video controls className="object-cover aspect-[1.78/1] w-full">
                  <source src="/assets/evd2.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="p-3 flex flex-col">
                <span className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold text-secondary">quick_site_clip.mp4
                  </h4>
                  <LuTrash2 />
                </span>
                <span className="text-2xs font-mono text-on-surface-low">VIDEO · 4.8
                  MB</span>
                <span className="text-xs">12-second horizontal pan of incident.</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FileReportEvidence