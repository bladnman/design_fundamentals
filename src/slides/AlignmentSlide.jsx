import { useState } from 'react'
import ToggleGroup from '../components/ToggleGroup'
import Slider from '../components/Slider'
import PageLayoutDemo from '../components/PageLayoutDemo'
import DiagnosticCallout from '../components/DiagnosticCallout'

export default function AlignmentSlide() {
  const [alignment, setAlignment] = useState('left')
  const [columns, setColumns] = useState(3)
  const [showGuides, setShowGuides] = useState(false)
  const [chaos, setChaos] = useState(false)

  const styles = {
    alignment,
    columns,
    showGuides,
    chaos,
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Alignment</h2>
        <p className="text-slate-600">Invisible lines create visual order.</p>
      </div>

      <DiagnosticCallout quote="If something feels 'off' but you can't explain why, check alignment first." />

      <div className="flex gap-6 flex-wrap justify-center items-end">
        <ToggleGroup
          label="Alignment"
          options={[
            { value: 'left', label: 'Left' },
            { value: 'center', label: 'Center' },
            { value: 'right', label: 'Right' },
          ]}
          value={alignment}
          onChange={setAlignment}
        />

        <Slider
          label="Grid Columns"
          value={columns}
          onChange={setColumns}
          min={1}
          max={4}
          step={1}
        />

        <ToggleGroup
          label="Show Guides"
          options={[
            { value: false, label: 'Hide' },
            { value: true, label: 'Show' },
          ]}
          value={showGuides}
          onChange={setShowGuides}
        />

        <ToggleGroup
          label="Chaos Mode"
          options={[
            { value: false, label: 'Off' },
            { value: true, label: 'On' },
          ]}
          value={chaos}
          onChange={setChaos}
        />
      </div>

      <PageLayoutDemo styles={styles} />
    </div>
  )
}

AlignmentSlide.title = 'Alignment'
