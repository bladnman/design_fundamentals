import { useState } from 'react'
import ToggleGroup from '../components/ToggleGroup'
import Slider from '../components/Slider'
import DemoCard from '../components/DemoCard'
import DiagnosticCallout from '../components/DiagnosticCallout'

export default function HierarchySlide() {
  const [method, setMethod] = useState('combined')
  const [prominence, setProminence] = useState(3)

  // Build styles based on method and prominence
  const buildStyles = () => {
    const base = {
      // Defaults - no hierarchy
      headlineSize: 'text-2xl',
      subheadSize: 'text-lg',
      bodySize: 'text-base',
      statSize: 'text-xl',
      titleSize: 'text-xs',
      textColor: 'text-slate-800',
      subtextColor: 'text-slate-600',
    }

    // Size-based hierarchy
    const sizeScale = {
      1: { headlineSize: 'text-lg', statSize: 'text-base' },
      2: { headlineSize: 'text-xl', statSize: 'text-lg' },
      3: { headlineSize: 'text-2xl', statSize: 'text-xl' },
      4: { headlineSize: 'text-4xl', statSize: 'text-2xl' },
      5: { headlineSize: 'text-6xl', statSize: 'text-3xl' },
    }

    // Weight-based hierarchy (using Tailwind font weights)
    // We'll use custom inline styles for dramatic effect
    const weightScale = {
      1: { headlineWeight: 'font-light', statWeight: 'font-light' },
      2: { headlineWeight: 'font-normal', statWeight: 'font-normal' },
      3: { headlineWeight: 'font-semibold', statWeight: 'font-medium' },
      4: { headlineWeight: 'font-bold', statWeight: 'font-semibold' },
      5: { headlineWeight: 'font-black', statWeight: 'font-bold' },
    }

    // Color-based hierarchy
    const colorScale = {
      1: { textColor: 'text-slate-400', subtextColor: 'text-slate-400' },
      2: { textColor: 'text-slate-500', subtextColor: 'text-slate-400' },
      3: { textColor: 'text-slate-700', subtextColor: 'text-slate-500' },
      4: { textColor: 'text-slate-900', subtextColor: 'text-slate-500' },
      5: { textColor: 'text-black', subtextColor: 'text-slate-400', buttonBg: 'bg-blue-600' },
    }

    let styles = { ...base }

    if (method === 'size') {
      styles = { ...styles, ...sizeScale[prominence] }
    } else if (method === 'weight') {
      styles = { ...styles, ...weightScale[prominence] }
    } else if (method === 'color') {
      styles = { ...styles, ...colorScale[prominence] }
    } else {
      // Combined - apply all three
      styles = {
        ...styles,
        ...sizeScale[prominence],
        ...weightScale[prominence],
        ...colorScale[prominence],
      }
    }

    return styles
  }

  const styles = buildStyles()

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Hierarchy</h2>
        <p className="text-slate-600">Guide the eye from most to least important.</p>
      </div>

      <DiagnosticCallout quote="If everything looks important, nothing is." />

      <div className="flex gap-8 flex-wrap justify-center items-end">
        <ToggleGroup
          label="Method"
          options={[
            { value: 'size', label: 'Size' },
            { value: 'weight', label: 'Weight' },
            { value: 'color', label: 'Color' },
            { value: 'combined', label: 'Combined' },
          ]}
          value={method}
          onChange={setMethod}
        />

        <Slider
          label="Prominence"
          value={prominence}
          onChange={setProminence}
          min={1}
          max={5}
          step={1}
        />
      </div>

      {/* Method description */}
      <p className="text-sm text-slate-500 italic">
        {method === 'size' && 'Using size differences to create hierarchy'}
        {method === 'weight' && 'Using font weight to create hierarchy'}
        {method === 'color' && 'Using color contrast to create hierarchy'}
        {method === 'combined' && 'Combining size, weight, and color'}
      </p>

      <DemoCard styles={styles} />
    </div>
  )
}

HierarchySlide.title = 'Hierarchy'
