# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**ScatteredDenial.com** — website for the Emmy-winning documentary series *Scattered Denial: The Occupational Dangers of Radiation*. Multi-page static site (HTML + Tailwind CDN + inline CSS/JS) following the beautiful-website skill guidelines. Deployed on Vercel with auto-deploy from GitHub.

## Current State (Feb 2026)

- **Live at:** https://scattered-denial.vercel.app (and scattereddenial.com once DNS A records are pointed to `76.76.21.21`)
- **GitHub:** https://github.com/screendoorstudio/scattered-denial (auto-deploys on push to `main`)
- **Vercel team:** screenteam (org ID: `team_lFuERAc0hMF2udyy9HgCjPRK`)
- **GitHub account:** screendoorstudio
- **DNS pending:** Domain `scattereddenial.com` needs A records (`@` and `www` → `76.76.21.21`) set at the registrar (currently on Network Solutions nameservers)

### Site Structure

| File | Route | Purpose |
|------|-------|---------|
| `index.html` | `/` | Main site — hero, episodes, quotes, stats, contact form |
| `about.html` | `/about` | Film summary + filmmaker bios (Rizik, Wooley, Dickmann, Martin, B. Wooley, VAS Communications) |
| `press.html` | `/press` | 13 press features from JACC, PBS, TCTMD, MM+M, DAIC, HonorHealth, etc. |
| `vercel.json` | — | `cleanUrls: true` + security headers (X-Content-Type-Options, X-Frame-Options) |
| `favicon.svg` | `/favicon.svg` | Amber "SD" monogram on dark background |
| `images/` | — | Hero banner, nav logo, Emmy icon, ORSIF logo, webinar images, OG image |
| `transcripts/` | — | 9 episode transcripts + `pull-quotes.md` curated reference |
| `fetch_transcripts.py` | — | Script to re-fetch transcripts via `youtube-transcript-api` |

## Site Architecture — `index.html`

Sections in order:
1. **Nav** — Logo + Episodes / Press / About / Contact links + LinkedIn icon (Episodes anchors to `#episodes` episode grid; "The Procedure" link removed)
2. **Hero** — Banner image with glow + parallax (`min-h-[50vh] md:min-h-[60vh]`), trailer CTA + LinkedIn button
3. **Recognition Strip** — "2025 Rocky Mountain Emmy Award Winner" with Emmy icon, thin amber rules
4. **Episode 7 Feature** — Latest episode video facade (ID: `1xvupe3PZPA`), positioned early for immediate access
5. **Quote Interstitial #1** — Dr. Rizik quote ("scatter/denial") with word-by-word scroll reveal
6. **Rotating Quotes & Stats** — Random pull quote + 3 random stats from a pool of 20 quotes and 12 stats, reshuffled via "Refresh for more" button (no page reload). ~4,400 possible combinations.
7. **Episode Grid (1–6)** (`id="episodes"`) — Asymmetric layout: Ep 1–2 large (2-col), Ep 3–6 smaller (4-col). Nav "Episodes" link anchors here.
8. **Quote Interstitial #2** — Dr. Diethrich quote ("I felt that this radiation cannot hurt me"), "succumbed to brain tumor, 2017"
9. **PBS Version** — Full-width video facade (ID: `swpKf8BTidw`)
10. **About** — Series description (7-part docuseries)
11. **Quote Interstitial #3** — Dr. Rizik quote ("moral imperative" in amber, linked to JSCAI article)
12. **ORSIF Webinar** — Image link to Radcliffe Cardiology webinar
13. **Latest News + Join ORSIF** — Merged 2-column grid
14. **Contact** — Name/email/subject/message form with thank-you state (placeholder, no backend yet)
15. **Footer** — Copyright 2026 + LinkedIn links

## Site Architecture — `about.html`

1. **Film Summary** — 6 paragraphs covering scope, title meaning, production, PBS broadcast, Emmy win, call to action
2. **Filmmaker Bios** — Featured card for Dr. Rizik + 2x2 grid for Wooley, Dickmann, Martin, B. Wooley + VAS Communications card. Monogram avatars (placeholder for real photos).

## Site Architecture — `press.html`

1. **Count Strip** — 13 features / 8 publications / 5+ PBS stations
2. **Featured Article** — JACC journal piece (Dec 2024) in large card
3. **Press Grid** — 10 articles in 2-column cards with color-coded category tags (amber=Press, blue=Academic, green=Broadcast, purple=Industry)
4. **PBS Stations Banner** — National broadcast reach

### Layout compression (Feb 2026)
The layout was compressed ~37% from ~7000px to ~4400px on desktop:
- Quote interstitials: content-driven height with `py-16 md:py-20`
- All content sections: `py-12 md:py-16`
- Episode 7 moved above Quote #1 for early video visibility
- Latest News and Join ORSIF merged into single 2-column section
- Hero: `min-h-[50vh] md:min-h-[60vh]`

## Design System

- **Typography:** Space Grotesk (headings, 300/500/700) + DM Sans (body, 400/500)
- **Palette:** Near-black bg (`#0a0a0b`), card bg (`#18181b`), amber accent (`#f59e0b`), white text (`#fafafa`), muted gray (`#a1a1aa`)
- **Signature moves:** Static film grain overlay (SVG fractalNoise, 3.5% opacity — animation removed to prevent flicker), hero glow + parallax, quote interstitials with word-by-word reveal + amber border framing, rotating quotes/stats with fade transitions, asymmetric episode grid, amber-bordered cards with hover lift, staggered fade-in children, `.fade-up` / `.fade-left` scroll animations (IntersectionObserver), color-coded category tags on press page, monogram avatars on about page
- **Video strategy:** Click-to-load YouTube facades (9 videos total) — thumbnail + play button, both removed from DOM when iframe loads
- **Favicon:** SVG — amber "SD" monogram on dark rounded square
- **Accessibility:** All animations respect `prefers-reduced-motion` (grain, parallax, fade transitions disabled)

