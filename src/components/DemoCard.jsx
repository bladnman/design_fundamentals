export default function DemoCard({ styles = {} }) {
  const {
    // Theme colors
    bgColor = 'bg-white',
    textColor = 'text-slate-900',
    subtextColor = 'text-slate-600',
    mutedColor = 'text-slate-400',

    // Card styling
    cardBg = 'bg-slate-50',
    cardBorder = 'border-slate-200',
    buttonBg = 'bg-blue-600',
    buttonText = 'text-white',
    secondaryButtonBg = 'bg-slate-200',
    secondaryButtonText = 'text-slate-700',

    // Typography sizes
    headlineSize = 'text-3xl',
    subheadSize = 'text-lg',
    bodySize = 'text-base',
    statSize = 'text-2xl',
    titleSize = 'text-xs',

    // Typography weights (for hierarchy demo)
    headlineWeight = 'font-semibold',
    statWeight = 'font-bold',

    // Font families
    titleFont = 'font-body',
    headlineFont = 'font-body',
    subheadFont = 'font-body',
    statFont = 'font-body',
    statLabelFont = 'font-body',
    bodyFont = 'font-body',
    buttonFont = 'font-body',

    // Spacing
    padding = 'p-8',
    gap = 'gap-6',
    lineHeight = 'leading-relaxed',

    // Elevation
    cardShadow = 'shadow-lg',
    statShadow = '',
    buttonShadow = '',

    // Border styles
    borderWidth = 'border',
  } = styles

  const stats = [
    { value: '127', label: 'Active' },
    { value: '$2.4k', label: 'Revenue' },
    { value: '89%', label: 'Goal' },
  ]

  return (
    <div
      className={`
        ${bgColor} ${textColor} ${padding} ${cardShadow}
        rounded-2xl w-full max-w-lg demo-transition ${borderWidth} ${cardBorder}
      `}
    >
      {/* App Title */}
      <div className={`${mutedColor} ${titleSize} ${titleFont} font-semibold uppercase tracking-widest mb-6 demo-transition`}>
        Acme Dashboard
      </div>

      {/* Content container with gap */}
      <div className={`flex flex-col ${gap} demo-transition`}>
        {/* Headline + Subheadline */}
        <div>
          <h2 className={`${headlineSize} ${headlineWeight} ${headlineFont} demo-transition`}>
            Welcome back, Sarah
          </h2>
          <p className={`${subheadSize} ${subtextColor} ${subheadFont} mt-1 demo-transition`}>
            Here's your weekly summary
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`
                ${cardBg} ${borderWidth} ${cardBorder} ${statShadow}
                rounded-xl p-4 text-center demo-transition
              `}
            >
              <div className={`${statSize} ${statFont} ${statWeight} ${textColor} demo-transition`}>
                {stat.value}
              </div>
              <div className={`${titleSize} ${statLabelFont} ${subtextColor} font-medium uppercase tracking-wide demo-transition`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Body Paragraph */}
        <p className={`${bodySize} ${subtextColor} ${lineHeight} ${bodyFont} demo-transition`}>
          Your projects are performing well this quarter. The team has exceeded
          expectations on three key metrics.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            className={`
              ${buttonBg} ${buttonText} ${buttonShadow} ${buttonFont}
              px-6 py-3 rounded-lg font-medium demo-transition
            `}
          >
            View Report
          </button>
          <button
            className={`
              ${secondaryButtonBg} ${secondaryButtonText} ${buttonFont}
              px-6 py-3 rounded-lg font-medium demo-transition
            `}
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  )
}
