import React from "react";
import { SKILL_CATEGORIES } from "@/data/portfolio-data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SkillsMatrixSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-b border-[#1E2330] bg-[#090A0F] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-12">
        <SectionHeader
          index="05"
          tag="TECHNICAL TAXONOMY & PRODUCTION STACK"
          title="Engineering Skills Matrix"
          subtitle="Organized by architectural domain. Every technology listed below is cross-referenced with its verified production or project context."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={category.id}
              className="rounded-lg border border-[#1E2330] bg-[#12151F] p-6 flex flex-col justify-between hover:border-gray-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1E2330]">
                  <span className="font-mono text-[11px] text-blue-400">
                    DOMAIN 0{idx + 1}
                  </span>
                  <span className="font-mono text-[11px] text-gray-500">
                    {category.skills.length} Techs
                  </span>
                </div>

                <h3 className="text-base font-semibold text-gray-100 mb-1.5">
                  {category.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-5">
                  {category.description}
                </p>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between gap-2 rounded bg-[#0E1017] border border-[#1E2330] px-3 py-1.5"
                  >
                    <span className="font-mono text-xs font-medium text-gray-200">
                      {skill.name}
                    </span>
                    <span className="font-mono text-[10px] text-gray-400 truncate max-w-[155px]">
                      {skill.usedIn.join(" · ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}