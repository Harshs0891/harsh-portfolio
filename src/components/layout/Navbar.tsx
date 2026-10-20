"use client";

import React, { useState, useEffect } from "react";
import { FileText, Menu, X, ArrowUpRight } from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolio-data";

const NAV_ITEMS = [
  { label: "Impact", href: "#impact", id: "impact" },
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Work", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Pedigree", href: "#pedigree", id: "pedigree" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionElements = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1E2330]/90 bg-[#090A0F]/85 backdrop-blur-md">
      <nav
        aria-label="Primary Navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 sm:px-12"
      >
        {/* Left Identity */}
        <a
          href="#hero"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded border border-blue-500/40 bg-blue-500/10 font-mono text-xs font-bold text-blue-400 group-hover:border-blue-400 transition-colors">
            {PROFILE_DATA.monogram}
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-gray-100">
              {PROFILE_DATA.name}
            </span>
            <span className="font-mono text-[10px] text-gray-400">
              {PROFILE_DATA.role} @ {PROFILE_DATA.organization}
            </span>
          </div>
        </a>

        {/* Center Desktop Links */}
        <div className="hidden md:flex items-center gap-1 rounded-full border border-[#1E2330] bg-[#12151F]/80 p-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`px-3 py-1 rounded-full font-mono text-xs transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white font-medium"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          <a
            href={PROFILE_DATA.resumePdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-[#1E2330] bg-[#12151F] px-3 py-1.5 font-mono text-xs text-gray-200 hover:border-blue-500/50 hover:text-white transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-blue-400" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-gray-400" />
          </a>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-md bg-blue-600 px-3.5 py-1.5 font-mono text-xs font-medium text-white hover:bg-blue-500 transition-colors"
          >
            Contact
          </a>

          {/* Mobile Drawer Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-[#1E2330] bg-[#12151F] p-2 text-gray-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#1E2330] bg-[#0E1017] px-6 py-4 space-y-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-md px-3 py-2 font-mono text-xs text-gray-300 hover:bg-[#181C2A] hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center rounded-md bg-blue-600 px-3 py-2 font-mono text-xs font-medium text-white mt-2"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}