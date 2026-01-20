import { useState } from 'react'
import ToggleGroup from '../components/ToggleGroup'
import RepetitionDemo from '../components/RepetitionDemo'
import DiagnosticCallout from '../components/DiagnosticCallout'
import SlideExplanation from '../components/SlideExplanation'

export default function RepetitionSlide() {
  const [consistentSpacing, setConsistentSpacing] = useState(true)
  const [consistentSizing, setConsistentSizing] = useState(true)
  const [consistentColors, setConsistentColors] = useState(true)
  const [consistentBorders, setConsistentBorders] = useState(true)

  const styles = {
    consistentSpacing,
    consistentSizing,
    consistentColors,
    consistentBorders,
    itemCount: 4, // Fixed at 4 to focus on consistency lesson
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

      <SlideExplanation>
        When similar elements look and behave consistently, users learn faster. Inconsistency
        forces re-evaluation of each element, increasing cognitive load and errors.
      </SlideExplanation>

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
