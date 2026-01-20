import { useState } from 'react'
import ToggleGroup from '../components/ToggleGroup'
import Slider from '../components/Slider'
import DemoCard from '../components/DemoCard'
import DiagnosticCallout from '../components/DiagnosticCallout'
import SlideExplanation from '../components/SlideExplanation'

export default function ContrastSlide() {
  const [foreground, setForeground] = useState('everything')
  const [backgroundFade, setBackgroundFade] = useState(3)

  // Build styles based on what should "pop" vs recede
  const buildStyles = () => {
    if (foreground === 'everything') {
      // Balanced state - no intentional contrast
      return {
        contrastFocus: null,
        backgroundFade: 1,
      }
    }

    return {
      contrastFocus: foreground,
      backgroundFade,
    }
  }

  const styles = buildStyles()

  const foregroundDescription = {
    everything: 'All elements have similar visual weight',
    keyMetrics: 'Revenue stat pops, other elements recede',
    actions: 'Buttons command attention, data becomes secondary',
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Contrast</h2>
        <p className="text-slate-600">What pops? What fades into the background?</p>
      </div>

      <SlideExplanation>
        Contrast directs attention. High contrast says "look here first." Low contrast says
        "this is secondary." Without intentional contrast, users scan aimlessly because
        everything competes equally for attention.
      </SlideExplanation>

      <DiagnosticCallout quote="If users don't know where to look first, contrast isn't doing its job." />

      <div className="flex gap-8 flex-wrap justify-center items-end">
        <ToggleGroup
          label="Foreground"
          options={[
            { value: 'everything', label: 'Everything' },
            { value: 'keyMetrics', label: 'Key Metrics' },
            { value: 'actions', label: 'Actions' },
          ]}
          value={foreground}
          onChange={setForeground}
        />

        {foreground !== 'everything' && (
          <Slider
            label="Background Fade"
            value={backgroundFade}
            onChange={setBackgroundFade}
            min={1}
            max={5}
            step={1}
          />
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-slate-500 italic">
        {foregroundDescription[foreground]}
      </p>

      <DemoCard styles={styles} />
    </div>
  )
}

ContrastSlide.title = 'Contrast'
