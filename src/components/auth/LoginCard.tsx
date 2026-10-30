"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Lock, Eye, EyeOff, ArrowRight, Download, KeyRound, ShieldAlert, AlertCircle, CheckCircle2 } from "lucide-react";

export function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [infoMessage, setInfoMessage] = useState<string | null>(null);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setInfoMessage(null);
      setErrorMessage("Please enter your Username and Password to log in.");
      return;
    }
    setErrorMessage(null);
    setInfoMessage("Frontend demo: Credentials received.");
  };

  return (
    <div className="bg-white rounded-2xl border border-line p-4 sm:p-8 lg:p-10 shadow-xs flex flex-col justify-between">
      <div>
        {/* Title */}
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-semibold text-ink tracking-tight">
            Login to iAccess
          </h2>
          <p className="text-xs sm:text-sm text-muted">
            Enter your credentials to continue
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLoginSubmit} className="mt-5 sm:mt-6 space-y-4">
          {/* Refined Error Message with Soft Red Background */}
          {errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-lg text-xs font-medium flex items-center gap-2.5 shadow-2xs animate-in fade-in">
              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-red-600">
                <AlertCircle className="w-3.5 h-3.5" />
              </div>
              <span className="leading-relaxed">{errorMessage}</span>
            </div>
          )}

          {/* Info Toast */}
          {infoMessage && (
            <div className="p-3 bg-brand-50 border border-brand-200 text-brand-900 rounded-lg text-xs font-medium flex items-center gap-2.5 shadow-2xs animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-brand-700" />
              <span>{infoMessage}</span>
            </div>
          )}

          {/* Username */}
          <div className="space-y-1.5">
            <label htmlFor="username" className="block text-xs font-semibold text-ink">
              Username <span className="text-red-500">*</span>
            </label>
            <div className="relative rounded-lg shadow-2xs">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted">
                <User className="h-4 w-4" />
              </div>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (errorMessage) setErrorMessage(null);
                }}
                placeholder="Juan Dela Cruz"
                className="block w-full rounded-lg border border-line bg-surface-1 py-2.5 pl-9 pr-3 text-sm text-ink placeholder:text-muted/60 focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-xs font-semibold text-ink">
                Password <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="relative rounded-lg shadow-2xs">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted">
                <Lock className="h-4 w-4" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errorMessage) setErrorMessage(null);
                }}
                placeholder="••••••••••••"
                className="block w-full rounded-lg border border-line bg-surface-1 py-2.5 pl-9 pr-10 text-sm text-ink placeholder:text-muted/60 focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted hover:text-ink transition-colors cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            <div className="text-right pt-0.5">
              <Link
                href="/forgot-password"
                className="text-xs text-muted hover:text-brand-700 hover:underline transition-colors font-medium"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-brand-600 py-3 px-4 text-sm font-semibold text-white shadow-xs hover:bg-brand-700 active:bg-brand-800 transition-colors focus:outline-hidden focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 cursor-pointer mt-2"
          >
            <span>Log In</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Consent Text */}
          <p className="text-center text-[11px] text-muted">
            By logging in, I agree to the{" "}
            <Link href="/terms" className="text-brand-700 hover:underline font-semibold">
              Terms and Conditions
            </Link>
          </p>
        </form>

        {/* Enrollment Well Box (matching mockup: bg-surface-3) */}
        <div className="mt-5 sm:mt-6 rounded-xl bg-surface-3 p-3.5 sm:p-4 border border-line/70 space-y-3 text-center">
          <Link
            href="/signup"
            className="w-full flex items-center justify-center rounded-lg border-2 border-brand-600 bg-white py-2.5 px-3 text-xs sm:text-sm font-semibold text-brand-700 shadow-2xs hover:bg-brand-50 transition-colors"
          >
            Not yet enrolled? Sign up now!
          </Link>

          <div>
            <a
              href="/assets/forms/iAccess_Enrollment_Form.pdf"
              download="LANDBANK_iAccess_Enrollment_Form.pdf"
              onClick={(e) => {
                e.preventDefault();
                alert("Download enrollment form: In production, this downloads the official LIEMA PDF form.");
              }}
              className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-brand-700 font-medium transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download enrollment form</span>
            </a>
          </div>
        </div>
      </div>

      {/* Quick Security & Recovery Actions */}
      <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-line flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-muted">
        <Link
          href="/unlock-id"
          className="inline-flex items-center gap-1.5 hover:text-brand-700 transition-colors font-medium text-[11px] sm:text-xs"
        >
          <KeyRound className="w-3.5 h-3.5 text-brand-600" />
          <span>Unlock ID</span>
        </Link>
        <span className="text-line hidden sm:inline" aria-hidden="true">|</span>
        <Link
          href="/lock-access"
          className="inline-flex items-center gap-1.5 hover:text-brand-700 transition-colors font-medium text-[11px] sm:text-xs"
        >
          <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
          <span>Lock My Access</span>
        </Link>
      </div>
    </div>
  );
}
