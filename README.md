# EarnStack — AI Creator Monetization Platform

A full creator platform website built with **React + Vite + Tailwind CSS + Framer Motion**.  
Dark theme, green accent, includes Landing, Features, AI Tools, Pricing, and Blog pages.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Dev server & bundler |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| Wouter | Client-side routing |
| TypeScript | Type safety |
| pnpm | Package manager |

---

## Prerequisites

Before you start, install these on your computer:

### 1. Node.js (version 18 or higher)
Download from [https://nodejs.org](https://nodejs.org) → choose the **LTS** version.  
After installing, confirm it works:
```bash
node --version
# should print v18.x.x or higher
```

### 2. pnpm (package manager)
Open your terminal and run:
```bash
npm install -g pnpm
```
Confirm it works:
```bash
pnpm --version
# should print 8.x.x or higher
```

---

## Running in VS Code — Step by Step

### Step 1 — Download the project

**Option A: Clone with Git**
```bash
git clone <your-repo-url>
cd <project-folder>
```

**Option B: Download ZIP**  
Click the green **Code** button on GitHub → **Download ZIP** → extract the folder → open that folder in VS Code.

---

### Step 2 — Open in VS Code

Open VS Code, then go to **File → Open Folder** and select the project folder.

---

### Step 3 — Open the terminal

In VS Code, press `` Ctrl+` `` (backtick) to open the integrated terminal.

---

### Step 4 — Install dependencies

In the terminal, run this from the **root of the project** (not inside any subfolder):
```bash
pnpm install
```
This downloads all packages. It may take 1–2 minutes the first time.

---

### Step 5 — Start the development server

```bash
pnpm --filter @workspace/postiz-clone run dev
```

You should see output like:
```
  VITE v5.x.x  ready in 300ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

---

### Step 6 — Open in browser

Open your browser and go to:
```
http://localhost:5173
```

The site will hot-reload automatically whenever you save a file.

---

## Build for Production

To create an optimised production build:
```bash
pnpm --filter @workspace/postiz-clone run build
```

Output files will be in `artifacts/postiz-clone/dist/`.

To preview the production build locally:
```bash
pnpm --filter @workspace/postiz-clone run serve
```
Then open `http://localhost:5173`.

---

## Project Structure

```
artifacts/postiz-clone/
├── public/               # Static assets (logo, images)
├── src/
│   ├── components/       # Reusable UI components (Navbar, Footer, etc.)
│   ├── pages/            # Page components (Landing, Features, Blog, etc.)
│   ├── App.tsx           # Routes
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles & Tailwind imports
├── index.html            # HTML shell
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript config
└── package.json          # Dependencies & scripts
```

---

## Pages

| Route | Page |
|-------|------|
| `/` | Landing (home) |
| `/features` | Features |
| `/ai-tools` | AI Tools |
| `/pricing` | Pricing |
| `/blog` | Blog listing |
| `/blog/:id` | Individual blog post |

---

## Customisation Tips

- **Colors** — Edit the accent color `#22c55e` (green) in the component files or in `src/index.css`.
- **Logo** — Replace `public/earnstack-logo.png` with your own logo.
- **Content** — Edit text directly in `src/pages/Landing.tsx`, `src/pages/Blog.tsx`, etc.
- **Fonts** — Google Fonts are loaded in `index.html`. Swap the font links there and update the `font-display` class references in components.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `pnpm: command not found` | Run `npm install -g pnpm` first |
| `Error: Cannot find module` | Run `pnpm install` again from the project root |
| Port 5173 already in use | Kill the other process or set `PORT=3000 pnpm --filter @workspace/postiz-clone run dev` |
| Page shows blank / white | Open browser DevTools (F12) → Console tab and look for red errors |
| Changes not showing | Save the file (Ctrl+S) — Vite hot-reloads automatically |
