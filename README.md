# Upright Investor Services LLP

Modern landing site for Upright Investor Services LLP, built with React, Vite, and Tailwind CSS. The experience highlights key offerings, leadership, publications, and a contact CTA with polished motion effects and accessibility-minded zoom behaviours.

## ✨ Highlights
- Responsive hero, services, publications, and contact sections with Framer Motion animations.
- Shadcn/ui component system with Radix primitives for consistent styling and a11y.
- High-zoom handling that automatically collapses navigation and adjusts typography for improved readability at ≥125 % and ≥150 % zoom (Safari, Chrome, Edge tested).
- Smooth in-page navigation with scroll snapping and section highlighting.

## 🛠️ Tech Stack
- **Framework**: React 18 + Vite 5
- **Language**: TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Animation**: Framer Motion
- **Data/Forms**: React Hook Form, Zod, @tanstack/react-query (ready for API integration)

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm (bundled with Node). Bun is optional; npm is assumed in the commands below.

### Installation
```bash
git clone https://github.com/suraj027/upright-growth-guide.git
cd upright-growth-guide
npm install
```

### Local Development
```bash
npm run dev
```
The Vite dev server prints a local URL (default `http://localhost:5173`).

### Production Build
```bash
npm run build
```
Outputs static assets in `dist/`. Use `npm run preview` for a local production preview.

### Additional Scripts
- `npm run build:dev` – Development-mode build used for quick validation.
- `npm run lint` – Run ESLint across the project.

## ♿ Zoom & Accessibility Notes
- **Navigation**: Collapses to a hamburger menu when desktop zoom reaches ~125 % (with Safari-specific baselines) to keep the logo and tabs uncluttered.
- **Typography & Layout**: Key sections (Hero, About, Services) respond to the `zoom-high` class (≥150 %) to reduce overlap and tighten spacing.
- **No Favicon**: The site intentionally omits a favicon so browsers display a neutral tab icon.

## 📁 Key Project Structure
```
src/
	components/        # Section components and shadcn/ui wrappers
	hooks/             # Custom hooks (e.g., high zoom detection, mobile detection)
	pages/             # Route-level React components
	assets/            # Images used across sections
```

## 🌐 Deployment
Any static hosting solution works. For Vercel/Netlify:
1. Set build command to `npm run build`.
2. Set output directory to `dist`.
3. Ensure environment uses Node 18+.

## 🤝 Contributing
Issues and PRs are welcome. Please run `npm run lint` and `npm run build` before submitting changes to keep the CI pipeline healthy.

---

Maintained with care for Upright Investor Services LLP. Adjust styles and content in `src/components/*` to match future branding or offerings.
