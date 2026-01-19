export default function IntroSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-5xl font-bold text-slate-900 mb-4 font-display">
        Design Fundamentals
      </h1>
      <p className="text-xl text-slate-600 mb-8">
        The knobs you can actually turn
      </p>
      <p className="text-slate-400">
        Use arrow keys to navigate →
      </p>
    </div>
  )
}

IntroSlide.title = 'Intro'
