import { useState } from 'react'
import ToggleGroup from '../components/ToggleGroup'
import PageLayoutDemo from '../components/PageLayoutDemo'
import DiagnosticCallout from '../components/DiagnosticCallout'
import SlideExplanation from '../components/SlideExplanation'

export default function AlignmentSlide() {
  const [alignment, setAlignment] = useState('left')
  const [showGuides, setShowGuides] = useState(false)
  const [chaos, setChaos] = useState(false)

  const styles = {
    alignment,
    columns: 3, // Fixed at 3 columns to focus on alignment lesson
    showGuides,
    chaos,
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Alignment</h2>
        <p className="text-slate-600">Invisible lines create visual order.</p>
      </div>

      <SlideExplanation>
        Alignment creates invisible structure the eye follows naturally. Even tiny misalignments
        trigger an "off" feeling that undermines trust. Check alignment first when something feels
        wrong but you can't explain why.
      </SlideExplanation>

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

      {chaos && (
        <div className="text-amber-600 text-sm font-medium">
          ⚠️ Notice how misalignment creates an uneasy feeling
        </div>
      )}

      <PageLayoutDemo styles={styles} />
    </div>
  )
}

AlignmentSlide.title = 'Alignment'
