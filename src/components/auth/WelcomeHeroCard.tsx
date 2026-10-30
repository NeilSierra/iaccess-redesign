"use client";

import Image from "next/image";
import { ShieldCheck, SlidersHorizontal, UserCheck, AlertCircle } from "lucide-react";

export function WelcomeHeroCard() {
  return (
    <div className="bg-white rounded-2xl border border-line p-4 sm:p-8 lg:p-10 shadow-xs flex flex-col justify-between">
      <div>
        {/* Eyebrow & Main Heading matching mockup */}
        <div className="space-y-1">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-600">
            Welcome to
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-brand-900 tracking-tight leading-tight break-words">
            LANDBANK iAccess
          </h1>
        </div>

        {/* Lead subtext */}
        <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-muted max-w-lg leading-relaxed">
          A safer, more convenient, and enhanced online banking experience for you.
        </p>

        {/* Value Pillars & Illustration Grid */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* 3 Pillars */}
          <div className="md:col-span-7 space-y-4 sm:space-y-5">
            <div className="flex items-start gap-3 sm:gap-3.5">
              <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-brand-100 flex items-center justify-center shrink-0 text-brand-700">
                <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <div>
                <h2 className="text-xs sm:text-sm font-semibold text-ink">Stronger Security</h2>
                <p className="text-[11px] sm:text-xs text-muted leading-relaxed">
                  Enhanced controls to help keep your account safe.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-3.5">
              <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-brand-100 flex items-center justify-center shrink-0 text-brand-700">
                <SlidersHorizontal className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <div>
                <h2 className="text-xs sm:text-sm font-semibold text-ink">More Convenient</h2>
                <p className="text-[11px] sm:text-xs text-muted leading-relaxed">
                  Manage your accounts anytime, anywhere.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-3.5">
              <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-brand-100 flex items-center justify-center shrink-0 text-brand-700">
                <UserCheck className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <div>
                <h2 className="text-xs sm:text-sm font-semibold text-ink">Designed For You</h2>
                <p className="text-[11px] sm:text-xs text-muted leading-relaxed">
                  Improved features for a better banking experience.
                </p>
              </div>
            </div>
          </div>

          {/* Hero Illustration from mockup */}
          <div className="md:col-span-5 flex justify-center py-1 sm:py-2">
            <div className="relative w-full max-w-[200px] sm:max-w-[240px] flex items-center justify-center">
              <Image
                src="/assets/images/hero-display.png"
                alt="LANDBANK iAccess Online Banking Security and Convenience"
                width={500}
                height={388}
                className="w-full h-auto object-contain drop-shadow-sm"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mandatory Notice: Keep Your Information Updated (from Content Map) */}
      <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-line/80">
        <div className="bg-surface-3/80 border border-line rounded-xl p-3.5 sm:p-5">
          <div className="flex items-center gap-2 text-brand-800 font-semibold text-xs sm:text-sm mb-1.5">
            <AlertCircle className="w-4 h-4 text-brand-600 shrink-0" />
            <span>Notice: Keep Your Information Updated</span>
          </div>
          <p className="text-xs text-ink font-semibold mb-1">
            Protect your account by keeping your information complete, accurate, and updated.
          </p>
          <p className="text-[11px] sm:text-xs text-muted leading-relaxed">
            In compliance with BSP regulations and the Anti-Money Laundering Act, please promptly inform any LANDBANK branch of significant changes to your personal information, source of funds, business activities, or transaction behavior.
          </p>
          <p className="text-[10px] sm:text-[11px] text-muted/90 mt-1 italic">
            Updated information helps us verify your identity and safeguard your account against fraud and suspicious transactions.
          </p>
        </div>
      </div>
    </div>
  );
}
