"use client";

import { useState } from "react";
import { Check, ShieldCheck, RefreshCw } from "lucide-react";

interface CaptchaBoxProps {
  onVerify?: (verified: boolean) => void;
  className?: string;
}

export function CaptchaBox({ onVerify, className = "" }: CaptchaBoxProps) {
  const [status, setStatus] = useState<"idle" | "verifying" | "verified">("idle");

  const handleClick = () => {
    if (status !== "idle") return;
    setStatus("verifying");
    setTimeout(() => {
      setStatus("verified");
      onVerify?.(true);
    }, 700);
  };

  return (
    <div
      className={`border border-line rounded-lg bg-surface-1 p-2.5 sm:p-3.5 flex items-center justify-between shadow-xs w-full max-w-xs ${className}`}
      role="region"
      aria-label="Security CAPTCHA verification"
    >
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <button
          type="button"
          onClick={handleClick}
          disabled={status !== "idle"}
          className={`w-6.5 sm:w-7 h-6.5 sm:h-7 rounded border flex items-center justify-center transition-all shrink-0 ${
            status === "verified"
              ? "bg-brand-600 border-brand-600 text-white"
              : status === "verifying"
              ? "bg-surface-2 border-brand-500 cursor-wait"
              : "border-line bg-white hover:border-brand-500 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-brand-500"
          }`}
          aria-label={status === "verified" ? "Verification complete" : "Verify you are not a robot"}
        >
          {status === "verifying" && (
            <RefreshCw className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-brand-600 animate-spin" />
          )}
          {status === "verified" && (
            <Check className="w-3.5 sm:w-4 h-3.5 sm:h-4 stroke-[3]" />
          )}
        </button>
        <span className="text-xs sm:text-sm font-medium text-ink select-none cursor-pointer truncate" onClick={handleClick}>
          I am not a robot
        </span>
      </div>

      <div className="flex flex-col items-center pl-2 text-right shrink-0">
        <ShieldCheck className="w-5 sm:w-6 h-5 sm:h-6 text-brand-600" />
        <span className="text-[9px] sm:text-[10px] text-muted tracking-tight">reCAPTCHA</span>
        <span className="text-[8px] text-muted/70">Privacy · Terms</span>
      </div>
    </div>
  );
}

