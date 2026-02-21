# AGENTS.md — Houz2Home

Home renovation business website built with Next.js 15 (App Router) and React 18.
Pure JavaScript (no TypeScript). Self-hosted via PM2.

## Commands

```sh
npm run dev        # Start dev server
npm run build      # Production build
npm run start      # Serve production build
npm run lint       # ESLint (next/core-web-vitals)
npm run deploy     # Install + build + PM2 reload
ANALYZE=true npm run build   # Bundle analysis
```

**No test framework is configured.** There are no test files, no test runner,
and no test scripts.

## Tech Stack

| Layer     | Tool                                      |
| --------- | ----------------------------------------- |
| Framework | Next.js 15 App Router, React 18           |
| Language  | JavaScript (jsconfig.json, no TypeScript) |
| Styling   | Tailwind CSS 3 + Catppuccin CSS variables |
| Animation | Framer Motion 11                          |
| Icons     | @heroicons/react (outline) + react-icons  |
| Theme     | next-themes (class-based dark/light)      |
| Email     | nodemailer (Gmail SMTP, server-side only) |
| Deploy    | npm + PM2 (self-hosted)                   |

## Project Structure

```
src/
  app/                   # Next.js App Router pages + API routes
    layout.js            # Root layout (ThemeProvider, Navbar, Footer)
    page.js              # Homepage
    about/page.js        # About page
    contact/page.js      # Contact page
    projects/page.js     # Portfolio gallery
    api/contact/route.js # POST endpoint (nodemailer)
  components/
    Footer.js, Logo.js
    navbar/              # Navbar sub-components (ClientNavbar, ThemeSwitch, etc.)
    sections/            # Page sections reused across routes
  css/
    globals.css          # Tailwind imports + @apply typography
    variables.css        # Catppuccin theme CSS variables (light/dark)
  utils/
    portfolioData.js     # Generated portfolio image data
```

## Code Style

### Formatting

- **Semicolons:** Yes
- **Quotes:** Double quotes preferred (some single quotes exist — match surrounding code)
- **Indentation:** 4 spaces (some files use 2 — match the file you're editing)
- **Trailing commas:** Yes, in objects and arrays
- **JSX attribute quotes:** Double quotes
- **No Prettier or Biome configured** — match existing formatting in each file

### Path Aliases

```json
{ "@/*": ["./src/*"] }
```

- Use `@/` for cross-directory imports: `import X from "@/components/sections/X"`
- Use relative imports for siblings in the same directory: `import X from "./X"`

### Import Order

Not strictly enforced, but follow this loose convention:

```js
import dynamic from "next/dynamic";                         // 1. Next.js / framework
import { motion } from "framer-motion";                     // 2. Third-party
import { useState, useEffect } from "react";                // 3. React hooks
import HeroSection from "@/components/sections/HeroSection"; // 4. @/ alias imports
import NavLinkItem from "./NavLinkItem";                     // 5. Relative siblings
import "react-photo-album/masonry.css";                      // 6. CSS
```

### Naming Conventions

| Element            | Convention     | Example                         |
| ------------------ | -------------- | ------------------------------- |
| Component files    | PascalCase.js  | `HeroSection.js`, `ContactCTA.js` |
| Utility files      | camelCase.js   | `portfolioData.js`              |
| CSS files          | lowercase.css  | `globals.css`, `variables.css`  |
| Component names    | PascalCase     | `HeroSection`, `ClientNavbar`   |
| Variables / props  | camelCase      | `menuOpen`, `currentPath`       |
| Data arrays        | camelCase      | `testimonials`, `teamMembers`   |
| Directories        | lowercase      | `navbar/`, `sections/`, `utils/` |

### Component Patterns

Two export styles coexist — **match whichever style the file already uses:**

```js
// Style 1: Function declaration (pages, server components)
export default function HeroSection({ title, subtitle, image, alt }) { ... }

// Style 2: Arrow function + separate export (client components, sections)
const Testimonials = () => { ... };
export default Testimonials;
```

- Mark client components with `"use client"` at the top of the file
- Server components are the default — no directive needed
- Props are destructured inline with no type annotations or PropTypes
- Use `next/dynamic` for lazy-loading heavy components
- Static data (testimonials, services, etc.) is defined inline in component files

### State & Error Handling

- React `useState` only — no global state libraries
- Theme managed via `next-themes` (`useTheme` hook)
- No Context providers beyond `ThemeProvider` in root layout
- Wrap async operations in `try/catch`
- Log errors with context: `console.error("Error sending email:", error)`
- Return user-facing messages, not raw errors
- Use `finally` to reset loading state
- API routes return `new Response(JSON.stringify(...), { status })` (not NextResponse)

### Styling

- Tailwind utility classes for all styling — no CSS Modules
- Catppuccin color palette via CSS variables in `variables.css`
- Theme colors referenced as Tailwind classes: `text-text`, `bg-base`, `bg-surface0`
- Custom utility classes in `globals.css`: `page-container`, `section-container`
- Dark mode via `html.dark` class (managed by next-themes `attribute="class"`)

### Environment Variables

- Server-side only: `EMAIL_FROM`, `EMAIL_PASS`, `EMAIL_TO`
- Accessed via `process.env.VARIABLE_NAME` — no validation library
- No `.env` file committed (gitignored) — no `NEXT_PUBLIC_` variables

## Linting

ESLint with `next/core-web-vitals` preset. Single custom rule:

```json
{ "no-unused-vars": "warn" }
```

Run `npm run lint` before committing.

## Key Conventions

1. **No TypeScript** — this is a JS project; do not add `.ts`/`.tsx` files
2. **No barrel exports** — import each component by its direct file path
3. **No test files** — testing infrastructure does not exist yet
4. **Shared sections** are reused across pages (Testimonials, ContactCTA, HeroSection)
5. **Exported name should match filename** (some legacy exceptions exist: `OurServices.js` exports `ServicesGrid`)
6. **Dynamic imports** are preferred for page-level section components
