"use client";

import { useState } from "react";
import { CreditCard, Lock, HelpCircle } from "lucide-react";
import { JaiInfoModal } from "@/components/ui/JaiInfoModal";
import { SignUpFormData } from "@/types/signup";

export function Step1AtmDetails({
  data,
  onChange,
}: {
  data: SignUpFormData;
  onChange: (field: string, value: string | boolean) => void;
}) {
  const [jaiModalOpen, setJaiModalOpen] = useState(false);

  return (
    <div className="space-y-5 sm:space-y-6 animate-in fade-in duration-200">
      <div className="border-b border-line pb-3">
        <h3 className="text-base sm:text-lg font-semibold text-ink">
          Step 1: Please enter your ATM account number and PIN.
        </h3>
        <p className="text-xs text-muted mt-1 leading-relaxed">
          Provide your 10-digit LANDBANK ATM account number and card details to begin registration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* ATM Account No. */}
        <div className="space-y-1.5 md:col-span-2">
          <label htmlFor="atmAccountNo" className="block text-xs font-semibold text-ink">
            ATM Account No. <span className="text-red-500">*</span>
          </label>
          <div className="relative rounded-lg shadow-2xs max-w-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted">
              <CreditCard className="h-4 w-4" />
            </div>
            <input
              id="atmAccountNo"
              type="text"
              maxLength={10}
              value={data.atmAccountNo || ""}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "");
                onChange("atmAccountNo", val);
              }}
              placeholder="e.g. 1234567890"
              className="block w-full rounded-lg border border-line bg-surface-1 py-2.5 pl-9 pr-3 text-sm font-mono tracking-wider text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            />
          </div>
          <p className="text-[11px] text-muted">
            10 digits. No spaces or special characters.
          </p>
        </div>

        {/* ATM PIN */}
        <div className="space-y-1.5">
          <label htmlFor="atmPin" className="block text-xs font-semibold text-ink">
            ATM PIN <span className="text-red-500">*</span>
          </label>
          <div className="relative rounded-lg shadow-2xs max-w-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted">
              <Lock className="h-4 w-4" />
            </div>
            <input
              id="atmPin"
              type="password"
              maxLength={6}
              value={data.atmPin || ""}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "");
                onChange("atmPin", val);
              }}
              placeholder="••••••"
              className="block w-full rounded-lg border border-line bg-surface-1 py-2.5 pl-9 pr-3 text-sm font-mono tracking-widest text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            />
          </div>
          <p className="text-[11px] text-muted">
            Enter your card&apos;s 4 to 6 digit ATM PIN.
          </p>
        </div>

        {/* JAI */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between max-w-md">
            <label htmlFor="jai" className="block text-xs font-semibold text-ink">
              JAI <span className="text-red-500">*</span>
            </label>
            <button
              type="button"
              onClick={() => setJaiModalOpen(true)}
              className="text-xs text-brand-700 hover:text-brand-800 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Click here</span>
            </button>
          </div>
          <div className="relative rounded-lg shadow-2xs max-w-md">
            <input
              id="jai"
              type="text"
              maxLength={2}
              value={data.jai ?? "00"}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "");
                onChange("jai", val);
              }}
              placeholder="00"
              className="block w-full rounded-lg border border-line bg-surface-1 py-2.5 px-3 text-sm font-mono tracking-wider text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            />
          </div>
          <p className="text-[11px] text-muted">
            Joint Account Indicator (default: 00 for individual accounts).
          </p>
        </div>

        {/* Enable Fund Transfer Toggle Switch */}
        <div className="md:col-span-2 pt-1 sm:pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl border border-line bg-surface-1 hover:bg-surface-2/60 transition-colors max-w-xl">
            <div className="space-y-0.5 pr-2">
              <label htmlFor="enableFundTransferToggle" className="text-xs font-semibold text-ink cursor-pointer flex items-center gap-2">
                <span>Enable Fund Transfer</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold transition-colors ${
                  data.enableFundTransfer
                    ? "bg-brand-100 text-brand-800"
                    : "bg-surface-2 text-muted"
                }`}>
                  {data.enableFundTransfer ? "ACTIVE" : "OPTIONAL"}
                </span>
              </label>
              <p className="text-[11px] text-muted leading-relaxed">
                Activate online fund transfer capabilities for this enrolled LANDBANK account.
              </p>
            </div>

            <button
              id="enableFundTransferToggle"
              type="button"
              role="switch"
              aria-checked={Boolean(data.enableFundTransfer)}
              onClick={() => onChange("enableFundTransfer", !data.enableFundTransfer)}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 self-start sm:self-center ${
                data.enableFundTransfer ? "bg-brand-600" : "bg-slate-300"
              }`}
            >
              <span className="sr-only">Enable Fund Transfer</span>
              <span
                aria-hidden="true"
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                  data.enableFundTransfer ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <JaiInfoModal isOpen={jaiModalOpen} onClose={() => setJaiModalOpen(false)} />
    </div>
  );
}
