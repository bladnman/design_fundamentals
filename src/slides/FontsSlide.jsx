import { useState } from 'react'
import ToggleGroup from '../components/ToggleGroup'
import DemoCard from '../components/DemoCard'
import DiagnosticCallout from '../components/DiagnosticCallout'

const fontModes = {
  normal: {
    titleFont: 'font-body',
    headlineFont: 'font-body',
    subheadFont: 'font-body',
    statFont: 'font-body',
    statLabelFont: 'font-body',
    bodyFont: 'font-body',
    buttonFont: 'font-body',
    // Bigger sizes to show off fonts
    headlineSize: 'text-4xl',
    subheadSize: 'text-xl',
    statSize: 'text-3xl',
  },
  enhanced: {
    titleFont: 'font-modern',        // Space Grotesk - geometric sans for utility
    headlineFont: 'font-display',    // Playfair Display - elegant serif headline
    subheadFont: 'font-display',     // Playfair Display - serif subhead
    statFont: 'font-modern',         // Space Grotesk - clean numbers
    statLabelFont: 'font-body',      // Inter - readable labels
    bodyFont: 'font-body',           // Inter - readable body
    buttonFont: 'font-modern',       // Space Grotesk - modern buttons
    // Bigger sizes to show off fonts
    headlineSize: 'text-4xl',
    subheadSize: 'text-xl',
    statSize: 'text-3xl',
  },
  playful: {
    titleFont: 'font-retro',
    headlineFont: 'font-fun',
    subheadFont: 'font-handwritten',
    statFont: 'font-playful',
    statLabelFont: 'font-modern',
    bodyFont: 'font-modern',
    buttonFont: 'font-playful',
    // Bigger sizes to show off fonts
    headlineSize: 'text-4xl',
    subheadSize: 'text-xl',
    statSize: 'text-3xl',
  },
}

const fontDescriptions = {
  normal: {
    fonts: ['Inter everywhere'],
    vibe: 'Corporate',
    description: 'Safe and consistent. Professional, but forgettable.',
  },
  enhanced: {
    fonts: ['Playfair Display', 'Space Grotesk', 'Inter'],
    vibe: 'Refined',
    description: 'Serifs for headlines, geometric sans for data. A deliberate pairing.',
  },
  playful: {
    fonts: ['Lobster', 'Caveat', 'Fredoka', 'Space Grotesk'],
    vibe: 'Party!',
    description: 'Mix expressive fonts freely. Keep body text readable.',
  },
}

export default function FontsSlide() {
  const [mode, setMode] = useState('normal')
  const desc = fontDescriptions[mode]

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-center max-w-xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Fonts are Personality</h2>
        <p className="text-slate-600">Headlines can be expressive. Body text needs to be readable.</p>
      </div>

      <DiagnosticCallout quote="If your app could be mistaken for any other app, typography is often why." />

      <ToggleGroup
        options={[
          { value: 'normal', label: 'Normal' },
          { value: 'enhanced', label: 'Enhanced' },
          { value: 'playful', label: 'Playful' },
        ]}
        value={mode}
        onChange={setMode}
      />

      {/* Font info panel */}
      <div className="flex gap-6 text-sm items-start">
        <div className="text-center">
          <div className="text-slate-400 uppercase tracking-wide text-xs mb-1">Fonts Used</div>
          <div className="flex flex-wrap gap-1 justify-center max-w-48">
            {desc.fonts.map((font) => (
              <span
                key={font}
                className={`
                  px-2 py-0.5 rounded-full text-xs demo-transition
                  ${mode === 'playful' ? 'bg-pink-100 text-pink-700' : mode === 'enhanced' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}
                `}
              >
                {font}
              </span>
            ))}
          </div>
        </div>
        <div className="text-center">
          <div className="text-slate-400 uppercase tracking-wide text-xs mb-1">Vibe</div>
          <div className={`font-bold text-lg demo-transition ${mode === 'playful' ? 'text-pink-600' : mode === 'enhanced' ? 'text-blue-600' : 'text-slate-600'}`}>
            {desc.vibe}
          </div>
        </div>
      </div>

      <p className="text-slate-500 text-sm italic max-w-md text-center demo-transition">
        {desc.description}
      </p>

      <DemoCard styles={fontModes[mode]} />
    </div>
  )
}

FontsSlide.title = 'Fonts'
