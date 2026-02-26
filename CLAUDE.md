# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**ScatteredDenial.com** — website for the Emmy-winning documentary series *Scattered Denial: The Occupational Dangers of Radiation*. Single-page site built as one `index.html` with Tailwind CDN + inline CSS/JS, following the beautiful-website skill guidelines.

## Current State (Feb 2026)

- **Live at:** https://scattered-denial.vercel.app (and scattereddenial.com once DNS A records are pointed to `76.76.21.21`)
- **GitHub:** https://github.com/screendoorstudio/scattered-denial (auto-deploys on push to `main`)
- **Vercel team:** screenteam (org ID: `team_lFuERAc0hMF2udyy9HgCjPRK`)
- **GitHub account:** screendoorstudio
- **Structure:** Single `index.html` + `images/` folder + `vercel.json` (security headers)
- **DNS pending:** Domain `scattereddenial.com` needs A records (`@` and `www` → `76.76.21.21`) set at the registrar (currently on Network Solutions nameservers)

## Site Architecture

Single HTML file with these sections (in order):
1. **Nav** — Logo + LinkedIn links
2. **Hero** — Banner image with glow + parallax, Emmy badge overlay (pulsing amber glow), trailer CTA + LinkedIn button
3. **Recognition Strip** — Centered "2025 Rocky Mountain Emmy Award Winner" with inline Emmy icon, thin amber rules above/below
4. **Quote Interstitial #1** — Full-viewport Dr. Rizik quote ("scatter/denial") with word-by-word scroll reveal
5. **Episode 7 Feature** — Latest episode with video facade (ID: `1xvupe3PZPA`)
6. **Statistics Band** — 4 stats (4% women, 30–40 lbs aprons, 7 episodes, 1 Emmy) with count-up animation on scroll
7. **Episode Grid (1–6)** — Asymmetric layout: Ep 1–2 large (2-col), Ep 3–6 smaller (4-col). All cards have descriptions.
8. **Quote Interstitial #2** — Full-viewport Dr. Diethrich quote ("This radiation cannot hurt me")
9. **PBS Version** — Full-width video facade (ID: `swpKf8BTidw`)
10. **About** — Series description (7-part docuseries)
11. **Quote Interstitial #3** — Full-viewport Dr. Rizik quote ("moral imperative" in amber)
12. **ORSIF Webinar** — Image link to Radcliffe Cardiology webinar
13. **Latest News** — PBS debut announcement
14. **Join ORSIF** — CTA card linking to orsif.org
15. **Footer** — Copyright 2025 + LinkedIn links

## Design System

- **Typography:** Space Grotesk (headings, 300/500/700) + DM Sans (body, 400/500)
- **Palette:** Near-black bg (`#0a0a0b`), card bg (`#18181b`), amber accent (`#f59e0b`), white text (`#fafafa`), muted gray (`#a1a1aa`)
- **Signature moves:** Film grain overlay (SVG fractalNoise, 3.5% opacity), hero glow + parallax, Emmy badge with pulsing amber glow, quote interstitials with word-by-word reveal, statistics count-up animation, asymmetric episode grid, amber-bordered cards with hover lift, staggered fade-in children, `.fade-up` / `.fade-left` scroll animations (IntersectionObserver)
- **Video strategy:** Click-to-load YouTube facades (9 videos total) — thumbnail + play button, replaces with iframe on click
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
| `Emmy-award.png` (776KB) | Emmy badge (hero overlay + recognition strip) |
| `Scattered-Denial_webinar_ORSIF_2024.png` (756KB) | Webinar section (desktop) |
| `image_desktop.webp` (57KB) | Webinar section (mobile via `<picture>`) |
| `Scattered-Denial_The-Occupational-Dangers-of-Radiation_docuseries.png` (503KB) | OG image |

## Reference Files

- `.claude/skills/beautiful-website/SKILL.md` — Full build process and rules
- `.claude/skills/beautiful-website/references/examples.md` — Curated taste palette (16 sites)
- `.claude/skills/beautiful-website/references/design-principles.md` — Aesthetic preferences and pet peeves
- `.claude/skills/beautiful-website/references/tech-stack.md` — Preferred technologies and deployment
