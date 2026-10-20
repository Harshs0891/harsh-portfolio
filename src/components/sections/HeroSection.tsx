"use client";

import React from "react";
import { motion } from "motion/react";
import {
  ArrowDownRight,
  FileText,
  Terminal,
  Activity,
  Database,
  Code2,
  ExternalLink,
} from "lucide-react";
import { PROFILE_DATA, SOCIAL_PROFILES } from "@/data/portfolio-data";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Introduction and Engineering Summary"
      className="relative border-b border-[#1E2330] bg-architectural-grid py-16 sm:py-24 lg:py-28"
    >
      {/* Subtle radial spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.10),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left 7 Columns: Identity, Headline & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#1E2330] bg-[#12151F] px-3.5 py-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px] font-medium tracking-wider text-gray-300 uppercase">
                {PROFILE_DATA.eyebrowBadge}
              </span>
            </div>

            {/* Primary Display Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-semibold tracking-tight text-gray-100 leading-[1.1]">
              Engineering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
                High-Throughput Data Systems
              </span>{" "}
              & Full-Stack Products.
            </h1>

            {/* Supporting Introduction */}
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl">
              {PROFILE_DATA.heroSubheadline}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#impact"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 font-mono text-xs sm:text-sm font-medium text-white hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.25)]"
              >
                <span>Explore Engineering Impact</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href={PROFILE_DATA.resumePdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[#1E2330] bg-[#12151F] px-5 py-2.5 font-mono text-xs sm:text-sm text-gray-200 hover:border-gray-700 hover:text-white transition-colors"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>View Resume (PDF)</span>
              </a>

              <CopyEmailButton email={PROFILE_DATA.email} />
            </div>

            {/* Verified Profiles Strip */}
            <div className="pt-4 border-t border-[#1E2330]/80 flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-gray-500">
                VERIFIED PROFILES:
              </span>
              {SOCIAL_PROFILES.filter((p) => p.platform !== "Email").map((profile) => (
                <a
                  key={profile.platform}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <span>{profile.platform}</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right 5 Columns: System Architecture & Production Telemetry Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="rounded-lg border border-[#1E2330] bg-[#0E1017]/95 p-5 sm:p-6 shadow-2xl">
              {/* Terminal Top Chrome */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1E2330]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-blue-400" />
                  <span className="font-mono text-xs text-gray-300 font-medium">
                    production_telemetry.spec
                  </span>
                </div>
                <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                  VERIFIED METRICS
                </span>
              </div>

              {/* 4 High-Signal Telemetry Rows */}
              <div className="space-y-3.5">
                <a
                  href="#workload-msr-query"
                  className="block rounded-md border border-[#1E2330] bg-[#12151F] p-3.5 hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-1">
                    <span className="flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-emerald-400" />
                      PAYPAL · MSR QUERY OPTIMIZATION
                    </span>
                    <span className="text-emerald-400 font-semibold">-99.88% Bytes</span>
                  </div>
                  <p className="text-xs text-gray-300">
                    Cut slot usage by <strong className="text-white tabular-nums">79.5%</strong> & runtime by{" "}
                    <strong className="text-white tabular-nums">46.6%</strong> via join/window elimination.
                  </p>
                </a>

                <a
                  href="#workload-trr-migration"
                  className="block rounded-md border border-[#1E2330] bg-[#12151F] p-3.5 hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-1">
                    <span className="flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-blue-400" />
                      PAYPAL · SPARK / SCALA ARGO MIGRATION
                    </span>
                    <span className="text-blue-400 font-semibold">28–30M Txns</span>
                  </div>
                  <p className="text-xs text-gray-300">
                    Reduced batch runtime from <strong className="text-white tabular-nums">4–5 hrs → 1.5 hrs</strong>{" "}
                    (<strong className="text-emerald-400 tabular-nums">65% faster</strong>).
                  </p>
                </a>

                <a
                  href="#workload-bq-batching"
                  className="block rounded-md border border-[#1E2330] bg-[#12151F] p-3.5 hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-1">
                    <span className="flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-cyan-400" />
                      PAYPAL · BIGQUERY BATCHING POC
                    </span>
                    <span className="text-cyan-400 font-semibold">~35% Slot Save</span>
                  </div>
                  <p className="text-xs text-gray-300">
                    Dynamic <code className="font-mono text-gray-200">UNION ALL</code> batching with partition-prunable predicates.
                  </p>
                </a>

                <a
                  href="#pedigree"
                  className="block rounded-md border border-[#1E2330] bg-[#12151F] p-3.5 hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-1">
                    <span className="flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-purple-400" />
                      ALGORITHMIC & ACADEMIC PEDIGREE
                    </span>
                    <span className="text-gray-200 font-semibold">1200+ Solved</span>
                  </div>
                  <p className="text-xs text-gray-300">
                    IIIT Lucknow (<strong className="text-white tabular-nums">8.87 CGPA</strong>) · Flipkart Grid 5.0 Finalist · Amazon ML School.
                  </p>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}