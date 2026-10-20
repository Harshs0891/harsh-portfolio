import React from "react";
import { Award, Code2, GraduationCap, ExternalLink, CheckCircle2 } from "lucide-react";
import { PEDIGREE_DATA } from "@/data/portfolio-data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function PedigreeSection() {
  const { competitiveProgramming, distinctions, education } = PEDIGREE_DATA;

  return (
    <section
      id="pedigree"
      aria-labelledby="pedigree-heading"
      className="border-b border-[#1E2330] bg-[#0E1017] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-12">
        <SectionHeader
          index="06"
          tag="ALGORITHMIC RIGOR, HONORS & EDUCATION"
          title="Competitive Programming & Academic Foundation"
          subtitle="Strong computer science fundamentals backed by 1200+ solved algorithmic problems, national engineering competition finals, and an 8.87 CGPA at IIIT Lucknow."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Competitive Programming (5 Cols) */}
          <div className="lg:col-span-5 rounded-lg border border-[#1E2330] bg-[#12151F] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#1E2330]">
                <Code2 className="w-4 h-4 text-blue-400" />
                <span className="font-mono text-xs uppercase tracking-wider text-blue-400">
                  ALGORITHMIC PROBLEM SOLVING
                </span>
              </div>

              <div className="mb-4">
                <span className="font-mono text-4xl sm:text-5xl font-bold text-gray-100 tabular-nums">
                  {competitiveProgramming.totalSolved}
                </span>
                <p className="text-sm font-medium text-emerald-400 mt-1">
                  Coding Problems Solved Across Platforms
                </p>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                {competitiveProgramming.description}
              </p>
            </div>

            {/* Verified CP Profile Links */}
            <div className="space-y-2.5">
              <span className="block font-mono text-[10px] uppercase tracking-wider text-gray-500">
                VERIFIED COMPETITIVE PROFILES
              </span>
              {competitiveProgramming.platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-md border border-[#1E2330] bg-[#0E1017] px-3.5 py-2.5 hover:border-blue-500/50 transition-colors group"
                >
                  <div>
                    <span className="text-xs font-semibold text-gray-200 group-hover:text-white">
                      {platform.name}
                    </span>
                    <span className="ml-2 font-mono text-xs text-blue-400">
                      @{platform.handle}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-blue-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Right 7 Columns: National Distinctions + Education */}
          <div className="lg:col-span-7 space-y-6">
            {/* National Honors Card */}
            <div className="rounded-lg border border-[#1E2330] bg-[#12151F] p-6">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#1E2330]">
                <Award className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                  NATIONAL ENGINEERING DISTINCTIONS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {distinctions.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-md border border-[#1E2330] bg-[#0E1017] p-4"
                  >
                    <span className="font-mono text-[10px] uppercase text-blue-400">
                      {item.organization}
                    </span>
                    <h3 className="text-sm font-semibold text-gray-100 mt-1 mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Card */}
            <div className="rounded-lg border border-[#1E2330] bg-[#12151F] p-6">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#1E2330]">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                  ACADEMIC CREDENTIALS
                </span>
              </div>

              <div className="space-y-5">
                {education.map((edu) => (
                  <div
                    key={edu.institution}
                    className="rounded-md border border-[#1E2330] bg-[#0E1017] p-4"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-base font-semibold text-gray-100">
                        {edu.institution}
                      </h3>
                      <span className="font-mono text-xs text-gray-400">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 mt-1">
                      {edu.degree}
                    </p>
                    <div className="mt-2 inline-flex items-center gap-2 rounded bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 font-mono text-xs text-emerald-400">
                      <span>{edu.scoreLabel}:</span>
                      <strong className="tabular-nums">{edu.scoreValue}</strong>
                    </div>

                    {edu.coursework.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-[#1E2330]/80">
                        <span className="block font-mono text-[10px] uppercase text-gray-500 mb-2">
                          CORE COMPUTER SCIENCE COURSEWORK
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#12151F] border border-[#1E2330] font-mono text-[11px] text-gray-300"
                            >
                              <CheckCircle2 className="w-3 h-3 text-blue-400" />
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}