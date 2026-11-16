export default function FileReport() {
  return (
    <main class="mx-auto container max-w-272 grow px-4 mt-10 md:mt-16" id="new-report">
      <div class="grid gap-8 md:grid-cols-[auto_1fr]">
        <section class="md:max-w-64 flex flex-col gap-4">
          <div>
            <hgroup
              class="*:first:text-xs *:first:text-on-surface-low *:first:font-mono *:first:font-medium *:first:uppercase *:last:font-serif *:last:text-secondary *:last:font-semibold *:last:text-xl *:last:mt-2">
              <p>Community Intake</p>
              <h1>Report an Issue</h1>
            </hgroup>
            <p class="text-sm mt-2">
              Public civic reporting for Indonesian
              municipal services.</p>
          </div>
          <ol class="flex flex-col text-xs gap-1 text-on-surface-low">
            <li
              class="px-4 py-3 flex gap-2 rounded-full [body[data-new-report='1']_&]:bg-primary [body[data-new-report='1']_&]:text-on-primary [body[data-new-report='1']_&]:*:first:text-white/75">
              <span class="font-mono">01</span>
              Topic
            </li>
            <li
              class="p-3 flex gap-2 rounded-full [body[data-new-report='2']_&]:bg-primary [body[data-new-report='2']_&]:text-on-primary [body[data-new-report='2']_&]:*:first:text-white/75">
              <span class="font-mono">02</span>
              Location
            </li>
            <li
              class="p-3 flex gap-2 rounded-full [body[data-new-report='3']_&]:bg-primary [body[data-new-report='3']_&]:text-on-primary [body[data-new-report='3']_&]:*:first:text-white/75">
              <span class="font-mono">03</span>
              Proof
            </li>
            <li
              class="p-3 flex gap-2 rounded-full [body[data-new-report='4']_&]:bg-primary [body[data-new-report='4']_&]:text-on-primary [body[data-new-report='4']_&]:*:first:text-white/75">
              <span class="font-mono">04</span>
              Review & Send
            </li>
          </ol>
          <div class="rounded-xl text-xs bg-surface-container p-4 border border-dashed border-outline">
            <h2 class="flex items-center gap-1 text-secondary font-semibold">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"
                aria-hidden="true" class="text-primary">
                <path
                  d="M6.99999 12.8334C6.99999 12.8334 11.6667 10.5001 11.6667 7.00008V2.91675L6.99999 1.16675L2.33333 2.91675V7.00008C2.33333 10.5001 6.99999 12.8334 6.99999 12.8334Z" />
              </svg>
              Independent Verification
            </h2>
            <p class="mt-2 text-on-surface-low">Our verification desk checks each report and
              routes it to the municipal agency (Bina
              Marga, PAM JAYA, Dishub, DLH, Satpol PP,
              Citata). Resolution timestamps are tracked
              publicly.</p>
          </div>
          <a href="/feed.html" class="text-sm font-semibold text-primary">Cancel and return to feed</a>
        </section>
        <section class="bg-surface-container p-8 rounded-2xl border border-outline">
          <div>
            <div>
              <hgroup
                class="*:first:text-xs *:first:text-on-surface-low *:first:font-mono *:first:font-medium *:first:uppercase *:last:font-serif *:last:text-secondary *:last:font-semibold *:last:text-2xl *:last:mt-2">
                <p>Step 04 of 04</p>
                <h2>Report summary & declaration</h2>
              </hgroup>
              <p class="text-sm mt-2">Review the report and choose notifications before final submission.</p>
            </div>
            <form>
              <div id="new-report-4" class="mt-6 flex flex-col gap-4">
                <label class="font-mono uppercase text-xs flex flex-col font-medium">
                  <span>Concise Title *</span>
                  <input name="title"
                    class="border p-3 mt-2 border-outline rounded-xl font-sans text-sm text-secondary"
                    type="text" value="Pohon tumbang di depan Kebun Binatang samping Kampus ITB" />
                </label>
                <label>
                  <span
                    class="flex flex-wrap gap-2 justify-between font-mono uppercase text-xs font-medium">
                    <span>Incident Observation Details *</span>
                    <span class="text-on-surface-low text-normal normal-case">100 chars (min 15)</span>
                  </span>
                  <textarea minlength="15" maxlength="100" name="details"
                    class="w-full border p-3 mt-2 border-outline rounded-xl font-sans text-sm text-secondary">Pohon tumbang sekitar lokasi mengganggu mobilitas masyarakat yang melintas, mohon untuk diperhatikan</textarea>
                </label>
                <label
                  class="bg-success-container border border-on-success-container/25 text-on-success-container p-4 gap-2 rounded-2xl flex flex-wrap items-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"
                    class="shrink-0">
                    <path
                      d="M3.33333 7.33325H12.6667C13.403 7.33325 14 7.93021 14 8.66659V13.3333C14 14.0696 13.403 14.6666 12.6667 14.6666H3.33333C2.59695 14.6666 2 14.0696 2 13.3333V8.66659C2 7.93021 2.59695 7.33325 3.33333 7.33325Z" />
                    <path
                      d="M4.6665 7.33325V4.66659C4.6665 3.78253 5.01769 2.93468 5.64281 2.30956C6.26794 1.68444 7.11578 1.33325 7.99984 1.33325C8.88389 1.33325 9.73174 1.68444 10.3569 2.30956C10.982 2.93468 11.3332 3.78253 11.3332 4.66659V7.33325" />
                  </svg>
                  <span class="flex flex-col text-xs grow">
                    <span class="font-semibold text-secondary">Post anonymously on public feed</span>
                    <span class="text-on-surface-low">Your name will be masked as Warga Anonim on open
                      records.</span>
                  </span>
                  <input type="checkbox" name="as-anon" />
                </label>
                <div class="grid md:grid-cols-2 gap-4">
                  <label class="font-mono uppercase text-xs flex flex-col font-medium">
                    Filer Name *
                    <input
                      class="border p-3 mt-2 border-outline rounded-xl font-sans text-sm text-secondary"
                      name="name" type="text" value="Fahrul Septiana" autocomplete="name" />
                  </label>
                  <label class="font-mono uppercase text-xs flex flex-col font-medium">
                    Email for Status Alerts *
                    <input
                      class="border p-3 mt-2 border-outline rounded-xl font-sans text-sm text-secondary"
                      name="email" type="email" value="fahrul@wargareport.id" autocomplete="email" />
                  </label>
                  <label class="font-mono uppercase text-xs flex flex-col font-medium">
                    Phone / Whatsapp
                    <input
                      class="border p-3 mt-2 border-outline rounded-xl font-sans text-sm text-secondary"
                      name="phone" type="tel" value="+62 812-9842-1054" autocomplete="tel" />
                  </label>
                  <fieldset class="grid grid-cols-2 w-fit items-end text-xs [&_label]:py-2 *:flex *:gap-2">
                    <legend class="font-mono uppercase flex flex-col font-medium">
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
                <label class="text-xs flex gap-2 items-start">
                  <input type="checkbox" name="confirmation" class="translate-y-[0.2rem]" />
                  I confirm this incident was authentically observed on-site under Law No.
                  25/2009.
                </label>
              </div>
              <div id="new-report-3">
                <div
                  class="border relative border-dashed border-outline flex flex-col justify-center items-center rounded-2xl p-6 text-xs gap-4">
                  <label for="file-upload-all"
                    class="flex flex-col items-center after:content-[''] after:absolute cursor-pointer after:inset-0 text-center">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                      xmlns="http://www.w3.org/2000/svg" stroke-width="2.33333" stroke-linecap="round"
                      stroke-linejoin="round" stroke="currentColor" class="text-primary shrink-0">
                      <path
                        d="M4.66662 17.3834C3.79616 16.4991 3.13866 15.428 2.74405 14.2516C2.34943 13.0752 2.22809 11.8243 2.38922 10.594C2.55035 9.36362 2.98973 8.18618 3.67398 7.15104C4.35823 6.11591 5.26937 5.25031 6.33819 4.61997C7.40702 3.98964 8.60542 3.61115 9.8424 3.51325C11.0794 3.41535 12.3224 3.60061 13.4771 4.05497C14.6318 4.50932 15.6677 5.22082 16.5063 6.13544C17.3448 7.05005 17.964 8.14372 18.3166 9.3334H20.4166C21.5295 9.3484 22.6088 9.71667 23.4987 10.385C24.3886 11.0534 25.0431 11.9873 25.3676 13.0519C25.6922 14.1165 25.6701 15.2566 25.3044 16.3078C24.9387 17.359 24.2485 18.2668 23.3333 18.9001" />
                      <path d="M14 14V24.5" />
                      <path d="M9.33325 19.8334L13.9999 15.1667L18.6666 19.8334" />
                    </svg>
                    <span class="font-medium text-secondary">Upload evidence files or use camera
                      simulation</span>
                    <span class="text-2xs text-on-surface-low">Images, audio voice notes, inspection
                      video
                      clips (JPG, MP4,
                      M4A)</span>
                    <input type="file" id="file-upload-all" name="file" class="hidden" />
                  </label>
                  <div
                    class="flex flex-wrap items-center gap-2 justify-center pointer-events-none *:pointer-events-auto *:cursor-pointer z-10">
                    <label
                      class="flex items-center border border-outline rounded-full gap-2 py-2 px-3 text-secondary font-semibold">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-linecap="round"
                        stroke-linejoin="round" stroke="currentColor" class="shrink-0">
                        <path
                          d="M7.25 2H4.75L3.5 3.5H2C1.73478 3.5 1.48043 3.60536 1.29289 3.79289C1.10536 3.98043 1 4.23478 1 4.5V9C1 9.26522 1.10536 9.51957 1.29289 9.70711C1.48043 9.89464 1.73478 10 2 10H10C10.2652 10 10.5196 9.89464 10.7071 9.70711C10.8946 9.51957 11 9.26522 11 9V4.5C11 4.23478 10.8946 3.98043 10.7071 3.79289C10.5196 3.60536 10.2652 3.5 10 3.5H8.5L7.25 2Z" />
                        <path
                          d="M8 6.5C8 7.60457 7.10457 8.5 6 8.5C4.89543 8.5 4 7.60457 4 6.5C4 5.39543 4.89543 4.5 6 4.5C7.10457 4.5 8 5.39543 8 6.5Z" />
                      </svg>
                      Capture Photo
                      <input type="file" id="file-upload-image" accept="image/*" name="file"
                        class="hidden" />
                    </label>
                    <label
                      class="flex items-center border border-outline rounded-full gap-2 py-2 px-3 text-secondary font-semibold">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg" stroke-linecap="round"
                        stroke-linejoin="round" stroke="currentColor" aria-hidden="true"
                        class="shrink-0">
                        <path
                          d="M6 1C5.60218 1 5.22064 1.15804 4.93934 1.43934C4.65804 1.72064 4.5 2.10218 4.5 2.5V6C4.5 6.39782 4.65804 6.77936 4.93934 7.06066C5.22064 7.34196 5.60218 7.5 6 7.5C6.39782 7.5 6.77936 7.34196 7.06066 7.06066C7.34196 6.77936 7.5 6.39782 7.5 6V2.5C7.5 2.10218 7.34196 1.72064 7.06066 1.43934C6.77936 1.15804 6.39782 1 6 1Z" />
                        <path
                          d="M9.5 5V6C9.5 6.92826 9.13125 7.8185 8.47487 8.47487C7.8185 9.13125 6.92826 9.5 6 9.5C5.07174 9.5 4.1815 9.13125 3.52513 8.47487C2.86875 7.8185 2.5 6.92826 2.5 6V5" />
                        <path d="M6 9.5V11" />
                      </svg>
                      Record Audio Memo
                      <input type="file" id="file-upload-audio" accept="audio/*" name="file"
                        class="hidden" />
                    </label>
                    <label
                      class="flex items-center border border-outline rounded-full gap-2 py-2 px-3 text-secondary font-semibold">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg" stroke-linecap="round"
                        stroke-linejoin="round" stroke="currentColor" class="shrink-0">
                        <path d="M11 4L8 6L11 8V4Z" />
                        <path
                          d="M2 3H7C7.55228 3 8 3.44772 8 4V8C8 8.55228 7.55228 9 7 9H2C1.44772 9 1 8.55228 1 8V4C1 3.44772 1.44772 3 2 3Z" />
                      </svg>
                      Attach Video Clip
                      <input type="file" id="file-upload-video" accept="video/*" name="file"
                        class="hidden" />
                    </label>
                  </div>
                </div>
                <div>
                  <div class="flex flex-wrap justify-between items-center gap-2 my-4">
                    <h3 class="font-mono uppercase text-2xs font-semibold">Attached Evidence (2)</h3>
                    <p class="text-xs text-primary">Click any card to inspect</p>
                  </div>
                  <ul class="grid md:grid-cols-2 gap-4">
                    <li class="rounded-2xl overflow-hidden border border-outline">
                      <a href="assets/evd1.png">
                        <div class="aspect-[1.78/1] border-b border-outline">
                          <img src="/assets/evd1.png" alt="Evidence 1"
                            class="object-cover aspect-[1.78/1]" />
                        </div>
                        <div class="p-3 flex flex-col">
                          <span class="flex items-center justify-between">
                            <h4 class="text-xs font-semibold text-secondary">
                              incident_capture_camera.jpg</h4>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                              xmlns="http://www.w3.org/2000/svg" stroke-width="1.25"
                              stroke-linecap="round" stroke-linejoin="round"
                              stroke="currentColor" aria-hidden="true" class="shrink-0">
                              <path d="M1.875 3.75H13.125" stroke-width="1.25" />
                              <path
                                d="M11.875 3.75L11.25 12.5C11.25 12.8315 11.1183 13.1495 10.8839 13.3839C10.6495 13.6183 10.3315 13.75 10 13.75H5C4.66848 13.75 4.35054 13.6183 4.11612 13.3839C3.8817 13.1495 3.75 12.8315 3.75 12.5L3.125 3.75" />
                              <path d="M6.25 6.875V10.625" stroke-width="1.25" />
                              <path d="M8.75 6.875V10.625" stroke-width="1.25" />
                              <path
                                d="M5.625 3.75V2.5C5.625 2.33424 5.69085 2.17527 5.80806 2.05806C5.92527 1.94085 6.08424 1.875 6.25 1.875H8.75C8.91576 1.875 9.07473 1.94085 9.19194 2.05806C9.30915 2.17527 9.375 2.33424 9.375 2.5V3.75" />
                            </svg>
                          </span>
                          <span class="text-2xs font-mono text-on-surface-low">
                            IMAGE · 2.4 MB
                          </span>
                          <span class="text-xs">Photographed live on-site by resident
                            camera.</span>
                        </div>
                      </a>
                    </li>
                    <li class="rounded-2xl overflow-hidden border border-outline">
                      <a href="assets/evd2.mp4">
                        <div class="aspect-[1.78/1] border-b border-outline">
                          <video controls class="object-cover aspect-[1.78/1] w-full">
                            <source src="/assets/evd2.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <div class="p-3 flex flex-col">
                          <span class="flex items-center justify-between">
                            <h4 class="text-xs font-semibold text-secondary">quick_site_clip.mp4
                            </h4>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                              xmlns="http://www.w3.org/2000/svg" stroke-width="1.25"
                              stroke-linecap="round" stroke-linejoin="round"
                              stroke="currentColor" aria-hidden="true">
                              <path d="M1.875 3.75H13.125" stroke-width="1.25" />
                              <path
                                d="M11.875 3.75L11.25 12.5C11.25 12.8315 11.1183 13.1495 10.8839 13.3839C10.6495 13.6183 10.3315 13.75 10 13.75H5C4.66848 13.75 4.35054 13.6183 4.11612 13.3839C3.8817 13.1495 3.75 12.8315 3.75 12.5L3.125 3.75" />
                              <path d="M6.25 6.875V10.625" stroke-width="1.25" />
                              <path d="M8.75 6.875V10.625" stroke-width="1.25" />
                              <path
                                d="M5.625 3.75V2.5C5.625 2.33424 5.69085 2.17527 5.80806 2.05806C5.92527 1.94085 6.08424 1.875 6.25 1.875H8.75C8.91576 1.875 9.07473 1.94085 9.19194 2.05806C9.30915 2.17527 9.375 2.33424 9.375 2.5V3.75" />
                            </svg>
                          </span>
                          <span class="text-2xs font-mono text-on-surface-low">VIDEO · 4.8
                            MB</span>
                          <span class="text-xs">12-second horizontal pan of incident.</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="new-report-2" class="flex flex-col gap-6 mt-8">
                <div class="flex flex-col">
                  <label for="area-select"
                    class="font-mono uppercase text-xs flex flex-col font-medium">Kelurahan / Kecamatan
                    & Wilayah</label>

                  <div class="relative mt-2">
                    <select name="area" id="area-select"
                      class="p-3 border border-outline rounded-xl appearance-none w-full peer">
                      <option value="a1">Coblong</option>
                      <option value="a2">Jl. Dago</option>
                      <option value="a3">Institut Teknologi Bandung (ITB)</option>
                      <option value="a4">Simpang Dago</option>
                      <option value="a5">Pasar Dago</option>
                      <option value="a6">Jl. Ir. H. Juanda</option>
                    </select>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" aria-hidden="true"
                      class="absolute right-4 top-4 inline-block peer-[:open]:hidden">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" aria-hidden="true"
                      class="absolute right-4 top-4 hidden peer-[:open]:inline-block">
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </div>
                </div>
                <fieldset class="flex flex-wrap items-center gap-2">
                  <legend class="mb-2 font-mono uppercase text-xs font-medium">
                    Common areas in Coblong · Kota Bandung</legend>
                  <label
                    class="inline-flex items-center text-xs border px-3 border-outline font-medium gap-1 py-2 rounded-full [&:has(input:checked)]:bg-primary [&:has(input:checked)]:text-on-primary cursor-pointer">
                    Jl. Dago
                    <input type="radio" name="common-area" value="ca1" class="hidden" />
                  </label>
                  <label
                    class="inline-flex items-center text-xs border px-3 border-outline font-medium gap-1 py-2 rounded-full [&:has(input:checked)]:bg-primary [&:has(input:checked)]:text-on-primary cursor-pointer">
                    Institut Teknologi Bandung (ITB)
                    <input type="radio" name="common-area" value="ca2" class="hidden" />
                  </label>
                  <label
                    class="inline-flex items-center text-xs border px-3 border-outline font-medium gap-1 py-2 rounded-full [&:has(input:checked)]:bg-primary [&:has(input:checked)]:text-on-primary cursor-pointer">
                    Simpang Dago
                    <input type="radio" name="common-area" value="ca3" class="hidden" />
                  </label>
                  <label
                    class="inline-flex items-center text-xs border px-3 border-outline font-medium gap-1 py-2 rounded-full [&:has(input:checked)]:bg-primary [&:has(input:checked)]:text-on-primary cursor-pointer">
                    Pasar Dago
                    <input type="radio" name="common-area" value="ca4" class="hidden" />
                  </label>
                  <label
                    class="inline-flex items-center text-xs border px-3 border-outline font-medium gap-1 py-2 rounded-full [&:has(input:checked)]:bg-primary [&:has(input:checked)]:text-on-primary cursor-pointer">
                    Jl. Ir. H. Juanda
                    <input type="radio" name="common-area" value="ca5" class="hidden" />
                  </label>
                </fieldset>
                <label class="font-mono uppercase text-xs flex flex-col font-medium">
                  Street Address, RT/RW, or Landmark *
                  <input type="text" autocomplete="street-address"
                    class="border p-3 mt-2 border-outline rounded-xl"
                    placeholder="e.g. Jl. Tamansari depan Kebun Binatang" name="address" />
                </label>
                <label role="button"
                  class="flex text-xs justify-between rounded-lg border border-outline bg-surface p-3 flex-wrap gap-2 items-center font-semibold">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                    xmlns="http://www.w3.org/2000/svg" stroke-width="1.16667" stroke-linecap="round"
                    stroke-linejoin="round" stroke="currentColor" class="text-primary">
                    <path
                      d="M12.25 5.83325C12.25 9.91658 7 13.4166 7 13.4166C7 13.4166 1.75 9.91658 1.75 5.83325C1.75 4.44087 2.30312 3.10551 3.28769 2.12094C4.27226 1.13638 5.60761 0.583252 7 0.583252C8.39239 0.583252 9.72774 1.13638 10.7123 2.12094C11.6969 3.10551 12.25 4.44087 12.25 5.83325Z" />
                    <path
                      d="M8.75 5.83325C8.75 6.79975 7.9665 7.58325 7 7.58325C6.0335 7.58325 5.25 6.79975 5.25 5.83325C5.25 4.86675 6.0335 4.08325 7 4.08325C7.9665 4.08325 8.75 4.86675 8.75 5.83325Z" />
                  </svg>
                  Coordinates auto-pinned
                  <span class="font-mono text-sm text-on-surface-low">6.2088° S, 106.8456° E (WIB)</span>
                  <input type="text" class="hidden" value="6.2088,106.8456" name="location" />
                </label>
              </div>

              <fieldset id="new-report-1">
                <legend class="sr-only">
                  Select the municipal service category that best matches the issue observed.
                </legend>
                <div class="grid grid-cols-2 gap-2 mt-6">
                  <label
                    class="px-4 py-5 flex flex-col gap-2 border border-outline rounded-xl [&:has(input:checked)]:bg-success-container [&:has(input:checked)]:border-on-success-container">
                    <span class="flex flex-wrap items-center gap-2">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                        xmlns="http://www.w3.org/2000/svg" stroke-width="1.25"
                        stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"
                        aria-hidden="true" class="text-primary">
                        <path
                          d="M6.43125 2.41251L1.1375 11.25C1.02835 11.439 0.970602 11.6533 0.969991 11.8716C0.96938 12.0898 1.02593 12.3045 1.13401 12.4941C1.2421 12.6837 1.39795 12.8417 1.58607 12.9524C1.77418 13.0631 1.988 13.1226 2.20625 13.125H12.7937C13.012 13.1226 13.2258 13.0631 13.4139 12.9524C13.602 12.8417 13.7579 12.6837 13.866 12.4941C13.9741 12.3045 14.0306 12.0898 14.03 11.8716C14.0294 11.6533 13.9716 11.439 13.8625 11.25L8.56875 2.41251C8.45733 2.22882 8.30045 2.07696 8.11325 1.97156C7.92604 1.86616 7.71483 1.81079 7.5 1.81079C7.28516 1.81079 7.07395 1.86616 6.88675 1.97156C6.69955 2.07696 6.54267 2.22882 6.43125 2.41251Z" />
                        <path d="M7.5 5.625V8.125" />
                        <path d="M7.5 10.625H7.50625" />
                      </svg>
                      <span class="text-sm font-semibold text-secondary grow">Roads &
                        Transit</span>
                      <span
                        class="px-2 py-1 bg-success-container text-on-success-container text-2xs rounded-full">48h
                        SLA</span>
                    </span>
                    <span class="text-xs font-medium">Pothole / Sidewalk (Trotoar)</span>
                    <span class="text-xs text-on-surface-low">Potholes, broken sidewalk slabs, damaged
                      drainage
                      grates</span>
                    <input class="hidden" type="radio" name="cat" value="cat-1" />
                  </label>
                  <label
                    class="px-4 py-5 flex flex-col gap-2 border border-outline rounded-xl [&:has(input:checked)]:bg-success-container [&:has(input:checked)]:border-on-success-container">
                    <span class="flex flex-wrap items-center gap-2">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                        xmlns="http://www.w3.org/2000/svg" stroke-width="1.25"
                        stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"
                        aria-hidden="true" class="text-primary">
                        <path
                          d="M7.5 1.6875L3.5625 5.625C2.98484 6.36312 2.62627 7.24874 2.52772 8.18084C2.42917 9.11293 2.59459 10.054 3.00512 10.8966C3.41566 11.7392 4.05476 12.4494 4.84953 12.9463C5.64429 13.4431 6.56271 13.7066 7.5 13.7066C8.43729 13.7066 9.35571 13.4431 10.1505 12.9463C10.9452 12.4494 11.5843 11.7392 11.9949 10.8966C12.4054 10.054 12.5708 9.11293 12.4723 8.18084C12.3737 7.24874 12.0152 6.36312 11.4375 5.625L7.5 1.6875Z" />
                      </svg>

                      <span class="text-sm font-semibold text-secondary grow">Water &
                        Sewage</span>
                      <span
                        class="px-2 py-1 bg-success-container text-on-success-container text-2xs rounded-full">24h
                        SLA</span>
                    </span>
                    <span class="text-xs font-medium">Water Burst / Pipa Bocor</span>
                    <span class="text-xs text-on-surface-low">Pipeline bursts, flooding tap leaks, dry
                      taps</span>
                    <input class="hidden" type="radio" name="cat" value="cat-2" />
                  </label>
                  <label
                    class="px-4 py-5 flex flex-col gap-2 border border-outline rounded-xl [&:has(input:checked)]:bg-success-container [&:has(input:checked)]:border-on-success-container">
                    <span class="flex flex-wrap items-center gap-2">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                        xmlns="http://www.w3.org/2000/svg" stroke-width="1.25"
                        stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"
                        class="text-primary" aria-hidden="true">
                        <path
                          d="M10 7.5C10 8.88071 8.88071 10 7.5 10C6.11929 10 5 8.88071 5 7.5C5 6.11929 6.11929 5 7.5 5C8.88071 5 10 6.11929 10 7.5Z" />
                        <path d="M7.5 1.25V2.5" />
                        <path d="M7.5 12.5V13.75" />
                        <path d="M3.0625 3.0625L3.9375 3.9375" />
                        <path d="M11.0625 11.0625L11.9375 11.9375" />
                        <path d="M1.25 7.5H2.5" />
                        <path d="M12.5 7.5H13.75" />
                        <path d="M3.9375 11.0625L3.0625 11.9375" />
                        <path d="M11.9375 3.0625L11.0625 3.9375" />
                      </svg>

                      <span class="text-sm font-semibold text-secondary grow">Street Lighting</span>
                      <span
                        class="px-2 py-1 bg-success-container text-on-success-container text-2xs rounded-full">72h
                        SLA</span>
                    </span>
                    <span class="text-xs font-medium">Dark Street / PJU Padam</span>
                    <span class="text-xs text-on-surface-low">Dark street lamps (PJU), damaged base
                      poles, broken traffic
                      signals</span>
                    <input class="hidden" type="radio" name="cat" value="cat-3" />
                  </label>
                  <label
                    class="px-4 py-5 flex flex-col gap-2 border border-outline rounded-xl [&:has(input:checked)]:bg-success-container [&:has(input:checked)]:border-on-success-container">
                    <span class="flex flex-wrap items-center gap-2">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="text-primary"
                        stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
                        stroke="currentColor">
                        <path d="M1.875 3.75H13.125" />
                        <path
                          d="M11.875 3.75L11.25 12.5C11.25 12.8315 11.1183 13.1495 10.8839 13.3839C10.6495 13.6183 10.3315 13.75 10 13.75H5C4.66848 13.75 4.35054 13.6183 4.11612 13.3839C3.8817 13.1495 3.75 12.8315 3.75 12.5L3.125 3.75" />
                        <path d="M6.25 6.875V10.625" />
                        <path d="M8.75 6.875V10.625" />
                        <path
                          d="M5.625 3.75V2.5C5.625 2.33424 5.69085 2.17527 5.80806 2.05806C5.92527 1.94085 6.08424 1.875 6.25 1.875H8.75C8.91576 1.875 9.07473 1.94085 9.19194 2.05806C9.30915 2.17527 9.375 2.33424 9.375 2.5V3.75" />
                      </svg>

                      <span class="text-sm font-semibold text-secondary grow">Sanitation &
                        Waste</span>
                      <span
                        class="px-2 py-1 bg-success-container text-on-success-container text-2xs rounded-full">36h
                        SLA</span>
                    </span>
                    <span class="text-xs font-medium">Trash Pile / Sampah Liar</span>
                    <span class="text-xs text-on-surface-low">Illegal dump spots in alleys, overflowing
                      TPS bins, river refuse</span>
                    <input class="hidden" type="radio" name="cat" value="cat-4" />
                  </label>
                  <label
                    class="px-4 py-5 flex flex-col gap-2 border border-outline rounded-xl [&:has(input:checked)]:bg-success-container [&:has(input:checked)]:border-on-success-container">
                    <span class="flex flex-wrap items-center gap-2">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="text-primary"
                        stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
                        stroke="currentColor">
                        <path d="M7.5 1.25L4.6875 5.3125H10.3125L7.5 1.25Z" />
                        <path d="M7.5 4.375L3.75 9.375H11.25L7.5 4.375Z" />
                        <path d="M7.5 9.375V13.75" />
                      </svg>
                      <span class="text-sm font-semibold text-secondary grow">Public Parks &
                        Trees</span>
                      <span
                        class="px-2 py-1 bg-success-container text-on-success-container text-2xs rounded-full">48h
                        SLA</span>
                    </span>
                    <span class="text-xs font-medium">Hazardous Tree / Rawan Tumbang</span>
                    <span class="text-xs text-on-surface-low">Falling branches (pohon rawan tumbang),
                      RPTRA playground
                      hazards</span>
                    <input class="hidden" type="radio" name="cat" value="cat-5" />
                  </label>
                  <label
                    class="px-4 py-5 flex flex-col gap-2 border border-outline rounded-xl [&:has(input:checked)]:bg-success-container [&:has(input:checked)]:border-on-success-container">
                    <span class="flex flex-wrap items-center gap-2">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="text-primary"
                        stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
                        stroke="currentColor">
                        <path d="M6.875 3.125L3.75 5.625H1.25V9.375H3.75L6.875 11.875V3.125Z" />
                        <path
                          d="M9.6875 5.3125C10.0137 5.57614 10.2769 5.90941 10.4576 6.28791C10.6384 6.66641 10.7322 7.08055 10.7322 7.5C10.7322 7.91945 10.6384 8.33359 10.4576 8.71209C10.2769 9.09059 10.0137 9.42386 9.6875 9.6875" />
                        <path
                          d="M11.5625 3.4375C12.1543 3.93618 12.63 4.55813 12.9563 5.25985C13.2827 5.96157 13.4517 6.72611 13.4517 7.5C13.4517 8.27389 13.2827 9.03843 12.9563 9.74015C12.63 10.4419 12.1543 11.0638 11.5625 11.5625" />
                      </svg>
                      <span class="text-sm font-semibold text-secondary grow">Noise &
                        Disturbance</span>
                      <span
                        class="px-2 py-1 bg-success-container text-on-success-container text-2xs rounded-full">48h
                        SLA</span>
                    </span>
                    <span class="text-xs font-medium">Late-night Noise / Ketertiban</span>
                    <span class="text-xs text-on-surface-low">Nocturnal construction past 22:00 WIB,
                      sidewalk
                      encroachment</span>
                    <input class="hidden" type="radio" name="cat" value="cat-6" />
                  </label>
                  <label
                    class="px-4 py-5 flex flex-col gap-2 border border-outline rounded-xl [&:has(input:checked)]:bg-success-container [&:has(input:checked)]:border-on-success-container">
                    <span class="flex flex-wrap items-center gap-2">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                        xmlns="http://www.w3.org/2000/svg" class="text-primary" aria-hidden="true"
                        stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
                        stroke="currentColor">
                        <path d="M1.875 13.125H13.125" />
                        <path d="M3.125 13.125V3.75L7.5 1.875V13.125" />
                        <path d="M11.875 13.125V6.25L7.5 4.375" />
                        <path d="M5 5H5.625" />
                        <path d="M5 7.5H5.625" />
                        <path d="M5 10H5.625" />
                        <path d="M9.375 6.875H10" />
                        <path d="M9.375 9.375H10" />
                      </svg>

                      <span class="text-sm font-semibold text-secondary grow">Building &
                        Zoning</span>
                      <span
                        class="px-2 py-1 bg-success-container text-on-success-container text-2xs rounded-full">72h
                        SLA</span>
                    </span>
                    <span class="text-xs font-medium">Unsafe Construction / Bangunan</span>
                    <span class="text-xs text-on-surface-low">Unsafe scaffolding, structural hazards,
                      building boundary
                      violations</span>
                    <input class="hidden" type="radio" name="cat" value="cat-7" />
                  </label>
                </div>
              </fieldset>
              <div
                class="mt-4 pt-6 flex flex-wrap justify-between font-semibold text-sm items-center border-t border-outline">
                <a href="/index.html" class="text-primary" id="prev-btn">Cancel</a>
                <button type="submit" id="submit-btn"
                  class="flex items-center px-5 py-3 bg-primary text-on-primary rounded-full">
                  Continue →
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>)
}