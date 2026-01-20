export default function CompactSlider({ label, value, onChange, min, max, step = 1, unit = '' }) {
  return (
    <div className="flex flex-col gap-1 w-28">
      <div className="flex justify-between text-xs">
        <span className="font-medium text-slate-600">{label}</span>
        <span className="text-slate-400 font-mono">{value}{unit}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full"
      />
    </div>
  )
}
