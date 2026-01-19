import { useState } from 'react'
import Slider from '../components/Slider'
import DemoCard from '../components/DemoCard'

// Map numeric values to Tailwind classes - EXTREME ranges for dramatic effect
const lineHeightMap = {
  1.0: 'leading-none',
  1.1: 'leading-tight',
  1.25: 'leading-snug',
  1.5: 'leading-normal',
  1.75: 'leading-relaxed',
  2.0: 'leading-loose',
  2.5: 'leading-[2.5]',
}

const gapMap = {
  0: 'gap-0',
  2: 'gap-0.5',
  4: 'gap-1',
  8: 'gap-2',
  16: 'gap-4',
  24: 'gap-6',
  32: 'gap-8',
  48: 'gap-12',
  64: 'gap-16',
}

const paddingMap = {
  4: 'p-1',
  8: 'p-2',
  12: 'p-3',
  16: 'p-4',
  24: 'p-6',
  32: 'p-8',
  48: 'p-12',
  64: 'p-16',
}

function getClosestKey(value, map) {
  const keys = Object.keys(map).map(Number)
  return keys.reduce((prev, curr) =>
    Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
  )
}

export default function SpacingSlide() {
  const [lineHeight, setLineHeight] = useState(1.5)
  const [gap, setGap] = useState(16)
  const [padding, setPadding] = useState(32)

  const styles = {
    lineHeight: lineHeightMap[getClosestKey(lineHeight, lineHeightMap)],
    gap: gapMap[getClosestKey(gap, gapMap)],
    padding: paddingMap[getClosestKey(padding, paddingMap)],
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Spacing</h2>
        <p className="text-slate-600">Spacing is a system with multiple levers.</p>
      </div>

      <div className="flex gap-8 flex-wrap justify-center">
        <Slider
          label="Line Height"
          value={lineHeight}
          onChange={setLineHeight}
          min={1.0}
          max={2.5}
          step={0.1}
        />
        <Slider
          label="Element Gap"
          value={gap}
          onChange={setGap}
          min={0}
          max={64}
          step={2}
          unit="px"
        />
        <Slider
          label="Padding"
          value={padding}
          onChange={setPadding}
          min={4}
          max={64}
          step={4}
          unit="px"
        />
      </div>

      <DemoCard styles={styles} />
    </div>
  )
}

SpacingSlide.title = 'Spacing'
