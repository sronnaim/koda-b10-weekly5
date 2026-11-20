function MyProfile() {
  return (
    <div className="bg-surface-container rounded-2xl px-8 py-6 border border-outline md:max-w-160 mt-4"
      id="profile">
      <hgroup>
        <h2 className="text-lg font-serif font-semibold text-secondary">Filer Identity & Preferences</h2>
        <p className="text-xs">Used to pre-fill future complaint forms and verify status inquiries.</p>
      </hgroup>
      <form action="/myprofile.html" className="flex flex-col gap-4 mt-4">
        <div>
          <label className="flex flex-wrap gap-4 items-center cursor-pointer">
            <span
              className="w-18 h-18 bg-success-container text-on-success-container border-2 border-on-success-container/35 rounded-full inline-flex items-center justify-center">FS</span>
            <span className="flex flex-col text-xs gap-1">
              <span className="font-semibold text-secondary">Profile photo</span>
              <span className="text-on-surface-low">JPG, PNG, or WebP. Square images work best.</span>
              <span className="text-secondary px-4 py-2 border border-outline w-fit rounded-full">Upload
                photo</span>
              <input type="file" name="profile-img" className="hidden" />
            </span>
          </label>
        </div>
        <label className="border-t border-outline py-4 font-mono uppercase text-xs flex flex-col font-medium">
          Full Legal Name
          <input type="text" name="fullname" autocomplete="name" value="Fahrul Septiana"
            className="border p-3 mt-2 border-outline rounded-xl" />
        </label>
        <label className="font-mono uppercase text-xs flex flex-col font-medium">
          Primary Notification Email
          <input type="email" name="email" autocomplete="email" value="fahrul@wargareport.id"
            className="border p-3 mt-2 border-outline rounded-xl" />
        </label>
        <label className="font-mono uppercase text-xs flex flex-col font-medium">
          SMS Contact Number
          <input type="tel" name="phone" autocomplete="tel-local" value="+62 812-9842-1054"
            className="border p-3 mt-2 border-outline rounded-xl" />
        </label>
        <label className="font-mono uppercase text-xs flex flex-col font-medium">
          NIK
          <input type="text" name="nik" value="3174051809900004"
            className="border p-3 mt-2 border-outline rounded-xl" />
        </label>
        <button type="submit"
          className="w-fit font-semibold px-4 py-2 bg-primary text-on-primary rounded-full">Save
          profile
          change</button>
      </form>
    </div>
  )
}

export default MyProfile