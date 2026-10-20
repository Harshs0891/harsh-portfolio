import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, GitBranch, CheckCircle2, Layers } from "lucide-react";
import { FEATURED_PROJECTS } from "@/data/portfolio-data";
import { EduGeniusArchitectureFlow } from "@/components/ui/EduGeniusArchitectureFlow";

export function generateStaticParams() {
  return FEATURED_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = FEATURED_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#090A0F] text-[#F3F4F6] py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 sm:px-12">
        {/* Top Back Navigation */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 hover:text-blue-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio Overview</span>
        </Link>

        {/* Case Study Header */}
        <header className="border-b border-[#1E2330] pb-8 mb-10">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-2">
            <Layers className="w-4 h-4" />
            <span>TECHNICAL ARCHITECTURE CASE STUDY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-gray-100">
            {project.title}
          </h1>
          <p className="mt-2 text-base sm:text-lg text-gray-400">
            {project.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-mono text-xs font-medium text-white hover:bg-blue-500 transition-colors"
              >
                <span>Open Live Production App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-[#1E2330] bg-[#12151F] px-4 py-2 font-mono text-xs text-gray-200 hover:border-gray-700"
            >
              <GitBranch className="w-3.5 h-3.5 text-blue-400" />
              <span>View Source on GitHub</span>
            </a>
          </div>
        </header>

        {/* Case Study Body */}
        <div className="space-y-10">
          {/* 1. Problem & Context */}
          <section className="rounded-lg border border-[#1E2330] bg-[#12151F] p-6 space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-wider text-blue-400">
              01 // Problem Context & User Bottleneck
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </section>

          {/* 2. Architectural Solution */}
          <section className="rounded-lg border border-[#1E2330] bg-[#12151F] p-6 space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-wider text-emerald-400">
              02 // System Design & Solution Approach
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {project.solutionSummary}
            </p>
          </section>

          {/* 3. Interactive Architecture Flow */}
          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider text-cyan-400">
              03 // Interactive 3-Tier System Schematic
            </h2>
            <EduGeniusArchitectureFlow
              nodes={project.architectureNodes}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          </section>

          {/* 4. Key Engineering Subsystems */}
          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider text-blue-400">
              04 // Key Implementation Decisions & Subsystems
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.keyFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-lg border border-[#1E2330] bg-[#12151F] p-5"
                >
                  <div className="flex items-start gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <h3 className="text-sm font-semibold text-gray-100">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed mb-3">
                    {feature.description}
                  </p>
                  <span className="font-mono text-[11px] text-blue-400">
                    {feature.techUsed}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Tech Stack */}
          <section className="rounded-lg border border-[#1E2330] bg-[#12151F] p-6">
            <h2 className="font-mono text-xs uppercase tracking-wider text-gray-400 mb-3">
              05 // Complete Technology Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded bg-[#090A0F] border border-[#1E2330] font-mono text-xs text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}