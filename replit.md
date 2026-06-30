# EarnStack Website

An AI creator monetization platform website built with React + Vite + Tailwind CSS + Framer Motion. Dark theme, green accent, includes Landing, Features, AI Tools, Pricing, Blog, and more pages.

## ⚠️ IMPORTANT — Always Run This

**When asked to "run the website", always run the EarnStack Website (`@workspace/postiz-clone`), NOT the "Start application" workflow or any other service.**

The one and only website to run:
```bash
PORT=5000 BASE_PATH=/ pnpm --filter @workspace/postiz-clone run dev
```

This is configured as the **"Start application"** workflow in Replit and serves on port 5000.

## Run & Operate

- `PORT=5000 BASE_PATH=/ pnpm --filter @workspace/postiz-clone run dev` — **run the EarnStack website** (port 5000) ← the main command
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 19, Vite, Tailwind CSS v4, Framer Motion, Wouter (routing)
- DB: PostgreSQL + Drizzle ORM

## Where things live

- `artifacts/postiz-clone/` — the EarnStack website (the only site to run)
  - `src/pages/` — all pages: Landing, Features, Pricing, Blog, AITools, About, Careers, Privacy, Terms, HelpCenter
  - `src/components/` — reusable UI components (Navbar, Footer, etc.)
  - `vite.config.ts` — Vite configuration (port 5000, host 0.0.0.0)
- `lib/db/` — PostgreSQL + Drizzle schema
- `artifacts/api-server/` — Express API server (not needed to run the website)

## Architecture decisions

- Single-page React app using Wouter for client-side routing.
- Tailwind CSS v4 with green (#22c55e) accent on dark (#0e0e0e) background.
- All pages are lazy-loaded for fast initial load.
- Vite dev server runs on port 5000 with `host: "0.0.0.0"` and `allowedHosts: true` for Replit proxy compatibility.

## Product

EarnStack is a creator monetization platform landing site. Pages: Home, Features, AI Tools, Pricing, Blog, About, Careers, Privacy, Terms, Help Center.

## User preferences

- **"Run the website" always means running the EarnStack Website (`@workspace/postiz-clone`) on port 5000.**
- **Never run "Start application" as a separate entity — it IS the EarnStack website.**
- The canvas should show only the EarnStack Website frame, not multiple duplicate frames.
- Do not run the API server unless explicitly asked.

## Gotchas

- The project is a pnpm monorepo. Always use `pnpm --filter @workspace/postiz-clone` to target the website.
- Port 5000 is required for the Replit webview proxy (maps to external port 80).
- `strictPort: true` is set in vite.config.ts — Vite will error if port 5000 is taken.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
