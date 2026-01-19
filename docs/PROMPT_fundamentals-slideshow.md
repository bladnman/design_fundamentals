# Prompt: Build Design Fundamentals Interactive Slideshow

Build a browser-based interactive slideshow that teaches design fundamentals. Each slide demonstrates one concept with a live, toggleable example.

## Overview

This is a presentation tool for a video. It should feel like a slideshow but each slide is interactive — the viewer can toggle between states to see the fundamental in action.

## Technical Stack

- React + Vite + Tailwind
- Single page app
- No external dependencies beyond standard UI

## Structure

**8 slides total:**

1. **Intro slide**: "Design Fundamentals" title, subtitle: "The knobs you can actually turn"
2. **Light/Dark**
3. **Contrast**
4. **Spacing / White Space**
5. **Font Size**
6. **Color**
7. **Fonts**
8. **Elevation**

## Layout

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                                                         │
│                   [SLIDE CONTENT]                       │
│              Interactive demo area                      │
│                                                         │
│                                                         │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  ← Previous    [CURRENT TOPIC TITLE]        Next →      │
│                                              (hint)     │
└─────────────────────────────────────────────────────────┘
```

- **Navigation**: Left/right arrows at bottom corners
- **Current topic**: Centered at bottom (e.g., "Light / Dark")
- **Next hint**: The "Next →" text shows the upcoming topic name
- **Bottom right**: Keep clear (avatar overlay in video)
- Keyboard navigation: arrow keys should work

## Each Slide's Interactive Element

Every slide (except intro) has a toggle or control that demonstrates the fundamental:

### Slide 2: Light / Dark
- **Demo**: A sample card/panel UI
- **Toggle**: Three buttons — "Light" / "Dark" / "Tone"
- Light = white background, dark text
- Dark = black background, white text
- Tone = navy/forest/charcoal background, warm off-white text
- **Teaching point**: Dark doesn't mean black. Tones, not binary.

### Slide 3: Contrast
- **Demo**: Same sample UI (card with button, text, border)
- **Toggle**: Slider or two buttons — "Low" / "High"
- Low = subtle borders, similar colors, elegant but elements blend
- High = clear borders, obvious color separation, bold hierarchy
- **Teaching point**: Low = subtle/elegant. High = clear/separated.

### Slide 4: Spacing / White Space
- **Demo**: A form or list of interactive elements
- **Toggle**: "Cramped" / "Spacious"
- Cramped = tight margins, elements close together
- Spacious = generous padding, breathing room around interactive elements
- **Teaching point**: Cramped feels unintentional. Interactive areas need air.

### Slide 5: Font Size
- **Demo**: A content block with headline, subhead, body text
- **Toggle**: "Default" / "Intentional"
- Default = similar sizes, flat hierarchy
- Intentional = big headline, clear subhead, readable body — obvious hierarchy
- **Teaching point**: Playing with font size signals intention.

### Slide 6: Color
- **Demo**: A UI with buttons, cards, accents
- **Toggle**: Three buttons — "Default" / "Forest" / "Jazz"
- Default = boring/generic palette
- Forest = greens, browns, earthy tones
- Jazz = deep blues, golds, warm accent colors
- **Teaching point**: You don't need color theory. Just describe a vibe.

### Slide 7: Fonts
- **Demo**: Headline + body text
- **Toggle**: "System" / "Personality"
- System = system font everywhere (safe, boring)
- Personality = expressive headline font + readable body font
- Use Google Fonts for the personality option (pick something with character)
- **Teaching point**: Headlines don't need readability fonts. Body text does.

### Slide 8: Elevation
- **Demo**: Cards, buttons, panels layered
- **Toggle**: "Flat" / "Elevated"
- Flat = no shadows, everything on same z-level
- Elevated = subtle drop shadows, cards pop forward, clear depth hierarchy
- **Teaching point**: What pops forward? What recedes?

## Design Notes

- Keep the demo UI simple and consistent across slides — same basic "sample app" elements so the focus is on the fundamental being taught
- The toggle should be obvious and satisfying to click
- Transitions between states should be smooth (CSS transitions)
- The overall slideshow should have a clean, minimal design — this is teaching design, so it should look good
- Consider a subtle animation when toggling to draw attention to what changed

## Intro Slide

The first slide should be simple:
- Large title: "Design Fundamentals"
- Subtitle: "The knobs you can actually turn"
- Maybe a subtle prompt: "Use arrows to navigate →"

## Responsive

Should work well at common presentation sizes:
- 1920x1080 (full HD)
- 1280x720 (720p)
- Windowed browser at reasonable sizes

Don't need mobile support — this is for video recording.

## Output

Create the full application. Make it look polished — this will be shown in a video about design, so the slideshow itself should demonstrate good design principles.
