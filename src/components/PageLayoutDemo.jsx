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

  // Chaos mode - random misalignments
  const chaosOffsets = chaos ? [
    'ml-2', 'ml-4', '-ml-2', 'ml-0',
    'mt-1', '-mt-1', 'mt-3', 'mt-0',
  ] : Array(8).fill('')

  const contentBlocks = [
    { title: 'Analytics', desc: 'Track your metrics' },
    { title: 'Reports', desc: 'Generate insights' },
    { title: 'Settings', desc: 'Configure options' },
    { title: 'Team', desc: 'Manage users' },
  ].slice(0, columns)

  return (
    <div className={`bg-white rounded-xl shadow-lg w-full max-w-2xl overflow-hidden demo-transition ${showGuides ? 'ring-2 ring-blue-200' : ''}`}>
      {/* Header/Nav */}
      <div className={`bg-slate-800 text-white px-6 py-4 flex justify-between items-center ${chaos ? chaosOffsets[0] : ''}`}>
        <div className={`font-semibold ${chaos ? chaosOffsets[1] : ''}`}>Dashboard</div>
        <div className="flex gap-4 text-sm">
          <span className={chaos ? chaosOffsets[2] : ''}>Home</span>
          <span className={chaos ? chaosOffsets[3] : ''}>Profile</span>
          <span className={chaos ? 'ml-6' : ''}>Help</span>
        </div>
      </div>

      {/* Main content area */}
      <div className={`flex ${showGuides ? 'bg-blue-50/30' : ''}`}>
        {/* Sidebar */}
        <div className={`w-32 bg-slate-50 ${padding} border-r border-slate-200 ${chaos ? chaosOffsets[4] : ''}`}>
          <nav className={`flex flex-col ${gap} text-sm text-slate-600 ${alignClass}`}>
            <a className={`hover:text-slate-900 ${chaos ? 'ml-3' : ''}`}>Overview</a>
            <a className={`hover:text-slate-900 ${chaos ? '-ml-1' : ''}`}>Analytics</a>
            <a className={`hover:text-slate-900 ${chaos ? 'ml-4' : ''}`}>Reports</a>
            <a className="hover:text-slate-900">Settings</a>
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

          <h2 className={`text-lg font-semibold text-slate-900 mb-4 ${alignClass.split(' ')[0]} ${chaos ? chaosOffsets[5] : ''}`}>
            Quick Actions
          </h2>

          <div className={`grid ${gridCols} ${gap} demo-transition`}>
            {contentBlocks.map((block, i) => (
              <div
                key={block.title}
                className={`
                  bg-slate-50 rounded-lg p-4 border border-slate-200
                  ${alignClass} flex flex-col demo-transition
                  ${chaos ? chaosOffsets[i % chaosOffsets.length] : ''}
                  ${showGuides ? 'ring-1 ring-blue-300' : ''}
                `}
              >
                <div className="font-medium text-slate-900">{block.title}</div>
                <div className="text-sm text-slate-500">{block.desc}</div>
              </div>
            ))}
          </div>

          {/* Footer area */}
          <div className={`mt-4 pt-4 border-t border-slate-100 text-xs text-slate-400 ${alignClass.split(' ')[0]} ${chaos ? 'ml-8' : ''}`}>
            Last updated: Today
          </div>
        </div>
      </div>
    </div>
  )
}
