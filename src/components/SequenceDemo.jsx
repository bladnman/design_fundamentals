export default function SequenceDemo({ styles = {} }) {
  const {
    spacingRhythm = 'uniform',
    sizePattern = 'uniform',
    connectorStyle = 'line',
    stepCount = 4,
  } = styles

  const steps = [
    { num: 1, title: 'Sign Up', desc: 'Create your account' },
    { num: 2, title: 'Configure', desc: 'Set your preferences' },
    { num: 3, title: 'Connect', desc: 'Link your services' },
    { num: 4, title: 'Launch', desc: 'Go live!' },
    { num: 5, title: 'Monitor', desc: 'Track performance' },
    { num: 6, title: 'Optimize', desc: 'Improve results' },
  ].slice(0, stepCount)

  // Spacing rhythm patterns - returns width in pixels for connector
  const getConnectorWidth = (index) => {
    const patterns = {
      uniform: 48,
      progressive: 24 + (index * 20), // 24, 44, 64, 84
      grouped: index % 2 === 0 ? 20 : 72, // alternating tight/loose
    }
    return patterns[spacingRhythm]
  }

  // Size patterns - returns pixel sizes for circles
  const getCircleSize = (index) => {
    const patterns = {
      uniform: 40,
      diminishing: Math.max(28, 48 - index * 8), // 48, 40, 32, 28
      alternating: index % 2 === 0 ? 48 : 32,
    }
    return patterns[sizePattern]
  }

  const getTextSize = (index) => {
    const patterns = {
      uniform: 'text-sm',
      diminishing: index === 0 ? 'text-base' : index === 1 ? 'text-sm' : 'text-xs',
      alternating: index % 2 === 0 ? 'text-sm' : 'text-xs',
    }
    return patterns[sizePattern]
  }

  // Connector styles
  const Connector = ({ index }) => {
    if (index >= steps.length - 1) return null

    const connectorElements = {
      none: null,
      line: (
        <div className="flex-1 h-0.5 bg-slate-300 mx-2 demo-transition" />
      ),
      arrow: (
        <div className="flex-1 flex items-center mx-2 demo-transition">
          <div className="flex-1 h-0.5 bg-slate-300" />
          <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-slate-300" />
        </div>
      ),
      dots: (
        <div className="flex-1 flex items-center justify-center gap-1 mx-2 demo-transition">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
        </div>
      ),
    }

    return connectorElements[connectorStyle]
  }

  // Calculate column widths for alignment - both rows must use same widths
  const getColumnWidth = (index) => {
    const circleSize = getCircleSize(index)
    return Math.max(circleSize, 60) // Minimum 60px for readable labels
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl demo-transition">
      <h3 className="text-lg font-semibold text-slate-900 mb-6 text-center">Getting Started</h3>

      {/* Horizontal timeline - circles row */}
      <div className="flex items-center justify-center mb-3">
        {steps.map((step, index) => {
          const circleSize = getCircleSize(index)
          const connectorWidth = getConnectorWidth(index)
          const columnWidth = getColumnWidth(index)

          return (
            <div key={step.num} className="flex items-center">
              {/* Circle container - same width as label column */}
              <div
                className="flex items-center justify-center demo-transition"
                style={{ width: `${columnWidth}px` }}
              >
                <div
                  className={`
                    rounded-full flex items-center justify-center
                    ${index === 0 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}
                    font-semibold demo-transition flex-shrink-0
                  `}
                  style={{
                    width: `${circleSize}px`,
                    height: `${circleSize}px`,
                    fontSize: circleSize < 36 ? '12px' : '14px',
                  }}
                >
                  {step.num}
                </div>
              </div>

              {/* Connector between circles */}
              {index < steps.length - 1 && (
                <div
                  className="flex items-center justify-center demo-transition"
                  style={{ width: `${connectorWidth}px` }}
                >
                  <Connector index={index} />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Labels row - uses same column widths as circles row */}
      <div className="flex items-start justify-center">
        {steps.map((step, index) => {
          const connectorWidth = getConnectorWidth(index)
          const columnWidth = getColumnWidth(index)
          const textSize = getTextSize(index)

          return (
            <div key={step.num} className="flex items-center">
              {/* Label container - same width as circle column */}
              <div
                className="flex flex-col items-center demo-transition"
                style={{ width: `${columnWidth}px` }}
              >
                <div className={`font-medium text-slate-900 ${textSize} demo-transition text-center whitespace-nowrap`}>
                  {step.title}
                </div>
                <div className="text-xs text-slate-500 text-center" style={{ maxWidth: '80px' }}>
                  {step.desc}
                </div>
              </div>

              {/* Spacer - same width as connector */}
              {index < steps.length - 1 && (
                <div className="demo-transition" style={{ width: `${connectorWidth}px` }} />
              )}
            </div>
          )
        })}
      </div>

      {/* Progress indicator */}
      <div className="mt-8 pt-4 border-t border-slate-100">
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full demo-transition"
            style={{ width: `${(1 / stepCount) * 100}%` }}
          />
        </div>
        <div className="text-xs text-slate-500 text-center mt-2">
          Step 1 of {stepCount}
        </div>
      </div>
    </div>
  )
}
