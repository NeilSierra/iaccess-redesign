"use client";

import { SECURITY_QUESTIONS } from "@/data/navigation";
import { SignUpFormData } from "@/types/signup";

export function Step3SecurityQuestions({
  data,
  onChange,
}: {
  data: SignUpFormData;
  onChange: (field: string, value: string | boolean) => void;
}) {
  return (
    <div className="space-y-5 sm:space-y-6 animate-in fade-in duration-200">
      <div className="border-b border-line pb-3">
        <h3 className="text-base sm:text-lg font-semibold text-ink">
          Step 3: Please provide your Security Questions and Answers below.
        </h3>
        <p className="text-xs text-muted mt-1 leading-relaxed">
          In case you forget your password, you will be asked to answer the security questions. For your security, it is advised that this information is known only to you.
        </p>
      </div>

      <div className="space-y-5 sm:space-y-6">
        {/* Question 1 */}
        <div className="bg-surface-1 border border-line rounded-xl p-3.5 sm:p-5 space-y-4">
          <div className="space-y-1">
            <label htmlFor="secQuestion1" className="block text-xs font-semibold text-ink">
              Security Question No. 1 <span className="text-red-500">*</span>
            </label>
            <select
              id="secQuestion1"
              value={data.secQuestion1 || "Select one"}
              onChange={(e) => onChange("secQuestion1", e.target.value)}
              className="block w-full rounded-lg border border-line bg-white py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            >
              {SECURITY_QUESTIONS.map((q) => (
                <option key={q} value={q}>{q}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            <div className="space-y-1">
              <label htmlFor="secAnswer1" className="block text-xs font-semibold text-ink">
                Answer No. 1 <span className="text-red-500">*</span>
              </label>
              <input
                id="secAnswer1"
                type="text"
                value={data.secAnswer1 || ""}
                onChange={(e) => onChange("secAnswer1", e.target.value)}
                placeholder="Your confidential answer"
                className="block w-full rounded-lg border border-line bg-white py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:outline-hidden focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="confirmAnswer1" className="block text-xs font-semibold text-ink">
                Confirm Answer No. 1 <span className="text-red-500">*</span>
              </label>
              <input
                id="confirmAnswer1"
                type="text"
                value={data.confirmAnswer1 || ""}
                onChange={(e) => onChange("confirmAnswer1", e.target.value)}
                placeholder="Confirm your answer"
                className="block w-full rounded-lg border border-line bg-white py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:outline-hidden focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className="bg-surface-1 border border-line rounded-xl p-3.5 sm:p-5 space-y-4">
          <div className="space-y-1">
            <label htmlFor="secQuestion2" className="block text-xs font-semibold text-ink">
              Security Question No. 2 <span className="text-red-500">*</span>
            </label>
            <select
              id="secQuestion2"
              value={data.secQuestion2 || "Select one"}
              onChange={(e) => onChange("secQuestion2", e.target.value)}
              className="block w-full rounded-lg border border-line bg-white py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            >
              {SECURITY_QUESTIONS.map((q) => (
                <option key={q} value={q}>{q}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            <div className="space-y-1">
              <label htmlFor="secAnswer2" className="block text-xs font-semibold text-ink">
                Answer No. 2 <span className="text-red-500">*</span>
              </label>
              <input
                id="secAnswer2"
                type="text"
                value={data.secAnswer2 || ""}
                onChange={(e) => onChange("secAnswer2", e.target.value)}
                placeholder="Your confidential answer"
                className="block w-full rounded-lg border border-line bg-white py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:outline-hidden focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="confirmAnswer2" className="block text-xs font-semibold text-ink">
                Confirm Answer No. 2 <span className="text-red-500">*</span>
              </label>
              <input
                id="confirmAnswer2"
                type="text"
                value={data.confirmAnswer2 || ""}
                onChange={(e) => onChange("confirmAnswer2", e.target.value)}
                placeholder="Confirm your answer"
                className="block w-full rounded-lg border border-line bg-white py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:outline-hidden focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className="bg-surface-1 border border-line rounded-xl p-3.5 sm:p-5 space-y-4">
          <div className="space-y-1">
            <label htmlFor="secQuestion3" className="block text-xs font-semibold text-ink">
              Security Question No. 3 <span className="text-red-500">*</span>
            </label>
            <select
              id="secQuestion3"
              value={data.secQuestion3 || "Select one"}
              onChange={(e) => onChange("secQuestion3", e.target.value)}
              className="block w-full rounded-lg border border-line bg-white py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            >
              {SECURITY_QUESTIONS.map((q) => (
                <option key={q} value={q}>{q}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            <div className="space-y-1">
              <label htmlFor="secAnswer3" className="block text-xs font-semibold text-ink">
                Answer No. 3 <span className="text-red-500">*</span>
              </label>
              <input
                id="secAnswer3"
                type="text"
                value={data.secAnswer3 || ""}
                onChange={(e) => onChange("secAnswer3", e.target.value)}
                placeholder="Your confidential answer"
                className="block w-full rounded-lg border border-line bg-white py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:outline-hidden focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="confirmAnswer3" className="block text-xs font-semibold text-ink">
                Confirm Answer No. 3 <span className="text-red-500">*</span>
              </label>
              <input
                id="confirmAnswer3"
                type="text"
                value={data.confirmAnswer3 || ""}
                onChange={(e) => onChange("confirmAnswer3", e.target.value)}
                placeholder="Confirm your answer"
                className="block w-full rounded-lg border border-line bg-white py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:outline-hidden focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
