import React from "react";
import { PROFILE_DATA } from "@/data/portfolio-data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShieldCheck, Zap, Layers } from "lucide-react";

export function AboutSection() {
  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Zap className="w-4 h-4 text-emerald-400" />;
      case 1:
        return <ShieldCheck className="w-4 h-4 text-blue-400" />;
      default:
        return <Layers className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-[#1E2330] bg-[#0E1017] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-12">
        <SectionHeader
          index="02"
          tag="ENGINEERING IDENTITY & PHILOSOPHY"
          title="Systems Thinking Meets Product Execution"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left 4 Columns: Quick Specification Table */}
          <div className="lg:col-span-4">
            <div className="rounded-lg border border-[#1E2330] bg-[#12151F] p-5 space-y-4">
              <div className="pb-3 border-b border-[#1E2330]">
                <span className="font-mono text-xs uppercase tracking-wider text-blue-400">
                  ENGINEER SPECIFICATION
                </span>
              </div>

              <dl className="space-y-3 text-xs">
                <div>
                  <dt className="font-mono text-gray-500 uppercase">Current Role</dt>
                  <dd className="text-gray-200 font-medium mt-0.5">
                    Software Engineer @ PayPal
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-gray-500 uppercase">Location</dt>
                  <dd className="text-gray-200 font-medium mt-0.5">
                    {PROFILE_DATA.location}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-gray-500 uppercase">Undergraduate</dt>
                  <dd className="text-gray-200 font-medium mt-0.5">
                    IIIT Lucknow · B.Tech CS & Business (&apos;26)
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-gray-500 uppercase">Academic Standing</dt>
                  <dd className="font-mono text-emerald-400 font-semibold mt-0.5">
                    8.87 / 10.0 CGPA
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-gray-500 uppercase">Primary Domains</dt>
                  <dd className="text-gray-300 mt-0.5">
                    Distributed Data Systems · Query Optimization · Full-Stack AI
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Right 8 Columns: Narrative & 3 Pillars */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              {PROFILE_DATA.aboutNarrative.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* 3 Engineering Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {PROFILE_DATA.engineeringPillars.map((pillar, index) => (
                <div
                  key={pillar.id}
                  className="rounded-lg border border-[#1E2330] bg-[#12151F] p-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2.5">
                      {getPillarIcon(index)}
                      <span className="font-mono text-[11px] text-gray-400">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-100 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}