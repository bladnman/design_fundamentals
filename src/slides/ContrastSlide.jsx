import { useState } from 'react'
import ToggleGroup from '../components/ToggleGroup'
import Slider from '../components/Slider'
import DemoCard from '../components/DemoCard'
import DiagnosticCallout from '../components/DiagnosticCallout'

// What to apply contrast to
const contrastTargets = {
  everything: 'Apply contrast across the board',
  textOnly: 'Focus contrast on text hierarchy',
  elementsOnly: 'Focus contrast on UI elements',
}

// Overall contrast presets
const contrastLevels = {
  1: {
    // Whisper - everything blends
    textColor: 'text-slate-400',
    subtextColor: 'text-slate-350',
    mutedColor: 'text-slate-300',
    cardBg: 'bg-slate-50',
    cardBorder: 'border-slate-100',
    borderWidth: 'border',
    buttonBg: 'bg-slate-300',
    buttonText: 'text-slate-500',
    cardShadow: 'shadow-none',
    headlineSize: 'text-xl',
    statSize: 'text-lg',
  },
  2: {
    textColor: 'text-slate-600',
    subtextColor: 'text-slate-500',
    mutedColor: 'text-slate-400',
    cardBg: 'bg-slate-50',
    cardBorder: 'border-slate-150',
    borderWidth: 'border',
    buttonBg: 'bg-slate-500',
    buttonText: 'text-white',
    cardShadow: 'shadow-sm',
    headlineSize: 'text-2xl',
    statSize: 'text-xl',
  },
  3: {
    // Balanced
    textColor: 'text-slate-800',
    subtextColor: 'text-slate-600',
    mutedColor: 'text-slate-400',
    cardBg: 'bg-slate-50',
    cardBorder: 'border-slate-200',
    borderWidth: 'border',
    buttonBg: 'bg-blue-600',
    buttonText: 'text-white',
    cardShadow: 'shadow-md',
    headlineSize: 'text-3xl',
    statSize: 'text-2xl',
  },
  4: {
    textColor: 'text-slate-900',
    subtextColor: 'text-slate-700',
    mutedColor: 'text-slate-500',
    cardBg: 'bg-slate-100',
    cardBorder: 'border-slate-300',
    borderWidth: 'border-2',
    buttonBg: 'bg-blue-700',
    buttonText: 'text-white',
    cardShadow: 'shadow-lg',
    headlineSize: 'text-4xl',
    statSize: 'text-3xl',
  },
  5: {
    // Bold - maximum contrast
    textColor: 'text-black',
    subtextColor: 'text-slate-900',
    mutedColor: 'text-slate-700',
    cardBg: 'bg-yellow-300',
    cardBorder: 'border-black',
    borderWidth: 'border-4',
    buttonBg: 'bg-black',
    buttonText: 'text-white',
    cardShadow: 'shadow-xl',
    headlineSize: 'text-5xl',
    statSize: 'text-3xl',
  },
}

export default function ContrastSlide() {
  const [contrast, setContrast] = useState(3)
  const [target, setTarget] = useState('everything')

  // Base styles from contrast level
  let styles = { ...contrastLevels[contrast] }

  // Modify based on target
  if (target === 'textOnly') {
    // Keep element contrast low, emphasize text
    styles = {
      ...styles,
      cardBg: 'bg-slate-50',
      cardBorder: 'border-slate-200',
      borderWidth: 'border',
      cardShadow: 'shadow-sm',
      buttonBg: 'bg-slate-600',
    }
  } else if (target === 'elementsOnly') {
    // Keep text contrast moderate, emphasize elements
    styles = {
      ...styles,
      textColor: 'text-slate-700',
      subtextColor: 'text-slate-500',
      headlineSize: 'text-2xl',
      statSize: 'text-xl',
    }
  }

  const contrastLabel = ['', 'Whisper', 'Soft', 'Balanced', 'Strong', 'Bold'][contrast]

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Contrast</h2>
        <p className="text-slate-600">Contrast creates visual separation and focus.</p>
      </div>

      <DiagnosticCallout quote="If users don't know where to look first, contrast isn't doing its job." />

      <div className="flex gap-8 flex-wrap justify-center items-end">
        <div className="flex flex-col items-center gap-2">
          <Slider
            label="Contrast Level"
            value={contrast}
            onChange={setContrast}
            min={1}
            max={5}
            step={1}
          />
          <span className="text-xs text-slate-500 font-medium">{contrastLabel}</span>
        </div>

        <ToggleGroup
          label="Apply To"
          options={[
            { value: 'everything', label: 'Everything' },
            { value: 'textOnly', label: 'Text' },
            { value: 'elementsOnly', label: 'Elements' },
          ]}
          value={target}
          onChange={setTarget}
        />
      </div>

      <DemoCard styles={styles} />
    </div>
  )
}

ContrastSlide.title = 'Contrast'
