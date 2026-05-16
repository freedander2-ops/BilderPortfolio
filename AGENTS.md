Purpose

This repository contains a portfolio website for a construction finishing specialist (renovation, interior finishing, repair services).

The project goal is:

showcase completed work;
build trust with clients;
provide easy communication channels;
support future scalability;
remain lightweight and maintainable.
Core Engineering Principles
Simplicity over unnecessary abstraction.
Fast loading is critical.
Mobile-first UI.
SEO and local discoverability matter.
Visual credibility is more important than animations.
Avoid dependency bloat.
Keep architecture understandable for solo maintenance.
Images and portfolio content are primary business assets.
Agent Rules
Frontend Agent

Responsibilities:

responsive layout;
accessibility;
image optimization;
visual consistency;
component cleanup.

Constraints:

do not introduce heavy UI frameworks without reason;
avoid unnecessary runtime JavaScript;
prioritize static rendering.
Content Agent

Responsibilities:

portfolio descriptions;
testimonials;
service explanations;
SEO metadata;
multilingual support.

Rules:

avoid fake reviews;
avoid exaggerated claims;
use concise text;
prioritize trust and clarity.
Media Agent

Responsibilities:

image compression;
thumbnail generation;
EXIF stripping;
responsive image variants.

Security Rules:

remove metadata from uploaded images;
validate file types;
avoid exposing raw original images publicly.
Deployment Agent

Responsibilities:

CI/CD;
static hosting;
cache configuration;
CDN integration;
domain configuration.

Rules:

use immutable cache headers for static assets;
enable gzip/brotli;
minimize third-party tracking.
Security Agent

Responsibilities:

dependency review;
secret scanning;
CSP headers;
form protection.

Rules:

never commit API keys;
never expose admin panels publicly;
sanitize all user inputs;
minimize analytics.
Recommended Repository Structure
/
├── public/
│   ├── images/
│   ├── thumbnails/
│   ├── icons/
│   └── seo/
│
├── src/
│   ├── components/
│   ├── sections/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   └── content/
│
├── docs/
│   ├── ARCHITECTURE.md
│   ├── ROADMAP.md
│   ├── SECURITY.md
│   └── SEO.md
│
├── scripts/
│   ├── optimize-images.js
│   └── generate-thumbnails.js
│
├── AGENTS.md
├── README.md
└── package.json
Development Standards
Naming
kebab-case for files;
PascalCase for React components;
avoid abbreviations.
Styling

Preferred:

TailwindCSS or modular SCSS;
design tokens;
centralized spacing and typography.

Avoid:

inline styles;
duplicated CSS;
random hardcoded values.
Images

Rules:

convert to WebP/AVIF;
generate responsive sizes;
lazy load all gallery images;
keep hero images compressed.
Git Workflow

Branches:

main      → production
staging   → preview/testing
feature/* → isolated work

Commits:

feat: add before/after gallery
fix: optimize mobile navbar
refactor: simplify image loader
Security Baseline
Threat Model

Primary risks:

spam form abuse;
malicious uploads;
exposed metadata;
dependency vulnerabilities;
analytics tracking leakage.
Minimum Security Controls
Content Security Policy;
rate limiting on forms;
Cloudflare or CDN firewall;
dependency audit;
metadata stripping;
HTTPS only.
OSINT Risks

Potential leaks:

home addresses in photos;
EXIF geolocation;
visible license plates;
identifiable client information.

Mitigation:

sanitize photos;
blur sensitive details;
remove GPS metadata.
