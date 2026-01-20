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

    // Hierarchy focus - which element gets emphasis
    // Options: null, 'revenue', 'action', 'headline'
    hierarchyFocus = null,
    hierarchyStrength = 3, // 1-5 scale

    // Contrast focus - what pops vs recedes
    // Options: null, 'keyMetrics', 'actions'
    contrastFocus = null,
    backgroundFade = 3, // 1-5 scale
  } = styles

  const stats = [
    { value: '127', label: 'Active', key: 'active' },
    { value: '$2.4k', label: 'Revenue', key: 'revenue' },
    { value: '89%', label: 'Goal', key: 'goal' },
  ]

  // Hierarchy focus styling
  const getStatStyles = (statKey) => {
    if (hierarchyFocus === 'revenue' && statKey === 'revenue') {
      const sizes = ['text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl']
      const weights = ['font-semibold', 'font-bold', 'font-bold', 'font-black', 'font-black']
      return {
        size: sizes[hierarchyStrength - 1],
        weight: weights[hierarchyStrength - 1],
        color: 'text-blue-600',
        labelColor: 'text-blue-500',
      }
    }
    if (hierarchyFocus === 'revenue' && statKey !== 'revenue') {
      // Fade non-highlighted stats based on strength
      const sizes = ['text-xl', 'text-lg', 'text-base', 'text-sm', 'text-xs']
      const colors = ['text-slate-600', 'text-slate-500', 'text-slate-400', 'text-slate-400', 'text-slate-300']
      return {
        size: sizes[hierarchyStrength - 1],
        weight: 'font-normal',
        color: colors[hierarchyStrength - 1],
        labelColor: colors[hierarchyStrength - 1],
      }
    }
    // Contrast focus - key metrics
    if (contrastFocus === 'keyMetrics' && statKey === 'revenue') {
      const sizes = ['text-2xl', 'text-3xl', 'text-3xl', 'text-4xl', 'text-4xl']
      return {
        size: sizes[backgroundFade - 1],
        weight: 'font-bold',
        color: 'text-slate-900',
        labelColor: 'text-slate-600',
      }
    }
    if (contrastFocus === 'keyMetrics' && statKey !== 'revenue') {
      const colors = ['text-slate-600', 'text-slate-500', 'text-slate-400', 'text-slate-300', 'text-slate-200']
      return {
        size: statSize,
        weight: statWeight,
        color: colors[backgroundFade - 1],
        labelColor: colors[backgroundFade - 1],
      }
    }
    if (contrastFocus === 'actions') {
      const colors = ['text-slate-700', 'text-slate-600', 'text-slate-500', 'text-slate-400', 'text-slate-300']
      return {
        size: statSize,
        weight: statWeight,
        color: colors[backgroundFade - 1],
        labelColor: colors[backgroundFade - 1],
      }
    }
    return { size: statSize, weight: statWeight, color: textColor, labelColor: subtextColor }
  }

  // Headline styling based on hierarchy focus
  const getHeadlineStyles = () => {
    if (hierarchyFocus === 'headline') {
      const sizes = ['text-3xl', 'text-4xl', 'text-5xl', 'text-6xl', 'text-7xl']
      const weights = ['font-semibold', 'font-bold', 'font-bold', 'font-black', 'font-black']
      return {
        size: sizes[hierarchyStrength - 1],
        weight: weights[hierarchyStrength - 1],
        color: textColor,
      }
    }
    if (hierarchyFocus === 'revenue' || hierarchyFocus === 'action') {
      // Fade headline when other elements are focused
      const sizes = ['text-2xl', 'text-xl', 'text-lg', 'text-base', 'text-sm']
      const colors = ['text-slate-700', 'text-slate-600', 'text-slate-500', 'text-slate-400', 'text-slate-400']
      return {
        size: sizes[hierarchyStrength - 1],
        weight: 'font-normal',
        color: colors[hierarchyStrength - 1],
      }
    }
    if (contrastFocus === 'actions' || contrastFocus === 'keyMetrics') {
      const colors = ['text-slate-800', 'text-slate-700', 'text-slate-600', 'text-slate-500', 'text-slate-400']
      return {
        size: headlineSize,
        weight: headlineWeight,
        color: colors[backgroundFade - 1],
      }
    }
    return { size: headlineSize, weight: headlineWeight, color: textColor }
  }

  // Button styling based on hierarchy/contrast focus
  const getButtonStyles = () => {
    if (hierarchyFocus === 'action') {
      const shadows = ['shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl', 'shadow-2xl ring-4 ring-blue-300']
      const sizes = ['px-6 py-3', 'px-7 py-3.5', 'px-8 py-4', 'px-10 py-5', 'px-12 py-6 text-lg']
      return {
        bg: 'bg-blue-600',
        text: 'text-white',
        shadow: shadows[hierarchyStrength - 1],
        size: sizes[hierarchyStrength - 1],
      }
    }
    if (hierarchyFocus === 'revenue' || hierarchyFocus === 'headline') {
      const bgs = ['bg-slate-500', 'bg-slate-400', 'bg-slate-300', 'bg-slate-200', 'bg-slate-100']
      const texts = ['text-white', 'text-white', 'text-slate-600', 'text-slate-500', 'text-slate-400']
      return {
        bg: bgs[hierarchyStrength - 1],
        text: texts[hierarchyStrength - 1],
        shadow: buttonShadow,
        size: 'px-6 py-3',
      }
    }
    if (contrastFocus === 'actions') {
      const shadows = ['shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl', 'shadow-2xl ring-4 ring-blue-300']
      return {
        bg: 'bg-blue-600',
        text: 'text-white',
        shadow: shadows[backgroundFade - 1],
        size: 'px-6 py-3',
      }
    }
    if (contrastFocus === 'keyMetrics') {
      const bgs = ['bg-slate-500', 'bg-slate-400', 'bg-slate-300', 'bg-slate-200', 'bg-slate-100']
      const texts = ['text-white', 'text-white', 'text-slate-600', 'text-slate-500', 'text-slate-400']
      return {
        bg: bgs[backgroundFade - 1],
        text: texts[backgroundFade - 1],
        shadow: '',
        size: 'px-6 py-3',
      }
    }
    return { bg: buttonBg, text: buttonText, shadow: buttonShadow, size: 'px-6 py-3' }
  }

  // Secondary button styling
  const getSecondaryButtonStyles = () => {
    if (hierarchyFocus === 'action') {
      // "Dismiss" becomes very subtle when action is focused
      const bgs = ['bg-slate-100', 'bg-slate-50', 'bg-transparent', 'bg-transparent', 'bg-transparent']
      const texts = ['text-slate-500', 'text-slate-400', 'text-slate-400', 'text-slate-300', 'text-slate-200']
      const borders = ['', '', 'border border-slate-200', 'border border-slate-100', '']
      return {
        bg: bgs[hierarchyStrength - 1],
        text: texts[hierarchyStrength - 1],
        border: borders[hierarchyStrength - 1],
      }
    }
    return { bg: secondaryButtonBg, text: secondaryButtonText, border: '' }
  }

  const headlineStyles = getHeadlineStyles()
  const primaryBtnStyles = getButtonStyles()
  const secondaryBtnStyles = getSecondaryButtonStyles()

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
          <h2 className={`${headlineStyles.size} ${headlineStyles.weight} ${headlineFont} ${headlineStyles.color} demo-transition`}>
            Welcome back, Sarah
          </h2>
          <p className={`${subheadSize} ${subtextColor} ${subheadFont} mt-1 demo-transition`}>
            Here's your weekly summary
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat) => {
            const statStyles = getStatStyles(stat.key)
            return (
              <div
                key={stat.label}
                className={`
                  ${cardBg} ${borderWidth} ${cardBorder} ${statShadow}
                  rounded-xl p-4 text-center demo-transition
                `}
              >
                <div className={`${statStyles.size} ${statFont} ${statStyles.weight} ${statStyles.color} demo-transition`}>
                  {stat.value}
                </div>
                <div className={`${titleSize} ${statLabelFont} ${statStyles.labelColor} font-medium uppercase tracking-wide demo-transition`}>
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>

        {/* Body Paragraph */}
        <p className={`${bodySize} ${subtextColor} ${lineHeight} ${bodyFont} demo-transition`}>
          Your projects are performing well this quarter. The team has exceeded
          expectations on three key metrics.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3 items-center">
          <button
            className={`
              ${primaryBtnStyles.bg} ${primaryBtnStyles.text} ${primaryBtnStyles.shadow} ${buttonFont}
              ${primaryBtnStyles.size} rounded-lg font-medium demo-transition
            `}
          >
            View Report
          </button>
          <button
            className={`
              ${secondaryBtnStyles.bg} ${secondaryBtnStyles.text} ${secondaryBtnStyles.border} ${buttonFont}
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
