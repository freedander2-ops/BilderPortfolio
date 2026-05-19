# BilderPortfolio

Cinematic premium interactive portfolio experience.

## Overview
This project is a high-end, immersive portfolio for professional masters. It utilizes modern web technologies to create a cinematic user experience with visual depth, smooth transitions, and premium typography.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** motion/react
- **Foundation:** shadcn/ui
- **Type Safety:** TypeScript

## Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build
```bash
npm run build
```

## Architecture
The project follows the "Engineering Mode" principles with a clear separation of concerns:
- `src/app`: Page routes and layouts.
- `src/components`: Reusable UI elements and large sections.
- `src/lib`: Core logic, utilities, and motion presets.
- `src/styles`: Global CSS and design system definitions.

For a deeper dive into the architectural decisions, see [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md).

## Migration
The project is currently transitioning from a legacy Bootstrap architecture. See the [Migration Strategy](./docs/MIGRATION_STRATEGY.md) for details.
