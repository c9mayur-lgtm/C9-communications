# Design System Inspired by Synthflow

## 1. Visual Theme & Atmosphere

Synthflow's design system embodies a modern, enterprise-focused aesthetic with a strong emphasis on technological sophistication and accessibility. The palette centers on deep, professional darks paired with vibrant purple accents that convey innovation and forward-thinking AI capabilities. Soft, light backgrounds provide breathing room and reduce cognitive load, while generous whitespace communicates clarity and confidence. The overall atmosphere is premium yet approachable—suitable for Fortune 500 enterprises while remaining warm and human. The design balances technical precision with friendly, welcoming interactions through rounded corners and smooth transitions, positioning Synthflow as a serious platform that doesn't sacrifice usability for authority.

**Key Characteristics**
- Deep navy-purple primary palette with vibrant accent purples
- Generous whitespace and light neutral backgrounds
- Rounded, soft component styling suggesting accessibility and innovation
- Enterprise-grade typography hierarchy with clear visual distinction
- Subtle shadows and elevation for depth without clutter
- Accessible color contrast favoring dark text on light backgrounds
- Bright accent colors (magenta, teal, blue) reserved for use-case highlights and interactive states

## 2. Color Palette & Roles

### Primary
- **Navy Dark** (`#110229`): Primary brand color, navigation backgrounds, text on light surfaces, primary UI components. Core to brand identity and used extensively across UI.
- **Vibrant Purple** (`#9747FF`): Primary accent for active states, highlighted features, call-to-action emphasis. Signals interactive and premium elements.
- **Deep Purple** (`#5B0DD5`): Secondary primary used in buttons and strong CTAs. Darker, more saturated than Vibrant Purple for hierarchy variation.

### Accent Colors
- **Magenta** (`#DD00A4`): Decorative accent for real estate use-case highlights and specialized visual callouts.
- **Teal** (`#00C8A3`): Decorative accent for e-commerce and customer support use-case highlights.
- **Bright Blue** (`#005EFF`): Decorative accent for healthcare and specialized use-case highlights.

### Interactive
- **Primary Button** (`#110229`): Default interactive state for primary actions on light backgrounds.
- **Secondary Button** (`#5B0DD5`): Emphasized interactive state for prominent CTAs like "Contact Sales" and "Try the Full Platform".
- **Ghost Button** (transparent, text `#110229`): Low-priority actions maintaining visual hierarchy while retaining interaction capability.

### Neutral Scale
- **Off-White** (`#F9F9F9`): Primary background for page sections, cards, and containers. Dominant neutral creating calm aesthetic.
- **White** (`#FFFFFF`): Pure white for input fields, nested containers, and highest contrast surfaces.
- **Light Purple Tint** (`#F2EFFE`): Subtle purple-tinted neutral used for gentle background differentiation and hero sections.
- **Softer Purple Tint** (`#FAF9FE`): Lightest purple neutral for minimal background variation.
- **Dark Gray** (`#595959`): Secondary text, labels, disabled states, and muted UI elements.
- **Charcoal** (`#141414`): Primary body text and headings, highest contrast for readability.
- **Black** (`#000000`): Accent black for high emphasis and maximum contrast scenarios.
- **Border Gray** (`#D9D9D9`): Light borders, dividers, and subtle input field delineation.

### Surface & Borders
- **White** (`#FFFFFF`): Card and container surfaces, ensuring clean separation from backgrounds.
- **Border Gray** (`#D9D9D9`): Input borders, card borders, and subtle dividing lines maintaining visual connectivity.
- **Transparent** (`#FFF0`): Fully transparent surfaces for overlay and ghost states.

### Semantic / Status
- **Error / Danger** (`#D72F31`): Error messages, validation failures, and warning states requiring user attention.

## 3. Typography Rules

