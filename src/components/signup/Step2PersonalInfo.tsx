"use client";

import { COUNTRIES } from "@/data/navigation";
import { SignUpFormData } from "@/types/signup";

export function Step2PersonalInfo({
  data,
  onChange,
}: {
  data: SignUpFormData;
  onChange: (field: string, value: string | boolean) => void;
}) {
  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      <div className="border-b border-line pb-3">
        <h3 className="text-base sm:text-lg font-semibold text-ink">
          Step 2: Please enter your Personal Information.
        </h3>
        <p className="text-xs text-muted mt-1">
          Provide your accurate personal, residence, and contact information as recorded with the Bank.
        </p>
      </div>

      {/* A) Personal Details */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-line/60 pb-2">
          <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-800 text-xs font-bold flex items-center justify-center">
            A
          </span>
          <h4 className="text-sm font-semibold text-ink uppercase tracking-wide">Personal Details</h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label htmlFor="firstName" className="block text-xs font-semibold text-ink">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              value={data.firstName || ""}
              onChange={(e) => onChange("firstName", e.target.value)}
              placeholder="Juan"
              className="block w-full rounded-lg border border-line bg-surface-1 py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="middleName" className="block text-xs font-semibold text-ink">
              Middle Name <span className="text-red-500">*</span>
            </label>
            <input
              id="middleName"
              type="text"
              value={data.middleName || ""}
              onChange={(e) => onChange("middleName", e.target.value)}
              placeholder="Protacio"
              className="block w-full rounded-lg border border-line bg-surface-1 py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="lastName" className="block text-xs font-semibold text-ink">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              id="lastName"
              type="text"
              value={data.lastName || ""}
              onChange={(e) => onChange("lastName", e.target.value)}
              placeholder="Dela Cruz"
              className="block w-full rounded-lg border border-line bg-surface-1 py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="motherMaidenName" className="block text-xs font-semibold text-ink">
              Mother&apos;s Maiden Name <span className="text-red-500">*</span>
            </label>
            <input
              id="motherMaidenName"
              type="text"
              value={data.motherMaidenName || ""}
              onChange={(e) => onChange("motherMaidenName", e.target.value)}
              placeholder="Mother's birth surname"
              className="block w-full rounded-lg border border-line bg-surface-1 py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="spouseFullName" className="block text-xs font-semibold text-ink">
              Spouse&apos;s Full Name
            </label>
            <input
              id="spouseFullName"
              type="text"
              value={data.spouseFullName || ""}
              onChange={(e) => onChange("spouseFullName", e.target.value)}
              placeholder="Leave blank or n.a. if not applicable"
              className="block w-full rounded-lg border border-line bg-surface-1 py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="gender" className="block text-xs font-semibold text-ink">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              id="gender"
              value={data.gender || "Male"}
              onChange={(e) => onChange("gender", e.target.value)}
              className="block w-full rounded-lg border border-line bg-surface-1 py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="civilStatus" className="block text-xs font-semibold text-ink">
              Civil Status <span className="text-red-500">*</span>
            </label>
            <select
              id="civilStatus"
              value={data.civilStatus || "Single"}
              onChange={(e) => onChange("civilStatus", e.target.value)}
              className="block w-full rounded-lg border border-line bg-surface-1 py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            >
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Widowed">Widowed</option>
              <option value="Separated">Separated</option>
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="birthDate" className="block text-xs font-semibold text-ink">
              Birth Date <span className="text-red-500">*</span>
            </label>
            <input
              id="birthDate"
              type="date"
              value={data.birthDate || ""}
              onChange={(e) => onChange("birthDate", e.target.value)}
              className="block w-full rounded-lg border border-line bg-surface-1 py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="tin" className="block text-xs font-semibold text-ink">
              TIN
            </label>
            <input
              id="tin"
              type="text"
              value={data.tin || ""}
              onChange={(e) => onChange("tin", e.target.value)}
              placeholder="e.g. 123-456-789-000 or n.a."
              className="block w-full rounded-lg border border-line bg-surface-1 py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            />
          </div>
        </div>
      </div>

      {/* B) Complete Address */}
      <div className="space-y-4 pt-4 border-t border-line/60">
        <div className="flex items-center gap-2 border-b border-line/60 pb-2">
          <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-800 text-xs font-bold flex items-center justify-center">
            B
          </span>
          <h4 className="text-sm font-semibold text-ink uppercase tracking-wide">Complete Address</h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label htmlFor="street" className="block text-xs font-semibold text-ink">
              No./Street <span className="text-red-500">*</span>
            </label>
            <input
              id="street"
              type="text"
              value={data.street || ""}
              onChange={(e) => onChange("street", e.target.value)}
              placeholder="123 Mabini St."
              className="block w-full rounded-lg border border-line bg-surface-1 py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="barangay" className="block text-xs font-semibold text-ink">
              Brgy/Subdivision <span className="text-red-500">*</span>
            </label>
            <input
              id="barangay"
              type="text"
              value={data.barangay || ""}
              onChange={(e) => onChange("barangay", e.target.value)}
              placeholder="Brgy. San Antonio"
              className="block w-full rounded-lg border border-line bg-surface-1 py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="city" className="block text-xs font-semibold text-ink">
              City/Municipality <span className="text-red-500">*</span>
            </label>
            <input
              id="city"
              type="text"
              value={data.city || ""}
              onChange={(e) => onChange("city", e.target.value)}
              placeholder="Pasig City"
              className="block w-full rounded-lg border border-line bg-surface-1 py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="province" className="block text-xs font-semibold text-ink">
              Province <span className="text-red-500">*</span>
            </label>
            <input
              id="province"
              type="text"
              value={data.province || ""}
              onChange={(e) => onChange("province", e.target.value)}
              placeholder="Metro Manila"
              className="block w-full rounded-lg border border-line bg-surface-1 py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="zipCode" className="block text-xs font-semibold text-ink">
              Zip Code
            </label>
            <input
              id="zipCode"
              type="text"
              value={data.zipCode || ""}
              onChange={(e) => onChange("zipCode", e.target.value)}
              placeholder="1600"
              className="block w-full rounded-lg border border-line bg-surface-1 py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="country" className="block text-xs font-semibold text-ink">
              Country <span className="text-red-500">*</span>
            </label>
            <select
              id="country"
              value={data.country || "PHILIPPINES"}
              onChange={(e) => onChange("country", e.target.value)}
              className="block w-full rounded-lg border border-line bg-surface-1 py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            >
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* C) Contact Information */}
      <div className="space-y-4 pt-4 border-t border-line/60">
        <div className="flex items-center gap-2 border-b border-line/60 pb-2">
          <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-800 text-xs font-bold flex items-center justify-center">
            C
          </span>
          <h4 className="text-sm font-semibold text-ink uppercase tracking-wide">Contact Information</h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label htmlFor="email" className="block text-xs font-semibold text-ink">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={data.email || ""}
              onChange={(e) => onChange("email", e.target.value)}
              placeholder="juan.delacruz@email.com"
              className="block w-full rounded-lg border border-line bg-surface-1 py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="altEmail" className="block text-xs font-semibold text-ink">
              Alternate Email Address
            </label>
            <input
              id="altEmail"
              type="email"
              value={data.altEmail || ""}
              onChange={(e) => onChange("altEmail", e.target.value)}
              placeholder="juan.delacruz@email.com"
              className="block w-full rounded-lg border border-line bg-surface-1 py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="homeTelNo" className="block text-xs font-semibold text-ink">
              Home Tel. No.
            </label>
            <input
              id="homeTelNo"
              type="text"
              value={data.homeTelNo || ""}
              onChange={(e) => onChange("homeTelNo", e.target.value)}
              placeholder="e.g., 5738888"
              className="block w-full rounded-lg border border-line bg-surface-1 py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="mobileCountryCode" className="block text-xs font-semibold text-ink">
              Mobile Country Code <span className="text-red-500">*</span>
            </label>
            <select
              id="mobileCountryCode"
              value={data.mobileCountryCode || "PHILIPPINES"}
              onChange={(e) => onChange("mobileCountryCode", e.target.value)}
              className="block w-full rounded-lg border border-line bg-surface-1 py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            >
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="mobileNo" className="block text-xs font-semibold text-ink">
              Mobile No. <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-lg shadow-2xs">
              <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-line bg-surface-2 text-xs font-mono font-bold text-muted shrink-0">
                +63
              </span>
              <input
                id="mobileNo"
                type="text"
                maxLength={10}
                value={data.mobileNo || ""}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "");
                  onChange("mobileNo", val);
                }}
                placeholder="9XXXXXXXXX"
                className="block w-full min-w-0 rounded-r-lg border border-line bg-surface-1 py-2 px-3 text-xs sm:text-sm font-mono text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <p className="text-[10px] text-muted">e.g., 9175738888</p>
          </div>

          <div className="space-y-1">
            <label htmlFor="businessName" className="block text-xs font-semibold text-ink">
              Business Name
            </label>
            <input
              id="businessName"
              type="text"
              value={data.businessName || ""}
              onChange={(e) => onChange("businessName", e.target.value)}
              placeholder="Leave blank or n.a."
              className="block w-full rounded-lg border border-line bg-surface-1 py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="space-y-1 sm:col-span-2">
            <label htmlFor="businessAddress" className="block text-xs font-semibold text-ink">
              Business Address
            </label>
            <input
              id="businessAddress"
              type="text"
              value={data.businessAddress || ""}
              onChange={(e) => onChange("businessAddress", e.target.value)}
              placeholder="Leave blank or n.a."
              className="block w-full rounded-lg border border-line bg-surface-1 py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="faxNo" className="block text-xs font-semibold text-ink">
              Fax No.
            </label>
            <input
              id="faxNo"
              type="text"
              value={data.faxNo || ""}
              onChange={(e) => onChange("faxNo", e.target.value)}
              placeholder="Optional"
              className="block w-full rounded-lg border border-line bg-surface-1 py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="officeTelNo" className="block text-xs font-semibold text-ink">
              Office Tel. No.
            </label>
            <input
              id="officeTelNo"
              type="text"
              value={data.officeTelNo || ""}
              onChange={(e) => onChange("officeTelNo", e.target.value)}
              placeholder="Optional"
              className="block w-full rounded-lg border border-line bg-surface-1 py-2 px-3 text-xs sm:text-sm text-ink focus:border-brand-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

