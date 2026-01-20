import { useState } from 'react'
import ToggleGroup from '../components/ToggleGroup'
import CompactSlider from '../components/CompactSlider'
import InteractiveElementsDemo from '../components/InteractiveElementsDemo'
import DiagnosticCallout from '../components/DiagnosticCallout'
import SlideExplanation from '../components/SlideExplanation'

export default function AffordanceSlide() {
  const [buttonDepth, setButtonDepth] = useState(3)
  const [showHoverStates, setShowHoverStates] = useState(true)
  const [inputBorderStrength, setInputBorderStrength] = useState(3)
  const [linkStyle, setLinkStyle] = useState('both')

  const styles = {
    buttonDepth,
    showHoverStates,
    inputBorderStrength,
    linkStyle,
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Affordance</h2>
        <p className="text-slate-600">Visual cues that communicate interactivity.</p>
      </div>

      <SlideExplanation>
        Affordance is the visual promise of interactivity. Flat designs often sacrifice these
        cues for aesthetics, leaving users unsure what's clickable.
      </SlideExplanation>

      <DiagnosticCallout quote="If users don't know what they can interact with, affordance is broken." />

      <div className="flex gap-6 flex-wrap justify-center items-end">
        <CompactSlider
          label="Btn Depth"
          value={buttonDepth}
          onChange={setButtonDepth}
          min={1}
          max={5}
          step={1}
        />

        <ToggleGroup
          label="Hover States"
          options={[
            { value: true, label: 'On' },
            { value: false, label: 'Off' },
          ]}
          value={showHoverStates}
          onChange={setShowHoverStates}
        />

        <CompactSlider
          label="Input Borders"
          value={inputBorderStrength}
          onChange={setInputBorderStrength}
          min={1}
          max={5}
          step={1}
        />

        <ToggleGroup
          label="Link Style"
          options={[
            { value: 'none', label: 'None' },
            { value: 'underline', label: 'Line' },
            { value: 'color', label: 'Color' },
            { value: 'both', label: 'Both' },
          ]}
          value={linkStyle}
          onChange={setLinkStyle}
        />
      </div>

      <InteractiveElementsDemo styles={styles} />
    </div>
  )
}

AffordanceSlide.title = 'Affordance'
