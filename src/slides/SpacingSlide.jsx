import { useState } from 'react'
import ToggleGroup from '../components/ToggleGroup'
import CompactSlider from '../components/CompactSlider'
import DemoCard from '../components/DemoCard'
import DiagnosticCallout from '../components/DiagnosticCallout'
import SlideExplanation from '../components/SlideExplanation'

// Map numeric values to Tailwind classes
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

// Density presets - these set the slider values
const densityPresets = {
  cramped: { lineHeight: 1.1, gap: 4, padding: 12 },
  compact: { lineHeight: 1.25, gap: 12, padding: 20 },
  comfortable: { lineHeight: 1.5, gap: 24, padding: 32 },
  spacious: { lineHeight: 1.75, gap: 40, padding: 48 },
}

function getClosestKey(value, map) {
  const keys = Object.keys(map).map(Number)
  return keys.reduce((prev, curr) =>
    Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
  )
}

export default function SpacingSlide() {
  const [lineHeight, setLineHeight] = useState(1.5)
  const [gap, setGap] = useState(24)
  const [padding, setPadding] = useState(32)

  // Apply a density preset
  const applyPreset = (presetName) => {
    const preset = densityPresets[presetName]
    setLineHeight(preset.lineHeight)
    setGap(preset.gap)
    setPadding(preset.padding)
  }

  // Determine which preset is currently active (if any)
  const currentPreset = Object.entries(densityPresets).find(([_, preset]) =>
    preset.lineHeight === lineHeight &&
    preset.gap === gap &&
    preset.padding === padding
  )?.[0] || null

  const styles = {
    lineHeight: lineHeightMap[getClosestKey(lineHeight, lineHeightMap)],
    gap: gapMap[getClosestKey(gap, gapMap)],
    padding: paddingMap[getClosestKey(padding, paddingMap)],
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Spacing</h2>
        <p className="text-slate-600">Breathing room affects readability and feel.</p>
      </div>

      <SlideExplanation>
        Spacing controls density and visual comfort. Too tight feels overwhelming; too loose feels
        wasteful. Consistent spacing also creates relationships—elements that belong together should
        be spaced together.
      </SlideExplanation>

      <DiagnosticCallout quote="If the UI feels cramped or exhausting, spacing—not features—is usually the problem." />

      {/* Density presets */}
      <ToggleGroup
        label="Density Preset"
        options={[
          { value: 'cramped', label: 'Cramped' },
          { value: 'compact', label: 'Compact' },
          { value: 'comfortable', label: 'Comfortable' },
          { value: 'spacious', label: 'Spacious' },
        ]}
        value={currentPreset}
        onChange={applyPreset}
      />

      {/* Compact sliders in a row */}
      <div className="flex gap-6 flex-wrap justify-center">
        <CompactSlider
          label="Line Height"
          value={lineHeight}
          onChange={setLineHeight}
          min={1.0}
          max={2.0}
          step={0.05}
        />
        <CompactSlider
          label="Element Gap"
          value={gap}
          onChange={setGap}
          min={0}
          max={64}
          step={4}
          unit="px"
        />
        <CompactSlider
          label="Padding"
          value={padding}
          onChange={setPadding}
          min={8}
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
