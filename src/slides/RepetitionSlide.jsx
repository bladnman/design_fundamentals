import { useState } from 'react'
import ToggleGroup from '../components/ToggleGroup'
import Slider from '../components/Slider'
import RepetitionDemo from '../components/RepetitionDemo'
import DiagnosticCallout from '../components/DiagnosticCallout'

export default function RepetitionSlide() {
  const [consistentSpacing, setConsistentSpacing] = useState(true)
  const [consistentSizing, setConsistentSizing] = useState(true)
  const [consistentColors, setConsistentColors] = useState(true)
  const [consistentBorders, setConsistentBorders] = useState(true)
  const [itemCount, setItemCount] = useState(4)

  const styles = {
    consistentSpacing,
    consistentSizing,
    consistentColors,
    consistentBorders,
    itemCount,
  }

  const inconsistencies = [
    !consistentSpacing && 'spacing',
    !consistentSizing && 'sizing',
    !consistentColors && 'colors',
    !consistentBorders && 'borders',
  ].filter(Boolean)

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Repetition</h2>
        <p className="text-slate-600">Consistency builds trust and reduces cognitive load.</p>
      </div>

      <DiagnosticCallout quote="If your UI feels unpredictable, inconsistency is usually the culprit." />

      <div className="flex gap-6 flex-wrap justify-center items-end">
        <ToggleGroup
          label="Spacing"
          options={[
            { value: true, label: 'Consistent' },
            { value: false, label: 'Random' },
          ]}
          value={consistentSpacing}
          onChange={setConsistentSpacing}
        />

        <ToggleGroup
          label="Sizing"
          options={[
            { value: true, label: 'Consistent' },
            { value: false, label: 'Random' },
          ]}
          value={consistentSizing}
          onChange={setConsistentSizing}
        />

        <ToggleGroup
          label="Colors"
          options={[
            { value: true, label: 'Consistent' },
            { value: false, label: 'Random' },
          ]}
          value={consistentColors}
          onChange={setConsistentColors}
        />

        <ToggleGroup
          label="Borders"
          options={[
            { value: true, label: 'Consistent' },
            { value: false, label: 'Random' },
          ]}
          value={consistentBorders}
          onChange={setConsistentBorders}
        />

        <Slider
          label="Item Count"
          value={itemCount}
          onChange={setItemCount}
          min={3}
          max={6}
          step={1}
        />
      </div>

      {inconsistencies.length > 0 && (
        <div className="text-amber-600 text-sm font-medium">
          ⚠️ Inconsistent: {inconsistencies.join(', ')}
        </div>
      )}

      <RepetitionDemo styles={styles} />
    </div>
  )
}

RepetitionSlide.title = 'Repetition'