### Font Family
- **Primary Font**: Geist (regular, medium, semi-bold weights) — used for headlines, large body copy, and prominent UI elements. Fallback stack: `Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Secondary Font**: Inter (regular, medium, semi-bold, bold weights) — used for body text, buttons, labels, links, and small UI components. Fallback stack: `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|-----------------|-------|
| Display / Hero | Geist | 64px | 400 | 70.4px | 0px | Large hero headlines, page titles |
| Heading 2 | Geist | 18px | 400 | 19.8px | 0px | Secondary section headings |
| Heading 3 | Geist | 18px | 500 | 19.8px | 0px | Tertiary headings, card titles |
| Large Body | Geist | 30px | 600 | 36px | 0px | Large body text, prominent messaging |
| Body Text | Inter | 14px | 400 | 20px | 0px | Standard paragraph text, descriptions |
| Label / Small Body | Inter | 14px | 700 | 20px | 0px | Form labels, captions, emphasis |
| Link | Inter | 14px | 400 | 20px | 0px | Hyperlinks, navigation items |
| Button | Inter | 15px | 500 | 18px | 0px | Primary button text |
| Small Button | Inter | 12px | 600 | 12px | 0px | Compact button text, secondary actions |
| Tertiary Button | Inter | 13px | 500 | 15.6px | 0px | Navigation buttons, soft CTAs |
| Input / Form | Inter | 14px | 400 | 20px | 0px | Input field text, placeholder |
| Large Input | Geist | 16px | 400 | 20.8px | 0px | Large form field text |

### Principles
- **Hierarchy through scale**: Dramatic differences in size signal importance and guide visual scanning.
- **Weight variation**: Bold (`600`–`700`) weights create visual emphasis; regular (`400`) weights support readability and reduce cognitive load.
- **Line height generosity**: Increased line height (`1.4x`–`1.2x` of font size) improves scannability and accessibility, especially for body text.
- **Font pairing**: Geist conveys premium, tech-forward positioning; Inter ensures clear, accessible UI typography.
- **Consistency**: All component text uses predefined roles to maintain visual cohesion across the product.

## 4. Component Stylings

### Buttons

#### Primary Button
- **Background**: `#110229`
- **Text Color**: `#FFFFFF`
- **Font**: Inter, `15px`, `500` weight
- **Padding**: `14px 16px`
- **Border Radius**: `6px`
- **Border**: None
- **Height**: `46px`
- **Line Height**: `18px`
- **Box Shadow**: None
- **Hover State**: Background darkens to `#0A0118`, subtle lift effect via `box-shadow: rgba(179, 179, 179, 0.15) 0px 6px 16px 0px`
- **Active State**: Background `#050010`, no shadow
- **Disabled State**: Background `#D9D9D9`, text `#595959`, cursor not-allowed

#### Secondary Button (Prominent CTA)
- **Background**: `#5B0DD5`
- **Text Color**: `#FFFFFF` or `#F9F9F9`
- **Font**: Inter, `15px`, `500` weight
- **Padding**: `14px 16px`
- **Border Radius**: `6px`
- **Border**: None
- **Height**: `46px`
- **Line Height**: `18px`
- **Box Shadow**: None
- **Hover State**: Background `#4A0BAA`, lift effect via `box-shadow: rgba(179, 179, 179, 0.2) 0px 8px 20px 0px`
- **Active State**: Background `#39088F`, no shadow
- **Disabled State**: Background `#D9D9D9`, text `#595959`

#### Navigation Button (Tertiary)
- **Background**: Transparent
- **Text Color**: `#110229`
- **Font**: Inter, `13px`, `500` weight
- **Padding**: `11px 16px`
- **Border Radius**: `6px`
- **Border**: None
- **Height**: `37.6px`
- **Line Height**: `15.6px`
- **Box Shadow**: None
- **Hover State**: Background `#F2EFFE`, text `#110229`
- **Active State**: Background `#E8DAFF`, text `#5B0DD5`
- **Disabled State**: Background transparent, text `#D9D9D9`

#### Compact Button (Small / Secondary)
- **Background**: `#110229`
- **Text Color**: `#FFFFFF`
- **Font**: Inter, `12px`, `600` weight
- **Padding**: `12px 16px`
- **Border Radius**: `4px`
- **Border**: None
- **Height**: `36px`
- **Line Height**: `12px`
- **Box Shadow**: `rgba(179, 179, 179, 0.25) 0px 8px 20px 0px`
- **Hover State**: Background `#0A0118`, shadow intensifies
- **Active State**: Background `#050010`
- **Disabled State**: Background `#D9D9D9`, text `#595959`

#### Ghost Button (Low Priority)
- **Background**: Transparent
- **Text Color**: `#110229`
- **Font**: Inter, `13px`, `500` weight
- **Padding**: `11px 16px`
- **Border Radius**: `6px`
- **Border**: None
- **Height**: `37.6px`
- **Line Height**: `15.6px`
- **Box Shadow**: None
- **Hover State**: Background `#F9F9F9`, text `#5B0DD5`
- **Active State**: Background `#F2EFFE`, text `#5B0DD5`
- **Disabled State**: Background transparent, text `#D9D9D9`

