# A2Z Engineering Official Website

The official corporate web platform for **A2Z Engineering (Pvt) Ltd**, a premier engineering firm specializing in high-capacity Solar PV networks, industrial HVAC systems, and heavy-duty electrical grid integrations across Sri Lanka.

This platform is built using modern web standards to deliver a premium, high-fidelity experience optimized for corporate clients, procurement officers, and engineering consultants.

---

## Technology Stack

- **Core**: React 18 & TypeScript
- **Styling**: Tailwind CSS (v4 Theme configuration)
- **Bundler & Dev Server**: Vite
- **Icons**: Lucide React
- **Animations**: Custom Tailwind transitions, SVG network flow animations, and safe-area motion optimization.

---

## Features

- **Interactive Dynamic Solar ROI Calculator**: Real-time savings projection tool for solar grid sizing and payback analysis.
- **Interactive SVG Integration Map**: Real-time visual network mapping of solar arrays, smart grids, and HVAC integration.
- **Unified Card System**: High-contrast, interactive card wrappers with subtle hover translations and responsive padding.
- **Fully Responsive Navigation**: Standardized breakpoints with mobile-optimized dropdown navs.
- **Secure Inquiry Flow**: Fully state-controlled technical inquiry form with instant submission feedback.

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## Directory Structure

```text
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable UI components & layouts
│   │   │   ├── layout/       # Navbar, Footer
│   │   │   ├── sections/     # Hero, Testimonials, About, etc.
│   │   │   ├── shared/       # ScrollToTop, LoadingScreen, PageHeader
│   │   │   └── ui/           # Button, Card, ButtonLink
│   │   ├── pages/            # Core views (Home, Portfolio, SolarSolutions, etc.)
│   │   ├── hooks/            # Custom hooks (e.g. useReducedMotion)
│   │   ├── data/             # Site configuration & content data
│   │   ├── index.css         # Tailwind directives and CSS tokens
│   │   └── main.tsx          # Application entry point
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
└── README.md                 # Project documentation
```



