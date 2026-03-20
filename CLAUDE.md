# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev              # Local dev server
npm run build            # Production build
npm run start            # Start production server
npm run lint             # ESLint
npm run storybook        # Storybook dev on port 6006
npm run build-storybook  # Storybook production build
```

Testing uses Vitest with Storybook integration and Playwright browser provider.

## Architecture

**ClassroomAI** is a Next.js 16 marketing/landing site for an educational AI platform, using React 19 and TypeScript.

- **App Router**: Pages in `app/` — home (`/`), `/demos`, `/pricing`, `/courses`, `/contact`
- **Components**: `components/` — client-side interactive components using `"use client"` directive
- **Styling**: Tailwind CSS 4 via `@tailwindcss/postcss`; theme colors defined as CSS variables in `app/globals.css`
- **Animations**: Framer Motion throughout (scroll-triggered, modals, navigation hide-on-scroll)
- **Path alias**: `@/*` maps to project root
- **Output mode**: `standalone` in next.config.ts (for Docker/Azure deployment)

## Key Patterns

- Heavy components (AnimatedDiv, Howitworks) use `next/dynamic` for code splitting
- JSON-LD structured data and OpenGraph meta in `app/layout.tsx`; sitemap in `app/sitemap.ts`
- No global state management — local React hooks only
- Design uses a bioluminescent/deep-tech aesthetic with emerald green accent palette
- Fonts: Poppins (headers), Rubik (body), Geist/Geist Mono (fallback/code)

## Deployment

- **Primary**: Azure Web Apps via GitHub Actions (`.github/workflows/main_classroom-ai.yml`)
- **Docker**: Multi-stage Dockerfile with Node 24-alpine
- See `DEPLOYMENT.md` for platform-specific instructions
