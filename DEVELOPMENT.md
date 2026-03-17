# C9 Communications — Development Chronicle

> **Living document.** Updated with every meaningful commit. Captures all decisions, architecture, workflows, and progress.

---

## Project Overview

**Client:** C9 Communications  
**Product:** Business telco & IT services website for the Australian market  
**Stack:** React 19 + TypeScript + Vite + Tailwind CSS v3 + Shadcn/UI + Framer Motion  
**Planned Migration:** Next.js 15 (App Router) for full SEO/GEO support  
**Repo:** `c9mayur-lgtm/C9-communications`  
**Primary Contact phone:** 1800 000 299  
**Address:** Level 3, 480 Collins Street, Melbourne 3000  

---

## Architecture Decision Record (ADR)

### ADR-001 — Design Locked ✅
**Date:** March 2026  
**Decision:** The homepage design built in `Wordpress1.tsx` (a pixel-faithful replica of the approved WordPress theme) is **client-approved and final**. No visual changes will be made to the homepage design.  
**Consequence:** All future pages must derive from this design system as the source of truth.

### ADR-002 — Migration to Next.js 15 (Planned)
**Date:** March 2026  
**Decision:** Migrate from Vite SPA → Next.js 15 App Router for production.  
**Reason:** Current Vite setup is client-side only — invisible to search engines, no GEO targeting, no per-page metadata.  
**Next.js benefits:**
- SSR/SSG for SEO-ready HTML on every page
- Built-in `generateMetadata()` per page (title, description, OG tags)
- `middleware.ts` for GEO detection at the CDN edge (Vercel)
- `next/image` for automatic image optimisation
- `app/sitemap.ts` and `app/robots.ts` for auto-generated SEO files

### ADR-003 — Design System Extraction (Planned)
**Decision:** Before building inner pages, extract all design tokens (colours, typography, spacing, radius, animation presets) into a formal design system under `src/components/design-system/`.  
**Token source:** `src/index.css` CSS variables + `Wordpress1.tsx` inline styles.

### ADR-004 — Git Push Policy
**Decision:** No code is pushed to the remote repository without explicit approval from the developer (Mayur).  
**Workflow:** AI agent stages and commits locally. Developer reviews and pushes manually or gives explicit "push now" instruction.

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | React | 19.x |
| Language | TypeScript | ~5.9 |
| Build Tool | Vite | 7.x |
| Styling | Tailwind CSS | 3.x |
| UI Primitives | Shadcn/UI | Latest |
| Animation | Framer Motion | 12.x |
| Icons | Lucide React | 0.57x |
| Routing | React Router DOM | 7.x |
| Hosting (current) | Local / TBD | — |
| Hosting (planned) | Vercel | — |

---

## Current Pages & Status

| Route | File | Status | Notes |
|---|---|---|---|
| `/wordpress1` | `src/pages/Wordpress1.tsx` | ✅ **FINAL** | Client-approved homepage design |
| `/` | `src/pages/SaaSHomepage.tsx` | 🔄 Experimental | Dark theme variant, may be replaced |
| `/pricing` | `src/pages/Pricing.tsx` | 🔄 Built | Needs review |
| `/about` | `src/pages/About.tsx` | 🔄 Built | Needs design system alignment |
| `/contact` | `src/pages/Contact.tsx` | 🔄 Built | Needs design system alignment |
| `/solutions` | `src/pages/Solutions.tsx` | 🔄 Built | Needs design system alignment |
| `/industries` | `src/pages/Industries.tsx` | 🔄 Built | Needs design system alignment |
| `/support` | `src/pages/Support.tsx` | 🔄 Built | Needs design system alignment |
| `/consultation` | `src/pages/Consultation.tsx` | 🔄 Built | Uses `ConsultationForm` component |

---

## Component Inventory

### `src/components/landing/` — SaaS Homepage Components
| File | Purpose |
|---|---|
| `ConsultationForm.tsx` | Multi-step consultation form (also used in Wordpress1) |
| `TestimonialMarquee.tsx` | Vertical scrolling testimonial marquee |
| `FAQSection.tsx` | FAQ accordion |
| `TrustStrip.tsx` | Animated client logo marquee |
| `CaseStudies.tsx` | Case study cards |
| `C9XSpotlight.tsx` | C9X product spotlight |
| `Hero.tsx` | SaaS homepage hero |
| `Navigation.tsx` | SaaS nav (different from Wordpress1 nav) |
| `FooterInfo.tsx` | Footer |

### `src/components/shared/`
| File | Purpose |
|---|---|
| `Navigation.tsx` | Global nav (used on most non-Wordpress1 pages) |
| `FadeIn.tsx` | Scroll-triggered fade animation wrapper |

### Inside `Wordpress1.tsx` (inline, not yet extracted)
| Section | Approx Lines | Priority to Extract |
|---|---|---|
| Navbar + MegaMenu | ~150 | 🔴 High |
| Hero | ~50 | 🔴 High |
| Client Ticker | ~100 | 🔴 High |
| Highlights Strip | ~80 | 🟡 Medium |
| Services Tabs | ~200 | 🟡 Medium |
| Vendors/IT Cards | ~200 | 🟡 Medium |
| Testimonials | ~80 | 🟡 Medium |
| Case Studies | ~100 | 🟡 Medium |
| FAQ | ~50 | 🟢 Low |
| Footer | ~70 | 🟡 Medium |

