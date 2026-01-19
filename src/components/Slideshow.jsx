import { useState, useCallback } from 'react'
import { slides } from '../slides'
import Navigation from './Navigation'
import useKeyboardNav from '../hooks/useKeyboardNav'

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrev = useCallback(() => {
    setCurrentIndex((i) => Math.max(0, i - 1))
  }, [])

  const goToNext = useCallback(() => {
    setCurrentIndex((i) => Math.min(slides.length - 1, i + 1))
  }, [])

  useKeyboardNav({ onPrev: goToPrev, onNext: goToNext })

  const CurrentSlide = slides[currentIndex].component
  const currentTitle = slides[currentIndex].title
  const prevTitle = currentIndex > 0 ? slides[currentIndex - 1].title : null
  const nextTitle = currentIndex < slides.length - 1 ? slides[currentIndex + 1].title : null

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content area */}
      <div className="flex-1 flex items-center justify-center px-8 pb-24 pt-8">
        <CurrentSlide />
      </div>

      {/* Navigation bar */}
      <Navigation
        currentIndex={currentIndex}
        totalSlides={slides.length}
        currentTitle={currentTitle}
        prevTitle={prevTitle}
        nextTitle={nextTitle}
        onPrev={goToPrev}
        onNext={goToNext}
      />
    </div>
  )
}
