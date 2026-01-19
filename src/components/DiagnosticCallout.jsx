export default function DiagnosticCallout({ quote }) {
  return (
    <blockquote
      className="
        border-l-4 border-amber-400 bg-amber-50/50
        pl-4 pr-6 py-3 rounded-r-lg
        shadow-sm max-w-lg
      "
    >
      <p className="font-display italic text-slate-700 text-sm leading-relaxed">
        {quote}
      </p>
    </blockquote>
  )
}