---

## Design System Tokens (from `src/index.css`)

### Colours (Light Mode)
```
--c9-primary:    #5D00D6   ← Core brand purple
--c9-secondary:  #F4F0FA
--c9-accent:     #0027E2
--c9-text:       #0c1024
--c9-mid:        rgba(12, 16, 36, 0.82)
--c9-muted:      rgba(12, 16, 36, 0.62)
--c9-border:     rgba(93, 0, 214, 0.18)
--c9-surface:    rgba(93, 0, 214, 0.05)
--c9-hero-bg:    #F8FAFF
```

### Typography
```
Font: "Proxima Nova" (headings + body on Wordpress1 page)
Font: "Inter" (global fallback)
H1: 36–56px, weight 700, tracking-tight
H2: 28–48px, weight 700
Body: 16–20px, weight 400, line-height 1.6
Label / Mono-tag: 11px, uppercase, letter-spacing 0.12em
```

### Spacing
```
Section padding: py-10 md:py-14 lg:py-20
Container max-width: 1240px
Grid gap: gap-6 to gap-10
```

### Border Radius
```
Pill buttons:  100px
Cards:         24px
Buttons:       12px (rounded-xl)
Ticker pills:  100px
```

---

## Key Workflows

### Client Logo Ticker (Wordpress1)
- Two-row CSS animation ticker (`ticker-left`, `ticker-right` keyframes)
- Each pill displays: logo image + company name text
- `isWordmark: true` → logo already contains company name → text label hidden
- `isWordmark: false` → square icon logo → text label shown alongside
- Sources: `gilbarbara/logos` GitHub (raw SVG URLs) + Clearbit API (`logo.clearbit.com`)
- Hover pause: **REMOVED** per user request

### Google Reviews Rating
- Replaced "Clutch" with "Google Reviews" across all pages
- Rating: 4.9 / 5 ★★★★★
- Displayed in: Wordpress1 Highlights strip, Wordpress1 footer, SaaSHomepage hero badge

### Mega Menu (Wordpress1 Navbar)
- 5 tabs: IT Solutions, Telco, Modern Workplace, Company, Resources
- 3-column layout: Navigation links | Visual cards | Sidebar
- Triggered by `onMouseEnter`, dismissed with 180ms debounce `onMouseLeave`
- Component: `TecnologiaMegaPanel`
- Data: `MEGA_MAP` (maps tab key → menu data object)

### Consultation Form
- Located at bottom of Wordpress1 and at `/consultation`
- Component: `src/components/landing/ConsultationForm.tsx`
- Form fields: Name, Business name, Phone, Email, Service interest

---

## Planned SEO Structure (Next.js)

Each page will export:
```ts
export const metadata = {
  title: '[Page Name] | C9 Communications Australia',
  description: '…150–160 chars…',
  openGraph: { locale: 'en_AU', … },
  alternates: { canonical: 'https://c9communications.com.au/…' },
}
```

### Structured Data (JSON-LD)
- Home: `LocalBusiness` schema (name, address, phone, geo coordinates)
- Solution pages: `Service` schema
- Blog posts: `Article` schema

### GEO Middleware Plan
```ts
// middleware.ts — detect AU vs international
const country = request.geo?.country ?? 'AU';
// Inject country code into headers for components to read
```

---

## Commit History (Summary)

| Date | Commit | What Changed |
|---|---|---|
| Mar 2026 | Initial build | Framer-style landing page (rejected by client) |
| Mar 2026 | Wordpress theme replica | Built `Wordpress1.tsx` — client approved this design ✅ |
| Mar 2026 | Mega menu | Added `TecnologiaMegaPanel` with 3-column layout |
| Mar 2026 | ConsultationForm | Built multi-step consultation form |
| Mar 2026 | Testimonials | Replaced old testimonials with Shadcn-style marquee |
| Mar 2026 | Client logos | Replaced placeholders with real logos from clearbit + gilbarbara/logos |
| Mar 2026 | Google Reviews | Replaced Clutch with Google Reviews across all pages |
| Mar 2026 | Logo ticker fix | Removed hover-pause; fixed wordmark text duplication |
| Mar 2026 | This commit | Added `DEVELOPMENT.md` living documentation |

---

## Next Steps (Ordered Priority)

- [ ] **Phase 1:** Scaffold Next.js 15 project (new folder alongside current Vite project)
- [ ] **Phase 1:** Port Wordpress1 navbar + mega menu → `components/layout/Navbar.tsx`
- [ ] **Phase 1:** Port Wordpress1 footer → `components/layout/Footer.tsx`
- [ ] **Phase 1:** Rebuild homepage at `app/page.tsx` using extracted components
- [ ] **Phase 2:** Extract design tokens → `components/design-system/tokens.css`
- [ ] **Phase 2:** Build `Typography.tsx`, `Button.tsx`, `Section.tsx` primitives
- [ ] **Phase 3:** Build inner pages (Solutions, IT Services, About, Contact, Pricing)
- [ ] **Phase 4:** Add metadata, JSON-LD, sitemap, robots.txt
- [ ] **Phase 4:** Implement GEO middleware
- [ ] **Phase 5:** Deploy to Vercel, connect `c9communications.com.au`, submit sitemap

---

*Last updated: March 17, 2026 — Documentation file created*
