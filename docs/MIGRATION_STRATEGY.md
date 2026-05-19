# Migration Strategy: Transition to Cinematic BilderPortfolio

This document outlines the strategic shift from a traditional Bootstrap-based static site to a high-end, cinematic interactive portfolio using Next.js 15 and Motion.

## 1. Vision & Core Principles
The goal is to move away from "standard renovation site" tropes and toward a "Premium Architectural Atelier" feel.
- **Cinematic Depth:** Use layered backgrounds, parallax, and atmospheric lighting.
- **Micro-interactions:** Every user action (scroll, hover) should feel fluid and deliberate.
- **Typography-First:** Bold, high-contrast typography (Playfair Display) to convey authority.

## 2. Technical Stack Pivot
| Category | Old Stack (Bootstrap) | New Stack (Cinematic) |
| :--- | :--- | :--- |
| **Framework** | Static HTML / jQuery | Next.js 15 (App Router) |
| **Styling** | Bootstrap 5 / Custom CSS | Tailwind CSS + Lucide Icons |
| **Animation** | AOS (Animate on Scroll) | motion/react (Framer Motion) |
| **Deployment** | Static Hosting | Vercel / Node-compatible |

## 3. Architecture Mapping
We are decomposing the monolithic `index.html` into a modular React architecture:

- **Phase 1: Hero (Status: Complete)**
  - Replaces static header/hero.
  - Features: Parallax, atmospheric gradients, premium typography.
- **Phase 2: Services & Expertise (In Progress)**
  - Mapping Bootstrap "Services" cards to high-end grid components with hover-expansion.
- **Phase 3: Portfolio Gallery**
  - Moving from a simple grid to a horizontal-scroll or lightbox-integrated showcase.
- **Phase 4: Trust & Contact**
  - Interactive testimonials and a sleek, validated contact form.

## 4. Implementation Rules
1. **Performance:** All images must use `next/image` for optimization.
2. **Motion:** Animations should not exceed 0.6s to keep the UI snappy.
3. **Accessibility:** Maintain ARIA labels and keyboard navigation despite complex animations.
