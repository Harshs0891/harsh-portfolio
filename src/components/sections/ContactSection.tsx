import React from "react";
import { FileText, ExternalLink, MapPin, Terminal } from "lucide-react";
import { PROFILE_DATA, SOCIAL_PROFILES } from "@/data/portfolio-data";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-b border-[#1E2330] bg-[#090A0F] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-12">
        <div className="rounded-xl border border-[#1E2330] bg-[#12151F] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 7 Columns: Direct Pitch & Primary Actions */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-400">
                <Terminal className="w-4 h-4" />
                <span>07 // DIRECT OUTREACH</span>
              </div>

              <h2
                id="contact-heading"
                className="text-2xl sm:text-4xl font-semibold tracking-tight text-gray-100"
              >
                Let’s Discuss Engineering, Systems, or Opportunities.
              </h2>

              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl">
                Currently engineering high-throughput distributed data systems as a Software Engineer at{" "}
                <strong className="text-gray-200">PayPal</strong> in Bengaluru. Always open to connecting with engineering leaders, technical recruiters, and fellow builders.
              </p>

              <div className="flex items-center gap-2 font-mono text-xs text-gray-400 pt-1">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{PROFILE_DATA.location}</span>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <CopyEmailButton email={PROFILE_DATA.email} variant="primary" />

                <a
                  href={PROFILE_DATA.resumePdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-[#1E2330] bg-[#0E1017] px-4 py-2 font-mono text-xs sm:text-sm text-gray-200 hover:border-blue-500/50 hover:text-white transition-colors"
                >
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>

            {/* Right 5 Columns: Verified Directory */}
            <div className="lg:col-span-5">
              <div className="rounded-lg border border-[#1E2330] bg-[#0E1017] p-5 space-y-3">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-gray-400 pb-2 border-b border-[#1E2330]">
                  VERIFIED PROFESSIONAL & CODING PROFILES
                </span>

                <div className="space-y-2">
                  {SOCIAL_PROFILES.map((profile) => (
                    <a
                      key={profile.platform}
                      href={profile.url}
                      target={profile.platform === "Email" ? undefined : "_blank"}
                      rel={profile.platform === "Email" ? undefined : "noopener noreferrer"}
                      className="flex items-center justify-between rounded border border-[#1E2330] bg-[#12151F] px-3.5 py-2.5 hover:border-blue-500/50 transition-colors group"
                    >
                      <span className="font-mono text-xs font-medium text-gray-200 group-hover:text-white">
                        {profile.platform}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-blue-400">
                        <span>{profile.handle}</span>
                        <ExternalLink className="w-3 h-3 opacity-75" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}