## Design Taste

The owner's aesthetic leans toward: intentional craft over templates, dramatic typography, analog warmth (grain overlays, texture, letterpress feel), asymmetric layouts, and unexpected but cohesive color palettes. Dark/moody with warm accents is preferred, but light themes are fine if they have character.

A curated taste palette of 16 admired websites lives in `.claude/skills/beautiful-website/references/examples.md` — spanning fintech (Stripe, Brex, Wise), healthcare (Parsley Health, One Medical), art/culture (Gufram, Van Gogh Museum, Buffalo AKG), editorial (Rolling Stone, The New Yorker), e-commerce (Everlane, Luminaire), and experimental (KPR-verse). Reference these for mood, layout patterns, and design moves when building new sites.

## Default Tech Stack

- **Landing pages / simple sites:** Single HTML file with Tailwind CSS via CDN + Google Fonts + inline CSS/JS
- **Multi-page sites:** Next.js 14+ with App Router + Tailwind CSS
- **Web apps:** React + TypeScript + Tailwind CSS + shadcn/ui
- **Backend (when needed):** Supabase
- **Deployment:** Vercel

## Key Design Constraints

- Never use Inter, Roboto, Arial, or system default fonts for display text
- Never default to white background + blue accents (the "AI slop zone")
- No purple gradient backgrounds
- No centered-everything layouts or generic SaaS look
- Always use Google Fonts with intentional pairings
- Mobile-first responsive design
- Semantic HTML with proper meta/Open Graph tags
- CSS custom properties for color palettes
- Every site needs 2-3 moments of visual delight (animations, hover states, layout surprises)

## Build Process

Always follow the 5-phase process in `SKILL.md`:

1. **Discovery** — Ask about purpose, audience, vibe, and admired sites before writing code
2. **Design Direction** — Write a short design brief (mood, typography, color palette, signature move) and confirm with the user
3. **Tech Stack** — Pick the right tool for the scope
4. **Build** — Hero that earns attention, purposeful sections, motion/delight, footer that doesn't phone it in
5. **Review** — Self-check: does it look human-designed? Typography distinctive? Works on mobile? Proud to show it?

## Local Images (`images/`)

| File | Use |
|------|-----|
| `Scattered-Denial_documentary_Now-Streaming_ORSIF_4-28-24_LOGO-extract.webp` (44KB) | Hero banner |
| `Scattered-Denial_docuseries_...logo.png` (93KB) | Nav logo |
| `Emmy-award.png` (776KB) | Emmy icon (recognition strip only) |
| `orsif-logo-white.png` | ORSIF logo (Join ORSIF card) |
| `Scattered-Denial_webinar_ORSIF_2024.png` (756KB) | Webinar section (desktop) |
| `image_desktop.webp` (57KB) | Webinar section (mobile via `<picture>`) |
| `Scattered-Denial_The-Occupational-Dangers-of-Radiation_docuseries.png` (503KB) | OG image |

## Transcripts (`transcripts/`)

All 9 YouTube video transcripts extracted via `youtube-transcript-api` (Python). All are **auto-generated** captions (no manual captions were uploaded). Expect transcription errors on medical terminology (e.g., "cardiovas ular", "addtive", "fluoroscopy" variants). Total: ~31,200 words.

| File | Episode | Words |
|------|---------|-------|
| `ep1-the-radiation-problem.txt` | Episode 1: The Radiation Problem | 1,862 |
| `ep2-history-of-radiation.txt` | Episode 2: The History of Radiation in Heart & Vascular Disease | 2,691 |
| `ep3-radiation-induced-cancers.txt` | Episode 3: Radiation Induced Cancers? | 3,534 |
| `ep4-the-orthopedic-problem.txt` | Episode 4: The Orthopedic Problem | 2,533 |
| `ep5-potential-solutions.txt` | Episode 5: Potential Solutions | 3,782 |
| `ep6-do-we-care.txt` | Episode 6: Do We Care? | 2,576 |
| `ep7-what-has-changed.txt` | Episode 7: What Has Changed? | 6,022 |
| `pbs-1-hour-version.txt` | PBS 1-Hour Version | 7,980 |
| `ep7-trailer.txt` | Episode 7 Film Trailer | 239 |

**Re-fetching:** Run `python3 fetch_transcripts.py` from the repo root. Requires `youtube-transcript-api` (`pip3 install youtube-transcript-api`).

**Pull quotes:** `transcripts/pull-quotes.md` — 25 curated quotes/stats mined from all 9 transcripts, organized by theme (Shocking Statistics, Personal Testimonies, Culture of Denial, Solutions & Hope, Moral Urgency). Each has speaker attribution, episode source, and a note on why it's compelling. The 3 quotes already on the site are listed but marked "do not duplicate." Verify exact wording against video before publishing (auto-caption source).

## Pending / Next Steps

- **DNS:** Point `scattereddenial.com` A records (`@` and `www`) to `76.76.21.21` at registrar
- **Contact form backend:** Wire up the placeholder form to Formspree, Vercel serverless function, or similar
- **Filmmaker photos:** Replace monogram avatars on `/about` with real headshots (with permission)
- **Analytics:** Add Vercel Analytics or Plausible for traffic tracking

## Reference Files

- `.claude/skills/beautiful-website/SKILL.md` — Full build process and rules
- `.claude/skills/beautiful-website/references/examples.md` — Curated taste palette (16 sites)
- `.claude/skills/beautiful-website/references/design-principles.md` — Aesthetic preferences and pet peeves
- `.claude/skills/beautiful-website/references/tech-stack.md` — Preferred technologies and deployment
