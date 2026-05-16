ARCHITECTURE.md
System Overview

BilderPortfolio is a lightweight portfolio platform optimized for:

local business presentation;
mobile browsing;
image-heavy content;
low maintenance overhead.

Architecture priority:

Performance > Simplicity > Scalability > Complexity
High-Level Architecture
User Browser
      │
      ▼
CDN / Static Hosting
      │
      ▼
Frontend Application
      │
      ├── Portfolio Gallery
      ├── Services Section
      ├── Contact Section
      ├── Testimonials
      └── SEO Metadata
Recommended Stack
Preferred Modern Stack
Layer	Recommendation
Frontend	Next.js
Styling	TailwindCSS
Hosting	Vercel / Cloudflare Pages
Forms	Resend / Formspree
Images	next/image + CDN
Analytics	Plausible
SEO	Static metadata
Rendering Strategy

Use:

static generation;
edge CDN caching;
minimal hydration.

Avoid:

unnecessary client-side rendering;
large SPA architecture;
heavy animation libraries.
Component Architecture
App
├── Layout
│   ├── Header
│   ├── Navigation
│   └── Footer
│
├── HomePage
│   ├── HeroSection
│   ├── ServicesSection
│   ├── PortfolioSection
│   ├── TestimonialSection
│   └── ContactSection
│
└── Shared
    ├── Button
    ├── Card
    ├── Modal
    └── Gallery
Gallery System

Portfolio gallery is the business core.

Requirements:

optimized thumbnails;
fullscreen modal;
category filters;
lazy loading;
mobile swiping;
before/after comparison support.

Future extension:

CMS-backed gallery;
cloud storage sync;
admin upload panel.
SEO Architecture

Critical SEO areas:

local search indexing;
structured data;
image SEO;
mobile performance.

Required:

- sitemap.xml
- robots.txt
- OpenGraph tags
- JSON-LD LocalBusiness schema
Performance Targets
Metric	Target
Lighthouse Performance	90+
First Contentful Paint	<1.5s
Largest Contentful Paint	<2.5s
CLS	<0.1
Security Architecture
Main Risks
Risk	Impact
Spam forms	Medium
Metadata leaks	High
Dependency compromise	Medium
Third-party scripts	High
Defensive Measures
CSP headers;
dependency pinning;
image sanitization;
Cloudflare protection;
minimal third-party JS.
Deployment Architecture
GitHub
   │
   ▼
CI/CD Pipeline
   │
   ▼
Vercel / Cloudflare Pages
   │
   ▼
CDN Edge Cache
   │
   ▼
User
Observability

Track:

performance;
SEO rankings;
image sizes;
failed form submissions;
uptime.

Recommended:

UptimeRobot;
Plausible;
Vercel Analytics.
