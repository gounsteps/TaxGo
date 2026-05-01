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
- **Type**: react-vite (static, no backend)
- **Description**: Multilingual homepage for Japanese pension withdrawal (탈퇴일시금) and income tax refund agency service
- **Languages**: Korean (default), Japanese, English
- **Key files**:
  - `src/lib/i18n.ts` — all translations (ko/ja/en)
  - `src/pages/home.tsx` — main one-page layout
  - `src/pages/faq.tsx` — FAQ separate page
  - `src/components/calculator.tsx` — 후생연금/국민연금 calculator
  - `src/components/layout/Navbar.tsx` — sticky nav with language switcher
  - `src/components/layout/Footer.tsx` — footer with contact info & blog links
  - `public/robots.txt`, `public/sitemap.xml` — SEO files
- **Contact**: KakaoTalk: j-tax, Email: nouzeidaikou@gmail.com, X: @nouzeidaikou
- **Blog links**: Korean → https://blog.naver.com/nouzeidaikou, Japanese/English → 준비중
- **Google Form**: Placeholder URL `https://forms.gle/PLACEHOLDER` — replace with real link

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
