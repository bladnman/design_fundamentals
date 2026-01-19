export default function Navigation({
  currentIndex,
  totalSlides,
  currentTitle,
  prevTitle,
  nextTitle,
  onPrev,
  onNext
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 py-4">
      <div className="flex items-center px-8">
        {/* Previous - fixed width container */}
        <div className="flex-1 flex justify-start">
          <button
            onClick={onPrev}
            disabled={currentIndex === 0}
            className={`
              flex items-center gap-2 text-sm font-medium transition-colors
              ${currentIndex === 0
                ? 'text-slate-300 cursor-not-allowed'
                : 'text-slate-600 hover:text-slate-900'
              }
            `}
          >
            <span>←</span>
            <span>{prevTitle || ''}</span>
          </button>
        </div>

        {/* Center - Title + Dots */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-semibold text-slate-800 uppercase tracking-wide">
            {currentTitle}
          </span>
          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <div
                key={i}
                className={`
                  w-2 h-2 rounded-full transition-colors
                  ${i === currentIndex ? 'bg-slate-800' : 'bg-slate-300'}
                `}
              />
            ))}
          </div>
        </div>

        {/* Next - fixed width container, leave space in bottom right for avatar */}
        <div className="flex-1 flex justify-end">
          <button
            onClick={onNext}
            disabled={currentIndex === totalSlides - 1}
            className={`
              flex items-center gap-2 text-sm font-medium transition-colors
              ${currentIndex === totalSlides - 1
                ? 'text-slate-300 cursor-not-allowed'
                : 'text-slate-600 hover:text-slate-900'
              }
            `}
          >
            <span>{nextTitle || ''}</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  )
}
