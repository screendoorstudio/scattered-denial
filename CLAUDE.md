# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a website-building workspace. Every site built here should look like a human designer made it — distinctive, intentional, and polished. The full design system and build process lives in `.claude/skills/beautiful-website/` (see `SKILL.md` there).

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

## Reference Files

- `.claude/skills/beautiful-website/SKILL.md` — Full build process and rules
- `.claude/skills/beautiful-website/references/examples.md` — Curated taste palette (16 sites)
- `.claude/skills/beautiful-website/references/design-principles.md` — Aesthetic preferences and pet peeves
- `.claude/skills/beautiful-website/references/tech-stack.md` — Preferred technologies and deployment
