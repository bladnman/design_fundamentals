import { useState } from 'react'
import ToggleGroup from '../components/ToggleGroup'
import Slider from '../components/Slider'
import DemoCard from '../components/DemoCard'
import DiagnosticCallout from '../components/DiagnosticCallout'

// Base clean styles
const cleanStyles = {
  bgColor: 'bg-white',
  textColor: 'text-slate-900',
  subtextColor: 'text-slate-600',
  mutedColor: 'text-slate-400',
  cardBg: 'bg-slate-50',
  cardBorder: 'border-slate-200',
  borderWidth: 'border',
  buttonBg: 'bg-blue-600',
  buttonText: 'text-white',
  secondaryButtonBg: 'bg-slate-200',
  secondaryButtonText: 'text-slate-700',
  cardShadow: 'shadow-lg',
}

// Toggle effects for "kitchen sink" features
const extraBorderStyles = {
  on: { borderWidth: 'border-4', cardBorder: 'border-blue-400' },
  off: {},
}

const gradientStyles = {
  on: { bgColor: 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50' },
  off: {},
}

const shadowEverywhereStyles = {
  on: { cardShadow: 'shadow-2xl', statShadow: 'shadow-lg', buttonShadow: 'shadow-lg' },
  off: {},
}

const iconDecorationStyles = {
  on: { /* Would add icon indicators - simulated via extra styling */
    titleSize: 'text-sm',
    mutedColor: 'text-blue-500',
  },
  off: {},
}

// Master complexity levels
const complexityLevels = {
  1: {
    // Clean and minimal
    borderWidth: 'border',
    cardBorder: 'border-slate-100',
    bgColor: 'bg-white',
    cardShadow: 'shadow-sm',
    statShadow: 'shadow-none',
    buttonShadow: 'shadow-none',
  },
  2: {
    borderWidth: 'border',
    cardBorder: 'border-slate-200',
    bgColor: 'bg-white',
    cardShadow: 'shadow-md',
    statShadow: 'shadow-none',
    buttonShadow: 'shadow-sm',
  },
  3: {
    borderWidth: 'border',
    cardBorder: 'border-slate-200',
    bgColor: 'bg-slate-50',
    cardShadow: 'shadow-lg',
    statShadow: 'shadow-sm',
    buttonShadow: 'shadow-md',
  },
  4: {
    borderWidth: 'border-2',
    cardBorder: 'border-blue-300',
    bgColor: 'bg-gradient-to-br from-slate-50 to-blue-50',
    cardShadow: 'shadow-xl',
    statShadow: 'shadow-md',
    buttonShadow: 'shadow-lg',
  },
  5: {
    // Kitchen sink
    borderWidth: 'border-4',
    cardBorder: 'border-blue-400',
    bgColor: 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50',
    cardShadow: 'shadow-2xl',
    statShadow: 'shadow-lg',
    buttonShadow: 'shadow-xl ring-4 ring-blue-200',
    mutedColor: 'text-purple-500',
  },
}

export default function RestraintSlide() {
  const [extraBorder, setExtraBorder] = useState(false)
  const [gradient, setGradient] = useState(false)
  const [shadowsEverywhere, setShadowsEverywhere] = useState(false)
  const [iconDecorations, setIconDecorations] = useState(false)
  const [complexity, setComplexity] = useState(3)

  // Build styles based on toggles or complexity slider
  const styles = {
    ...cleanStyles,
    ...complexityLevels[complexity],
    ...(extraBorder ? extraBorderStyles.on : {}),
    ...(gradient ? gradientStyles.on : {}),
    ...(shadowsEverywhere ? shadowEverywhereStyles.on : {}),
    ...(iconDecorations ? iconDecorationStyles.on : {}),
  }

  const anyToggleOn = extraBorder || gradient || shadowsEverywhere || iconDecorations
  const toggleCount = [extraBorder, gradient, shadowsEverywhere, iconDecorations].filter(Boolean).length

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Restraint</h2>
        <p className="text-slate-600">Less is often more. Complexity should be earned.</p>
      </div>

      <DiagnosticCallout quote="If you keep adding things to fix clarity, you probably need to remove something instead." />

      <div className="flex gap-6 flex-wrap justify-center items-end">
        <Slider
          label="Complexity"
          value={complexity}
          onChange={setComplexity}
          min={1}
          max={5}
          step={1}
        />

        <ToggleGroup
          label="Extra Border"
          options={[
            { value: false, label: 'Off' },
            { value: true, label: 'On' },
          ]}
          value={extraBorder}
          onChange={setExtraBorder}
        />

        <ToggleGroup
          label="Gradient BG"
          options={[
            { value: false, label: 'Off' },
            { value: true, label: 'On' },
          ]}
          value={gradient}
          onChange={setGradient}
        />

        <ToggleGroup
          label="Shadows"
          options={[
            { value: false, label: 'Normal' },
            { value: true, label: 'Everywhere' },
          ]}
          value={shadowsEverywhere}
          onChange={setShadowsEverywhere}
        />
      </div>

      {anyToggleOn && (
        <div className="text-amber-600 text-sm font-medium">
          ⚠️ {toggleCount} extra feature{toggleCount > 1 ? 's' : ''} enabled — is each one earning its place?
        </div>
      )}

      <DemoCard styles={styles} />
    </div>
  )
}

RestraintSlide.title = 'Restraint'
