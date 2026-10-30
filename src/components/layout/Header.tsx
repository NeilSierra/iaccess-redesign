"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight, Phone, Shield } from "lucide-react";
import { HeaderBrandGroup, IAccessLogo } from "@/components/ui/BrandLogos";
import { HEADER_NAV_LINKS } from "@/data/navigation";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll and listen for ESC key when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm">
      {/* 1. Main Brand Banner (Deep Green) */}
      <div className="brand-pattern-bg text-white px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <HeaderBrandGroup />

          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
            <Link href="/" className="transition-opacity hover:opacity-90" aria-label="iAccess Home">
              <IAccessLogo className="h-6 sm:h-8 w-auto" />
            </Link>

            {/* Mobile menu toggle button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-1.5 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-sidebar-drawer"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Sub-Navigation Bar (Surface 3: #DFE8EC) - Desktop only */}
      <nav
        className="bg-surface-3 border-b border-line text-xs font-medium text-ink/90 hidden lg:block"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-center divide-x divide-line/90 py-2">
            {HEADER_NAV_LINKS.map((link) => (
              <li key={link.label} className="px-4">
                <Link
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="hover:text-brand-700 transition-colors focus:outline-hidden focus:text-brand-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* 3. Mobile Right Slide-Over Sidebar Drawer */}
      {/* Dimmed Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar Panel sliding from the right */}
      <aside
        id="mobile-sidebar-drawer"
        aria-label="Mobile Navigation Sidebar"
        aria-modal="true"
        role="dialog"
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 sm:w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out lg:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Drawer Header */}
        <div className="brand-pattern-bg text-white px-4 py-3 sm:py-3.5 flex items-center justify-between border-b border-brand-900/40">
          <div className="flex items-center gap-2">
            <IAccessLogo className="h-6 w-auto brightness-0 invert" />
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-6">
          {/* Navigation Links */}
          <div className="space-y-1">
            <p className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-wider text-muted">
              Menu Navigation
            </p>
            <nav className="space-y-1" aria-label="Mobile Drawer Navigation">
              {HEADER_NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-ink hover:text-brand-700 hover:bg-brand-50/80 active:bg-brand-100 transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-muted/60" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Quick Actions */}
          <div className="pt-4 border-t border-line space-y-2">
            <p className="px-2 pb-1 text-[10px] font-semibold uppercase tracking-wider text-muted">
              Quick Actions
            </p>
            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
            >
              <span>Enroll in iAccess</span>
            </Link>
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 border border-line bg-surface-1 hover:bg-surface-2 text-ink rounded-xl text-xs font-semibold transition-colors"
            >
              <span>Return to Login</span>
            </Link>
            <Link
              href="/terms"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2 px-4 text-xs font-semibold text-brand-700 hover:text-brand-800 transition-colors"
            >
              <span>Terms and Conditions</span>
            </Link>
          </div>

          {/* 24/7 Customer Support Box */}
          <div className="p-3 bg-surface-1 border border-line rounded-xl space-y-1.5">
            <div className="flex items-center gap-2 text-brand-700 text-xs font-semibold">
              <Phone className="w-3.5 h-3.5" />
              <span>Customer Care Support</span>
            </div>
            <p className="text-[11px] text-muted">
              Metro Manila: <strong className="text-ink font-mono">(02) 8405-7000</strong>
            </p>
            <p className="text-[10px] text-muted">
              PLDT Toll Free: <strong className="text-ink font-mono">1-800-10-405-7000</strong>
            </p>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-3 bg-surface-2 border-t border-line text-[10px] text-muted text-center font-medium">
          <span>Land Bank of the Philippines · Official Portal</span>
        </div>
      </aside>
    </header>
  );
}

