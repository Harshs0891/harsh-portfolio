import React from "react";

interface SectionHeaderProps {
  index: string;
  tag: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ index, tag, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-10 sm:mb-12 border-b border-[#1E2330] pb-6">
      <div className="flex items-center gap-2.5 mb-3">
        <span className="font-mono text-xs font-semibold text-blue-400 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
          {index}
        </span>
        <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
          // {tag}
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-100">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2.5 text-sm sm:text-base text-gray-400 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}