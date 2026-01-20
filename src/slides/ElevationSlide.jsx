import { useState } from 'react'
import ToggleGroup from '../components/ToggleGroup'
import CompactSlider from '../components/CompactSlider'
import DemoCard from '../components/DemoCard'
import DiagnosticCallout from '../components/DiagnosticCallout'
import SlideExplanation from '../components/SlideExplanation'

export default function ElevationSlide() {
  const [cardElevation, setCardElevation] = useState(3)
  const [statsElevation, setStatsElevation] = useState(2)
  const [buttonElevation, setButtonElevation] = useState(2)
  const [shadowStyle, setShadowStyle] = useState('soft')

  // Build shadow classes based on style and level
  const getShadow = (level, element) => {
    // Soft shadows - traditional diffuse shadows
    const softShadows = {
      card: {
        1: 'shadow-none',
        2: 'shadow-md',
        3: 'shadow-lg',
        4: 'shadow-xl',
        5: 'shadow-2xl',
      },
      stats: {
        1: 'shadow-none',
        2: 'shadow-sm',
        3: 'shadow-md',
        4: 'shadow-lg',
        5: 'shadow-xl',
      },
      button: {
        1: 'shadow-none',
        2: 'shadow-md',
        3: 'shadow-lg',
        4: 'shadow-xl',
        5: 'shadow-2xl',
      },
    }

    // Sharp shadows - hard edges, offset
    const sharpShadows = {
      card: {
        1: '',
        2: 'shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]',
        3: 'shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)]',
        4: 'shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]',
        5: 'shadow-[12px_12px_0px_0px_rgba(0,0,0,0.25)]',
      },
      stats: {
        1: '',
        2: 'shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]',
        3: 'shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)]',
        4: 'shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]',
        5: 'shadow-[6px_6px_0px_0px_rgba(0,0,0,0.25)]',
      },
      button: {
        1: '',
        2: 'shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]',
        3: 'shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]',
        4: 'shadow-[4px_4px_0px_0px_rgba(0,0,0,0.4)]',
        5: 'shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)]',
      },
    }

    // Dramatic shadows - colored, glowing
    const dramaticShadows = {
      card: {
        1: '',
        2: 'shadow-lg shadow-blue-200/50',
        3: 'shadow-xl shadow-blue-300/50',
        4: 'shadow-2xl shadow-blue-400/60',
        5: 'shadow-2xl shadow-blue-500/70 ring-2 ring-blue-200',
      },
      stats: {
        1: '',
        2: 'shadow-md shadow-slate-300/50',
        3: 'shadow-lg shadow-slate-400/50',
        4: 'shadow-xl shadow-blue-300/50',
        5: 'shadow-xl shadow-blue-400/60',
      },
      button: {
        1: '',
        2: 'shadow-lg shadow-blue-400/40',
        3: 'shadow-xl shadow-blue-500/50',
        4: 'shadow-xl shadow-blue-600/60 ring-2 ring-blue-300',
        5: 'shadow-2xl shadow-blue-600/70 ring-4 ring-blue-300',
      },
    }

    const shadowMap = {
      soft: softShadows,
      sharp: sharpShadows,
      dramatic: dramaticShadows,
    }

    return shadowMap[shadowStyle][element][level]
  }

  const styles = {
    cardShadow: getShadow(cardElevation, 'card'),
    statShadow: getShadow(statsElevation, 'stats'),
    buttonShadow: getShadow(buttonElevation, 'button'),
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Elevation</h2>
        <p className="text-slate-600">What pops forward? What recedes?</p>
      </div>

      <SlideExplanation>
        Shadows create depth. Modals should float above; grounded content should feel stable.
        Without elevation cues, overlapping elements confuse users about what's interactive.
      </SlideExplanation>

      <DiagnosticCallout quote="If modals, menus, and highlights don't feel obvious, depth is missing." />

      <div className="flex gap-6 flex-wrap justify-center items-end">
        <div className="flex gap-4">
          <CompactSlider
            label="Card"
            value={cardElevation}
            onChange={setCardElevation}
            min={1}
            max={5}
            step={1}
          />

          <CompactSlider
            label="Stats"
            value={statsElevation}
            onChange={setStatsElevation}
            min={1}
            max={5}
            step={1}
          />

          <CompactSlider
            label="Button"
            value={buttonElevation}
            onChange={setButtonElevation}
            min={1}
            max={5}
            step={1}
          />
        </div>

        <ToggleGroup
          label="Style"
          options={[
            { value: 'soft', label: 'Soft' },
            { value: 'sharp', label: 'Sharp' },
            { value: 'dramatic', label: 'Dramatic' },
          ]}
          value={shadowStyle}
          onChange={setShadowStyle}
        />
      </div>

      {/* Style description */}
      <p className="text-sm text-slate-500 italic">
        {shadowStyle === 'soft' && 'Traditional diffuse shadows'}
        {shadowStyle === 'sharp' && 'Hard-edged offset shadows'}
        {shadowStyle === 'dramatic' && 'Colored glowing shadows'}
      </p>

      <DemoCard styles={styles} />
    </div>
  )
}

ElevationSlide.title = 'Elevation'
