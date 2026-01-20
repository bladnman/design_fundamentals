import { useState } from 'react'
import ToggleGroup from '../components/ToggleGroup'
import CompactSlider from '../components/CompactSlider'
import DemoCard from '../components/DemoCard'
import DiagnosticCallout from '../components/DiagnosticCallout'
import SlideExplanation from '../components/SlideExplanation'

// Base themes focused on tonal mood
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
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-950',
    subtextColor: 'text-amber-800',
    mutedColor: 'text-amber-600',
    cardBg: 'bg-orange-100/50',
    cardBorder: 'border-amber-200',
    buttonBg: 'bg-amber-600',
    buttonText: 'text-white',
    secondaryButtonBg: 'bg-amber-100',
    secondaryButtonText: 'text-amber-800',
  },
  cool: {
    bgColor: 'bg-slate-50',
    textColor: 'text-slate-900',
    subtextColor: 'text-slate-600',
    mutedColor: 'text-slate-400',
    cardBg: 'bg-cyan-50/50',
    cardBorder: 'border-cyan-200',
    buttonBg: 'bg-cyan-600',
    buttonText: 'text-white',
    secondaryButtonBg: 'bg-cyan-100',
    secondaryButtonText: 'text-cyan-800',
  },
}

// Dark versions with temperature
const darkThemes = {
  neutral: {
    bgColor: 'bg-slate-900',
    textColor: 'text-white',
    subtextColor: 'text-slate-300',
    mutedColor: 'text-slate-500',
    cardBg: 'bg-slate-800',
    cardBorder: 'border-slate-700',
    buttonBg: 'bg-slate-600',
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
    bgColor: 'bg-slate-950',
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

// Saturation levels using CSS filter
const saturationMap = {
  1: 'saturate-50',
  2: 'saturate-75',
  3: 'saturate-100',
  4: 'saturate-125',
  5: 'saturate-150',
}

export default function ToneSlide() {
  const [lightness, setLightness] = useState('light')
  const [temperature, setTemperature] = useState('neutral')
  const [saturation, setSaturation] = useState(3)

  // Select theme based on lightness and temperature
  let currentTheme
  if (lightness === 'light') {
    currentTheme = temperature === 'warm' ? themes.warm :
                   temperature === 'cool' ? themes.cool :
                   themes.light
  } else {
    currentTheme = darkThemes[temperature] || darkThemes.neutral
  }

  const filterClass = saturationMap[saturation]

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Tone</h2>
        <p className="text-slate-600">Mood comes from lightness, temperature, and saturation.</p>
      </div>

      <SlideExplanation>
        Tone establishes emotional foundation. A warm, soft palette feels approachable; cool and
        dark feels technical. Getting tone wrong makes users feel the product wasn't made for them.
      </SlideExplanation>

      <DiagnosticCallout quote="If everything feels equally loud or equally flat, you probably haven't chosen a tone." />

      <div className="flex gap-8 flex-wrap justify-center items-end">
        <ToggleGroup
          label="Lightness"
          options={[
            { value: 'light', label: 'Light' },
            { value: 'dark', label: 'Dark' },
          ]}
          value={lightness}
          onChange={setLightness}
        />

        <ToggleGroup
          label="Temperature"
          options={[
            { value: 'cool', label: 'Cool' },
            { value: 'neutral', label: 'Neutral' },
            { value: 'warm', label: 'Warm' },
          ]}
          value={temperature}
          onChange={setTemperature}
        />

        <CompactSlider
          label="Saturation"
          value={saturation}
          onChange={setSaturation}
          min={1}
          max={5}
          step={1}
        />
      </div>

      <div className={`${filterClass} demo-transition`}>
        <DemoCard styles={currentTheme} />
      </div>
    </div>
  )
}

ToneSlide.title = 'Tone'
