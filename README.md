# Ameer Hamza — Web Developer Portfolio

A professional, high-performance personal portfolio built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion**.

## ✨ Highlights

- **Enterprise Systems & Projects**: Features production ERP, Point of Sale (POS), and The PARA platforms built with React, Redux, Laravel, MySQL, and REST APIs.
- **Synchronized with CV**: Accurately reflects real-world experience at Adroit light Solutions, academic background at Virtual University (BBIT) and Punjab College Gujranwala, and language proficiencies.
- **Downloadable CV**: In-built generator (`generate-resume.mjs`) that produces a verified, professional `public/resume.pdf`.
- **Interactive UI**: Animated hero with dynamic typewriter, category-filtered projects & skills, career timeline, education & credentials showcase, cursor glow, and preloader.
- **Direct Contact & WhatsApp**: 1-click WhatsApp messaging and pre-filled email contact form.
- **Responsive**: Fully responsive and optimized for mobile, tablet, and desktop viewports.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

### Other Commands

```bash
npm run build      # TypeScript check + production Vite build to /dist
npm run preview    # Preview production build locally
npm run typecheck  # TypeScript check only
node generate-resume.mjs # Regenerate public/resume.pdf from CV data
```

## 📁 Project Structure

```
src/
├── App.tsx
├── main.tsx
├── index.css
├── data/
│   └── portfolio.ts         # Profile, skills, projects, experience & education data
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Marquee.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx       # Enterprise ERP, POS & Career Timeline
│   ├── Education.tsx        # Academic credentials & Languages
│   ├── Contact.tsx          # Email form & contact details
│   ├── Footer.tsx
│   └── ui/                  # Reusable UI components & animations
```
