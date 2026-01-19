import { useState } from 'react'
import ToggleGroup from '../components/ToggleGroup'
import Slider from '../components/Slider'
import SequenceDemo from '../components/SequenceDemo'
import DiagnosticCallout from '../components/DiagnosticCallout'

export default function RhythmSlide() {
  const [spacingRhythm, setSpacingRhythm] = useState('uniform')
  const [sizePattern, setSizePattern] = useState('uniform')
  const [connectorStyle, setConnectorStyle] = useState('line')
  const [stepCount, setStepCount] = useState(4)

  const styles = {
    spacingRhythm,
    sizePattern,
    connectorStyle,
    stepCount,
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Rhythm</h2>
        <p className="text-slate-600">Patterns in space and size guide users through sequences.</p>
      </div>

      <DiagnosticCallout quote="If users feel lost between steps, the rhythm of the layout isn't guiding them." />

      <div className="flex gap-6 flex-wrap justify-center items-end">
        <ToggleGroup
          label="Spacing"
          options={[
            { value: 'uniform', label: 'Uniform' },
            { value: 'progressive', label: 'Progress' },
            { value: 'grouped', label: 'Grouped' },
          ]}
          value={spacingRhythm}
          onChange={setSpacingRhythm}
        />

        <ToggleGroup
          label="Size Pattern"
          options={[
            { value: 'uniform', label: 'Uniform' },
            { value: 'diminishing', label: 'Diminish' },
            { value: 'alternating', label: 'Alternate' },
          ]}
          value={sizePattern}
          onChange={setSizePattern}
        />

        <ToggleGroup
          label="Connectors"
          options={[
            { value: 'none', label: 'None' },
            { value: 'line', label: 'Line' },
            { value: 'arrow', label: 'Arrow' },
            { value: 'dots', label: 'Dots' },
          ]}
          value={connectorStyle}
          onChange={setConnectorStyle}
        />

        <Slider
          label="Step Count"
          value={stepCount}
          onChange={setStepCount}
          min={3}
          max={6}
          step={1}
        />
      </div>

      <SequenceDemo styles={styles} />
    </div>
  )
}

RhythmSlide.title = 'Rhythm'
