"use client";

import React, { useState } from "react";
import { Copy, Check, Mail } from "lucide-react";

interface CopyEmailButtonProps {
  email: string;
  variant?: "primary" | "ghost";
}

export function CopyEmailButton({ email, variant = "ghost" }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy email address ${email} to clipboard`}
      className={`inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-xs sm:text-sm font-mono transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
        variant === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-500 shadow-sm"
          : "border border-[#1E2330] bg-[#12151F] text-gray-300 hover:border-gray-700 hover:text-white"
      }`}
    >
      <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
      <span>{email}</span>
      {copied ? (
        <span
          role="status"
          aria-live="polite"
          className="inline-flex items-center gap-1 text-emerald-400 font-semibold ml-1"
        >
          <Check className="w-3.5 h-3.5" />
          <span>Copied</span>
        </span>
      ) : (
        <Copy className="w-3.5 h-3.5 text-gray-500 ml-1" />
      )}
    </button>
  );
}