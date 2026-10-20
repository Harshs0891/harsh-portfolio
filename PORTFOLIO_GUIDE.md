# Harsh Kumar Singh — Engineering Portfolio Reference & Maintenance Guide

This document tracks all implemented features, architectural decisions, design tokens, and step-by-step instructions for updating portfolio content.

---

## 1. Implemented Features & Milestone Tracker

### Milestone 1: Foundation, Design Tokens & Typed Data Layer (COMPLETED)
- [x] **Design System (`src/app/globals.css`)**: Concept A+ (Architectural Precision) dark-mode tokens (`#090A0F` obsidian canvas, `#12151F` card surface, `#3B82F6` cobalt accent, `#10B981` telemetry emerald, `#1E2330` 1px exposed structural borders).
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
- [x] **Hero Section (`src/components/sections/HeroSection.tsx`)**: Asymmetric 12-column hero featuring PayPal SWE & IIIT Lucknow positioning, primary/secondary CTAs, verified social profile links, and the interactive `production_telemetry.spec` right-hand card with anchor links to each workload.

### Milestone 3: Engineering Impact Ledger & About Section (COMPLETED)
- [x] **Engineering Impact Ledger (`src/components/sections/ImpactLedgerSection.tsx`)**: 3-column bento grid displaying PayPal production metrics in strict workload isolation (`99.88%` bytes saved, `28–30M` transactions migrated, `~35%` slot reduction), complete with animated **Before vs. After** telemetry comparison bars and deep-links (`#contrib-*`) to the Experience timeline.
- [x] **About Section (`src/components/sections/AboutSection.tsx`)**: 4-column Engineer Specification metadata table paired with an 8-column professional narrative and 3 core engineering pillar cards.

### Milestone 4: PayPal Experience Progression Timeline (COMPLETED)
- [x] **Experience Timeline (`src/components/sections/ExperienceSection.tsx`)**: Unified PayPal organization banner, connected vertical timeline (`Software Engineering Intern` -> `Software Engineer`), structured `01 Problem Context -> 02 Engineering Action -> 03 Verified Outcome` sub-cards, expandable `Inspect Technical Implementation Notes` accordions, and role-scoped tech stack pills.
- [x] **Root Page Assembly (`src/app/page.tsx`)**: Integrated keyboard-accessible `"Skip to Main Content"` link, `Navbar`, `HeroSection`, `ImpactLedgerSection`, `AboutSection`, and `ExperienceSection`.

### Upcoming Milestones
- [ ] **Milestone 5**: EduGenius Showcase & Case Study Route (`FeaturedProjectSection.tsx`, `app/work/[slug]/page.tsx`)
- [ ] **Milestone 6**: Skills Matrix, Algorithmic Pedigree & Contact (`SkillsMatrixSection.tsx`, `PedigreeSection.tsx`, `ContactSection.tsx`, `Footer.tsx`)
- [ ] **Milestone 7**: Responsive Refinement & Motion Polish
- [ ] **Milestone 8**: SEO Metadata, JSON-LD Schema & Vercel Production Deployment

---

## 2. Directory Structure Overview

