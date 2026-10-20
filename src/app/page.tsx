import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactLedgerSection } from "@/components/sections/ImpactLedgerSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";

export default function PortfolioHomePage() {
  return (
    <div className="min-h-screen bg-[#090A0F] text-[#F3F4F6] selection:bg-blue-500/30 selection:text-blue-200">
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
      </main>
    </div>
  );
}