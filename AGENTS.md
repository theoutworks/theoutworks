<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Repository Guide

## Stack

- **Next.js 16** App Router, React 19, TypeScript (strict)
- **Tailwind CSS v4** — CSS-first config in `src/app/globals.css`, no `tailwind.config.*`
- **pnpm** package manager (lockfile: `pnpm-lock.yaml`)
- Deployed to **Cloudflare Workers** via `@opennextjs/cloudflare` (OpenNext)
- Secrets managed with **Infisical** (injected at dev time via `infisical run`)

## Commands

| Task          | Command                                    |
| ------------- | ------------------------------------------ |
| Dev server    | `pnpm dev` (requires Infisical CLI + auth) |
| Build         | `pnpm build`                               |
| Lint          | `pnpm lint` (eslint, zero warnings)        |
| Format check  | `pnpm format:check`                        |
| Format fix    | `pnpm format:write`                        |
| Worker build  | `pnpm worker:build`                        |
| Worker deploy | `pnpm worker:deploy`                       |

CI runs `format:check` then `lint` on every push/PR. There are **no tests**.

## Environment

Server-only env vars validated in `src/env.ts` via `@t3-oss/env-nextjs` + Zod. See `.env.example` for the full list. Build skips validation (`SKIP_ENV_VALIDATION=1`).

## Architecture

Marketing site. Single-package, not a monorepo.

- `src/app/` — App Router pages: `/`, `/about`, `/contact`, `/services/*`, `/projects/*`
- `src/components/` — shared components and homepage `sections/`
- `src/app/contact/action.ts` — server action sending email via Azure Communication Services (the only backend logic)
- Path alias: `@/*` → `./src/*`

## Style & Formatting

- **Prettier**: no semicolons, import sort order: react → next → third-party → `@/` → relative
- **ESLint 9**: flat config, extends `next/core-web-vitals` + `next/typescript`
- Remote images allowed from `unsplash.com` and `randomuser.me` (configured in `next.config.ts`)
