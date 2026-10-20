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

### Upcoming Milestones
- [ ] **Milestone 2**: Global Chrome, Sticky Navigation & Hero Section (`Navbar.tsx`, `HeroSection.tsx`, `CopyEmailButton.tsx`)
- [ ] **Milestone 3**: Engineering Impact Ledger & About Section (`ImpactLedgerSection.tsx`, `AboutSection.tsx`)
- [ ] **Milestone 4**: PayPal Experience Progression Timeline (`ExperienceSection.tsx`)
- [ ] **Milestone 5**: EduGenius Showcase & Case Study Route (`FeaturedProjectSection.tsx`, `app/work/[slug]/page.tsx`)
- [ ] **Milestone 6**: Skills Matrix, Algorithmic Pedigree & Contact (`SkillsMatrixSection.tsx`, `PedigreeSection.tsx`, `ContactSection.tsx`, `Footer.tsx`)
- [ ] **Milestone 7**: Responsive Refinement & Motion Polish
- [ ] **Milestone 8**: SEO Metadata, JSON-LD Schema & Vercel Production Deployment

---

## 2. Directory Structure Overview

```text
harsh-portfolio/
├── PORTFOLIO_GUIDE.md                       # THIS FILE: Living documentation & update playbook
├── public/
│   └── resume/
│       └── Harsh_Kumar_Singh_Resume.pdf     # Static downloadable resume PDF
├── src/
│   ├── app/
│   │   ├── globals.css                      # Design tokens & architectural grid utilities
│   │   ├── layout.tsx                       # Root fonts, metadata & shell
│   │   └── page.tsx                         # Main single-page narrative assembly
│   ├── components/
│   │   ├── layout/                          # Navbar & Footer
│   │   ├── sections/                        # Page sections (Hero, Impact, Experience, etc.)
│   │   └── ui/                              # Atomic interactive components (EduGeniusArchitectureFlow, etc.)
│   ├── data/
│   │   └── portfolio-data.ts                # SINGLE SOURCE OF TRUTH for all text, metrics & links
│   └── types/
│       └── portfolio.ts                     # Strict TypeScript contracts