### Cards & Containers

#### Standard Card
- **Background**: `#FFFFFF`
- **Text Color**: `#110229`
- **Font**: Inter, `14px`, `500` weight
- **Padding**: `20px`
- **Border Radius**: `8px`
- **Border**: `1px solid #FFFFFF`
- **Height**: Auto
- **Line Height**: `20px`
- **Box Shadow**: `rgba(73, 69, 80, 0.12) 0px 4px 20px 0px`
- **Hover State**: Shadow intensifies to `rgba(73, 69, 80, 0.18) 0px 6px 24px 0px`
- **Active State**: Slight background tint `#F9F9F9`

#### Borderless Card
- **Background**: Transparent
- **Text Color**: `#110229`
- **Font**: Inter, `14px`, `500` weight
- **Padding**: `0px`
- **Border Radius**: `0px`
- **Border**: None
- **Height**: `100%`
- **Line Height**: `20px`
- **Box Shadow**: None

#### Use-Case Card (With Category Tag)
- **Background**: `#FFFFFF`
- **Text Color**: `#110229`
- **Font**: Inter, `14px`, `400`–`500` weight
- **Padding**: `20px`
- **Border Radius**: `8px`
- **Border**: `1px solid #D9D9D9`
- **Height**: Auto
- **Line Height**: `20px`
- **Box Shadow**: `rgba(73, 69, 80, 0.12) 0px 4px 20px 0px`
- **Category Tag Background**: Accent color (magenta `#DD00A4`, teal `#00C8A3`, blue `#005EFF` depending on use case)
- **Category Tag Text**: `#FFFFFF`
- **Category Tag Padding**: `6px 12px`
- **Category Tag Border Radius**: `6px`
- **Category Tag Font**: Inter, `12px`, `500` weight

### Inputs & Forms

#### Standard Input Field
- **Background**: `#FFFFFF`
- **Text Color**: `#141414`
- **Font**: Inter, `14px`, `400` weight
- **Padding**: `12px`
- **Border Radius**: `12px`
- **Border**: `1px solid #D9D9D9`
- **Height**: `38px`
- **Width**: `100%`
- **Line Height**: `20px`
- **Box Shadow**: None
- **Focus State**: Border `1px solid #5B0DD5`, box-shadow `0px 0px 0px 3px rgba(91, 13, 213, 0.1)`
- **Placeholder Color**: `#94A3B8`
- **Error State**: Border `1px solid #D72F31`, text `#D72F31`
- **Disabled State**: Background `#F9F9F9`, text `#D9D9D9`, cursor not-allowed

#### Large Input Field (Search / Hero)
- **Background**: `#FFFFFF`
- **Text Color**: `#110229`
- **Font**: Geist, `16px`, `400` weight
- **Padding**: `4px 4px 4px 12px`
- **Border Radius**: `8px`
- **Border**: `1px solid #595959`
- **Height**: `48px`
- **Width**: `350px`
- **Line Height**: `20.8px`
- **Box Shadow**: None
- **Focus State**: Border `1px solid #5B0DD5`, box-shadow `0px 0px 0px 3px rgba(91, 13, 213, 0.15)`
- **Placeholder Color**: `#94A3B8`

#### Select / Dropdown
- **Background**: `#FFFFFF`
- **Text Color**: `#141414`
- **Font**: Inter, `14px`, `400` weight
- **Padding**: `12px`
- **Border Radius**: `12px`
- **Border**: `1px solid #D9D9D9`
- **Height**: `38px`
- **Box Shadow**: `rgba(0, 0, 0, 0.2) 0px 4px 20px 0px` (open state)
- **Focus State**: Border `1px solid #5B0DD5`

### Navigation

#### Top Navigation Bar
- **Background**: Transparent or `#FFFFFF`
- **Text Color**: `#110229`
- **Font**: Inter, `14px`, `400` weight
- **Padding**: `0px 0px 0px 32px`
- **Height**: `46px`
- **Box Shadow**: None or subtle bottom border `1px solid #D9D9D9`
- **Link Padding**: `12px 16px`
- **Link Hover State**: Background `#F2EFFE`, text `#5B0DD5`
- **Active Link**: Text `#5B0DD5`, bottom border `2px solid #5B0DD5`

