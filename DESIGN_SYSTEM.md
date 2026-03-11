# C9 Communications: Global Design System

## Brand Colours (exact hex — never deviate)
- `--c9-primary`: `#6B21A8` (Indigo Witch — CTAs, links)
- `--c9-secondary`: `#7C3AED` (Royal Violet — hover states)
- `--c9-accent`: `#A855F7` (Flower Magenta — highlights)
- `--c9-light`: `#C084FC` (Haven — subtle accents)
- `--c9-pale`: `#DDD6FE` (Thistle — backgrounds)
- `--c9-hero-bg`: `#1A003A` (Hero dark sections)
- `--c9-white`: `#FFFFFF`
- `--c9-surface`: `#F5F0FF` (Lavender — alt section bg)
- `--c9-text`: `#0F172A` (Near-black body)
- `--c9-mid`: `#374151` (Secondary text)
- `--c9-muted`: `#6B7280` (Caption / label text)
- `--c9-border`: `rgba(109,33,168,0.15)`

## Typography
- **Heading font**: Clash Display (import from fontshare.com/fonts/clash-display)
- **Body font**: DM Sans (Google Fonts)
- **Mono/label**: DM Mono (Google Fonts)

### Scale:
- **H1**: 64px / 700 / line-height 1.08 / letter-spacing -0.03em
- **H2**: 48px / 700 / line-height 1.12 / letter-spacing -0.02em
- **H3**: 32px / 600 / line-height 1.2
- **H4**: 22px / 600 / line-height 1.3
- **Body-lg**: 18px / 400 / line-height 1.65
- **Body**: 16px / 400 / line-height 1.6
- **Label**: 11px / 500 / DM Mono / letter-spacing 0.12em / uppercase

## Framer-Style Cursor & Mouse Interactions
Implement a custom cursor system with two layers:
- **LAYER 1 — Cursor dot**: 8px circle, `#A855F7` fill, position: fixed, pointer-events: none, z-index: 9999, transitions: transform 0.08s ease (snappy, direct tracking)
- **LAYER 2 — Cursor ring**: 32px circle, transparent fill, 2px border `#A855F7` at 40% opacity, transitions: transform 0.18s ease (lags behind dot for depth)

### State changes (on hover):
- **Over clickable elements** (a, button, `[role=button]`):
  - Dot: scale(0) opacity 0
  - Ring: scale(2.5) opacity 1 + background `rgba(168,85,247,0.08)`
- **Over text blocks**:
  - Ring: scaleX(1.4) scaleY(0.6) — flattens to text cursor shape
- **Over cards**:
  - Ring: scale(1.8) border-color `#6B21A8`
- **On mousedown**: ring scale(0.85) for tactile press feedback
- **On dark sections** (`#1A003A` bg): cursor dot becomes white `#FFFFFF`
- **Cursor visibility**: Hide default cursor (`cursor: none` on html, body). Restore `cursor: none` when cursor leaves viewport.

## Scroll Animations (apply to all sections)
Use IntersectionObserver with threshold 0.15. On entering viewport, trigger class `in-view`:

- **FADE-UP (default for all text content)**:
  - Initial: opacity:0; transform:translateY(28px)
  - Final: opacity:1; transform:translateY(0)
  - Easing: `cubic-bezier(0.16, 1, 0.3, 1)`
  - Duration: 0.65s
- **STAGGER (for card grids, feature lists, stat rows)**:
  - Apply `animation-delay`: `0.1s * index` to each child (Max 4 children staggered; after that no delay)
- **FADE-IN SCALE (for highlighted numbers, big stats)**:
  - Initial: opacity:0; transform:scale(0.92)
  - Final: opacity:1; transform:scale(1)
  - Duration: 0.5s; easing: `cubic-bezier(0.34, 1.56, 0.64, 1)`
- **LINE-REVEAL (for section eyebrow labels)**:
  - Animate a 2px `#A855F7` underline width from 0% to 100%
  - Duration: 0.4s; delay: 0.2s after parent fades in

*Note: Once animated in, elements stay visible (no re-trigger on scroll up).*

## Performance Rules (no images policy)
ZERO images, stock photos, illustrations, or icon packs. Visual richness is achieved ONLY through:
- CSS gradients (radial, linear, conic)
- SVG shapes drawn inline (geometric only — no illustrations)
- CSS box-shadows with colour tints
- Animated CSS mesh/blob using border-radius morphing
- Typography as visual design (large numbers, oversized labels)
- Glassmorphism: backdrop-filter blur + transparent fills
- Pure CSS patterns: dot grids, line grids using `background-image: radial-gradient` or `repeating-linear-gradient`
- Animated SVG paths for decorative lines/curves
- CSS counter animations for numbers
- Colour-block layout sections as visual anchors

