"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { Step1AtmDetails } from "./Step1AtmDetails";
import { Step2PersonalInfo } from "./Step2PersonalInfo";
import { Step3SecurityQuestions } from "./Step3SecurityQuestions";
import { Step4PreferredId } from "./Step4PreferredId";

const STEPS = [
  { id: 1, name: "ATM Details" },
  { id: 2, name: "Personal Info" },
  { id: 3, name: "Security Questions" },
  { id: 4, name: "iAccess ID" },
];

export function SignUpWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>({
    country: "PHILIPPINES",
    gender: "Male",
    civilStatus: "Single",
    mobileCountryCode: "PHILIPPINES",
    jai: "00",
    secQuestion1: "Select one",
    secQuestion2: "Select one",
    secQuestion3: "Select one",
    captchaVerified: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleFieldChange = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const validateCurrentStep = (): boolean => {
    if (currentStep === 1) {
      if (!formData.atmAccountNo || formData.atmAccountNo.length < 10) {
        setErrorMessage("Please enter your complete 10-digit ATM Account Number.");
        return false;
      }
      if (!formData.atmPin) {
        setErrorMessage("Please enter your ATM PIN.");
        return false;
      }
    }
    if (currentStep === 2) {
      if (!formData.firstName || !formData.lastName || !formData.motherMaidenName) {
        setErrorMessage("Please complete all required Personal Details marked with an asterisk (*).");
        return false;
      }
      if (!formData.street || !formData.barangay || !formData.city || !formData.province) {
        setErrorMessage("Please enter your Complete Address details.");
        return false;
      }
      if (!formData.email || !formData.mobileNo) {
        setErrorMessage("Please provide your Email Address and Mobile Number.");
        return false;
      }
    }
    if (currentStep === 3) {
      if (
        formData.secQuestion1 === "Select one" || !formData.secAnswer1 ||
        formData.secQuestion2 === "Select one" || !formData.secAnswer2 ||
        formData.secQuestion3 === "Select one" || !formData.secAnswer3
      ) {
        setErrorMessage("Please select all 3 security questions and provide matching answers.");
        return false;
      }
    }
    if (currentStep === 4) {
      if (!formData.preferredId || formData.preferredId.length < 6) {
        setErrorMessage("Please enter a valid preferred iAccess ID (at least 6 characters).");
        return false;
      }
      if (!formData.password || formData.password.length < 7) {
        setErrorMessage("Please enter a password that meets the 7 to 15 character criteria.");
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        setErrorMessage("Passwords do not match. Please verify your password.");
        return false;
      }
      if (!formData.captchaVerified) {
        setErrorMessage("Please verify that you are not a robot.");
        return false;
      }
    }
    setErrorMessage(null);
    return true;
  };

  const handleNext = () => {
    if (!validateCurrentStep()) {
      window.scrollTo({ top: 100, behavior: "smooth" });
      return;
    }
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    setErrorMessage(null);
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateCurrentStep()) {
      window.scrollTo({ top: 100, behavior: "smooth" });
      return;
    }
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-line p-5 sm:p-10 text-center max-w-2xl mx-auto shadow-sm space-y-5 animate-in zoom-in-95">
        <div className="w-14 sm:w-16 h-14 sm:h-16 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 sm:w-10 h-8 sm:h-10" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-ink">Enrollment Information Submitted!</h2>
          <p className="text-xs sm:text-sm text-muted max-w-md mx-auto leading-relaxed">
            Thank you for enrolling in LANDBANK iAccess. This is a frontend demo interface. In production, your information is verified against branch deposit records and an activation notice is sent via SMS.
          </p>
        </div>
        <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors"
          >
            Return to Login
          </Link>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="w-full sm:w-auto px-6 py-2.5 bg-surface-2 hover:bg-surface-3 text-ink rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            Review Form Data
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-line p-4 sm:p-8 lg:p-10 shadow-xs max-w-4xl mx-auto">
      {/* Top Banner Notice (verbatim from Content Map) */}
      <div className="mb-5 sm:mb-6 p-3 sm:p-3.5 bg-amber-50 border border-amber-200/80 rounded-xl flex items-start gap-2.5 sm:gap-3">
        <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <p className="text-[11px] sm:text-xs text-amber-900 leading-relaxed">
          <strong>Note:</strong> Items marked with asterisk (<span className="text-red-500 font-bold">*</span>) are required. Please type <span className="font-mono bg-white/80 px-1 rounded border border-amber-200">n.a.</span> if these items are not applicable.
        </p>
      </div>

      {/* Stepper Header */}
      <div className="mb-6 sm:mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
          {STEPS.map((s) => {
            const isActive = currentStep === s.id;
            const isPassed = currentStep > s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setErrorMessage(null);
                  setCurrentStep(s.id);
                }}
                className={`flex items-center gap-1.5 sm:gap-2 p-2 sm:p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                  isActive
                    ? "bg-brand-50 border-brand-500 text-brand-900 font-semibold shadow-2xs"
                    : isPassed
                    ? "bg-surface-1 border-line text-ink hover:bg-surface-2"
                    : "bg-surface-1/50 border-line/60 text-muted hover:bg-surface-1"
                }`}
              >
                <div
                  className={`w-5 sm:w-6 h-5 sm:h-6 rounded-full text-[11px] sm:text-xs font-bold flex items-center justify-center shrink-0 ${
                    isActive
                      ? "bg-brand-600 text-white"
                      : isPassed
                      ? "bg-brand-100 text-brand-800"
                      : "bg-surface-2 text-muted"
                  }`}
                >
                  {isPassed ? "✓" : s.id}
                </div>
                <span className="text-[11px] sm:text-xs truncate">{s.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Refined Error Message with Soft Red Background */}
      {errorMessage && (
        <div className="mb-5 p-3 bg-red-50 border border-red-200 text-red-800 rounded-lg text-xs font-medium flex items-center gap-2.5 shadow-2xs animate-in fade-in">
          <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-red-600">
            <AlertCircle className="w-3.5 h-3.5" />
          </div>
          <span className="leading-relaxed">{errorMessage}</span>
        </div>
      )}

      {/* Step Content */}
      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
        {currentStep === 1 && (
          <Step1AtmDetails data={formData} onChange={handleFieldChange} />
        )}
        {currentStep === 2 && (
          <Step2PersonalInfo data={formData} onChange={handleFieldChange} />
        )}
        {currentStep === 3 && (
          <Step3SecurityQuestions data={formData} onChange={handleFieldChange} />
        )}
        {currentStep === 4 && (
          <Step4PreferredId data={formData} onChange={handleFieldChange} />
        )}

        {/* Wizard Controls */}
        <div className="pt-5 sm:pt-6 border-t border-line flex items-center justify-between gap-3 sm:gap-4">
          <div>
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border border-line bg-surface-1 hover:bg-surface-2 text-ink rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                <span>Previous</span>
              </button>
            ) : (
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border border-line bg-surface-1 hover:bg-surface-2 text-ink rounded-lg text-xs sm:text-sm font-semibold transition-colors"
              >
                Cancel
              </Link>
            )}
          </div>

          <div>
            {currentStep < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-xs sm:text-sm font-semibold shadow-xs transition-colors cursor-pointer"
              >
                <span>Next Step</span>
                <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              </button>
            ) : (
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-5 sm:px-8 py-2 sm:py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-xs sm:text-sm font-semibold shadow-xs transition-colors cursor-pointer"
              >
                <span>Submit Enrollment</span>
                <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
