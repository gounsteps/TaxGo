# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

## Artifacts

### nenkin-refund (TaxGo)
- **Path**: `artifacts/nenkin-refund/`
- **Preview path**: `/`
- **Type**: react-vite (static SPA + SSR prerender, no backend)
- **Description**: Multilingual homepage for Japanese pension withdrawal (탈퇴일시금) and income tax refund agency service
- **Languages**: Korean (default), Japanese, English
- **GitHub Pages**: main branch `/docs` folder, custom domain taxgo.jp, Enforce HTTPS
- **Key files**:
  - `src/lib/i18n.ts` — all translations (ko/ja/en)
  - `src/pages/home.tsx` — main one-page layout
  - `src/pages/faq.tsx` — FAQ separate page
  - `src/entry-server.tsx` — SSR entry point for prerendering (React + wouter)
  - `scripts/prerender.mjs` — prerender script (generates docs/index.html, docs/faq/index.html)
  - `vite.config.ts` — client build with manualChunks splitting
  - `vite.ssr.config.ts` — SSR build config (outputs to dist/server/)
  - `src/components/calculator.tsx` — 후생연금/국민연금 calculator
  - `src/components/layout/Navbar.tsx` — sticky nav with language switcher
  - `src/components/layout/Footer.tsx` — footer with contact info & blog links
  - `public/robots.txt`, `public/sitemap.xml` — SEO files
- **Build commands**:
  - Standard dev build: `BASE_PATH=/ pnpm --filter @workspace/nenkin-refund run build`
  - Full prerender build: `BASE_PATH=/ pnpm --filter @workspace/nenkin-refund run build:all`
  - Then copy to docs: `rm -rf docs && mkdir -p docs && cp -r artifacts/nenkin-refund/dist/public/. docs/`
- **Bundle**: Split chunks — react-core (182KB), index (120KB), motion (117KB), radix-ui (103KB), faq (4KB, lazy)
- **Patches**: `patches/wouter@3.9.0.patch` — adds getServerSnapshot to memory-location.js for SSR
- **Contact**: KakaoTalk: j-tax, Email: nouzeidaikou@gmail.com, X: @nouzeidaikou
- **Blog links**: Korean → https://blog.naver.com/nouzeidaikou, Japanese/English → https://note.com/texgo

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
