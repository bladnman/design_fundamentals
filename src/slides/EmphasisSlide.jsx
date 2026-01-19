import { useState } from 'react'
import ToggleGroup from '../components/ToggleGroup'
import Slider from '../components/Slider'
import DemoCard from '../components/DemoCard'
import DiagnosticCallout from '../components/DiagnosticCallout'

// What element gets the emphasis
const emphasisTargets = {
  nothing: {
    // Baseline - everything equal
    buttonBg: 'bg-slate-600',
    buttonText: 'text-white',
    buttonShadow: 'shadow-none',
    cardBg: 'bg-slate-50',
    cardBorder: 'border-slate-200',
    headlineSize: 'text-2xl',
    statSize: 'text-xl',
  },
  stats: {
    // Emphasize statistics
    cardBg: 'bg-blue-100',
    cardBorder: 'border-blue-300',
    statShadow: 'shadow-lg',
    buttonBg: 'bg-slate-400',
    buttonText: 'text-white',
    statSize: 'text-3xl',
  },
  cta: {
    // Emphasize the call-to-action button
    buttonBg: 'bg-blue-600',
    buttonText: 'text-white',
    buttonShadow: 'shadow-xl',
    cardBg: 'bg-slate-50',
    statSize: 'text-xl',
  },
  headline: {
    // Emphasize the headline
    headlineSize: 'text-5xl',
    buttonBg: 'bg-slate-400',
    buttonText: 'text-white',
    cardBg: 'bg-slate-50',
    statSize: 'text-xl',
  },
}

// How strong is the emphasis - per target
const emphasisStrengthMap = {
  cta: {
    1: { buttonShadow: 'shadow-none' },
    2: { buttonShadow: 'shadow-md' },
    3: { buttonShadow: 'shadow-lg' },
    4: { buttonShadow: 'shadow-xl ring-2 ring-blue-200' },
    5: { buttonShadow: 'shadow-2xl ring-4 ring-blue-300', buttonBg: 'bg-blue-700' },
  },
  stats: {
    1: { statSize: 'text-lg', statShadow: 'shadow-none' },
    2: { statSize: 'text-xl', statShadow: 'shadow-sm', cardBg: 'bg-blue-50' },
    3: { statSize: 'text-2xl', statShadow: 'shadow-md', cardBg: 'bg-blue-100', cardBorder: 'border-blue-200' },
    4: { statSize: 'text-3xl', statShadow: 'shadow-lg', cardBg: 'bg-blue-200', cardBorder: 'border-blue-400' },
    5: { statSize: 'text-4xl', statShadow: 'shadow-xl ring-2 ring-blue-300', cardBg: 'bg-blue-300', cardBorder: 'border-blue-500' },
  },
  headline: {
    1: { headlineSize: 'text-2xl', headlineWeight: 'font-medium' },
    2: { headlineSize: 'text-3xl', headlineWeight: 'font-semibold' },
    3: { headlineSize: 'text-4xl', headlineWeight: 'font-bold' },
    4: { headlineSize: 'text-5xl', headlineWeight: 'font-bold' },
    5: { headlineSize: 'text-6xl', headlineWeight: 'font-black' },
  },
  nothing: {
    1: {}, 2: {}, 3: {}, 4: {}, 5: {},
  },
}

// How muted are non-emphasized elements - more dramatic range
const deEmphasisMap = {
  1: {
    subtextColor: 'text-slate-700',
    mutedColor: 'text-slate-600',
    secondaryButtonBg: 'bg-slate-300',
  },
  2: {
    subtextColor: 'text-slate-600',
    mutedColor: 'text-slate-500',
    secondaryButtonBg: 'bg-slate-250',
  },
  3: {
    subtextColor: 'text-slate-500',
    mutedColor: 'text-slate-400',
    secondaryButtonBg: 'bg-slate-200',
  },
  4: {
    subtextColor: 'text-slate-400',
    mutedColor: 'text-slate-300',
    secondaryButtonBg: 'bg-slate-150',
    bodySize: 'text-sm',
  },
  5: {
    subtextColor: 'text-slate-300',
    mutedColor: 'text-slate-200',
    secondaryButtonBg: 'bg-slate-100',
    bodySize: 'text-xs',
    titleSize: 'text-[10px]',
  },
}

// Emphasis technique variations
const emphasisTechniques = {
  size: {
    stats: { statSize: 'text-4xl' },
    cta: { /* button already gets attention via shadow */ },
    headline: { headlineSize: 'text-5xl' },
    nothing: {},
  },
  color: {
    stats: { cardBg: 'bg-amber-100', cardBorder: 'border-amber-300' },
    cta: { buttonBg: 'bg-amber-500', buttonText: 'text-white' },
    headline: { textColor: 'text-amber-900' },
    nothing: {},
  },
  position: {
    // Position emphasis is more about layout - using shadow/border as proxy
    stats: { statShadow: 'shadow-xl', cardBg: 'bg-white' },
    cta: { buttonShadow: 'shadow-2xl' },
    headline: { cardShadow: 'shadow-inner' },
    nothing: {},
  },
}

export default function EmphasisSlide() {
  const [target, setTarget] = useState('cta')
  const [strength, setStrength] = useState(3)
  const [deEmphasis, setDeEmphasis] = useState(3)
  const [technique, setTechnique] = useState('size')

  const baseStyles = {
    ...emphasisTargets[target],
    ...emphasisStrengthMap[target][strength],
    ...deEmphasisMap[deEmphasis],
    ...emphasisTechniques[technique]?.[target],
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Emphasis</h2>
        <p className="text-slate-600">Draw attention to what matters most.</p>
      </div>

      <DiagnosticCallout quote="If users hesitate, it's often because too many things are competing for attention." />

      <div className="flex gap-6 flex-wrap justify-center items-end">
        <ToggleGroup
          label="Emphasize"
          options={[
            { value: 'nothing', label: 'Nothing' },
            { value: 'stats', label: 'Stats' },
            { value: 'cta', label: 'CTA' },
            { value: 'headline', label: 'Headline' },
          ]}
          value={target}
          onChange={setTarget}
        />

        <Slider
          label="Emphasis Strength"
          value={strength}
          onChange={setStrength}
          min={1}
          max={5}
          step={1}
        />

        <Slider
          label="De-emphasis"
          value={deEmphasis}
          onChange={setDeEmphasis}
          min={1}
          max={5}
          step={1}
        />

        <ToggleGroup
          label="Technique"
          options={[
            { value: 'size', label: 'Size' },
            { value: 'color', label: 'Color' },
            { value: 'position', label: 'Position' },
          ]}
          value={technique}
          onChange={setTechnique}
        />
      </div>

      <DemoCard styles={baseStyles} />
    </div>
  )
}

EmphasisSlide.title = 'Emphasis'