#### Navigation Link (Light Background)
- **Background**: Transparent
- **Text Color**: `#FFFFFF`
- **Font**: Inter, `14px`, `400` weight
- **Padding**: `0px`
- **Height**: `24px`
- **Line Height**: `20px`
- **Box Shadow**: None
- **Hover State**: Text `#9747FF`, underline `1px solid #9747FF`
- **Active State**: Text `#9747FF`

### Tabs & Tab Navigation

#### Tab Button (Active)
- **Background**: `#5B0DD5`
- **Text Color**: `#FFFFFF`
- **Font**: Inter, `14px`, `500` weight
- **Padding**: `12px 20px`
- **Border Radius**: `6px`
- **Border**: None
- **Height**: `40px`
- **Box Shadow**: None
- **Icon + Text Gap**: `8px`

#### Tab Button (Inactive)
- **Background**: `#F9F9F9`
- **Text Color**: `#595959`
- **Font**: Inter, `14px`, `400` weight
- **Padding**: `12px 20px`
- **Border Radius**: `6px`
- **Border**: None
- **Height**: `40px`
- **Hover State**: Background `#F2EFFE`, text `#110229`

### Badges & Labels

#### Category Badge
- **Background**: Accent color (magenta, teal, or blue depending on use case)
- **Text Color**: `#FFFFFF`
- **Font**: Inter, `12px`, `500` weight
- **Padding**: `6px 12px`
- **Border Radius**: `6px`
- **Border**: None
- **Height**: Auto
- **Line Height**: `14px`
- **Box Shadow**: None

#### Status Badge (Secondary)
- **Background**: `#E8DAFF`
- **Text Color**: `#5B0DD5`
- **Font**: Inter, `12px`, `600` weight
- **Padding**: `6px 12px`
- **Border Radius**: `4px`
- **Border**: None

## 5. Layout Principles

### Spacing System
- **Base Unit**: `4px`
- **Spacing Scale**: `4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `32px`, `40px`, `52px`, `60px`, `80px`, `92px`
- **Usage Context**:
  - `4px`–`8px`: Internal component gaps (icon + text, button groups)
  - `12px`–`16px`: Component padding, tight sections
  - `20px`–`24px`: Standard card padding, section gaps
  - `32px`–`40px`: Medium section spacing, container padding
  - `52px`–`60px`: Large section spacing, feature block separation
  - `80px`–`92px`: Full-page section margins, hero to content transitions

### Grid & Container
- **Max Width**: `1280px` (inferred from enterprise layout standards)
- **Column Strategy**: 12-column responsive grid
- **Container Padding**: `32px` (desktop), `20px` (tablet), `16px` (mobile)
- **Section Patterns**:
  - **Hero Section**: Full-width background with `80px`–`92px` top/bottom padding, centered content max-width `1000px`
  - **Feature Rows**: 3-column card grid on desktop, 2-column on tablet, 1-column on mobile with `24px` gaps
  - **Navigation Bar**: Full-width sticky header with `16px` horizontal padding, content max-width `1280px`

### Whitespace Philosophy
Synthflow prioritizes generous whitespace to reduce visual clutter and enhance cognitive clarity. Sections are separated by substantial vertical gaps (`60px`–`80px`) creating breathing room between distinct content blocks. Cards and containers use consistent `20px` internal padding, preventing crowded UI. This approach signals premium positioning and improves scannability for enterprise audiences navigating complex interfaces. Whitespace also draws attention to key CTAs and value propositions without aggressive visual styling.

### Border Radius Scale
- `4px`: Compact buttons, small badges, minor interactive elements
- `6px`: Standard buttons, input fields (medium), navigation buttons
- `8px`: Cards, containers, larger input fields, dropdown menus
- `10px`: Large feature cards, hero containers
- `12px`: Full-width input fields, major containers

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow, `background: transparent` | Ghost buttons, links, borders only, neutral backgrounds |
| Base (sm) | `rgba(73, 69, 80, 0.12) 0px 4px 20px 0px` | Standard cards, containers, default elevation |
| Mid (md) | `rgba(0, 0, 0, 0.2) 0px 4px 20px 0px` | Dropdown menus, floating panels, modals |
| High (lg) | `rgba(179, 179, 179, 0.25) 0px 8px 20px 0px` | Compact buttons, elevated hover states, floating CTAs |
| Maximum (xl) | `rgba(0, 0, 0, 0.04) 0px 2px 3px 0px, rgba(0, 0, 0, 0.03) 0px 6px 6px 0px, rgba(0, 0, 0, 0.02) 0px 14px 8px 0px, rgba(0, 0, 0, 0.01) 0px 25px 10px 0px, rgba(0, 0, 0, 0) 0px 39px 11px 0px` | Custom overlays, premium modals, hero states |

**Shadow Philosophy**

Synthflow employs a soft, stratified shadow system that conveys depth without harsh contrast. Shadows use muted, gray-toned opacity values (`0.01`–`0.25`) rather than pure black, maintaining the approachable aesthetic while signaling elevation. The multi-layered xl shadow creates subtle depth perception through layered blur radii, suitable for premium interactions. Standard cards use the base (sm) shadow consistently, preventing visual fatigue. Hover and active states animate to mid or high elevations, providing haptic-like feedback that enhances interactivity. This restraint in shadow intensity aligns with enterprise design standards where clarity and legibility take precedence over dramatic visual effects.

## 7. Do's and Don'ts

### Do
- **Use the Navy Dark** (`#110229`) as your primary text color on light backgrounds for maximum readability and brand consistency.
- **Apply Deep Purple** (`#5B0DD5`) for all prominent CTAs, interactive states, and high-priority actions to guide user attention.
- **Maintain consistent padding** across cards (`20px`) and inputs (`12px`) to create visual rhythm and rhythm.
- **Pair Geist for headlines** and Inter for body text to maintain the premium, tech-forward aesthetic.
- **Use the base shadow** (`rgba(73, 69, 80, 0.12)…`) on all cards and containers for consistent, subtle depth.
- **Apply generous whitespace** between sections (`60px`–`80px` gaps) to enhance clarity and reduce cognitive overload.
- **Use border radius** (`6px`–`8px`) on buttons and inputs to convey approachability and modern design sensibilities.
- **Leverage accent colors** (magenta, teal, blue) sparingly for category badges and use-case highlights.
- **Ensure focus states** on all interactive elements using a `3px` colored outline with low opacity background.
- **Test form inputs** with placeholder text in `#94A3B8` to ensure adequate contrast against `#FFFFFF` backgrounds.

