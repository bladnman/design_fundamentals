export default function PageLayoutDemo({ styles = {} }) {
  const {
    alignment = 'left',
    columns = 3,
    showGuides = false,
    chaos = false,
    gap = 'gap-4',
    padding = 'p-6',
  } = styles

  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[alignment]

  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }[columns]

  // Chaos mode - DRAMATIC misalignments that trigger "something's wrong" feeling
  const chaosHorizontal = chaos ? [
    'ml-8', '-ml-4', 'ml-12', 'ml-1',
    '-ml-2', 'ml-6', '-ml-3', 'ml-10',
  ] : Array(8).fill('')

  const chaosVertical = chaos ? [
    'mt-6', '-mt-3', 'mt-8', 'mt-1',
    '-mt-2', 'mt-4', '-mt-1', 'mt-5',
  ] : Array(8).fill('')

  // Add rotation for extra chaos
  const chaosRotation = chaos ? [
    'rotate-1', '-rotate-2', 'rotate-2', '-rotate-1',
    'rotate-1', '-rotate-1', 'rotate-2', '-rotate-2',
  ] : Array(8).fill('')

  // Vary card sizes in chaos mode
  const chaosScale = chaos ? [
    'scale-95', 'scale-105', 'scale-90', 'scale-100',
  ] : Array(4).fill('')

  // Content blocks - use asymmetric text in chaos mode to make misalignment more visible
  const contentBlocks = chaos ? [
    { title: 'Dashboard Analytics & Insights', desc: 'Track your metrics' },
    { title: 'Reports', desc: 'Generate detailed insights' },
    { title: 'Settings', desc: 'Configure' },
    { title: 'Team Management', desc: 'Manage users & roles' },
  ].slice(0, columns) : [
    { title: 'Analytics', desc: 'Track your metrics' },
    { title: 'Reports', desc: 'Generate insights' },
    { title: 'Settings', desc: 'Configure options' },
    { title: 'Team', desc: 'Manage users' },
  ].slice(0, columns)

  return (
    <div className={`bg-white rounded-xl shadow-lg w-full max-w-2xl overflow-hidden demo-transition ${showGuides ? 'ring-2 ring-blue-200' : ''}`}>
      {/* Header/Nav */}
      <div className={`bg-slate-800 text-white px-6 py-4 flex justify-between items-center ${chaos ? chaosHorizontal[0] : ''}`}>
        <div className={`font-semibold ${chaos ? `${chaosHorizontal[1]} ${chaosRotation[0]}` : ''}`}>Dashboard</div>
        <div className="flex gap-4 text-sm">
          <span className={chaos ? `${chaosHorizontal[2]} ${chaosVertical[0]}` : ''}>Home</span>
          <span className={chaos ? `${chaosHorizontal[3]} ${chaosVertical[1]}` : ''}>Profile</span>
          <span className={chaos ? `ml-8 ${chaosVertical[2]}` : ''}>Help</span>
        </div>
      </div>

      {/* Main content area */}
      <div className={`flex ${showGuides ? 'bg-blue-50/30' : ''}`}>
        {/* Sidebar */}
        <div className={`w-32 bg-slate-50 ${padding} border-r border-slate-200 ${chaos ? `${chaosVertical[3]} ${chaosRotation[1]}` : ''}`}>
          <nav className={`flex flex-col ${gap} text-sm text-slate-600 ${alignClass}`}>
            <a className={`hover:text-slate-900 ${chaos ? `ml-5 ${chaosRotation[2]}` : ''}`}>Overview</a>
            <a className={`hover:text-slate-900 ${chaos ? '-ml-2' : ''}`}>Analytics</a>
            <a className={`hover:text-slate-900 ${chaos ? `ml-7 ${chaosRotation[3]}` : ''}`}>Reports</a>
            <a className={`hover:text-slate-900 ${chaos ? '-ml-1 mt-2' : ''}`}>Settings</a>
          </nav>
        </div>

        {/* Content grid */}
        <div className={`flex-1 ${padding} ${showGuides ? 'relative' : ''}`}>
          {showGuides && (
            <div className="absolute inset-0 pointer-events-none">
              <div className={`grid ${gridCols} gap-4 h-full opacity-20`}>
                {Array(columns).fill(0).map((_, i) => (
                  <div key={i} className="bg-blue-400 rounded" />
                ))}
              </div>
            </div>
          )}

          <h2 className={`text-lg font-semibold text-slate-900 mb-4 ${alignClass.split(' ')[0]} ${chaos ? `${chaosHorizontal[4]} ${chaosRotation[4]}` : ''}`}>
            Quick Actions
          </h2>

          <div className={`grid ${gridCols} ${gap} demo-transition`}>
            {contentBlocks.map((block, i) => (
              <div
                key={block.title}
                className={`
                  bg-slate-50 rounded-lg p-4 border border-slate-200
                  ${alignClass} flex flex-col demo-transition
                  ${chaos ? `${chaosHorizontal[i % 8]} ${chaosVertical[i % 8]} ${chaosRotation[i % 8]} ${chaosScale[i % 4]}` : ''}
                  ${showGuides ? 'ring-1 ring-blue-300' : ''}
                `}
              >
                <div className={`font-medium text-slate-900 ${chaos ? 'truncate' : ''}`}>{block.title}</div>
                <div className="text-sm text-slate-500">{block.desc}</div>
              </div>
            ))}
          </div>

          {/* Footer area */}
          <div className={`mt-4 pt-4 border-t border-slate-100 text-xs text-slate-400 ${alignClass.split(' ')[0]} ${chaos ? `ml-12 ${chaosRotation[5]}` : ''}`}>
            Last updated: Today
          </div>
        </div>
      </div>
    </div>
  )
}
