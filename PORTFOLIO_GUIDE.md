# Harsh Kumar Singh — Engineering Portfolio Reference & Maintenance Guide

This document tracks all implemented features, architectural decisions, design tokens, and step-by-step instructions for updating portfolio content.

---

## 1. Implemented Features & Milestone Tracker (100% COMPLETE)

### Milestone 1: Foundation, Design Tokens & Typed Data Layer (COMPLETED)
- [x] **Design System (`src/app/globals.css`)**: Concept A+ (Architectural Precision) dark-mode tokens (`#090A0F` obsidian canvas, `#12151F` card surface, `#3B82F6` cobalt accent, `#10B981` telemetry emerald, `#1E2330` 1px exposed structural borders) using Tailwind CSS v4 `@import "tailwindcss";`.
- [x] **Accessibility & Reduced Motion**: Automatic `@media (prefers-reduced-motion: reduce)` safeguards and `.tabular-nums` alignment for engineering metrics.
- [x] **Strict TypeScript Interfaces (`src/types/portfolio.ts`)**: End-to-end type definitions for social profiles, contextualized impact workloads, experience roles, system architecture nodes, and skills taxonomy.
- [x] **Single Source of Truth Content Layer (`src/data/portfolio-data.ts`)**:
  - Verified profile details & contact privacy (email exposed; phone number kept strictly inside the PDF resume).
  - Verified Social & CP URLs (GitHub, LinkedIn, LeetCode, Codeforces, CodeChef).
  - 3 strictly scoped PayPal Impact Workloads (MSR Query Optimization, TRR Spark/Scala Migration, BigQuery On-Demand Batching POC).
  - Unified PayPal Career Progression (Software Engineer + Software Engineering Intern).
  - EduGenius Featured Product data with live Vercel URL (`https://edu-genius-rouge.vercel.app/`) and GitHub repository (`https://github.com/Harshs0891/EduGenius`).
  - 6-category Technical Skills Matrix with production cross-referencing (`usedIn`).
  - Algorithmic Pedigree (1200+ problems), National Honors (Flipkart Grid 5.0 Finalist, Amazon ML Summer School 2024), and IIIT Lucknow Education (8.87 CGPA).
- [x] **Interactive System Architecture Component (`src/components/ui/EduGeniusArchitectureFlow.tsx`)**: 3-tier interactive flow schematic (`Presentation Layer` -> `AI Orchestration Layer` -> `Persistence & PDF Export Layer`).

### Milestone 2: Global Chrome, Sticky Navigation & Hero Section (COMPLETED)
- [x] **Reusable UI Primitives**:
  - `src/components/ui/SectionHeader.tsx`: Standardized Swiss architectural section index (`01 // TAG`), title, and subtitle header.
  - `src/components/ui/CopyEmailButton.tsx`: One-click clipboard copy utility for `harshs0891@gmail.com` with `aria-live="polite"` status feedback and `mailto:` fallback.
- [x] **Sticky Architectural Navbar (`src/components/layout/Navbar.tsx`)**: Glassmorphic header with monogram badge (`HKS`), `IntersectionObserver` active-section scroll-spy, direct PDF resume link, and responsive mobile navigation drawer.
- [x] **Hero Section (`src/components/sections/HeroSection.tsx`)**: Asymmetric 12-column hero featuring PayPal SWE & IIIT Lucknow positioning, primary/secondary CTAs, verified social profile links, and the interactive `production_telemetry.spec` right-hand card.

### Milestone 3: Engineering Impact Ledger & About Section (COMPLETED)
- [x] **Engineering Impact Ledger (`src/components/sections/ImpactLedgerSection.tsx`)**: 3-column bento grid displaying PayPal production metrics in strict workload isolation (`99.88%` bytes saved, `28–30M` transactions migrated, `~35%` slot reduction), complete with animated **Before vs. After** telemetry comparison bars and deep-links (`#contrib-*`) to the Experience timeline.
- [x] **About Section (`src/components/sections/AboutSection.tsx`)**: 4-column Engineer Specification metadata table paired with an 8-column professional narrative and 3 core engineering pillar cards.

### Milestone 4: PayPal Experience Progression Timeline (COMPLETED)
- [x] **Experience Timeline (`src/components/sections/ExperienceSection.tsx`)**: Unified PayPal organization banner, connected vertical timeline (`Software Engineering Intern` -> `Software Engineer`), structured `01 Problem Context -> 02 Engineering Action -> 03 Verified Outcome` sub-cards, expandable `Inspect Technical Implementation Notes` accordions, and role-scoped tech stack pills.

### Milestone 5: EduGenius Showcase & Case Study Route (COMPLETED)
- [x] **Featured Project Showcase (`src/components/sections/FeaturedProjectSection.tsx`)**: Split-pane product spotlight for `EduGenius` with problem/solution breakdown, subsystem cards, verified tech stack, interactive 3-tier architecture schematic, and an extensible slot for upcoming builds.
- [x] **Dedicated Case Study Route (`src/app/work/[slug]/page.tsx`)**: Static-generated (`generateStaticParams`) deep-dive architectural case study route (`/work/edugenius`).

