"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Printer,
  ArrowLeft,
  FileText,
  Shield,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Bookmark,
  Share2,
  ExternalLink,
  BookOpen,
  X
} from "lucide-react";
import { TERMS_PAGES_META } from "@/data/termsPagesData";
import {
  ACCESSIBILITY_ITEMS,
  SECURITY_POLICY_TOPICS,
  BUSINESS_RULES_ITEMS,
  GENERAL_TERMS_CLAUSES,
  CUSTOMER_CARE_DATA,
  DATA_PRIVACY_DATA,
} from "@/data/termsContent";

export default function TermsPage() {
  const [activePage, setActivePage] = useState(1);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [highlightedPage, setHighlightedPage] = useState<number | null>(null);

  // Lock body scroll when mobile navigator sheet is open
  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

  // Scroll spy to update active page as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const pageElements = [1, 2, 3, 4, 5, 6, 7].map((num) =>
        document.getElementById(`page-${num}`)
      );

      const scrollPosition = window.scrollY + 200;

      for (let i = pageElements.length - 1; i >= 0; i--) {
        const el = pageElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActivePage(i + 1);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPage = (pageNum: number) => {
    setActivePage(pageNum);
    setHighlightedPage(pageNum);
    setTimeout(() => {
      setHighlightedPage((prev) => (prev === pageNum ? null : prev));
    }, 1500);

    const element = document.getElementById(`page-${pageNum}`);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const progressPercent = Math.round((activePage / 7) * 100);

  const getArticleClass = (pageNum: number) => {
    const isCurrent = activePage === pageNum;
    const isHighlighted = highlightedPage === pageNum;
    return `scroll-mt-20 bg-white rounded-2xl border transition-all duration-500 ease-out p-4 sm:p-10 lg:p-12 space-y-8 relative animate-page-sheet ${
      isHighlighted
        ? "border-brand-500 ring-4 ring-brand-500/35 shadow-xl scale-[1.006]"
        : isCurrent
        ? "border-brand-300 ring-2 ring-brand-500/20 shadow-md"
        : "border-line shadow-xs hover:border-line hover:shadow-sm"
    }`;
  };

  return (
    <div className="flex-1 bg-surface-1 py-8 sm:py-10 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Document Top Bar (no-print) */}
        <div className="no-print bg-white rounded-2xl border border-line p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-2 py-0.5 rounded-md">
                  Official Legal Document
                </span>
                <span className="text-[11px] text-muted">7 Pages · PDF Viewer</span>
              </div>
              <h1 className="text-base sm:text-lg font-semibold text-ink mt-0.5">
                LANDBANK iAccess Terms and Conditions
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={handlePrint}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 border border-line bg-surface-1 hover:bg-surface-2 text-ink rounded-lg text-xs font-semibold transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-muted" />
              <span>Print / PDF</span>
            </button>
            <Link
              href="/"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Login</span>
            </Link>
          </div>
        </div>

        {/* Mobile Page Navigator Bar (sticky on small screens, no-print) */}
        <div className="no-print lg:hidden sticky top-[50px] z-30 bg-surface-3/95 backdrop-blur-md border border-line rounded-xl p-2.5 sm:p-3 shadow-sm space-y-2">
          <div className="flex items-center justify-between gap-2">
            {/* Tap to open full page list */}
            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white border border-line shadow-2xs hover:bg-surface-1 transition-colors text-left min-w-0 flex-1 cursor-pointer"
              aria-label="Open document pages list"
            >
              <BookOpen className="w-4 h-4 text-brand-700 shrink-0" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold text-ink">Page {activePage} of 7</span>
                  <span className="text-[10px] text-brand-700 font-medium">({progressPercent}%)</span>
                </div>
                <p className="text-[10px] text-muted truncate">
                  {TERMS_PAGES_META[activePage - 1]?.title}
                </p>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-muted shrink-0" />
            </button>

            {/* Prev & Next Quick Steppers */}
            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={() => scrollToPage(Math.max(1, activePage - 1))}
                disabled={activePage === 1}
                className="p-2 rounded-lg border border-line bg-white text-ink disabled:opacity-35 disabled:cursor-not-allowed hover:bg-surface-1 active:bg-surface-2 transition-colors cursor-pointer"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollToPage(Math.min(7, activePage + 1))}
                disabled={activePage === 7}
                className="p-2 rounded-lg border border-line bg-white text-ink disabled:opacity-35 disabled:cursor-not-allowed hover:bg-surface-1 active:bg-surface-2 transition-colors cursor-pointer"
                aria-label="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-surface-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-600 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Mobile Document Navigator Sheet / Modal */}
        {mobileNavOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
              onClick={() => setMobileNavOpen(false)}
              aria-hidden="true"
            />

            {/* Bottom Sheet Modal */}
            <div
              className="relative z-10 bg-white rounded-t-2xl border-t border-line shadow-2xl max-h-[85vh] flex flex-col animate-in slide-in-from-bottom duration-300"
              role="dialog"
              aria-modal="true"
              aria-label="Document Page Navigation"
            >
              {/* Sheet Header */}
              <div className="p-4 border-b border-line flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bookmark className="w-4 h-4 text-brand-600" />
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-ink">
                    Document Navigator
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-brand-800 bg-brand-100 px-2 py-0.5 rounded-md">
                    7 Pages
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileNavOpen(false)}
                  className="p-1 rounded-md text-muted hover:text-ink hover:bg-surface-2 transition-colors cursor-pointer"
                  aria-label="Close document navigator"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Progress Bar in sheet */}
              <div className="px-4 pt-3 pb-1">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-muted font-medium">Viewing Progress</span>
                  <span className="font-semibold text-brand-700">Page {activePage} of 7 ({progressPercent}%)</span>
                </div>
                <div className="w-full h-1.5 bg-surface-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-600 transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Sheet Page List */}
              <nav className="overflow-y-auto p-4 space-y-2 flex-1" aria-label="Document pages">
                {TERMS_PAGES_META.map((page) => {
                  const isCurrent = activePage === page.pageNumber;
                  return (
                    <button
                      key={page.pageNumber}
                      type="button"
                      onClick={() => {
                        scrollToPage(page.pageNumber);
                        setMobileNavOpen(false);
                      }}
                      className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                        isCurrent
                          ? "bg-brand-50 border-brand-500 shadow-2xs"
                          : "bg-surface-1/70 border-line/70 hover:bg-surface-2 hover:border-line"
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                          isCurrent
                            ? "bg-brand-600 text-white shadow-2xs"
                            : "bg-surface-2 text-muted"
                        }`}
                      >
                        {page.pageNumber}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <p
                            className={`text-xs font-semibold truncate ${
                              isCurrent ? "text-brand-900" : "text-ink"
                            }`}
                          >
                            {page.title}
                          </p>
                          {isCurrent && (
                            <span className="w-2 h-2 rounded-full bg-brand-600 shrink-0" />
                          )}
                        </div>
                        <p className="text-[11px] text-muted truncate mt-0.5">
                          {page.subtitle}
                        </p>
                        <span className="text-[10px] font-mono text-brand-700/80 mt-1 inline-block">
                          {page.badge}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </nav>

              {/* Sheet Footer */}
              <div className="p-3 bg-surface-1 border-t border-line flex justify-end">
                <button
                  type="button"
                  onClick={() => setMobileNavOpen(false)}
                  className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close Navigator
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Two-Column Grid: Sticky Side Panel + Multi-Page Document Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          {/* ============================================================ */}
          {/* STICKY SIDE PANEL (Used for jumping between pages)          */}
          {/* ============================================================ */}
          <aside className="no-print hidden lg:block lg:col-span-4 xl:col-span-3">
            <div className="sticky top-20 z-20 space-y-4 max-h-[calc(100vh-5.5rem)] overflow-y-auto pr-1">
              <div className="bg-white rounded-2xl border border-line p-5 shadow-xs space-y-5 transition-shadow hover:shadow-sm">
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <div className="flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-brand-600" />
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-ink">
                      Document Navigator
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-brand-800 bg-brand-100 px-2 py-0.5 rounded-md">
                    7 Pages
                  </span>
                </div>

                {/* Progress Indicator */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted font-medium">Viewing Progress</span>
                    <span className="font-bold text-brand-700">Page {activePage} of 7 ({progressPercent}%)</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-2 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-600 transition-all duration-500 ease-out"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Page List Navigation Buttons */}
                <nav className="space-y-1.5" aria-label="Document pages">
                  {TERMS_PAGES_META.map((page) => {
                    const isCurrent = activePage === page.pageNumber;
                    return (
                      <button
                        key={page.pageNumber}
                        type="button"
                        onClick={() => scrollToPage(page.pageNumber)}
                        className={`w-full text-left p-3 rounded-xl border transition-all duration-200 cursor-pointer flex items-start gap-3 ${
                          isCurrent
                            ? "bg-brand-50 border-brand-500 shadow-2xs translate-x-1"
                            : "bg-surface-1/70 border-line/70 hover:bg-surface-2 hover:border-line hover:translate-x-0.5"
                        }`}
                      >
                        <span
                          className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-300 ${
                            isCurrent
                              ? "bg-brand-600 text-white shadow-2xs scale-105"
                              : "bg-surface-2 text-muted"
                          }`}
                        >
                          {page.pageNumber}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1">
                            <p
                              className={`text-xs font-semibold truncate transition-colors ${
                                isCurrent ? "text-brand-900" : "text-ink"
                              }`}
                            >
                              {page.title}
                            </p>
                            {isCurrent && (
                              <span className="w-2 h-2 rounded-full bg-brand-600 shrink-0 animate-pulse" />
                            )}
                          </div>
                          <p className="text-[11px] text-muted truncate mt-0.5">
                            {page.subtitle}
                          </p>
                          <span className="text-[10px] font-mono text-brand-700/80 mt-1 inline-block">
                            {page.badge}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </nav>

                {/* Prev / Next Page Steppers */}
                <div className="pt-2 border-t border-line flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => scrollToPage(Math.max(1, activePage - 1))}
                    disabled={activePage === 1}
                    className="flex-1 inline-flex items-center justify-center gap-1 py-2 px-3 rounded-lg border border-line bg-surface-1 text-xs font-semibold text-ink hover:bg-surface-2 disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToPage(Math.min(7, activePage + 1))}
                    disabled={activePage === 7}
                    className="flex-1 inline-flex items-center justify-center gap-1 py-2 px-3 rounded-lg bg-brand-600 text-xs font-semibold text-white hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs active:scale-95"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Agreement Status */}
                <div className="bg-surface-1 rounded-xl p-3 border border-line/80 text-[11px] text-muted space-y-2">
                  <div className="flex items-center gap-1.5 text-brand-800 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-600" />
                    <span>Governing Terms</span>
                  </div>
                  <p className="leading-relaxed">
                    Upon logging in or signing up, you agree to all terms across all 7 pages.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* ============================================================ */}
          {/* 7 MULTI-PAGE DOCUMENT SHEETS (Full verbatim legal content)   */}
          {/* ============================================================ */}
          <main className="lg:col-span-8 xl:col-span-9 space-y-10 sm:space-y-12">
            {/* ------------------------------------------------------------ */}
            {/* PAGE 1 OF 7                                                  */}
            {/* ------------------------------------------------------------ */}
            <article
              id="page-1"
              style={{ animationDelay: "0ms" }}
              className={getArticleClass(1)}
            >
              {/* Official Page Sheet Header */}
              <div className="border-b border-line pb-4 flex items-center justify-between text-[11px] font-mono text-muted uppercase tracking-wider">
                <span className="text-brand-800 font-bold">Land Bank of the Philippines · iAccess Internet Banking</span>
                <span className="bg-surface-2 px-2.5 py-1 rounded-md text-ink font-semibold">Page 1 of 7</span>
              </div>

              {/* Title Preamble */}
              <div className="text-center space-y-2 pt-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-100 text-brand-800 rounded-full text-xs font-semibold uppercase tracking-wider mb-1">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Official Terms of Service</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-900 tracking-tight">
                  LANDBANK iAccess Terms and Conditions
                </h2>
                <p className="text-xs text-muted max-w-lg mx-auto">
                  Terms and Conditions Governing the Availment and Use of LANDBANK iAccess Services
                </p>
              </div>

              <div className="bg-surface-1 border border-line/80 rounded-xl p-4 sm:p-5 text-xs sm:text-sm text-ink italic leading-relaxed">
                The following Terms and Conditions contain significant agreements involving all users of LANDBANK iAccess. By ticking &quot;I Agree&quot;, it is understood that the iAccess user had thoroughly reviewed and fully understands the following terms and conditions:
              </div>

              {/* Section I. Features of iAccess Services */}
              <section className="space-y-6 pt-2">
                <div className="border-b border-brand-200 pb-2 flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-semibold text-brand-800">
                    I. FEATURES OF iACCESS SERVICES
                  </h3>
                  <span className="text-xs font-mono text-muted">Section I</span>
                </div>

                {/* A. Accessibility */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-ink">A. Accessibility</h4>
                  <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-ink/90 pl-1">
                    {ACCESSIBILITY_ITEMS.map((item, idx) => (
                      <li key={idx} className="leading-relaxed pl-1">{item}</li>
                    ))}
                  </ol>
                </div>

                {/* B. iAccess Security Policy (Part 1) */}
                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-semibold text-ink">B. iAccess Security Policy</h4>
                  <p className="text-xs sm:text-sm text-ink/90 leading-relaxed">
                    At LANDBANK, I/we are always assured that all my/our digital banking transactions are safe and secure. The iAccess takes great measures to ensure that its security practices conform to the best banking standards and adequately respond to all my/our needs.
                  </p>
                  <p className="text-xs sm:text-sm text-ink/90 leading-relaxed">
                    To ensure that the privacy of my/our account information and banking transactions are maintained, LANDBANK has set forth the following:
                  </p>

                  {/* Topic 1: Account Access Enrollment */}
                  <div className="bg-surface-1 border border-line rounded-xl p-4 sm:p-5 space-y-2">
                    <h5 className="text-xs sm:text-sm font-semibold text-brand-700">Account Access Enrollment</h5>
                    <div className="text-xs text-ink/80 whitespace-pre-line leading-relaxed">
                      {SECURITY_POLICY_TOPICS[0].content}
                    </div>
                  </div>

                  {/* Topic 2: Third-Party Agreements (Fund Transfer) */}
                  <div className="bg-surface-1 border border-line rounded-xl p-4 sm:p-5 space-y-2">
                    <h5 className="text-xs sm:text-sm font-semibold text-brand-700">Third-Party Agreements (Part a. Fund Transfer)</h5>
                    <p className="text-xs text-ink/80 leading-relaxed">
                      Third-Party accounts refer to bank and bills payment biller subscriber/reference numbers not owned by the iAccess accountholder and its enrolment is optional. Enrolment and transaction procedure is as follows:
                    </p>
                    <div className="text-xs text-ink/80 pl-2 space-y-1">
                      <p><strong>a. Fund Transfer:</strong></p>
                      <p className="pl-3">i. Third-Party Fund Transfer Enrollment may be requested from any LANDBANK Branch through the submission of the duly accomplished Enrollment and Maintenance Agreement Form.</p>
                      <p className="pl-3">ii. Fund Transfer Transactions may be performed for enrolled and non-enrolled eligible accounts:</p>
                      <p className="pl-6">a) Do not require One Time-PIN (OTP) for enrolled account</p>
                      <p className="pl-6">b) Require OTP sent to the registered mobile number of the client in iAccess for non-enrolled accounts</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Official Page Sheet Footer */}
              <div className="border-t border-line pt-4 flex items-center justify-between text-[11px] text-muted">
                <span>Terms_and_Conditions.pdf</span>
                <span className="font-mono font-semibold">Page 1 of 7</span>
              </div>
            </article>

            {/* ------------------------------------------------------------ */}
            {/* PAGE 2 OF 7                                                  */}
            {/* ------------------------------------------------------------ */}
            <article
              id="page-2"
              style={{ animationDelay: "75ms" }}
              className={getArticleClass(2)}
            >
              {/* Header */}
              <div className="border-b border-line pb-4 flex items-center justify-between text-[11px] font-mono text-muted uppercase tracking-wider">
                <span className="text-brand-800 font-bold">LANDBANK iAccess · Security Policy & Service Rules</span>
                <span className="bg-surface-2 px-2.5 py-1 rounded-md text-ink font-semibold">Page 2 of 7</span>
              </div>

              <section className="space-y-6">
                {/* B. iAccess Security Policy (Part 2) */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-ink">B. iAccess Security Policy (Continued)</h4>

                  {/* Bills Payment part of Third-party */}
                  <div className="bg-surface-1 border border-line rounded-xl p-4 sm:p-5 space-y-2">
                    <h5 className="text-xs sm:text-sm font-semibold text-brand-700">Third-Party Agreements (Part b. Bills Payment)</h5>
                    <div className="text-xs text-ink/80 pl-2 space-y-1">
                      <p><strong>b. Bills Payment may be performed for enrolled and non-enrolled billers:</strong></p>
                      <p className="pl-3">i. Third-party bills payment enrollment may be requested from any LANDBANK Branch through the submission of the duly accomplished Enrollment and Maintenance Agreement Form or through Manage Billers module of iAccess.</p>
                      <p className="pl-3">ii. Bills payment transactions require OTP for enrolled and non-enrolled bills payment biller subscriber/reference numbers.</p>
                      <p className="pt-1 italic font-medium text-brand-800">
                        With this policy, I/we are assured that LANDBANK shall honor requests for transfers/payments only to and from those that I/we have signed for.
                      </p>
                    </div>
                  </div>

                  {/* Topics 3 to 6 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SECURITY_POLICY_TOPICS.slice(2).map((topic) => (
                      <div key={topic.name} className="bg-surface-1 border border-line rounded-xl p-4 space-y-1.5">
                        <h5 className="text-xs font-semibold text-brand-700">{topic.name}</h5>
                        <p className="text-xs text-ink/80 leading-relaxed whitespace-pre-line">
                          {topic.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* C. Services and Business Rules (Part 1: Items 1 to 5) */}
                <div className="space-y-4 pt-4 border-t border-line">
                  <div className="border-b border-brand-200 pb-2">
                    <h4 className="text-sm font-semibold text-brand-800">C. Services and Business Rules (Items 1 to 5)</h4>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-ink/90">
                    {BUSINESS_RULES_ITEMS.slice(0, 5).map((item, idx) => (
                      <li key={idx} className="leading-relaxed bg-surface-1 p-3 rounded-lg border border-line/70">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Footer */}
              <div className="border-t border-line pt-4 flex items-center justify-between text-[11px] text-muted">
                <span>Terms_and_Conditions.pdf</span>
                <span className="font-mono font-semibold">Page 2 of 7</span>
              </div>
            </article>

            {/* ------------------------------------------------------------ */}
            {/* PAGE 3 OF 7                                                  */}
            {/* ------------------------------------------------------------ */}
            <article
              id="page-3"
              style={{ animationDelay: "150ms" }}
              className={getArticleClass(3)}
            >
              <div className="border-b border-line pb-4 flex items-center justify-between text-[11px] font-mono text-muted uppercase tracking-wider">
                <span className="text-brand-800 font-bold">LANDBANK iAccess · Business Rules (6-10) & General Terms</span>
                <span className="bg-surface-2 px-2.5 py-1 rounded-md text-ink font-semibold">Page 3 of 7</span>
              </div>

              <section className="space-y-6">
                {/* C. Services and Business Rules (Part 2: Items 6 to 10) */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-ink">C. Services and Business Rules (Items 6 to 10)</h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-ink/90">
                    {BUSINESS_RULES_ITEMS.slice(5).map((item, idx) => (
                      <li key={idx} className="leading-relaxed bg-surface-1 p-3 rounded-lg border border-line/70">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* II. General Terms and Conditions (Clauses A to L) */}
                <div className="space-y-4 pt-4 border-t border-line">
                  <div className="border-b border-brand-200 pb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-brand-800">
                      II. GENERAL TERMS AND CONDITIONS (Clauses A to L)
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {GENERAL_TERMS_CLAUSES.slice(0, 12).map((clause) => (
                      <div key={clause.letter} className="flex items-start gap-3 text-xs sm:text-sm text-ink/90 leading-relaxed bg-surface-1/40 p-2.5 rounded-lg border border-line/50">
                        <span className="font-bold text-brand-800 shrink-0 w-8">{clause.letter}.</span>
                        <p>{clause.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="border-t border-line pt-4 flex items-center justify-between text-[11px] text-muted">
                <span>Terms_and_Conditions.pdf</span>
                <span className="font-mono font-semibold">Page 3 of 7</span>
              </div>
            </article>

            {/* ------------------------------------------------------------ */}
            {/* PAGE 4 OF 7                                                  */}
            {/* ------------------------------------------------------------ */}
            <article
              id="page-4"
              style={{ animationDelay: "225ms" }}
              className={getArticleClass(4)}
            >
              <div className="border-b border-line pb-4 flex items-center justify-between text-[11px] font-mono text-muted uppercase tracking-wider">
                <span className="text-brand-800 font-bold">LANDBANK iAccess · General Terms & Conditions (M to Y)</span>
                <span className="bg-surface-2 px-2.5 py-1 rounded-md text-ink font-semibold">Page 4 of 7</span>
              </div>

              <section className="space-y-4">
                <div className="border-b border-brand-200 pb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-brand-800">
                    II. GENERAL TERMS AND CONDITIONS (Clauses M to Y)
                  </h3>
                </div>

                <div className="space-y-3">
                  {GENERAL_TERMS_CLAUSES.slice(12, 25).map((clause) => (
                    <div key={clause.letter} className="flex items-start gap-3 text-xs sm:text-sm text-ink/90 leading-relaxed bg-surface-1/40 p-2.5 rounded-lg border border-line/50">
                      <span className="font-bold text-brand-800 shrink-0 w-8">{clause.letter}.</span>
                      <p>{clause.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="border-t border-line pt-4 flex items-center justify-between text-[11px] text-muted">
                <span>Terms_and_Conditions.pdf</span>
                <span className="font-mono font-semibold">Page 4 of 7</span>
              </div>
            </article>

            {/* ------------------------------------------------------------ */}
            {/* PAGE 5 OF 7                                                  */}
            {/* ------------------------------------------------------------ */}
            <article
              id="page-5"
              style={{ animationDelay: "300ms" }}
              className={getArticleClass(5)}
            >
              <div className="border-b border-line pb-4 flex items-center justify-between text-[11px] font-mono text-muted uppercase tracking-wider">
                <span className="text-brand-800 font-bold">LANDBANK iAccess · General Terms & Conditions (Z to OO)</span>
                <span className="bg-surface-2 px-2.5 py-1 rounded-md text-ink font-semibold">Page 5 of 7</span>
              </div>

              <section className="space-y-4">
                <div className="border-b border-brand-200 pb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-brand-800">
                    II. GENERAL TERMS AND CONDITIONS (Clauses Z to OO)
                  </h3>
                </div>

                <div className="space-y-3">
                  {GENERAL_TERMS_CLAUSES.slice(25, 41).map((clause) => (
                    <div key={clause.letter} className="flex items-start gap-3 text-xs sm:text-sm text-ink/90 leading-relaxed bg-surface-1/40 p-2.5 rounded-lg border border-line/50">
                      <span className="font-bold text-brand-800 shrink-0 w-8">{clause.letter}.</span>
                      <p>{clause.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="border-t border-line pt-4 flex items-center justify-between text-[11px] text-muted">
                <span>Terms_and_Conditions.pdf</span>
                <span className="font-mono font-semibold">Page 5 of 7</span>
              </div>
            </article>

            {/* ------------------------------------------------------------ */}
            {/* PAGE 6 OF 7                                                  */}
            {/* ------------------------------------------------------------ */}
            <article
              id="page-6"
              style={{ animationDelay: "375ms" }}
              className={getArticleClass(6)}
            >
              <div className="border-b border-line pb-4 flex items-center justify-between text-[11px] font-mono text-muted uppercase tracking-wider">
                <span className="text-brand-800 font-bold">LANDBANK iAccess · Responsibilities & Customer Care</span>
                <span className="bg-surface-2 px-2.5 py-1 rounded-md text-ink font-semibold">Page 6 of 7</span>
              </div>

              <section className="space-y-6">
                {/* Clause PP */}
                <div className="space-y-4">
                  <div className="border-b border-brand-200 pb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-brand-800">
                      PP. Accountholder&apos;s Responsibilities
                    </h3>
                  </div>
                  <div className="bg-surface-1 border border-line rounded-xl p-5 space-y-3 text-xs sm:text-sm text-ink leading-relaxed">
                    <p className="font-medium">
                      In order to help ensure security in my/our transactions and personal information, I/We agree to strictly comply with the following security measures, as may be amended or supplemented by LANDBANK from time to time:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-ink/90 pl-1">
                      <li>To change my/our password/Mobile PIN from time to time as I/we deem necessary;</li>
                      <li>To ensure that the password/Mobile PIN selected is not related to any readily accessible personal data such as my/our name, birth date, address, phone number, identification card number, or an obvious combination of letters and numbers, including sequential numbers (e.g. 123456), or one which can easily be guessed by someone else such as nicknames, places or events and dates of events closely associated with me/us;</li>
                      <li>Not to keep a written or electronic record of the username and password/Mobile PIN, or disclose these to any other person, including family, co-employees; and</li>
                      <li>To keep strictly confidential and not to disclose to anyone my/our personal information such as address, mother&apos;s maiden name, telephone number, social security number, bank account number, e-mail address and other personal data.</li>
                      <li>Shall not use or permit the use of the Client&apos;s username and/or password in whole or in part for any purpose, whether legal or illegal, other than as specifically intended to carry out Client&apos;s banking transactions and inquiries via iAccess.</li>
                    </ol>

                    <div className="pt-2 border-t border-line/60 text-xs text-muted space-y-2">
                      <p>
                        I/We understand that LANDBANK may send or communicate with me/us via text messages (SMS) through my/our SMS-enabled mobile phone, email messages and/or other electronic alerts, reminders, and/or notices from time-to-time concerning matters relating to my/our Account by the use of any mobile number and/or email address which I/we provided to LANDBANK.
                      </p>
                      <p className="font-semibold text-brand-900">
                        Likewise, I/we fully understand that in communicating to me/us through SMS/Email, LANDBANK will, in no case, ask me/us any information about my/our Account. Hence, I/we acknowledge that it is my/our responsibility to ensure the security of my/our mobile phone as well as my/our personal email address and to inform LANDBANK of any changes in a timely manner.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section III. Customer Care Support */}
                <div className="space-y-4 pt-4 border-t border-line">
                  <div className="border-b border-brand-200 pb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-brand-800">
                      III. CUSTOMER CARE SUPPORT
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-ink leading-relaxed">
                    LANDBANK can be reached through the following facilities/channels on your concerns and complaints regarding your accounts:
                  </p>

                  <ul className="list-disc list-inside text-xs sm:text-sm text-ink/90 pl-2 space-y-1">
                    {CUSTOMER_CARE_DATA.channels.map((ch, idx) => (
                      <li key={idx}>{ch}</li>
                    ))}
                  </ul>

                  <div className="bg-surface-1 border border-line rounded-xl p-4 sm:p-5 text-xs sm:text-sm space-y-3">
                    <p>
                      For immediate concerns, you may call our 24/7 LANDBANK Customer Care Hotline at{" "}
                      <strong className="font-mono text-brand-800">{CUSTOMER_CARE_DATA.hotlines.ncr}</strong> or PLDT Domestic Toll Free at{" "}
                      <strong className="font-mono text-brand-800">{CUSTOMER_CARE_DATA.hotlines.domesticTollFree}</strong> or email at{" "}
                      <a href={`mailto:${CUSTOMER_CARE_DATA.hotlines.email}`} className="text-brand-700 hover:underline font-semibold">
                        {CUSTOMER_CARE_DATA.hotlines.email}
                      </a>.
                    </p>
                    <p className="text-muted text-xs leading-relaxed">
                      LANDBANK is also regulated by Bangko Sentral ng Pilipinas, with contact number {CUSTOMER_CARE_DATA.hotlines.bspContact} and email address {CUSTOMER_CARE_DATA.hotlines.bspEmail}, BSP Webchat: {CUSTOMER_CARE_DATA.hotlines.bspWebchat}, SMS: {CUSTOMER_CARE_DATA.hotlines.bspSms}, and BSP Facebook: {CUSTOMER_CARE_DATA.hotlines.bspFacebook}.
                    </p>
                  </div>
                </div>
              </section>

              <div className="border-t border-line pt-4 flex items-center justify-between text-[11px] text-muted">
                <span>Terms_and_Conditions.pdf</span>
                <span className="font-mono font-semibold">Page 6 of 7</span>
              </div>
            </article>

            {/* ------------------------------------------------------------ */}
            {/* PAGE 7 OF 7                                                  */}
            {/* ------------------------------------------------------------ */}
            <article
              id="page-7"
              style={{ animationDelay: "450ms" }}
              className={getArticleClass(7)}
            >
              <div className="border-b border-line pb-4 flex items-center justify-between text-[11px] font-mono text-muted uppercase tracking-wider">
                <span className="text-brand-800 font-bold">LANDBANK iAccess · Data Privacy Consent & End of Document</span>
                <span className="bg-surface-2 px-2.5 py-1 rounded-md text-ink font-semibold">Page 7 of 7</span>
              </div>

              <section className="space-y-6">
                <div className="border-b border-brand-200 pb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-brand-800">
                    IV. DATA PRIVACY CONSENT
                  </h3>
                </div>

                <div className="text-xs sm:text-sm text-ink/90 whitespace-pre-line leading-relaxed bg-surface-1 p-5 rounded-xl border border-line">
                  {DATA_PRIVACY_DATA.content}
                </div>

                {/* Signature Blocks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                  {DATA_PRIVACY_DATA.signatures.map((sig, idx) => (
                    <div key={idx} className="text-center pt-10 border-t-2 border-ink/30">
                      <p className="text-xs font-bold text-ink uppercase tracking-wider">{sig}</p>
                      <span className="text-[10px] text-muted">Client / Authorized Signatory</span>
                    </div>
                  ))}
                </div>

                {/* Page 7 Verbatim Document Footer */}
                <div className="bg-surface-3/90 rounded-xl p-5 border border-line text-xs text-muted space-y-2 mt-6">
                  <p className="font-bold text-ink">
                    For inquiries/concerns, you may contact LANDBANK through the following:
                  </p>
                  <p>{DATA_PRIVACY_DATA.documentFooter.customerCare}</p>
                  <p className="font-semibold text-ink pt-1">
                    {DATA_PRIVACY_DATA.documentFooter.bspRegulated}
                  </p>
                  <p>{DATA_PRIVACY_DATA.documentFooter.bspOnlineBuddy}</p>
                </div>
              </section>

              {/* End of Document Confirmation & Actions */}
              <div className="no-print pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-brand-800 font-semibold">
                  <CheckCircle className="w-5 h-5 text-brand-600" />
                  <span>You have reached the end of the 7-page agreement.</span>
                </div>
                <Link
                  href="/"
                  className="w-full sm:w-auto px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors text-center shadow-xs"
                >
                  I Understand and Return to Login
                </Link>
              </div>

              {/* Official Page Sheet Footer */}
              <div className="border-t border-line pt-4 flex items-center justify-between text-[11px] text-muted">
                <span>Terms_and_Conditions.pdf · Complete 7 Pages</span>
                <span className="font-mono font-bold text-brand-800">Page 7 of 7 · End of Document</span>
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
