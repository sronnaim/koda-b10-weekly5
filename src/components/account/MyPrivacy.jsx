import { LuDownload } from "react-icons/lu"

function MyPrivacy() {
  return (
    <div className="flex flex-col gap-4 bg-surface-container rounded-2xl px-8 py-6 border border-outline md:max-w-160 mt-4"
      id="privacy">
      <hgroup>
        <h2 className="text-lg font-serif font-semibold text-secondary">Privacy Rights & Data Portability
        </h2>
        <p className="text-xs">Review personal records retained under municipal open data laws.</p>
      </hgroup>
      <p className="text-sm">Under Indonesian Law No. 27/2022 on Personal Data Protection (UU PDP) and Law No.
        14/2008
        on Public Information Openness (UU KIP), personal citizen identifiers are strictly segregated
        from public registers.</p>

      <div className="text-xs border border-dashed border-outline bg-surface p-4 rounded-xl flex flex-col gap-2">
        <h3 className="font-semibold text-secondary">Download your case archive</h3>
        <p className="text-on-surface-low">Export all submitted complaints, attached media metadata, and officer
          replies as standard JSON.
        </p>
        <button
          className="cursor-pointer inline-flex gap-2 px-4 py-3 bg-surface-container rounded-full w-fit border border-outline"
          type="button">
          <LuDownload />
          Download JSON archive
        </button>
      </div>
    </div>
  )
}

export default MyPrivacy