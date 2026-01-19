import { useState } from 'react'
import ToggleGroup from '../components/ToggleGroup'
import DemoCard from '../components/DemoCard'

const elevationModes = {
  flat: {
    cardShadow: 'shadow-none',
    statShadow: 'shadow-none',
    buttonShadow: 'shadow-none',
  },
  elevated: {
    cardShadow: 'shadow-xl',
    statShadow: 'shadow-md',
    buttonShadow: 'shadow-sm',
  },
}

export default function ElevationSlide() {
  const [mode, setMode] = useState('flat')

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Elevation</h2>
        <p className="text-slate-600">What pops forward? What recedes?</p>
      </div>

      <ToggleGroup
        options={[
          { value: 'flat', label: 'Flat' },
          { value: 'elevated', label: 'Elevated' },
        ]}
        value={mode}
        onChange={setMode}
      />

      <DemoCard styles={elevationModes[mode]} />
    </div>
  )
}

ElevationSlide.title = 'Elevation'
