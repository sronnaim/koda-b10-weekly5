import { LuBuilding, LuCamera, LuChevronDown, LuChevronUp, LuCloudUpload, LuDroplet, LuLock, LuMapPin, LuMic, LuShield, LuSun, LuTrash2, LuTrees, LuTriangleAlert, LuVideo, LuVolume2 } from "react-icons/lu";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function FileReport() {
  const { user } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user)
      navigate('/')

  }, [user, navigate])

  return (
    <main className="mx-auto container max-w-272 grow px-4 mt-10 md:mt-16" id="new-report">
      <div className="grid gap-8 md:grid-cols-[auto_1fr]">
        <section className="md:max-w-64 flex flex-col gap-4">
          <div>
            <hgroup
              className="*:first:text-xs *:first:text-on-surface-low *:first:font-mono *:first:font-medium *:first:uppercase *:last:font-serif *:last:text-secondary *:last:font-semibold *:last:text-xl *:last:mt-2">
              <p>Community Intake</p>
              <h1>Report an Issue</h1>
            </hgroup>
            <p className="text-sm mt-2">
              Public civic reporting for Indonesian
              municipal services.</p>
          </div>
          <ol className="flex flex-col text-xs gap-1 text-on-surface-low">
            <li
              className="px-4 py-3 flex gap-2 rounded-full [body[data-new-report='1']_&]:bg-primary [body[data-new-report='1']_&]:text-on-primary [body[data-new-report='1']_&]:*:first:text-white/75">
              <span className="font-mono">01</span>
              Topic
            </li>
            <li
              className="p-3 flex gap-2 rounded-full [body[data-new-report='2']_&]:bg-primary [body[data-new-report='2']_&]:text-on-primary [body[data-new-report='2']_&]:*:first:text-white/75">
              <span className="font-mono">02</span>
              Location
            </li>
            <li
              className="p-3 flex gap-2 rounded-full [body[data-new-report='3']_&]:bg-primary [body[data-new-report='3']_&]:text-on-primary [body[data-new-report='3']_&]:*:first:text-white/75">
              <span className="font-mono">03</span>
              Proof
            </li>
            <li
              className="p-3 flex gap-2 rounded-full [body[data-new-report='4']_&]:bg-primary [body[data-new-report='4']_&]:text-on-primary [body[data-new-report='4']_&]:*:first:text-white/75">
              <span className="font-mono">04</span>
              Review & Send
            </li>
          </ol>
          <div className="rounded-xl text-xs bg-surface-container p-4 border border-dashed border-outline">
            <h2 className="flex items-center gap-1 text-secondary font-semibold">
              <LuShield />
              Independent Verification
            </h2>
            <p className="mt-2 text-on-surface-low">Our verification desk checks each report and
              routes it to the municipal agency (Bina
              Marga, PAM JAYA, Dishub, DLH, Satpol PP,
              Citata). Resolution timestamps are tracked
              publicly.</p>
          </div>
          <a href="/feed.html" className="text-sm font-semibold text-primary">Cancel and return to feed</a>
        </section>
        <section className="bg-surface-container p-8 rounded-2xl border border-outline">
          <div>
            <div>
              <hgroup
                className="*:first:text-xs *:first:text-on-surface-low *:first:font-mono *:first:font-medium *:first:uppercase *:last:font-serif *:last:text-secondary *:last:font-semibold *:last:text-2xl *:last:mt-2">
                <p>Step 04 of 04</p>
                <h2>Report summary & declaration</h2>
              </hgroup>
              <p className="text-sm mt-2">Review the report and choose notifications before final submission.</p>
            </div>
            <form>
              <div id="new-report-4" className="mt-6 flex flex-col gap-4">
                <label className="font-mono uppercase text-xs flex flex-col font-medium">
                  <span>Concise Title *</span>
                  <input name="title"
                    className="border p-3 mt-2 border-outline rounded-xl font-sans text-sm text-secondary"
                    type="text" value="Pohon tumbang di depan Kebun Binatang samping Kampus ITB" />
                </label>
                <label>
                  <span
                    className="flex flex-wrap gap-2 justify-between font-mono uppercase text-xs font-medium">
                    <span>Incident Observation Details *</span>
                    <span className="text-on-surface-low text-normal normal-case">100 chars (min 15)</span>
                  </span>
                  <textarea minlength="15" maxlength="100" name="details"
                    className="w-full border p-3 mt-2 border-outline rounded-xl font-sans text-sm text-secondary">Pohon tumbang sekitar lokasi mengganggu mobilitas masyarakat yang melintas, mohon untuk diperhatikan</textarea>
                </label>
                <label
                  className="bg-success-container border border-on-success-container/25 text-on-success-container p-4 gap-2 rounded-2xl flex flex-wrap items-center">
                  <LuLock />
                  <span className="flex flex-col text-xs grow">
                    <span className="font-semibold text-secondary">Post anonymously on public feed</span>
                    <span className="text-on-surface-low">Your name will be masked as Warga Anonim on open
                      records.</span>
                  </span>
                  <input type="checkbox" name="as-anon" />
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="font-mono uppercase text-xs flex flex-col font-medium">
                    Filer Name *
                    <input
                      className="border p-3 mt-2 border-outline rounded-xl font-sans text-sm text-secondary"
                      name="name" type="text" value="Fahrul Septiana" autocomplete="name" />
                  </label>
                  <label className="font-mono uppercase text-xs flex flex-col font-medium">
                    Email for Status Alerts *
                    <input
                      className="border p-3 mt-2 border-outline rounded-xl font-sans text-sm text-secondary"
                      name="email" type="email" value="fahrul@wargareport.id" autocomplete="email" />
                  </label>
                  <label className="font-mono uppercase text-xs flex flex-col font-medium">
                    Phone / Whatsapp
                    <input
                      className="border p-3 mt-2 border-outline rounded-xl font-sans text-sm text-secondary"
                      name="phone" type="tel" value="+62 812-9842-1054" autocomplete="tel" />
                  </label>
                  <fieldset className="grid grid-cols-2 w-fit items-end text-xs [&_label]:py-2 *:flex *:gap-2">
                    <legend className="font-mono uppercase flex flex-col font-medium">
                      Status
                      Alert
                      Channels</legend>
                    <label>
                      <input type="checkbox" name="alert-email" />
                      Email
                    </label>
                    <label>
                      <input type="checkbox" name="alert-sms" />
                      SMS
                    </label>
                  </fieldset>
                </div>
                <label className="text-xs flex gap-2 items-start">
                  <input type="checkbox" name="confirmation" className="translate-y-[0.2rem]" />
                  I confirm this incident was authentically observed on-site under Law No.
                  25/2009.
                </label>
              </div>
              <div id="new-report-3">
                <div
                  className="border relative border-dashed border-outline flex flex-col justify-center items-center rounded-2xl p-6 text-xs gap-4">
                  <label for="file-upload-all"
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
              <div id="new-report-2" className="flex flex-col gap-6 mt-8">
                <div className="flex flex-col">
                  <label for="area-select"
                    className="font-mono uppercase text-xs flex flex-col font-medium">Kelurahan / Kecamatan
                    & Wilayah</label>

                  <div className="relative mt-2">
                    <select name="area" id="area-select"
                      className="p-3 border border-outline rounded-xl appearance-none w-full peer">
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
                  <input type="text" autocomplete="street-address"
                    className="border p-3 mt-2 border-outline rounded-xl"
                    placeholder="e.g. Jl. Tamansari depan Kebun Binatang" name="address" />
                </label>
                <label role="button"
                  className="flex text-xs justify-between rounded-lg border border-outline bg-surface p-3 flex-wrap gap-2 items-center font-semibold">
                  <LuMapPin />
                  Coordinates auto-pinned
                  <span className="font-mono text-sm text-on-surface-low">6.2088° S, 106.8456° E (WIB)</span>
                  <input type="text" className="hidden" value="6.2088,106.8456" name="location" />
                </label>
              </div>

              <fieldset id="new-report-1">
                <legend className="sr-only">
                  Select the municipal service category that best matches the issue observed.
                </legend>
                <div className="grid grid-cols-2 gap-2 mt-6">
                  <label
                    className="px-4 py-5 flex flex-col gap-2 border border-outline rounded-xl [&:has(input:checked)]:bg-success-container [&:has(input:checked)]:border-on-success-container">
                    <span className="flex flex-wrap items-center gap-2">
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
                    <input className="hidden" type="radio" name="cat" value="cat-1" />
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
                    <input className="hidden" type="radio" name="cat" value="cat-2" />
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
                    <input className="hidden" type="radio" name="cat" value="cat-3" />
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
                    <input className="hidden" type="radio" name="cat" value="cat-4" />
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
                    <input className="hidden" type="radio" name="cat" value="cat-5" />
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
                    <input className="hidden" type="radio" name="cat" value="cat-6" />
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
                    <input className="hidden" type="radio" name="cat" value="cat-7" />
                  </label>
                </div>
              </fieldset>
              <div
                className="mt-4 pt-6 flex flex-wrap justify-between font-semibold text-sm items-center border-t border-outline">
                <a href="/index.html" className="text-primary" id="prev-btn">Cancel</a>
                <button type="submit" id="submit-btn"
                  className="flex items-center px-5 py-3 bg-primary text-on-primary rounded-full">
                  Continue →
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>)
}