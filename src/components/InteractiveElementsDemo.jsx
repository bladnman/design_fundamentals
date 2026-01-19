export default function InteractiveElementsDemo({ styles = {} }) {
  const {
    buttonDepth = 3,
    showHoverStates = true,
    inputBorderStrength = 3,
    linkStyle = 'both',
  } = styles

  // Button depth variations
  const buttonDepthStyles = {
    1: 'bg-slate-600 text-white shadow-none',
    2: 'bg-slate-600 text-white shadow-sm',
    3: 'bg-slate-600 text-white shadow-md hover:shadow-lg',
    4: 'bg-gradient-to-b from-slate-500 to-slate-700 text-white shadow-lg hover:shadow-xl',
    5: 'bg-gradient-to-b from-slate-400 to-slate-700 text-white shadow-xl border-t border-slate-300',
  }[buttonDepth]

  // Input border strength
  const inputBorderStyles = {
    1: 'border border-transparent bg-slate-100',
    2: 'border border-slate-200 bg-white',
    3: 'border-2 border-slate-300 bg-white',
    4: 'border-2 border-slate-400 bg-white shadow-inner',
    5: 'border-2 border-slate-500 bg-white shadow-inner ring-2 ring-slate-200',
  }[inputBorderStrength]

  // Link styles
  const linkStyleClasses = {
    none: 'text-slate-700 no-underline',
    underline: 'text-slate-700 underline',
    color: 'text-blue-600 no-underline',
    both: 'text-blue-600 underline',
  }[linkStyle]

  const hoverClass = showHoverStates ? 'transition-all duration-200' : ''

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md demo-transition">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">Interactive Elements</h3>

      {/* Buttons section */}
      <div className="mb-6">
        <label className="text-xs text-slate-500 uppercase tracking-wide mb-2 block">Buttons</label>
        <div className="flex gap-3">
          <button
            className={`
              px-4 py-2 rounded-lg font-medium demo-transition
              ${buttonDepthStyles}
              ${showHoverStates ? 'hover:scale-105 active:scale-95' : ''}
            `}
          >
            Primary
          </button>
          <button
            className={`
              px-4 py-2 rounded-lg font-medium bg-slate-200 text-slate-700 demo-transition
              ${buttonDepth >= 3 ? 'shadow-sm' : 'shadow-none'}
              ${showHoverStates ? 'hover:bg-slate-300 active:scale-95' : ''}
            `}
          >
            Secondary
          </button>
        </div>
      </div>

      {/* Inputs section */}
      <div className="mb-6">
        <label className="text-xs text-slate-500 uppercase tracking-wide mb-2 block">Inputs</label>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Enter your email..."
            className={`
              px-4 py-2 rounded-lg demo-transition ${hoverClass}
              ${inputBorderStyles}
              ${showHoverStates ? 'hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200' : ''}
              outline-none
            `}
          />
          <div className="flex gap-3">
            <input
              type="checkbox"
              className={`
                w-5 h-5 rounded demo-transition
                ${inputBorderStrength >= 3 ? 'border-2' : 'border'}
                ${showHoverStates ? 'hover:border-blue-400' : ''}
              `}
            />
            <span className="text-slate-600">Remember me</span>
          </div>
        </div>
      </div>

      {/* Links section */}
      <div className="mb-6">
        <label className="text-xs text-slate-500 uppercase tracking-wide mb-2 block">Links</label>
        <div className="flex gap-4">
          <a
            href="#"
            className={`
              demo-transition ${linkStyleClasses}
              ${showHoverStates ? 'hover:opacity-70' : ''}
            `}
          >
            Learn more
          </a>
          <a
            href="#"
            className={`
              demo-transition ${linkStyleClasses}
              ${showHoverStates ? 'hover:opacity-70' : ''}
            `}
          >
            View details
          </a>
        </div>
      </div>

      {/* Card section */}
      <div>
        <label className="text-xs text-slate-500 uppercase tracking-wide mb-2 block">Clickable Card</label>
        <div
          className={`
            bg-slate-50 rounded-lg p-4 border border-slate-200 demo-transition
            ${showHoverStates ? 'hover:border-blue-300 hover:shadow-md cursor-pointer' : ''}
            ${buttonDepth >= 4 ? 'shadow-sm' : ''}
          `}
        >
          <div className="font-medium text-slate-900">Settings</div>
          <div className="text-sm text-slate-500">Configure your preferences</div>
        </div>
      </div>
    </div>
  )
}