```text
harsh-portfolio/
├── PORTFOLIO_GUIDE.md                             # THIS FILE: Living documentation & update playbook
├── public/
│   └── resume/
│       └── Harsh_Kumar_Singh_Resume.pdf           # Static downloadable resume PDF
├── src/
│   ├── app/
│   │   ├── globals.css                            # Design tokens & architectural grid utilities
│   │   ├── layout.tsx                             # Root fonts, metadata & shell
│   │   └── page.tsx                               # Main single-page narrative assembly (M1-M4 active)
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.tsx                         # Sticky header, scroll-spy & mobile drawer
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx                    # Hero typography, CTAs & telemetry snapshot
│   │   │   ├── ImpactLedgerSection.tsx            # 3-workload metrics grid with Before/After bars
│   │   │   ├── AboutSection.tsx                   # Engineer spec table, narrative & 3 pillars
│   │   │   └── ExperienceSection.tsx              # Unified PayPal timeline & expandable tech notes
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

### A. How to Add a New Project (When Your Next Project Is Ready)
1. Open `src/data/portfolio-data.ts`.
2. Locate the `FEATURED_PROJECTS` array.
3. Append a new object conforming to the `FeaturedProject` interface:

```typescript
{
  id: "project-your-new-project",
  slug: "your-new-project",
  title: "Project Name",
  tagline: "One-line engineering value proposition",
  status: "Live in Production", // or "In Development"
  problemStatement: "What technical or user bottleneck existed?",
  solutionSummary: "How did you architect and solve it?",
  githubUrl: "[https://github.com/Harshs0891/your-repo](https://github.com/Harshs0891/your-repo)",
  liveUrl: "[https://your-live-demo.vercel.app/](https://your-live-demo.vercel.app/)", // Optional
  technologies: ["Next.js", "TypeScript", "Apache Kafka", "PostgreSQL"],
  keyFeatures: [
    {
      title: "Feature 1 Title",
      description: "Concise technical explanation.",
      techUsed: "Core Tech · Secondary Tech",
    },
  ],
  architectureNodes: [
    {
      id: "node-1",
      layer: "01 · INGESTION LAYER",
      title: "Layer Title",
      subtitle: "Short Subtitle",
      technologies: ["Tech A", "Tech B"],
      description: "How data flows through this component.",
    },
  ],
}
```

### B. How to Add a New PayPal Engineering Achievement or Role Bullet
1. Open `src/data/portfolio-data.ts`.
2. Locate `EXPERIENCE_ROLES` -> find the `"paypal-swe-2026"` object -> `contributions` array.
3. Add a new `ExperienceContribution` entry:

```typescript
{
  id: "contrib-unique-slug",
  title: "Short System or Optimization Name",
  category: "Optimization", // "Optimization" | "Infrastructure" | "Tooling" | "Migration"
  problemContext: "What was the bottleneck or requirement?",
  engineeringAction: "What did you build or refactor?",
  verifiedOutcome: "What was the measurable quantitative or qualitative impact?",
  architecturalNotes: [
    "Deep-dive bullet 1 (publicly safe architectural pattern).",
    "Deep-dive bullet 2.",
  ],
  metricsHighlight: ["-XX% Latency", "XXM Records"], // Optional badges
}
```
4. *(Optional)* If it has a major headline metric, also add a card to `IMPACT_WORKLOADS` and set `experienceAnchorId: "contrib-unique-slug"` so clicking the metric in the Impact Ledger scrolls straight to the new experience bullet.

### C. How to Edit the About Me Specification or Narrative
1. Open `src/data/portfolio-data.ts`.
2. Update `PROFILE_DATA.aboutNarrative` (each string in the array renders as a paragraph) or `PROFILE_DATA.engineeringPillars` (renders the 3 pillar cards in `AboutSection.tsx`).

### D. How to Add a New Skill
1. Open `src/data/portfolio-data.ts` and locate `SKILL_CATEGORIES`.
2. Add the skill inside the appropriate category with its `usedIn` context array:

```typescript
{ name: "Apache Kafka", usedIn: ["PayPal SWE", "Distributed Messaging"] }
```

### E. How to Replace Your Resume PDF
1. Export your updated resume as `Harsh_Kumar_Singh_Resume.pdf`[cite: 1].
2. Overwrite `public/resume/Harsh_Kumar_Singh_Resume.pdf`[cite: 1].
3. Commit and push to `main` (Vercel will automatically redeploy the updated static asset).

---

## 4. Public IP & Privacy Guardrails
- **PayPal Confidentiality**: Never include internal PayPal table names, proprietary SQL schemas, internal service URLs, or confidential Argo architecture diagrams. Only use metrics and descriptions approved on your public resume[cite: 1].
- **Phone Number Privacy**: Keep `+91-7992180075` strictly inside the PDF asset (`public/resume/Harsh_Kumar_Singh_Resume.pdf`) and never render it in HTML text or `portfolio-data.ts`[cite: 1].