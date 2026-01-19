import { useState } from 'react'
import ToggleGroup from '../components/ToggleGroup'
import DemoCard from '../components/DemoCard'

const sizeModes = {
  default: {
    headlineSize: 'text-lg',
    subheadSize: 'text-base',
    bodySize: 'text-base',
    statSize: 'text-lg',
    titleSize: 'text-sm',
  },
  intentional: {
    headlineSize: 'text-4xl',
    subheadSize: 'text-xl',
    bodySize: 'text-base',
    statSize: 'text-3xl',
    titleSize: 'text-xs',
  },
}

export default function FontSizeSlide() {
  const [mode, setMode] = useState('default')

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Font Size</h2>
        <p className="text-slate-600">Playing with size signals intention and creates hierarchy.</p>
      </div>

      <ToggleGroup
        options={[
          { value: 'default', label: 'Default' },
          { value: 'intentional', label: 'Intentional' },
        ]}
        value={mode}
        onChange={setMode}
      />

      <DemoCard styles={sizeModes[mode]} />
    </div>
  )
}

FontSizeSlide.title = 'Font Size'