### Don't
- **Don't use** `#141414` (Charcoal) or `#000000` (Black) for body text on purple or colored backgrounds; use `#FFFFFF` or `#F9F9F9` instead.
- **Don't apply** multiple shadow levels to a single component; choose one elevation and animate state changes smoothly.
- **Don't mix** Geist and Inter within the same text element; maintain semantic font usage (Geist for display, Inter for UI).
- **Don't reduce padding** below `12px` for cards or `12px` for inputs; this violates accessibility and comfortable tap targets.
- **Don't use** the full opacity accent colors on interactive elements; reserve `#DD00A4`, `#00C8A3`, and `#005EFF` for decorative badges only.
- **Don't create** buttons smaller than `36px` height; ensure minimum touch target compliance for accessibility.
- **Don't apply** color to text alone; pair with weight (`500`–`700`) or size changes to create clear visual hierarchy.
- **Don't use** borders without shadows on cards; the system employs shadow-based elevation, not bordered frames (except inputs).
- **Don't skip** hover/focus states on any interactive component; they are critical for enterprise usability.
- **Don't apply** border radius greater than `12px` on primary components; the system targets `6px`–`8px` for consistency.

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| **Mobile** | 320px–639px | Single-column layout, full-width cards, `16px` container padding, collapsed navigation (menu icon), button full width (`100%`), font sizes reduced by 1–2 levels, `12px` section gaps |
| **Tablet** | 640px–1023px | 2-column card grid, `20px` container padding, stacked navigation with drawer, buttons `auto` width, increased gaps to `32px`, input fields maintain `12px` padding but width `100%` |
| **Desktop** | 1024px–1279px | 3-column card grid, `32px` container padding, full horizontal navigation, buttons context-dependent (auto or fixed width), `60px` section gaps, max-width `1000px` content |
| **Large Desktop** | 1280px+ | 3-column grid with wider gaps, `40px` container padding, max-width `1280px`, hero section spans full width, feature showcase grid expands to 4 columns, input fields maintain fixed widths |

