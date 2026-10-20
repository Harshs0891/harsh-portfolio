import React from "react";
import { ArrowUp } from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolio-data";

export function Footer() {
  return (
    <footer className="bg-[#090A0F] py-8 text-xs text-gray-500">
      <div className="mx-auto max-w-6xl px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-mono">
          <span className="text-gray-300 font-semibold">{PROFILE_DATA.name}</span>
          <span>·</span>
          <span>Software Engineer @ {PROFILE_DATA.organization}</span>
        </div>

        <div className="flex items-center gap-6 font-mono">
          <span>Built with Next.js, TypeScript & Tailwind CSS</span>
          <a
            href="#hero"
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}