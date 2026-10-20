"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Cpu } from "lucide-react";
import { IMPACT_WORKLOADS } from "@/data/portfolio-data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ImpactLedgerSection() {
  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      className="border-b border-[#1E2330] bg-[#090A0F] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-12">
        <SectionHeader
          index="01"
          tag="PRODUCTION TELEMETRY & VERIFIED METRICS"
          title="Measured Engineering Impact"
          subtitle="Every metric below is scoped to its exact production workload at PayPal—pairing quantitative cost, slot, and latency reductions with the underlying architectural mechanism."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {IMPACT_WORKLOADS.map((workload, idx) => (
            <motion.article
              key={workload.id}
              id={workload.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="flex flex-col justify-between rounded-lg border border-[#1E2330] bg-[#12151F] p-6 hover:border-blue-500/40 transition-colors"
            >
              <div>
                {/* Top Metadata Header */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-[#1E2330]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-blue-400 font-semibold">
                    {workload.workloadTag}
                  </span>
                </div>

                {/* Role & Timeframe */}
                <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-4">
                  <span>{workload.roleContext}</span>
                  <span>{workload.timeframe}</span>
                </div>

                {/* Headline Metric */}
                <div
                  aria-label={workload.primaryMetric.ariaDescription}
                  className="mb-5"
                >
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-mono text-4xl sm:text-5xl font-bold tracking-tight text-gray-100 tabular-nums">
                      {workload.primaryMetric.value}
                    </span>
                    <span className="font-mono text-xl font-semibold text-emerald-400">
                      {workload.primaryMetric.unit}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-gray-300">
                    {workload.primaryMetric.label}
                  </p>
                </div>

                {/* Secondary Metric Sub-Grid */}
                <div className="grid grid-cols-2 gap-2.5 mb-6">
                  {workload.secondaryMetrics.map((sec) => (
                    <div
                      key={sec.label}
                      className="rounded border border-[#1E2330] bg-[#0E1017] p-2.5"
                    >
                      <span className="block font-mono text-sm font-bold text-emerald-400 tabular-nums">
                        {sec.value}
                      </span>
                      <span className="block text-[11px] text-gray-400 mt-0.5">
                        {sec.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Visual Before vs. After Telemetry Bar */}
                <div className="rounded-md border border-[#1E2330] bg-[#0E1017] p-3.5 mb-5 space-y-3">
                  <div>
                    <div className="flex justify-between font-mono text-[11px] text-gray-400 mb-1">
                      <span>BEFORE</span>
                      <span>{workload.beforeState.displayValue}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-[#181C2A] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gray-600"
                        style={{ width: `${workload.beforeState.relativePercent}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-mono text-[11px] text-emerald-400 mb-1">
                      <span>AFTER (OPTIMIZED)</span>
                      <span className="font-semibold">{workload.afterState.displayValue}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-[#181C2A] overflow-hidden">
                      <motion.div
                        initial={{ width: "100%" }}
                        whileInView={{ width: `${workload.afterState.relativePercent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="h-full rounded-full bg-emerald-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Technical Mechanism */}
                <div className="mb-5">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-gray-400 uppercase mb-1">
                    <Cpu className="w-3.5 h-3.5 text-blue-400" />
                    <span>Engineering Mechanism</span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {workload.technicalMechanism}
                  </p>
                </div>
              </div>

              {/* Footer Tech Tags + Anchor Link */}
              <div className="pt-4 border-t border-[#1E2330] flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {workload.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-[#0E1017] border border-[#1E2330] font-mono text-[10px] text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={`#${workload.experienceAnchorId}`}
                  className="inline-flex items-center gap-1 font-mono text-[11px] text-blue-400 hover:text-blue-300 shrink-0"
                >
                  <span>Context</span>
                  <ArrowDown className="w-3 h-3" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}