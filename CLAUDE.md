# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The main objective is to refactor the original site which is cgonline.biz

CG Online Academy — a modern React landing page for an online 3D character modeling academy. This is a redesign of a legacy Jimdo-based site, rebuilt as a client-side SPA with no backend. The site is Japanese-language focused, targeting students learning CG from a professional instructor with Hollywood experience.

## Commands

```bash
npm run dev          # Start dev server (port 8080, host ::)
npm run build        # Production build → dist/
npm run build:dev    # Dev build with source maps
npm run lint         # ESLint on .ts/.tsx files
npm run test         # Vitest (single run)
npm run test:watch   # Vitest in watch mode
npm run preview      # Preview production build
```

## Architecture

**Stack:** React 18 + TypeScript + Vite + Tailwind CSS 3 + shadcn/ui (Radix primitives)

**Entry flow:** `main.tsx` → `App.tsx` (providers: QueryClient, Tooltip, BrowserRouter, Toaster) → Routes (`/` → Index, `*` → NotFound)

**Index page** is composed of section components rendered in order:
Navigation → HeroSection (with 3D scene) → AboutSection → InstructorSection → StudentWorksSection → CTASection → Footer

**3D rendering:** Three.js via React Three Fiber + Drei. `Scene3D.tsx` contains FloatingParticles and SolidHead sub-components, lazy-loaded with Suspense.

**Key directories:**

- `src/components/ui/` — 50+ shadcn/ui primitive components (do not manually edit these)
- `src/components/` — page section components (HeroSection, Navigation, etc.)
- `src/hooks/` — custom hooks (use-mobile, use-toast)
- `src/lib/utils.ts` — utility functions (cn() for className merging)
- `src/assets/` — static images
- `.claude/CONTENTS.md` — audit of the original Jimdo site content
- `.claude/STYLING.md` — design principles and anti-patterns to avoid

## Design System

**Theme:** Dark cinematic theme with gold accents. CSS variables defined in `src/index.css`, extended in `tailwind.config.ts`.

**Key colors:** Dark blue-gray background (#1a2332), warm cream foreground, rich crimson primary (#8b2030), gold accent gradients.

**Font:** Noto Sans JP (Japanese-optimized).

**Custom Tailwind utilities:** `text-gradient-gold`, `glow-gold`, `glow-gold-text`, `cinematic-section`, `bg-cinema-gradient` — defined in `src/index.css`.

**Custom animations in tailwind.config.ts:** fade-in, fade-in-slow, slide-up, float, shimmer.

**Animations:** Framer Motion with staggered variants and `whileInView` scroll triggers. Animations must be subtle and purposeful — no decorative motion.

## Conventions

- Path alias: `@/*` maps to `src/*`
- Components use PascalCase filenames
- Styling is utility-first Tailwind; custom classes only for reusable design tokens
- TypeScript is configured with loose strictness (no `noImplicitAny`, no `strictNullChecks`)
- `@typescript-eslint/no-unused-vars` is disabled in ESLint config

## Design Principles (from .claude/STYLING.md)

- Strict 4pt/8pt spacing rhythm — no random spacing values
- Consistent border radius (define 2-3 max, don't mix)
- Small disciplined color palette — no neon effects or novelty colors
- Subtle hover states (2-4px lift max)
- Every animation must serve a purpose
- Copy must be specific and grounded — no generic hero lines or filler phrases
- Remove anything that signals "vibe-coded" design: sparkles, random emojis, inconsistent spacing, mismatched radiuses, broken responsiveness
