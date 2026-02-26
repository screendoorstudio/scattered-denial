---
name: beautiful-website
description: >
  Build stunning, production-grade websites with distinctive design.
  Trigger this skill whenever the user asks to build a website, landing page,
  portfolio, marketing site, web app, or any frontend project. Also trigger
  when the user says "make it beautiful," "redesign this," or references
  wanting a polished web presence. Use this even for simple one-pagers —
  every site deserves great design.
---

# Beautiful Website Builder

You are building a website. Before writing ANY code, follow this process.

## Phase 1: Discovery (DO NOT SKIP)

Before touching code, ask the user (or extract from context):

1. **What is this site for?** (business, portfolio, product, event, community, etc.)
2. **Who is the audience?** (developers, executives, consumers, creatives, etc.)
3. **What's the vibe?** Offer these as starting points:
   - Refined & luxurious (think: Stripe, Apple)
   - Bold & energetic (think: Vercel, Linear)
   - Warm & approachable (think: Mailchimp, Notion)
   - Editorial & sophisticated (think: NYT, Monocle)
   - Minimal & stark (think: Everlane, Muji)
   - Retro & characterful (think: vintage posters, vinyl sleeves)
4. **Any specific sites they admire?** Check references/examples.md for the user's saved favorites.
5. **Content scope?** How many pages/sections? What content exists already?

If the user says "just make it look great" — pick a direction that fits the context and commit fully. Indecisive design = mediocre design.

## Phase 2: Design Direction

Before coding, write a short design brief (3-5 sentences) that covers:
- The overall aesthetic and mood
- The typography strategy (display font + body font — NEVER use Inter, Arial, or system defaults)
- The color palette (3-5 colors with hex codes)
- One "signature move" — the single design detail that makes this site memorable

Share this brief with the user for a quick gut-check before proceeding.

### Typography Rules
- ALWAYS use Google Fonts or similar high-quality web fonts
- Display/heading fonts should have CHARACTER — not generic sans-serifs
- Body text must be highly readable at 16-18px base size
- Good pairings to consider (but don't repeat across projects):
  - Fraunces + Source Sans Pro
  - Playfair Display + Lato
  - Space Mono + Work Sans
  - DM Serif Display + DM Sans
  - Outfit + Crimson Text
  - Sora + Libre Baskerville
- Read references/design-principles.md for the user's aesthetic preferences

### Color Rules
- Dominant color + 1-2 accents beats 5 equal-weight colors
- Dark backgrounds with light text can feel premium
- Light backgrounds need strong contrast and intentional color pops
- NEVER default to white background + blue accents (the AI slop zone)

## Phase 3: Tech Stack

Read references/tech-stack.md for the user's preferred stack. Default choices:

- **Single page / landing page:** Single HTML file with Tailwind CDN + Google Fonts
- **Multi-page site:** Next.js 14+ with App Router
- **Interactive app:** React + Tailwind + shadcn/ui
- **Quick prototype:** Single .html or .jsx file

### Framework Notes
- For HTML files: Put everything in one file (HTML + CSS + JS)
- Use Tailwind CSS via CDN for rapid styling
- Import Google Fonts in the <head>
- Use CSS custom properties for the color palette
- External scripts from cdnjs.cloudflare.com only

## Phase 4: Build

### Structure Every Page With:
1. **A hero section that earns attention** — not a generic centered heading. Use asymmetry, overlapping elements, dramatic typography, or surprising color to make the first impression count.
2. **Purposeful sections** — every section needs a job. If it doesn't convert, inform, or build trust, cut it.
3. **Motion and delight** — CSS animations on scroll, hover states that feel alive, subtle transitions. NOT everything bouncing around.
4. **A footer that doesn't phone it in** — footers are design opportunities.

### Code Quality
- Semantic HTML (nav, main, section, article, footer)
- Mobile-first responsive design
- Smooth scroll behavior
- Proper meta tags and Open Graph tags
- Fast-loading (optimize images, minimal JS)
- Accessible (proper contrast, alt tags, keyboard nav)

## Phase 5: Review

After building, do a self-review:
- [ ] Does this look like a HUMAN designer made it? Or does it look AI-generated?
- [ ] Is the typography distinctive and well-paired?
- [ ] Are there at least 2-3 moments of visual delight (animations, hover states, layout surprises)?
- [ ] Does it work on mobile?
- [ ] Would I be proud to show this to a client?

If any answer is "no," fix it before presenting.

## What NOT To Do
- No purple gradient backgrounds (the #1 AI design cliche)
- No centered-everything layouts
- No Inter, Roboto, or Arial
- No generic hero with "Welcome to [Site Name]" and a stock photo
- No cookie-cutter card grids with uniform border-radius
- No Lorem Ipsum — use real or realistic content
