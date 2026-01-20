import { useState } from 'react'
import ToggleGroup from '../components/ToggleGroup'
import Slider from '../components/Slider'
import DemoCard from '../components/DemoCard'
import DiagnosticCallout from '../components/DiagnosticCallout'
import SlideExplanation from '../components/SlideExplanation'

export default function HierarchySlide() {
  const [focus, setFocus] = useState('equal')
  const [strength, setStrength] = useState(3)

  // Build styles based on focus - the key insight is that hierarchy
  // means ONE thing stands out while others recede
  const buildStyles = () => {
    if (focus === 'equal') {
      // The "broken" state - everything has equal weight
      return {
        hierarchyFocus: null,
        hierarchyStrength: 1,
      }
    }

    return {
      hierarchyFocus: focus,
      hierarchyStrength: strength,
    }
  }

  const styles = buildStyles()

  const focusDescription = {
    equal: 'Everything competes equally for attention',
    revenue: 'The $2.4k revenue stat dominates the layout',
    action: 'The primary action commands attention',
    headline: 'The welcome message leads the experience',
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Information Hierarchy</h2>
        <p className="text-slate-600">Guide the eye from most to least important.</p>
      </div>

      <SlideExplanation>
        Information hierarchy tells users what matters at a glance. When key metrics like revenue
        are buried in equal-weight elements, users work harder to find value. The eye should be
        drawn to what's most important first.
      </SlideExplanation>

      <DiagnosticCallout quote="If everything looks important, nothing is." />

      <div className="flex gap-8 flex-wrap justify-center items-end">
        <ToggleGroup
          label="What's Most Important?"
          options={[
            { value: 'equal', label: 'Equal' },
            { value: 'revenue', label: 'Revenue' },
            { value: 'action', label: 'Action' },
            { value: 'headline', label: 'Headline' },
          ]}
          value={focus}
          onChange={setFocus}
        />

        {focus !== 'equal' && (
          <Slider
            label="Hierarchy Strength"
            value={strength}
            onChange={setStrength}
            min={1}
            max={5}
            step={1}
          />
        )}
      </div>

      {/* Focus description */}
      <p className="text-sm text-slate-500 italic">
        {focusDescription[focus]}
      </p>

      <DemoCard styles={styles} />
    </div>
  )
}

HierarchySlide.title = 'Hierarchy'
