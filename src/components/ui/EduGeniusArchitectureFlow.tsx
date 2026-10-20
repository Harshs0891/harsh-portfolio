"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Layers,
  Cpu,
  Database,
  FileDown,
  Video,
  Sparkles,
  ArrowDown,
  ExternalLink,
  GitBranch,
} from "lucide-react";
import { ArchitectureFlowNode } from "@/types/portfolio";

interface EduGeniusArchitectureFlowProps {
  nodes: ArchitectureFlowNode[];
  githubUrl: string;
  liveUrl?: string;
}

export function EduGeniusArchitectureFlow({
  nodes,
  githubUrl,
  liveUrl,
}: EduGeniusArchitectureFlowProps) {
  const [activeNodeId, setActiveNodeId] = useState<string>(nodes[0]?.id || "node-client");

  const getLayerIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layers className="w-4 h-4 text-blue-400" />;
      case 1:
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      default:
        return <Database className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <div className="rounded-lg border border-[#1E2330] bg-[#0E1017] p-5 sm:p-6 flex flex-col justify-between">
      {/* Top Telemetry Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-[#1E2330]">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-gray-400">
            SYSTEM ARCHITECTURE SCHEMATIC · EDUGENIUS
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-gray-400 hover:text-white transition-colors"
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>Source</span>
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>Live Deployment</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Interactive 3-Tier Flow Diagram */}
      <div className="space-y-3" role="tablist" aria-label="EduGenius System Architecture Layers">
        {nodes.map((node, index) => {
          const isActive = activeNodeId === node.id;
          return (
            <React.Fragment key={node.id}>
              <motion.button
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveNodeId(node.id)}
                whileHover={{ scale: 1.005 }}
                className={`w-full text-left rounded-md border p-4 transition-all ${
                  isActive
                    ? "border-blue-500/70 bg-[#151926] shadow-[0_0_25px_rgba(59,130,246,0.08)]"
                    : "border-[#1E2330] bg-[#12151F]/70 hover:border-gray-700"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    {getLayerIcon(index)}
                    <span className="font-mono text-[11px] uppercase tracking-wider text-gray-400">
                      {node.layer}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-blue-400">
                    {isActive ? "ACTIVE INSPECT" : "CLICK TO INSPECT"}
                  </span>
                </div>

                <h4 className="text-base font-semibold text-gray-100">{node.title}</h4>
                <p className="text-xs text-gray-400 mt-0.5">{node.subtitle}</p>

                {/* Expandable Technical Detail */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.2 }}
                    className="mt-3 pt-3 border-t border-[#1E2330]/80"
                  >
                    <p className="text-xs text-gray-300 leading-relaxed mb-3">
                      {node.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {node.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-[#090A0F] border border-[#1E2330] font-mono text-[11px] text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.button>

              {/* Data Flow Connector between layers */}
              {index < nodes.length - 1 && (
                <div className="flex items-center justify-center py-0.5" aria-hidden="true">
                  <div className="flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#12151F] border border-[#1E2330] font-mono text-[10px] text-gray-400">
                    <ArrowDown className="w-3 h-3 text-blue-400" />
                    <span>
                      {index === 0
                        ? "Typed Request / Prompt Context"
                        : "Structured JSON Schema & Relational Write"}
                    </span>
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Bottom Output Artifacts Bar */}
      <div className="mt-5 pt-4 border-t border-[#1E2330] grid grid-cols-3 gap-2 text-center">
        <div className="p-2 rounded bg-[#12151F] border border-[#1E2330]">
          <Sparkles className="w-3.5 h-3.5 text-blue-400 mx-auto mb-1" />
          <span className="block font-mono text-[11px] text-gray-200">Adaptive Lessons</span>
        </div>
        <div className="p-2 rounded bg-[#12151F] border border-[#1E2330]">
          <Video className="w-3.5 h-3.5 text-cyan-400 mx-auto mb-1" />
          <span className="block font-mono text-[11px] text-gray-200">Curated Videos</span>
        </div>
        <div className="p-2 rounded bg-[#12151F] border border-[#1E2330]">
          <FileDown className="w-3.5 h-3.5 text-emerald-400 mx-auto mb-1" />
          <span className="block font-mono text-[11px] text-gray-200">Offline PDF + Keys</span>
        </div>
      </div>
    </div>
  );
}