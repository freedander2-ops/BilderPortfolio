AGENTS.md
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
