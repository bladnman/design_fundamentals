import { useState } from 'react'
import ToggleGroup from '../components/ToggleGroup'
import CompactSlider from '../components/CompactSlider'
import DemoCard from '../components/DemoCard'
import DiagnosticCallout from '../components/DiagnosticCallout'
import SlideExplanation from '../components/SlideExplanation'

// Color harmony approaches - this is about relationships between colors
const colorHarmonies = {
  monochromatic: {
    name: 'Monochromatic',
    description: 'One hue, different shades',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-950',
    subtextColor: 'text-blue-800',
    mutedColor: 'text-blue-600',
    cardBg: 'bg-blue-100/50',
    cardBorder: 'border-blue-200',
    buttonBg: 'bg-blue-600',
    buttonText: 'text-white',
    secondaryButtonBg: 'bg-blue-100',
    secondaryButtonText: 'text-blue-700',
  },
  complementary: {
    name: 'Complementary',
    description: 'Opposite colors create energy',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-950',
    subtextColor: 'text-blue-800',
    mutedColor: 'text-blue-600',
    cardBg: 'bg-orange-50',
    cardBorder: 'border-orange-200',
    buttonBg: 'bg-orange-500',
    buttonText: 'text-white',
    secondaryButtonBg: 'bg-blue-100',
    secondaryButtonText: 'text-blue-700',
  },
  analogous: {
    name: 'Analogous',
    description: 'Neighboring colors feel harmonious',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-950',
    subtextColor: 'text-emerald-800',
    mutedColor: 'text-teal-600',
    cardBg: 'bg-cyan-50',
    cardBorder: 'border-teal-200',
    buttonBg: 'bg-teal-600',
    buttonText: 'text-white',
    secondaryButtonBg: 'bg-emerald-100',
    secondaryButtonText: 'text-emerald-700',
  },
  triadic: {
    name: 'Triadic',
    description: 'Three evenly spaced colors',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-950',
    subtextColor: 'text-violet-800',
    mutedColor: 'text-violet-600',
    cardBg: 'bg-amber-50',
    cardBorder: 'border-amber-200',
    buttonBg: 'bg-emerald-600',
    buttonText: 'text-white',
    secondaryButtonBg: 'bg-violet-100',
    secondaryButtonText: 'text-violet-700',
  },
}

// Accent prominence - how much the accent color stands out
const accentProminenceMap = {
  1: { buttonShadow: 'shadow-none', buttonBg: 'bg-slate-500' },
  2: { buttonShadow: 'shadow-sm' },
  3: { buttonShadow: 'shadow-md' },
  4: { buttonShadow: 'shadow-lg' },
  5: { buttonShadow: 'shadow-xl ring-2 ring-offset-2' },
}

// Neutral balance - how much neutral vs color
const neutralBalanceMap = {
  1: 'saturate-50',   // Very muted, lots of neutral
  2: 'saturate-75',
  3: 'saturate-100',  // Balanced
  4: 'saturate-125',
  5: 'saturate-150',  // Very colorful
}

export default function ColorSlide() {
  const [harmony, setHarmony] = useState('monochromatic')
  const [accentProminence, setAccentProminence] = useState(3)
  const [colorfulness, setColorfulness] = useState(3)

  const harmonyData = colorHarmonies[harmony]
  const styles = {
    ...harmonyData,
    ...accentProminenceMap[accentProminence],
  }

  const filterClass = neutralBalanceMap[colorfulness]

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Color</h2>
        <p className="text-slate-600">Color harmony creates visual relationships.</p>
      </div>

      <SlideExplanation>
        Color harmonies (monochromatic, complementary, analogous) create palettes that feel
        intentional. The right harmony reinforces personality while ensuring readability.
      </SlideExplanation>

      <DiagnosticCallout quote="If your colors clash or feel random, the problem is usually how they were chosen—not which ones." />

      <div className="flex gap-6 flex-wrap justify-center items-end">
        <ToggleGroup
          label="Harmony"
          options={[
            { value: 'monochromatic', label: 'Mono' },
            { value: 'complementary', label: 'Complement' },
            { value: 'analogous', label: 'Analogous' },
            { value: 'triadic', label: 'Triadic' },
          ]}
          value={harmony}
          onChange={setHarmony}
        />

        <CompactSlider
          label="Accent"
          value={accentProminence}
          onChange={setAccentProminence}
          min={1}
          max={5}
          step={1}
        />

        <CompactSlider
          label="Colorfulness"
          value={colorfulness}
          onChange={setColorfulness}
          min={1}
          max={5}
          step={1}
        />
      </div>

      {/* Harmony description */}
      <p className="text-sm text-slate-500 italic">
        {harmonyData.description}
      </p>

      <div className={`${filterClass} demo-transition`}>
        <DemoCard styles={styles} />
      </div>
    </div>
  )
}

ColorSlide.title = 'Color'
