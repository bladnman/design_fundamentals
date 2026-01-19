import { useState } from 'react'
import ToggleGroup from '../components/ToggleGroup'
import DemoCard from '../components/DemoCard'

const themes = {
  light: {
    bgColor: 'bg-white',
    textColor: 'text-slate-900',
    subtextColor: 'text-slate-600',
    mutedColor: 'text-slate-400',
    cardBg: 'bg-slate-50',
    cardBorder: 'border-slate-200',
    buttonBg: 'bg-blue-600',
    buttonText: 'text-white',
    secondaryButtonBg: 'bg-slate-200',
    secondaryButtonText: 'text-slate-700',
  },
  dark: {
    bgColor: 'bg-slate-900',
    textColor: 'text-white',
    subtextColor: 'text-slate-300',
    mutedColor: 'text-slate-500',
    cardBg: 'bg-slate-800',
    cardBorder: 'border-slate-700',
    buttonBg: 'bg-blue-500',
    buttonText: 'text-white',
    secondaryButtonBg: 'bg-slate-700',
    secondaryButtonText: 'text-slate-200',
  },
  warm: {
    bgColor: 'bg-orange-950',
    textColor: 'text-amber-50',
    subtextColor: 'text-amber-100/80',
    mutedColor: 'text-amber-200/50',
    cardBg: 'bg-orange-900/40',
    cardBorder: 'border-amber-700/30',
    buttonBg: 'bg-amber-500',
    buttonText: 'text-orange-950',
    secondaryButtonBg: 'bg-orange-800/50',
    secondaryButtonText: 'text-amber-100',
  },
  cool: {
    bgColor: 'bg-slate-900',
    textColor: 'text-cyan-50',
    subtextColor: 'text-cyan-100/80',
    mutedColor: 'text-cyan-200/50',
    cardBg: 'bg-slate-800/60',
    cardBorder: 'border-cyan-500/20',
    buttonBg: 'bg-cyan-500',
    buttonText: 'text-slate-900',
    secondaryButtonBg: 'bg-slate-700',
    secondaryButtonText: 'text-cyan-100',
  },
}

export default function LightDarkSlide() {
  const [mode, setMode] = useState('light')

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Light / Dark</h2>
        <p className="text-slate-600">Dark doesn't mean black. Tones create mood.</p>
      </div>

      <ToggleGroup
        options={[
          { value: 'light', label: 'Light' },
          { value: 'dark', label: 'Dark' },
          { value: 'warm', label: 'Warm' },
          { value: 'cool', label: 'Cool' },
        ]}
        value={mode}
        onChange={setMode}
      />

      <DemoCard styles={themes[mode]} />
    </div>
  )
}

LightDarkSlide.title = 'Light / Dark'
