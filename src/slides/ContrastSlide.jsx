import { useState } from 'react'
import ToggleGroup from '../components/ToggleGroup'
import DemoCard from '../components/DemoCard'

const contrastModes = {
  subtle: {
    bgColor: 'bg-slate-50',
    textColor: 'text-slate-500',
    subtextColor: 'text-slate-400',
    mutedColor: 'text-slate-300',
    cardBg: 'bg-slate-50',
    cardBorder: 'border-slate-100',
    borderWidth: 'border',
    buttonBg: 'bg-transparent',
    buttonText: 'text-slate-400',
    secondaryButtonBg: 'bg-transparent',
    secondaryButtonText: 'text-slate-300',
  },
  medium: {
    bgColor: 'bg-white',
    textColor: 'text-slate-800',
    subtextColor: 'text-slate-500',
    mutedColor: 'text-slate-400',
    cardBg: 'bg-slate-50',
    cardBorder: 'border-slate-200',
    borderWidth: 'border',
    buttonBg: 'bg-slate-600',
    buttonText: 'text-white',
    secondaryButtonBg: 'bg-slate-100',
    secondaryButtonText: 'text-slate-600',
  },
  bold: {
    bgColor: 'bg-white',
    textColor: 'text-black',
    subtextColor: 'text-slate-900',
    mutedColor: 'text-slate-700',
    cardBg: 'bg-yellow-300',
    cardBorder: 'border-black',
    borderWidth: 'border-4',
    buttonBg: 'bg-black',
    buttonText: 'text-white',
    secondaryButtonBg: 'bg-white',
    secondaryButtonText: 'text-black',
  },
}

export default function ContrastSlide() {
  const [mode, setMode] = useState('medium')

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Contrast</h2>
        <p className="text-slate-600">From whisper-quiet to in-your-face.</p>
      </div>

      <ToggleGroup
        options={[
          { value: 'subtle', label: 'Subtle' },
          { value: 'medium', label: 'Medium' },
          { value: 'bold', label: 'Bold' },
        ]}
        value={mode}
        onChange={setMode}
      />

      <DemoCard styles={contrastModes[mode]} />
    </div>
  )
}

ContrastSlide.title = 'Contrast'
