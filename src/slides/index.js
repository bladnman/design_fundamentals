import IntroSlide from './IntroSlide'
import LightDarkSlide from './LightDarkSlide'
import ContrastSlide from './ContrastSlide'
import SpacingSlide from './SpacingSlide'
import FontSizeSlide from './FontSizeSlide'
import ColorSlide from './ColorSlide'
import FontsSlide from './FontsSlide'
import ElevationSlide from './ElevationSlide'

export const slides = [
  { component: IntroSlide, title: 'Intro' },
  { component: LightDarkSlide, title: 'Light / Dark' },
  { component: ContrastSlide, title: 'Contrast' },
  { component: SpacingSlide, title: 'Spacing' },
  { component: FontSizeSlide, title: 'Font Size' },
  { component: ColorSlide, title: 'Color' },
  { component: ElevationSlide, title: 'Elevation' },
  { component: FontsSlide, title: 'Fonts' },
]
