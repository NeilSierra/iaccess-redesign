export interface TermsPageData {
  pageNumber: number;
  title: string;
  subtitle: string;
  badge: string;
}

export const TERMS_PAGES_META: TermsPageData[] = [
  {
    pageNumber: 1,
    title: "Features & Accessibility",
    subtitle: "Accessibility (1-4) & Security Enrollment",
    badge: "Section I-A & I-B"
  },
  {
    pageNumber: 2,
    title: "Security & Service Rules",
    subtitle: "OTP, TPP, Account Info, Bills Payment, FT",
    badge: "Section I-B & I-C (1-5)"
  },
  {
    pageNumber: 3,
    title: "Cards & General Terms (A–L)",
    subtitle: "Cards, Lock, Money Lock, eCommerce Act",
    badge: "Section I-C (6-10) & II (A-L)"
  },
  {
    pageNumber: 4,
    title: "General Terms (M–Y)",
    subtitle: "OTP Delays, AMLA, PST Cut-offs, Statement",
    badge: "Section II (M-Y)"
  },
  {
    pageNumber: 5,
    title: "General Terms (Z–OO)",
    subtitle: "Trace & Alert, Liabilities, BSP & PDIC Rules",
    badge: "Section II (Z-OO)"
  },
  {
    pageNumber: 6,
    title: "Accountholder & Customer Care",
    subtitle: "Clause PP Responsibilities & Support Hotlines",
    badge: "Section II-PP & Section III"
  },
  {
    pageNumber: 7,
    title: "Data Privacy Consent",
    subtitle: "DPA Rights, Consent Authorization & Signatures",
    badge: "Section IV & Signatures"
  }
];

