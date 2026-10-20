"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Briefcase, CheckCircle2, Terminal } from "lucide-react";
import { EXPERIENCE_ROLES } from "@/data/portfolio-data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ExperienceSection() {
  const [expandedNotes, setExpandedNotes] = useState<Record<string, boolean>>({
    "contrib-msr-optimization": true, // Open first flagship optimization by default
  });

  const toggleNote = (id: string) => {
    setExpandedNotes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-b border-[#1E2330] bg-[#090A0F] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-12">
        <SectionHeader
          index="03"
          tag="PRODUCTION ENGINEERING HISTORY"
          title="Professional Experience"
          subtitle="Progression at PayPal from Software Engineering Intern to full-time Software Engineer—architecting thread-safe cloud infrastructure, query optimizations, automated migration validators, and 30M-transaction Spark pipelines."
        />

        {/* Unified Organization Banner */}
        <div className="mb-8 rounded-lg border border-[#1E2330] bg-[#12151F] px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md border border-blue-500/30 bg-blue-500/10">
              <Briefcase className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-100">PayPal</h3>
              <p className="font-mono text-xs text-gray-400">
                Bengaluru, India · Intern (2025) → Full-Time Software Engineer (2026 – Present)
              </p>
            </div>
          </div>
          <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            2 Roles · Production Financial Data Systems
          </span>
        </div>

        {/* Connected Vertical Timeline */}
        <div className="relative border-l-2 border-[#1E2330] ml-3 sm:ml-5 pl-6 sm:pl-8 space-y-14">
          {EXPERIENCE_ROLES.map((roleObj) => (
            <div key={roleObj.id} className="relative">
              {/* Timeline Node Dot */}
              <span
                aria-hidden="true"
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-4 w-4 rounded-full border-2 border-blue-500 bg-[#090A0F]"
              />

              {/* Role Header */}
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <div>
                  <h4 className="text-xl sm:text-2xl font-semibold text-gray-100">
                    {roleObj.role}
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">{roleObj.summary}</p>
                </div>
                <div className="font-mono text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded">
                  {roleObj.startDate} – {roleObj.endDate} · {roleObj.location}
                </div>
              </div>

              {/* Contribution Sub-Cards */}
              <div className="mt-6 space-y-4">
                {roleObj.contributions.map((contrib) => {
                  const isExpanded = !!expandedNotes[contrib.id];
                  return (
                    <article
                      key={contrib.id}
                      id={contrib.id}
                      className="rounded-lg border border-[#1E2330] bg-[#12151F]/90 p-5 transition-colors hover:border-gray-700"
                    >
                      {/* Top Row: Category Badge + Title + Metric Pills */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2.5">
                          <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#0E1017] border border-[#1E2330] text-cyan-400">
                            {contrib.category}
                          </span>
                          <h5 className="text-base font-semibold text-gray-100">
                            {contrib.title}
                          </h5>
                        </div>

                        {contrib.metricsHighlight && (
                          <div className="flex flex-wrap gap-1.5">
                            {contrib.metricsHighlight.map((metric) => (
                              <span
                                key={metric}
                                className="font-mono text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded tabular-nums"
                              >
                                {metric}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Structured Problem -> Action -> Verified Outcome Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs leading-relaxed my-3 pt-3 border-t border-[#1E2330]/70">
                        <div>
                          <span className="block font-mono text-[10px] uppercase text-gray-500 mb-1">
                            01 · Problem Context
                          </span>
                          <p className="text-gray-300">{contrib.problemContext}</p>
                        </div>
                        <div>
                          <span className="block font-mono text-[10px] uppercase text-blue-400 mb-1">
                            02 · Engineering Action
                          </span>
                          <p className="text-gray-300">{contrib.engineeringAction}</p>
                        </div>
                        <div>
                          <span className="block font-mono text-[10px] uppercase text-emerald-400 mb-1">
                            03 · Verified Outcome
                          </span>
                          <p className="text-gray-200 font-medium">{contrib.verifiedOutcome}</p>
                        </div>
                      </div>

                      {/* Expandable Architectural Notes Accordion */}
                      <div className="mt-3 pt-2 border-t border-[#1E2330]/60">
                        <button
                          type="button"
                          onClick={() => toggleNote(contrib.id)}
                          aria-expanded={isExpanded}
                          aria-controls={`notes-${contrib.id}`}
                          className="inline-flex items-center gap-1.5 font-mono text-xs text-gray-400 hover:text-blue-400 transition-colors"
                        >
                          <Terminal className="w-3.5 h-3.5 text-blue-400" />
                          <span>
                            {isExpanded
                              ? "Hide Technical Implementation Notes"
                              : "Inspect Technical Implementation Notes"}
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>

                        {isExpanded && (
                          <ul
                            id={`notes-${contrib.id}`}
                            className="mt-3 space-y-1.5 rounded bg-[#0E1017] p-3.5 border border-[#1E2330] text-xs text-gray-300"
                          >
                            {contrib.architecturalNotes.map((note, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{note}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Role Technology Stack */}
              <div className="mt-4 flex flex-wrap items-center gap-1.5">
                <span className="font-mono text-[11px] text-gray-500 mr-1">
                  ROLE STACK:
                </span>
                {roleObj.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded bg-[#12151F] border border-[#1E2330] font-mono text-[11px] text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}