**Targets:**
- LCP under 2.0s (no images = major advantage)
- No render-blocking resources
- Fonts: preconnect + `font-display: swap`
- CSS animations: use transform and opacity ONLY (GPU-composited)
- No layout-triggering properties in animations (no width, height, top, margin)
- `will-change: transform` on animated elements only
- Reduce motion: `@media (prefers-reduced-motion: reduce)` disables ALL animations, keeps layout identical.

## Accessibility — WCAG 2.1 AA Required
- All text: minimum 4.5:1 contrast ratio
- Large text (24px+): minimum 3:1 contrast ratio
- All interactive elements: visible focus ring. (`outline: 2px solid #A855F7; outline-offset: 3px`). Remove default outline only when replacing with custom.
- Custom cursor: NEVER remove the system cursor fallback for users who rely on it. Use JS to detect `pointer: coarse` (touch devices) and disable custom cursor entirely.
- All buttons: `aria-label` when text is ambiguous
- Form fields: always paired with `<label>` (not placeholder-only — placeholder is not a label)
- Animations: respect `prefers-reduced-motion`
- Color: never use colour as the ONLY means of conveying info
- Tab order: follows visual reading order
- Skip-to-content link: first focusable element, visually hidden until focused
- All SVG decorative elements: `aria-hidden="true"`
- Interactive SVGs: `role="button" + aria-label + tabindex="0"`
- Error states: use both colour AND icon AND text
- Mobile touch targets: minimum 44×44px

## Shared Navigation Component
- **Sticky header**: height 72px default → 56px on scroll (>80px).
- **Background**: transparent on scroll=0 → `backdrop-filter:blur(20px)` + `background:rgba(26,0,58,0.85)` on scroll.
- **Transition**: `all 0.3s cubic-bezier(0.16,1,0.3,1)`
- **Border-bottom**: none → `1px solid rgba(255,255,255,0.06)` on scroll.
- **Left**: "C9 Communications" wordmark in Clash Display 600, white on dark pages, `#0F172A` on light pages. Active page: wordmark has a small 4px dot in `#A855F7` below it.
- **Centre links (desktop)**: Solutions | Pricing | Industries | About | Support. Font: DM Sans 15px 500. Colour: `rgba(255,255,255,0.75)` on dark. Hover: white + `#A855F7` dot appears below. Current page: white + permanent dot indicator. Transition: 0.15s ease.
- **Mega-dropdown ("Solutions" hover)**: Panel: backdrop-filter blur + dark bg, shows 6 services in 2 columns, each with label + 1-line desc. Animate: `translateY(-8px)→0` + `opacity 0→1` in 0.2s.
- **Right**:
  - "1800 000 C9X" — DM Mono 13px, `#C084FC`, hover: white
  - Divider: `1px rgba(255,255,255,0.15)`, height 20px
  - "Get a Quote" pill button: bg `#6B21A8`, white text, 44px height, px-20, border-radius 9999px. Hover: bg `#7C3AED` + `translateY(-1px)` + `box-shadow: 0 8px 24px rgba(109,33,168,0.4)`. Transition: `0.2s cubic-bezier(0.16,1,0.3,1)`.
- **Mobile (< 768px)**: hamburger icon (3 lines → X animation). Full-screen overlay: bg `#1A003A`, links centred, 48px font, staggered fade-in 0.08s each. Phone number + CTA at bottom of overlay. Overlay open/close: clip-path circle animation from top-right corner, 0.4s ease.

## Shared Footer Component
- **Background**: `#0F172A`. Top border: `1px solid rgba(255,255,255,0.06)`.
- **Layout**: 4-column grid (collapses to 2 col on tablet, 1 col on mobile).
  - **Col 1**: C9 wordmark + mission line + social icons (LinkedIn, Facebook)
  - **Col 2**: Solutions links (Voice, NBN, IT Services, Cloud, Mobile, Print)
  - **Col 3**: Company (About, Case Studies, Blog, Careers, Support)
  - **Col 4**: "C9 Group Family" — label in DM Mono + links to all siblings
  - **Bottom bar**: copyright + privacy + terms + ABN
- **Style**: All text: `#6B7280`. Links hover: `#C084FC`, transition 0.15s. Footer links: focus ring visible. Tab order: logical column by column.
