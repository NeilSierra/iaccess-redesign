"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  Phone,
  Mail,
  ArrowUpRight,
  TrendingUp,
  X,
  Lock,
  Database,
  Server,
  Bug
} from "lucide-react";
import { LandbankLogo, OverseasFilipinoBankLogo, BancNetLogo, PdicLogo, BspLogo } from "@/components/ui/BrandLogos";
import { SAMPLE_FX_RATES, HEADER_NAV_LINKS } from "@/data/navigation";

export function Footer() {
  const [fxModalOpen, setFxModalOpen] = useState(false);

  return (
    <footer className="w-full px-3 sm:px-6 lg:px-8 footer-pattern-bg text-white mt-auto relative overflow-hidden font-sans">
      {/* Dark overlay to balance background-pattern contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/85 via-brand-900/90 to-brand-950/95 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto py-10 sm:py-14 space-y-10 sm:space-y-12">
        {/* 1. TOP TIER: E-COMMERCE ACT LEGAL WARNING (R.A. No. 8792) */}
        <div className="bg-black/40 border border-amber-400/40 rounded-2xl p-5 sm:p-7 backdrop-blur-md shadow-xl space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-semibold tracking-widest text-amber-300 uppercase">
                  Statutory Notice & Penalties
                </span>
                <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                  WARNING: iAccess is for authorized clients only
                </h3>
              </div>
            </div>
            <span className="inline-flex items-center text-[11px] font-mono font-medium text-amber-200/90 bg-amber-950/60 border border-amber-400/30 px-2.5 py-1 rounded-md self-start sm:self-auto">
              R.A. No. 8792 (E-Commerce Act)
            </span>
          </div>

          <div>
            <p className="text-xs text-slate-200 leading-relaxed mb-3">
              It shall be a criminal offense for any person to commit any of the following unauthorized acts:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                <div className="p-1 rounded bg-red-500/20 text-red-300 shrink-0 mt-0.5">
                  <Lock className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-slate-200">
                  <span className="font-bold text-white block">1. Unauthorized Access</span>
                  Obtain access to data without authority
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                <div className="p-1 rounded bg-red-500/20 text-red-300 shrink-0 mt-0.5">
                  <Database className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-slate-200">
                  <span className="font-bold text-white block">2. Data Tampering</span>
                  Corrupt, alter, steal or destroy data
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                <div className="p-1 rounded bg-red-500/20 text-red-300 shrink-0 mt-0.5">
                  <Server className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-slate-200">
                  <span className="font-bold text-white block">3. System Interference</span>
                  Interfere in computer system or server
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                <div className="p-1 rounded bg-red-500/20 text-red-300 shrink-0 mt-0.5">
                  <Bug className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-slate-200">
                  <span className="font-bold text-white block">4. Malicious Software</span>
                  Introduce computer virus or malware
                </div>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-white/10 text-[11px] sm:text-xs text-amber-200/90 leading-relaxed">
              <strong>Penalty:</strong> Minimum fine of <span className="font-semibold text-white">Php100,000</span> and maximum commensurate to damage incurred, plus mandatory imprisonment of <span className="font-semibold text-white">six (6) months to three (3) years</span> under R.A. No. 8792.
            </div>
          </div>
        </div>

        {/* 2. MIDDLE TIER: 3-COLUMN STRUCTURE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          {/* Column A: Institutional Identity & Links (5 cols) */}
          <div className="md:col-span-2 lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <LandbankLogo className="h-8 w-auto brightness-0 invert" />
              <div className="h-6 w-px bg-white/20" aria-hidden="true" />
              <OverseasFilipinoBankLogo className="h-6 w-auto brightness-0 invert" />
            </div>

            <p className="text-xs text-slate-200 leading-relaxed max-w-md">
              Land Bank of the Philippines is a universal bank owned by the Philippine government, serving as the official depository of government funds and pioneering accessible digital banking services across the nation and overseas.
            </p>

            <div className="pt-2">
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-brand-300 mb-2.5">
                Information & Assistance
              </h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-slate-200">
                {HEADER_NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="hover:text-brand-300 transition-colors inline-flex items-center gap-1"
                    >
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column B: Customer Care Center (4 cols) */}
          <div className="lg:col-span-4 bg-white/10 border border-white/15 rounded-2xl p-4 sm:p-6 backdrop-blur-md shadow-lg space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-300">
                  Helpdesk & Inquiries
                </span>
                <h4 className="text-sm font-semibold text-white">Customer Care Center</h4>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-400/20 text-brand-300 font-semibold border border-brand-400/30">
                24/7 Support
              </span>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-400/30 flex items-center justify-center text-brand-300 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-300 font-medium">Metro Manila (NCR) Hotline</p>
                  <a href="tel:0284057000" className="text-sm font-semibold text-white hover:text-brand-300 font-mono transition-colors">
                    (02) 8405-7000
                  </a>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    PLDT Toll Free: <span className="font-mono text-white font-semibold">1-800-10-405-7000</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-400/30 flex items-center justify-center text-brand-300 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-300 font-medium">Customer Support Email</p>
                  <a
                    href="mailto:customercare@landbank.com"
                    className="text-xs font-semibold text-brand-200 hover:text-white transition-colors break-all"
                  >
                    customercare@landbank.com
                  </a>
                  <p className="text-[10px] text-slate-400 mt-0.5">Official e-banking assistance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column C: Foreign Exchange Widget (3 cols) */}
          <div className="lg:col-span-3 bg-white/10 border border-white/15 rounded-2xl p-4 sm:p-6 backdrop-blur-md shadow-lg space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-300">
                  Market Rates
                </span>
                <h4 className="text-sm font-semibold text-white">Foreign Exchange</h4>
              </div>
              <div className="p-1 rounded-md bg-brand-500/20 text-brand-300">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>

            <p className="text-xs text-slate-200 leading-relaxed">
              Indicative daily currency exchange rates for international remittances and trade.
            </p>

            {/* Quick Rate Badges */}
            <div className="space-y-1.5 font-mono text-xs">
              <div className="flex items-center justify-between bg-black/25 px-2.5 py-1.5 rounded-lg border border-white/10">
                <span className="font-semibold text-white font-sans">USD / PHP</span>
                <span className="text-brand-300 font-semibold">58.65</span>
              </div>
              <div className="flex items-center justify-between bg-black/25 px-2.5 py-1.5 rounded-lg border border-white/10">
                <span className="font-semibold text-white font-sans">EUR / PHP</span>
                <span className="text-brand-300 font-semibold">63.15</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setFxModalOpen(true)}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold bg-brand-500 hover:bg-brand-400 text-brand-950 rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <span>View All Rates</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3. BOTTOM TIER: REGULATORY BADGES & COPYRIGHT */}
        <div className="pt-8 border-t border-white/15 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Institutional Compliance Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full lg:w-auto">
            {/* PDIC Badge */}
            <div className="h-[50px] flex justify-center items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/15 px-3.5 sm:px-4 py-2.5 rounded-xl backdrop-blur-md shadow-xs transition-colors text-white w-full sm:w-auto">
              <PdicLogo className="h-6 sm:h-7 w-auto shrink-0 drop-shadow-xs" />
              <div className="text-[11px] leading-tight text-slate-200 sm:max-w-[160px]">
                Deposits insured by PDIC up to <strong className="text-white font-semibold">₱1 Million</strong> per depositor.
              </div>
            </div>

            {/* BSP Badge */}
            <div className="h-[50px] flex justify-center items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/15 px-3.5 sm:px-4 py-2.5 rounded-xl backdrop-blur-md shadow-xs transition-colors text-white w-full sm:w-auto">
              <BspLogo className="h-5 sm:h-6 w-auto shrink-0 drop-shadow-xs" />
              <div className="text-[11px] leading-tight text-slate-200 sm:flex-initial">
                Regulated by the<br /><strong className="text-white font-semibold">Bangko Sentral ng Pilipinas</strong>
              </div>
            </div>

            {/* BancNet Badge */}
            <div className="h-[50px] flex justify-center items-center justify-between sm:justify-start gap-3 bg-white/10 hover:bg-white/15 border border-white/15 px-3.5 sm:px-4 py-2.5 rounded-xl backdrop-blur-md shadow-xs transition-colors text-white w-full sm:w-auto">
              <span className="text-[11px] text-slate-300 font-medium whitespace-nowrap">A proud member of</span>
              <BancNetLogo className="h-4.5 w-auto" />
            </div>
          </div>

          {/* Copyright Text */}
          <div className="text-center lg:text-right text-xs text-slate-300/80">
            <p>Copyright © 2024 Land Bank of the Philippines. All Rights Reserved.</p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              LANDBANK iAccess Digital Banking Portal · Republic Act No. 8792 Compliant
            </p>
          </div>
        </div>
      </div>

      {/* FX Rates Full Modal */}
      {fxModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div
            className="bg-white text-ink rounded-2xl max-w-lg w-full shadow-2xl border border-line overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="fx-modal-title"
          >
            <div className="bg-brand-700 text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <TrendingUp className="w-5 h-5 text-brand-200" />
                <h3 id="fx-modal-title" className="text-base font-semibold">Indicative Foreign Exchange Rates</h3>
              </div>
              <button
                type="button"
                onClick={() => setFxModalOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-md transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-xs text-muted leading-relaxed">
                Rates below are indicative and subject to change without prior notice. Final rates apply at the time of confirmed transaction.
              </p>

              <div className="overflow-x-auto border border-line rounded-xl shadow-2xs">
                <table className="w-full text-xs text-left">
                  <thead className="bg-surface-3 text-ink font-semibold">
                    <tr>
                      <th className="py-2.5 px-3">Currency</th>
                      <th className="py-2.5 px-3">Name</th>
                      <th className="py-2.5 px-3 text-right">Buying (PHP)</th>
                      <th className="py-2.5 px-3 text-right">Selling (PHP)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line font-mono text-ink">
                    {SAMPLE_FX_RATES.map((rate) => (
                      <tr key={rate.currency} className="hover:bg-surface-1">
                        <td className="py-2.5 px-3 font-bold text-brand-700">{rate.currency}</td>
                        <td className="py-2.5 px-3 font-sans text-muted">{rate.name}</td>
                        <td className="py-2.5 px-3 text-right">{rate.buy.toFixed(2)}</td>
                        <td className="py-2.5 px-3 text-right font-medium">{rate.sell.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-surface-1 px-6 py-3 border-t border-line flex justify-end">
              <button
                type="button"
                onClick={() => setFxModalOpen(false)}
                className="px-5 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-xs font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
