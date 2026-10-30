"use client";

import { X, CreditCard, Info } from "lucide-react";

interface JaiInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function JaiInfoModal({ isOpen, onClose }: JaiInfoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-xl max-w-md w-full shadow-xl border border-line overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="jai-modal-title"
      >
        <div className="bg-brand-700 text-white px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <Info className="w-5 h-5 text-brand-200 shrink-0" />
            <h3 id="jai-modal-title" className="text-sm sm:text-base">What is JAI (Joint Account Indicator)?</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6 space-y-4 text-xs sm:text-sm text-ink leading-relaxed">
          <p>
            The <strong>Joint Account Indicator (JAI)</strong> is a <strong>2-digit number</strong> (usually <code className="bg-surface-2 px-1.5 py-0.5 rounded text-brand-800 font-mono">00</code> for individual accounts) printed on your LANDBANK ATM card.
          </p>
          
          <div className="bg-surface-1 border border-line rounded-lg p-3 sm:p-4 space-y-2">
            <div className="flex items-center gap-2 text-brand-700 font-medium">
              <CreditCard className="w-4 h-4 shrink-0" />
              <span>Where to find it on your ATM card:</span>
            </div>
            <p className="text-xs text-muted">
              Look at the lower right front corner of your LANDBANK ATM Card, next to your 10-digit Account Number:
            </p>
            <div className="mt-2 bg-surface-2 border border-line/80 rounded p-2 text-center font-mono text-xs flex flex-wrap items-center justify-center gap-2">
              <span className="text-muted">Account No: </span>
              <span className="font-semibold text-ink">1234-5678-90</span>
              <span className="px-1.5 py-0.5 bg-brand-100 text-brand-800 font-bold rounded">JAI: 00</span>
            </div>
          </div>

          <p className="text-xs text-muted">
            For individual accounts, enter <strong>00</strong>. If you hold a joint account with multiple cardholders, enter the specific digit assigned to your card (e.g., 01 or 02).
          </p>
        </div>

        <div className="bg-surface-1 px-4 sm:px-5 py-3 border-t border-line flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            Got it, thanks
          </button>
        </div>
      </div>
    </div>
  );
}

