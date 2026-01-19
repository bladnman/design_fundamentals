import { useState } from 'react'
import ToggleGroup from '../components/ToggleGroup'
import DemoCard from '../components/DemoCard'

const colorThemes = {
  default: {
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
  forest: {
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-950',
    subtextColor: 'text-emerald-800',
    mutedColor: 'text-emerald-600',
    cardBg: 'bg-emerald-100/50',
    cardBorder: 'border-emerald-200',
    buttonBg: 'bg-emerald-700',
    buttonText: 'text-white',
    secondaryButtonBg: 'bg-amber-100',
    secondaryButtonText: 'text-amber-900',
  },
  jazz: {
    bgColor: 'bg-indigo-950',
    textColor: 'text-amber-50',
    subtextColor: 'text-amber-100/80',
    mutedColor: 'text-amber-200/50',
    cardBg: 'bg-indigo-900/50',
    cardBorder: 'border-amber-500/30',
    buttonBg: 'bg-amber-500',
    buttonText: 'text-indigo-950',
    secondaryButtonBg: 'bg-indigo-800',
    secondaryButtonText: 'text-amber-100',
  },
}

export default function ColorSlide() {
  const [theme, setTheme] = useState('default')

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Color</h2>
        <p className="text-slate-600">You don't need color theory. Describe a vibe.</p>
      </div>

      <ToggleGroup
        options={[
          { value: 'default', label: 'Default' },
          { value: 'forest', label: 'Forest' },
          { value: 'jazz', label: 'Jazz' },
        ]}
        value={theme}
        onChange={setTheme}
      />

      <DemoCard styles={colorThemes[theme]} />
    </div>
  )
}

ColorSlide.title = 'Color'
