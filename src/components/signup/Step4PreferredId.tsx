"use client";

import { useState } from "react";
import { Check, Shield, Eye, EyeOff, AlertCircle } from "lucide-react";
import { SignUpFormData } from "@/types/signup";
import { CaptchaBox } from "@/components/ui/CaptchaBox";

export function Step4PreferredId({
  data,
  onChange,
}: {
  data: SignUpFormData;
  onChange: (field: string, value: string | boolean) => void;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const pwd = data.password || "";

  // Password rules validation
  const ruleLength = pwd.length >= 7 && pwd.length <= 15;
  const ruleLetter = /[a-zA-Z]/.test(pwd);
  const ruleCase = /[a-z]/.test(pwd) && /[A-Z]/.test(pwd);
  const ruleNumber = /[0-9]/.test(pwd);

  return (
    <div className="space-y-5 sm:space-y-6 animate-in fade-in duration-200">
      <div className="border-b border-line pb-3">
        <h3 className="text-base sm:text-lg font-semibold text-ink">
          Step 4: Please enter your preferred iAccess ID.
        </h3>
        <p className="text-xs text-muted mt-1 leading-relaxed">
          Create your login credentials and complete the security verification.
        </p>
      </div>

      <div className="space-y-5 sm:space-y-6">
        {/* Preferred iAccess ID */}
        <div className="space-y-1.5 max-w-md">
          <label htmlFor="preferredId" className="block text-xs font-semibold text-ink">
            iAccess ID <span className="text-red-500">*</span>
          </label>
          <input
            id="preferredId"
            type="text"
            maxLength={20}
            value={data.preferredId || ""}
            onChange={(e) => {
              const val = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
              onChange("preferredId", val);
            }}
            placeholder="6-20 alphanumeric characters"
            className="block w-full rounded-lg border border-line bg-surface-1 py-2.5 px-3 text-sm font-mono text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
          />
          <p className="text-[11px] text-muted">
            Must be 6 to 20 alphanumeric characters without spaces.
          </p>
        </div>

        {/* Password & Confirm Password */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-start">
          <div className="space-y-4">
            {/* Password */}
            <div className="space-y-1.5">
              <label htmlFor="pwd" className="block text-xs font-semibold text-ink">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative rounded-lg shadow-2xs">
                <input
                  id="pwd"
                  type={showPassword ? "text" : "password"}
                  value={pwd}
                  onChange={(e) => onChange("password", e.target.value)}
                  placeholder="Enter your password"
                  className="block w-full rounded-lg border border-line bg-surface-1 py-2.5 pl-3 pr-10 text-sm text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted hover:text-ink cursor-pointer"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <label htmlFor="confirmPwd" className="block text-xs font-semibold text-ink">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <div className="relative rounded-lg shadow-2xs">
                <input
                  id="confirmPwd"
                  type={showConfirmPassword ? "text" : "password"}
                  value={data.confirmPassword || ""}
                  onChange={(e) => onChange("confirmPassword", e.target.value)}
                  placeholder="Re-enter your password"
                  className="block w-full rounded-lg border border-line bg-surface-1 py-2.5 pl-3 pr-10 text-sm text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted hover:text-ink cursor-pointer"
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {data.confirmPassword && data.password !== data.confirmPassword && (
                <div className="p-2.5 bg-red-50 border border-red-200 text-red-800 rounded-lg text-xs font-medium flex items-center gap-2 shadow-2xs animate-in fade-in">
                  <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-red-600">
                    <AlertCircle className="w-3 h-3" />
                  </div>
                  <span>Passwords do not match. Please re-enter.</span>
                </div>
              )}
            </div>
          </div>

          {/* Password Parameters Live Checklist */}
          <div className="bg-surface-1 border border-line rounded-xl p-3.5 sm:p-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-ink">
              <Shield className="w-4 h-4 text-brand-600 shrink-0" />
              <span>Kindly ensure that your password follows the parameters below:</span>
            </div>

            <ul className="space-y-2 text-xs text-muted">
              <li className={`flex items-center gap-2 ${ruleLength ? "text-brand-700 font-semibold" : ""}`}>
                {ruleLength ? <Check className="w-3.5 h-3.5 text-brand-600 shrink-0" /> : <div className="w-1.5 h-1.5 rounded-full bg-line ml-1 mr-1 shrink-0" />}
                <span>7 to 15 characters in length</span>
              </li>
              <li className={`flex items-center gap-2 ${ruleLetter ? "text-brand-700 font-semibold" : ""}`}>
                {ruleLetter ? <Check className="w-3.5 h-3.5 text-brand-600 shrink-0" /> : <div className="w-1.5 h-1.5 rounded-full bg-line ml-1 mr-1 shrink-0" />}
                <span>Contains letter in the alphabet</span>
              </li>
              <li className={`flex items-center gap-2 ${ruleCase ? "text-brand-700 font-semibold" : ""}`}>
                {ruleCase ? <Check className="w-3.5 h-3.5 text-brand-600 shrink-0" /> : <div className="w-1.5 h-1.5 rounded-full bg-line ml-1 mr-1 shrink-0" />}
                <span>With at least one upper-case and one lower-case letter</span>
              </li>
              <li className={`flex items-center gap-2 ${ruleNumber ? "text-brand-700 font-semibold" : ""}`}>
                {ruleNumber ? <Check className="w-3.5 h-3.5 text-brand-600 shrink-0" /> : <div className="w-1.5 h-1.5 rounded-full bg-line ml-1 mr-1 shrink-0" />}
                <span>Contains number</span>
              </li>
              <li className="flex items-center gap-2 text-muted">
                <div className="w-1.5 h-1.5 rounded-full bg-line ml-1 mr-1 shrink-0" />
                <span>Case sensitive</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CAPTCHA Widget */}
        <div className="pt-2">
          <label className="block text-xs font-semibold text-ink mb-2">
            Security Verification <span className="text-red-500">*</span>
          </label>
          <CaptchaBox onVerify={(v) => onChange("captchaVerified", v)} />
        </div>
      </div>
    </div>
  );
}