### Milestone 6: Skills Matrix, Algorithmic Pedigree & Contact (COMPLETED)
- [x] **Skills Matrix (`src/components/sections/SkillsMatrixSection.tsx`)**: 6-domain engineering taxonomy where every skill pill is cross-referenced with its production or project usage context (`usedIn`).
- [x] **Algorithmic Pedigree & Education (`src/components/sections/PedigreeSection.tsx`)**: Asymmetric bento showcasing `1200+` solved CP problems (LeetCode, Codeforces, CodeChef), national distinctions (Flipkart Grid 5.0 Finalist, Amazon ML Summer School 2024), and IIIT Lucknow B.Tech CS & Business (`8.87 CGPA`).
- [x] **Contact & Minimalist Footer (`src/components/sections/ContactSection.tsx`, `src/components/layout/Footer.tsx`)**: Direct clipboard email outreach, downloadable PDF resume CTA, verified social directory, and jump-to-top footer.

### Milestones 7 & 8: Responsive Polish, Accessibility & SEO Schema (COMPLETED)
- [x] **Root Layout & Fonts (`src/app/layout.tsx`)**: `Geist` Sans and `Geist_Mono` variables bound to root `<html>` with dark-mode defaults and SEO metadata.
- [x] **JSON-LD Structured Data (`src/app/page.tsx`)**: Schema.org `Person` structured data embedded for search engine indexing alongside keyboard skip-link navigation.

---

## 2. Complete Directory Structure

```text
harsh-portfolio/
├── PORTFOLIO_GUIDE.md                             # Living documentation & update playbook
├── README.md                                      # Public GitHub repository overview
├── public/
│   └── resume/
│       └── Harsh_Kumar_Singh_Resume.pdf           # Static downloadable resume PDF
├── src/
│   ├── app/
│   │   ├── globals.css                            # Tailwind v4 import, tokens & grid utilities
│   │   ├── layout.tsx                             # Geist fonts, SEO metadata & root shell
│   │   ├── page.tsx                               # Complete single-page portfolio + JSON-LD schema
│   │   └── work/
│   │       └── [slug]/
│   │           └── page.tsx                       # Dedicated technical case study route (/work/edugenius)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx                         # Sticky header, scroll-spy & mobile drawer
│   │   │   └── Footer.tsx                         # Minimalist colophon & back-to-top link
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx                    # Hero typography, CTAs & telemetry snapshot
│   │   │   ├── ImpactLedgerSection.tsx            # 3-workload metrics grid with Before/After bars
│   │   │   ├── AboutSection.tsx                   # Engineer spec table, narrative & 3 pillars
│   │   │   ├── ExperienceSection.tsx              # Unified PayPal timeline & expandable tech notes
│   │   │   ├── FeaturedProjectSection.tsx         # EduGenius spotlight & architecture flow
│   │   │   ├── SkillsMatrixSection.tsx            # 6-category skills matrix with usage context
│   │   │   ├── PedigreeSection.tsx                # 1200+ CP problems, honors & IIIT Lucknow bento
│   │   │   └── ContactSection.tsx                 # Direct email copy, PDF CTA & profile directory
│   │   └── ui/
│   │       ├── CopyEmailButton.tsx                # Clipboard email copy button with toast state
│   │       ├── EduGeniusArchitectureFlow.tsx      # Interactive 3-tier system schematic for EduGenius
│   │       └── SectionHeader.tsx                  # Standardized indexed section heading
│   ├── data/
│   │   └── portfolio-data.ts                      # SINGLE SOURCE OF TRUTH for all text, metrics & links
│   └── types/
│       └── portfolio.ts                           # Strict TypeScript contracts
```

---

## 3. How to Update Content in the Future (Cookbook)

All portfolio content lives inside **`src/data/portfolio-data.ts`**. You never need to edit JSX/Tailwind layout files just to add a new project, metric, or role bullet.

### A. How to Add a New Project (Automatically Generates Its `/work/[slug]` Page!)
1. Open `src/data/portfolio-data.ts`.
2. Locate the `FEATURED_PROJECTS` array and append a new `FeaturedProject` object.
3. Because `src/app/work/[slug]/page.tsx` uses `generateStaticParams()`, adding a project with `slug: "my-new-system"` automatically builds `/work/my-new-system` too.

### B. How to Add a New PayPal Engineering Achievement
1. Open `src/data/portfolio-data.ts`.
2. Locate `EXPERIENCE_ROLES` -> `"paypal-swe-2026"` -> `contributions` array and append a new `ExperienceContribution` item.
3. *(Optional)* Add a corresponding card to `IMPACT_WORKLOADS` with `experienceAnchorId` set to your new contribution's `id`.

### C. How to Add a New Skill
1. Open `src/data/portfolio-data.ts` -> `SKILL_CATEGORIES`.
2. Append `{ name: "Your Skill", usedIn: ["Context 1", "Context 2"] }` to the relevant domain category.

### D. How to Replace Your Resume PDF
1. Overwrite `public/resume/Harsh_Kumar_Singh_Resume.pdf` with your new PDF using the exact same filename.
2. Commit and push to `main`.