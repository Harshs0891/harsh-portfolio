import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactLedgerSection } from "@/components/sections/ImpactLedgerSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FeaturedProjectSection } from "@/components/sections/FeaturedProjectSection";
import { SkillsMatrixSection } from "@/components/sections/SkillsMatrixSection";
import { PedigreeSection } from "@/components/sections/PedigreeSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { PROFILE_DATA, SOCIAL_PROFILES } from "@/data/portfolio-data";

export default function PortfolioHomePage() {
  const jsonLdPersonSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE_DATA.name,
    jobTitle: PROFILE_DATA.role,
    worksFor: {
      "@type": "Organization",
      name: PROFILE_DATA.organization,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Indian Institute of Information Technology, Lucknow",
    },
    email: `mailto:${PROFILE_DATA.email}`,
    sameAs: SOCIAL_PROFILES.filter((p) => p.platform !== "Email").map((p) => p.url),
  };

  return (
    <div className="min-h-screen bg-[#090A0F] text-[#F3F4F6] selection:bg-blue-500/30 selection:text-blue-200">
      {/* Structured JSON-LD Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPersonSchema) }}
      />

      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-blue-600 focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-white"
      >
        Skip to Main Content
      </a>

      <Navbar />

      <main id="main-content">
        <HeroSection />
        <ImpactLedgerSection />
        <AboutSection />
        <ExperienceSection />
        <FeaturedProjectSection />
        <SkillsMatrixSection />
        <PedigreeSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}