"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink, GitBranch, ArrowRight, Sparkles, PlusCircle } from "lucide-react";
import { FEATURED_PROJECTS } from "@/data/portfolio-data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EduGeniusArchitectureFlow } from "@/components/ui/EduGeniusArchitectureFlow";

export function FeaturedProjectSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-b border-[#1E2330] bg-[#0E1017] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-12">
        <SectionHeader
          index="04"
          tag="FULL-STACK AI PRODUCT ENGINEERING"
          title="Featured Software Systems"
          subtitle="End-to-end product architecture combining modern React/Next.js interfaces, type-safe relational persistence, and structured LLM API orchestration."
        />

        <div className="space-y-12">
          {FEATURED_PROJECTS.map((project) => (
            <article
              key={project.id}
              className="rounded-xl border border-[#1E2330] bg-[#12151F] p-6 sm:p-8 lg:p-10 shadow-xl"
            >
              {/* Top Product Status & Links Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#1E2330]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 font-mono text-[11px] font-medium text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {project.status}
                    </span>
                    <span className="font-mono text-xs text-gray-500">
                      // PRODUCT SPOTLIGHT
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-gray-100">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-400 font-mono">
                    {project.tagline}
                  </p>
                </div>

                {/* Action CTAs */}
                <div className="flex flex-wrap items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-mono text-xs font-medium text-white hover:bg-blue-500 transition-colors"
                    >
                      <span>Launch Live App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-[#1E2330] bg-[#0E1017] px-4 py-2 font-mono text-xs text-gray-200 hover:border-gray-700 hover:text-white transition-colors"
                  >
                    <GitBranch className="w-3.5 h-3.5 text-blue-400" />
                    <span>GitHub Repo</span>
                  </a>
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-md border border-blue-500/30 bg-blue-500/10 px-4 py-2 font-mono text-xs text-blue-300 hover:bg-blue-500/20 transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Split Grid: Left Product & Feature Breakdown (6 Cols) | Right Architecture Schematic (6 Cols) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                {/* Left Column */}
                <div className="lg:col-span-6 space-y-6">
                  {/* Problem & Solution Cards */}
                  <div className="grid grid-cols-1 gap-4">
                    <div className="rounded-lg border border-[#1E2330] bg-[#0E1017] p-4">
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-gray-500 mb-1">
                        THE PROBLEM
                      </span>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {project.problemStatement}
                      </p>
                    </div>
                    <div className="rounded-lg border border-[#1E2330] bg-[#0E1017] p-4">
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-blue-400 mb-1">
                        ARCHITECTURAL SOLUTION
                      </span>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {project.solutionSummary}
                      </p>
                    </div>
                  </div>

                  {/* Key Engineering Features */}
                  <div className="space-y-3">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-gray-400">
                      Core Capabilities & Subsystems
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.keyFeatures.map((feat) => (
                        <div
                          key={feat.title}
                          className="rounded-lg border border-[#1E2330] bg-[#0E1017]/70 p-3.5 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center gap-1.5 mb-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                              <h5 className="text-xs font-semibold text-gray-100">
                                {feat.title}
                              </h5>
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed mb-2.5">
                              {feat.description}
                            </p>
                          </div>
                          <span className="font-mono text-[10px] text-blue-400">
                            {feat.techUsed}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Full Technology Stack */}
                  <div className="pt-2">
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-gray-500 mb-2">
                      VERIFIED TECH STACK
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-[#090A0F] border border-[#1E2330] font-mono text-xs text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Interactive System Architecture Schematic */}
                <div className="lg:col-span-6">
                  <EduGeniusArchitectureFlow
                    nodes={project.architectureNodes}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                  />
                </div>
              </div>
            </article>
          ))}

          {/* Extensible Slot for Upcoming Engineering Projects */}
          <div className="rounded-lg border border-dashed border-[#1E2330] bg-[#090A0F]/60 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <PlusCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-gray-200">
                  Upcoming Engineering Builds & System Case Studies
                </h4>
                <p className="text-xs text-gray-400 mt-0.5">
                  Currently architecting new backend and distributed systems projects. Additional case studies will be published here upon completion.
                </p>
              </div>
            </div>
            <a
              href="https://github.com/Harshs0891"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-blue-400 hover:text-blue-300 shrink-0"
            >
              <span>Follow on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}