### Touch Targets
- **Minimum Interactive Size**: `44px × 44px` (WCAG 2.1 Level AAA standard)
- **Button Height**: `46px` (desktop), `44px` (mobile) — accommodates touch with comfortable padding
- **Input Height**: `38px` (standard), `48px` (large/search) — exceeds touch target minimum with internal padding
- **Link Padding**: `12px 16px` minimum to ensure touch-friendly tap areas
- **Icon Spacing**: `4px`–`8px` gap between icon and text ensures visual separation without sacrificing touch area

### Collapsing Strategy
- **Hero Section**: Full-width on all breakpoints; text scales proportionally (64px → 48px → 32px), centering on mobile
- **Navigation Bar**: Horizontal stacked list on desktop (`1024px+`); collapses to hamburger menu icon on tablet and mobile, revealing drawer navigation
- **Card Grids**: 3 columns (desktop) → 2 columns (tablet) → 1 column (mobile), maintaining `24px` gap consistency
- **Feature Blocks**: Side-by-side on desktop with `80px` horizontal gap; stacks vertically on tablet/mobile with `40px` gap
- **Input Fields**: Fixed width on desktop (`350px`); scales to `100%` on tablet/mobile with parent container padding
- **Button Groups**: Horizontal on desktop; stacks vertically on mobile with full width, `12px` gap between
- **Whitespace**: Reduces proportionally (60px → 40px → 24px) to optimize mobile real estate while maintaining visual breathing room

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA**: Deep Purple (`#5B0DD5`) for "Contact Sales", "Try Full Platform", and prominent actions
- **Primary Text**: Navy Dark (`#110229`) for headings and body on light backgrounds
- **Background**: Off-White (`#F9F9F9`) for page sections; White (`#FFFFFF`) for cards and inputs
- **Secondary Text**: Dark Gray (`#595959`) for labels, captions, and muted content
- **Borders**: Border Gray (`#D9D9D9`) for input and card borders
- **Active/Hover State**: Vibrant Purple (`#9747FF`) for navigation and subtle emphasis
- **Category Badges**: Magenta (`#DD00A4` for Real Estate), Teal (`#00C8A3` for E-Commerce), Blue (`#005EFF` for Healthcare)
- **Error State**: Danger Red (`#D72F31`) for validation errors and alerts
- **Decorative Accents**: Light Purple Tints (`#F2EFFE`, `#FAF9FE`) for hero backgrounds and subtle differentiation

### Iteration Guide

1. **Always use Inter font for buttons, labels, and UI text** (`14px`–`15px`, `400`–`600` weight); reserve Geist for headlines and display text (`18px`+, `400`–`600` weight).

2. **Apply the base shadow** (`rgba(73, 69, 80, 0.12) 0px 4px 20px 0px`) to all cards and containers by default; animate to mid/high elevation on hover/active states.

3. **Maintain minimum padding of `12px`** on input fields and `20px` on cards; scale up to `32px`–`60px` for large containers and hero sections.

4. **Use border radius `6px` for buttons and inputs, `8px` for cards**; reserve `10px`–`12px` for hero containers only.

5. **Set button height to `46px` (primary), `36px` (compact)**; ensure text color contrast meets WCAG AA standards (min `4.5:1` ratio).

6. **Build all focus states with `0px 0px 0px 3px rgba(91, 13, 213, 0.1)` outline**; apply to buttons, inputs, links, and interactive elements.

7. **Use Deep Purple** (`#5B0DD5`) for primary buttons and active tab states; Navy Dark (`#110229`) for secondary/compact buttons.

8. **Organize cards in 3-column grid on desktop (1024px+), 2-column on tablet (640px–1023px), 1-column on mobile (<640px)** with `24px` gaps.

9. **Apply the "Ghost Button" variant** (transparent background, `#110229` text) for low-priority actions; reserve primary button style for high-priority CTAs.

10. **Scale typography on mobile**: Display (64px → 32px), Heading 2 (18px → 16px), Body (30px → 20px), ensuring line heights scale proportionally for readability.

11. **Reserve accent colors (magenta, teal, blue) for decorative category badges only**; use Deep Purple (`#5B0DD5`) and Vibrant Purple (`#9747FF`) for interactive states.

12. **Implement responsive padding**: `16px` (mobile), `20px` (tablet), `32px` (desktop) for container padding; adjust section gaps from `24px` → `40px` → `60px` based on breakpoint.