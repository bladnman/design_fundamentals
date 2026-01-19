import { useState } from 'react'
import ToggleGroup from '../components/ToggleGroup'
import Slider from '../components/Slider'
import DemoCard from '../components/DemoCard'
import DiagnosticCallout from '../components/DiagnosticCallout'

// Scale types define how sizes relate to each other
const scaleTypes = {
  flat: {
    name: 'Flat',
    // All elements similar size - no hierarchy
    getSizes: (base) => ({
      headlineSize: `text-[${base}px]`,
      subheadSize: `text-[${Math.round(base * 0.9)}px]`,
      bodySize: `text-[${Math.round(base * 0.85)}px]`,
      statSize: `text-[${base}px]`,
      titleSize: `text-[${Math.round(base * 0.7)}px]`,
    }),
  },
  modular: {
    name: 'Modular',
    // Mathematical ratio between sizes
    getSizes: (base, ratio) => ({
      headlineSize: `text-[${Math.round(base * ratio * ratio)}px]`,
      subheadSize: `text-[${Math.round(base * ratio)}px]`,
      bodySize: `text-[${base}px]`,
      statSize: `text-[${Math.round(base * ratio * ratio)}px]`,
      titleSize: `text-[${Math.round(base * 0.75)}px]`,
    }),
  },
  dramatic: {
    name: 'Dramatic',
    // Big headlines, smaller everything else
    getSizes: (base, ratio) => ({
      headlineSize: `text-[${Math.round(base * ratio * ratio * ratio)}px]`,
      subheadSize: `text-[${Math.round(base * ratio)}px]`,
      bodySize: `text-[${base}px]`,
      statSize: `text-[${Math.round(base * ratio * ratio)}px]`,
      titleSize: `text-[${Math.round(base * 0.65)}px]`,
    }),
  },
}

// Pre-calculated Tailwind class mappings for common sizes
const tailwindSizeClasses = {
  10: 'text-[10px]', 11: 'text-[11px]', 12: 'text-xs',
  13: 'text-[13px]', 14: 'text-sm', 15: 'text-[15px]',
  16: 'text-base', 17: 'text-[17px]', 18: 'text-lg',
  19: 'text-[19px]', 20: 'text-xl', 22: 'text-[22px]',
  24: 'text-2xl', 26: 'text-[26px]', 28: 'text-[28px]',
  30: 'text-3xl', 32: 'text-[32px]', 36: 'text-4xl',
  40: 'text-[40px]', 42: 'text-[42px]', 48: 'text-5xl',
  54: 'text-[54px]', 60: 'text-6xl', 72: 'text-7xl',
}

function getClosestSize(px) {
  const sizes = Object.keys(tailwindSizeClasses).map(Number)
  const closest = sizes.reduce((prev, curr) =>
    Math.abs(curr - px) < Math.abs(prev - px) ? curr : prev
  )
  return tailwindSizeClasses[closest]
}

function calculateStyles(scaleType, baseSize, scaleRatio) {
  const scale = scaleTypes[scaleType]
  const rawSizes = scale.getSizes(baseSize, scaleRatio)

  // Convert arbitrary values to closest Tailwind classes
  return {
    headlineSize: getClosestSize(parseInt(rawSizes.headlineSize.match(/\d+/)?.[0] || baseSize * 2)),
    subheadSize: getClosestSize(parseInt(rawSizes.subheadSize.match(/\d+/)?.[0] || baseSize * 1.25)),
    bodySize: getClosestSize(parseInt(rawSizes.bodySize.match(/\d+/)?.[0] || baseSize)),
    statSize: getClosestSize(parseInt(rawSizes.statSize.match(/\d+/)?.[0] || baseSize * 2)),
    titleSize: getClosestSize(parseInt(rawSizes.titleSize.match(/\d+/)?.[0] || baseSize * 0.75)),
  }
}

export default function TypographySlide() {
  const [scaleType, setScaleType] = useState('modular')
  const [baseSize, setBaseSize] = useState(16)
  const [scaleRatio, setScaleRatio] = useState(1.25)

  const styles = calculateStyles(scaleType, baseSize, scaleRatio)

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Typography Scale</h2>
        <p className="text-slate-600">Size relationships create hierarchy and rhythm.</p>
      </div>

      <DiagnosticCallout quote="If your text feels noisy or dull, your font choices are probably doing too much—or nothing at all." />

      <div className="flex gap-6 flex-wrap justify-center items-end">
        <ToggleGroup
          label="Scale Type"
          options={[
            { value: 'flat', label: 'Flat' },
            { value: 'modular', label: 'Modular' },
            { value: 'dramatic', label: 'Dramatic' },
          ]}
          value={scaleType}
          onChange={setScaleType}
        />

        <Slider
          label="Base Size"
          value={baseSize}
          onChange={setBaseSize}
          min={12}
          max={20}
          step={1}
          unit="px"
        />

        <Slider
          label="Scale Ratio"
          value={scaleRatio}
          onChange={setScaleRatio}
          min={1.1}
          max={1.5}
          step={0.05}
        />
      </div>

      <DemoCard styles={styles} />
    </div>
  )
}

TypographySlide.title = 'Typography'
