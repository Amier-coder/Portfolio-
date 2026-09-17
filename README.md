# Ameer Hamza — Portfolio

A premium, animated personal portfolio built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion**.

## ✨ Features

- Animated hero with typewriter roles, floating cards and a live code panel
- Scroll progress bar, cursor glow and animated gradient background
- About, Services, Skills (animated progress), filterable Projects, Timeline, Contact & Footer
- Scroll-spy navbar with animated active pill and mobile menu
- Intro preloader, floating WhatsApp + back-to-top buttons
- All icons via `react-icons` (no image dependencies)
- Fully responsive, accessible and respects `prefers-reduced-motion`

## 🚀 Getting started

> Node.js is **not installed** on this machine yet. Install Node.js LTS from https://nodejs.org (or `winget install OpenJS.NodeJS.LTS`), then:

```bash
npm install
npm run dev
```

Then open http://localhost:5173

Other scripts:

```bash
npm run build      # type-check + production build to /dist
npm run preview    # preview the production build
npm run typecheck  # TypeScript check only
npm run lint       # ESLint
```

## ✏️ Customizing content

**Everything lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).**

Update the following:

1. `profile` — name, role, email, phone, WhatsApp, location, social links, bio.
   > The email is a placeholder — replace it with your real address.
   > Phone/WhatsApp is already set to **+92 313 6426280** (`https://wa.me/923136426280`).
2. `stats`, `services`, `skills`, `projects`, `experience` — edit freely.
3. `experience` currently contains **placeholder entries** (your LinkedIn and CV
   couldn't be read automatically). Replace them with your real work history.

### Adding your photo

1. Put `profile.jpg` inside the `public/` folder.
2. In `src/data/portfolio.ts`, set `profile.photo = "/profile.jpg"`.

### Adding your CV

Drop `resume.pdf` into the `public/` folder. The "Download CV" button already
links to `/resume.pdf`.

## 🎨 Theme

Colors, fonts, shadows and animations are defined in
[`tailwind.config.js`](tailwind.config.js) under `theme.extend`. Change the
`primary` / `accent` palettes there to re-skin the whole site.

## 🚢 Deployment

Config files are already included:

- **Vercel** — import the repo, it auto-detects Vite (`vercel.json`).
- **Netlify** — connect the repo (`netlify.toml` + `public/_redirects`).
- **GitHub Pages** — push to `master`/`main`; the workflow at
  `.github/workflows/deploy.yml` builds and deploys automatically
  (enable **Settings → Pages → Source: GitHub Actions** once).

Before deploying, update the URL in `public/robots.txt` and
`public/sitemap.xml` to your real domain.

## 📁 Structure

```
src/
├── App.tsx
├── main.tsx
├── index.css
├── data/portfolio.ts        # ← all content
├── lib/motion.ts
├── hooks/useActiveSection.ts
└── components/
    ├── Navbar.tsx  Hero.tsx  Marquee.tsx  About.tsx
    ├── Skills.tsx  Projects.tsx  Experience.tsx  Contact.tsx  Footer.tsx
    └── ui/  (Reveal, SectionHeading, ScrollProgress, CursorGlow,
              Background, Preloader, FloatingActions)
```
