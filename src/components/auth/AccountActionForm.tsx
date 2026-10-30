"use client";

import { useState } from "react";
import Link from "next/link";
import { KeyRound, Unlock, Lock, ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react";
import { CaptchaBox } from "@/components/ui/CaptchaBox";

interface AccountActionFormProps {
  mode: "forgot-password" | "unlock-id" | "lock-access";
}

const ACTION_CONFIG = {
  "forgot-password": {
    title: "Forgot Password",
    description: "Reset your LANDBANK iAccess login password using your registered credentials.",
    icon: KeyRound,
    iconColor: "text-brand-700 bg-brand-100",
    buttonLabel: "Submit Password Reset",
    successMsg: "Password reset request submitted. If this iAccess ID exists, security questions or an OTP link will be delivered to your registered mobile/email.",
  },
  "unlock-id": {
    title: "Unlock ID",
    description: "Re-enable your iAccess ID after multiple incorrect password attempts.",
    icon: Unlock,
    iconColor: "text-blue-700 bg-blue-100",
    buttonLabel: "Submit Unlock Request",
    successMsg: "Unlock request submitted. In accordance with LANDBANK security policies, please confirm your One-Time PIN (OTP) or contact your branch of account.",
  },
  "lock-access": {
    title: "Lock My Access",
    description: "Instantly restrict and protect your iAccess and Mobile Banking User Profile against unauthorized access.",
    icon: Lock,
    iconColor: "text-amber-700 bg-amber-100",
    buttonLabel: "Lock My Access Now",
    successMsg: "Lock request registered. Once locked, user login to both iAccess and MBA will be restricted. Unlocking can be requested through any LANDBANK branch.",
  },
};

export function AccountActionForm({ mode }: AccountActionFormProps) {
  const config = ACTION_CONFIG[mode];
  const IconComponent = config.icon;

  const [iAccessId, setIAccessId] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!iAccessId.trim()) {
      setError("Please enter your iAccess ID.");
      return;
    }
    if (!captchaVerified) {
      setError("Please verify that you are not a robot.");
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-line p-6 sm:p-10 shadow-xs max-w-lg mx-auto text-center space-y-4 animate-in zoom-in-95">
        <div className="w-14 h-14 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-semibold text-ink">{config.title} Request Submitted</h2>
        <p className="text-xs sm:text-sm text-muted leading-relaxed">
          {config.successMsg}
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors shadow-xs"
          >
            Return to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-line p-4 sm:p-8 lg:p-10 shadow-xs max-w-lg mx-auto space-y-6">
      {/* Quick Navigation Tabs between the 3 shared-structure pages */}
      <div className="grid grid-cols-3 gap-1 bg-surface-2 p-1 rounded-xl text-[11px] sm:text-xs font-semibold text-center">
        <Link
          href="/forgot-password"
          className={`py-1.5 sm:py-2 px-1 rounded-lg transition-colors leading-tight flex items-center justify-center min-h-[36px] ${
            mode === "forgot-password"
              ? "bg-white text-brand-700 shadow-2xs font-semibold"
              : "text-muted hover:text-ink font-normal"
          }`}
        >
          Forgot Password
        </Link>
        <Link
          href="/unlock-id"
          className={`py-1.5 sm:py-2 px-1 rounded-lg transition-colors leading-tight flex items-center justify-center min-h-[36px] ${
            mode === "unlock-id"
              ? "bg-white text-brand-700 shadow-2xs font-semibold"
              : "text-muted hover:text-ink font-normal"
          }`}
        >
          Unlock ID
        </Link>
        <Link
          href="/lock-access"
          className={`py-1.5 sm:py-2 px-1 rounded-lg transition-colors leading-tight flex items-center justify-center min-h-[36px] ${
            mode === "lock-access"
              ? "bg-white text-brand-700 shadow-2xs font-semibold"
              : "text-muted hover:text-ink font-normal"
          }`}
        >
          Lock Access
        </Link>
      </div>

      {/* Header */}
      <div className="flex items-center gap-3 sm:gap-3.5 border-b border-line pb-4">
        <div className={`w-10 sm:w-12 h-10 sm:h-12 rounded-xl flex items-center justify-center shrink-0 ${config.iconColor}`}>
          <IconComponent className="w-5 sm:w-6 h-5 sm:h-6" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-ink tracking-tight">
            {config.title}
          </h1>
          <p className="text-xs text-muted mt-0.5">
            {config.description}
          </p>
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-lg text-xs font-medium flex items-center gap-2.5 shadow-2xs animate-in fade-in">
            <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-red-600">
              <AlertCircle className="w-3.5 h-3.5" />
            </div>
            <span>{error}</span>
          </div>
        )}

        {/* Verbatim Instruction */}
        <div className="bg-surface-1 border border-line rounded-lg p-3 text-xs text-ink font-medium">
          Instruction: Enter your iAccess ID and click Submit.
        </div>

        {/* iAccess ID field */}
        <div className="space-y-1.5">
          <label htmlFor="iAccessId" className="block text-xs font-semibold text-ink">
            iAccess ID <span className="text-red-500">*</span>
          </label>
          <input
            id="iAccessId"
            type="text"
            value={iAccessId}
            onChange={(e) => setIAccessId(e.target.value)}
            placeholder="Enter your iAccess User ID"
            className="block w-full min-w-0 rounded-lg border border-line bg-surface-1 py-2.5 px-3 text-sm font-mono text-ink placeholder:text-muted/60 focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
          />
        </div>

        {/* CAPTCHA Widget */}
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-ink">
            Security Verification <span className="text-red-500">*</span>
          </label>
          <CaptchaBox onVerify={(v) => setCaptchaVerified(v)} />
        </div>

        {/* Actions */}
        <div className="pt-2 flex items-center justify-between gap-2.5 sm:gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-1 px-3.5 sm:px-5 py-2.5 border border-line bg-surface-1 hover:bg-surface-2 text-ink rounded-lg text-xs sm:text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Cancel</span>
          </Link>

          <button
            type="submit"
            className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white rounded-lg text-xs sm:text-sm font-semibold shadow-xs transition-colors cursor-pointer"
          >
            <span>Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
}

