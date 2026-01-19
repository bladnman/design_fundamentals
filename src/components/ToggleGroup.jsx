export default function ToggleGroup({ options, value, onChange, label }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {label && (
        <span className="text-sm font-medium text-slate-600">{label}</span>
      )}
      <div className="inline-flex bg-slate-200 rounded-full p-1 gap-1">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${value === option.value
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
              }
            `}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}
