export interface NavItem {
  label: string;
  href: string;
}

export const HEADER_NAV_LINKS: NavItem[] = [
  { label: "About Us", href: "#about-us" },
  { label: "FAQs", href: "#faqs" },
  { label: "Security Policy", href: "/terms#security-policy" },
  { label: "Data Privacy Statement", href: "/terms#data-privacy" },
  { label: "Advisory on ATM Use", href: "#advisory-atm" },
  { label: "iAccess Features", href: "/terms#features" },
  { label: "Find Us", href: "#find-us" },
];

export const SECURITY_QUESTIONS = [
  "Select one",
  "What was the name of your first elementary school?",
  "What is your mother's middle name?",
  "In what city or town was your first job?",
  "What was the make and model of your first car?",
  "What is the name of the street where you grew up?",
  "What was your childhood nickname?",
  "What was the name of your favorite pet?",
  "What is your favorite book or movie?"
];

export const COUNTRIES = [
  "PHILIPPINES",
  "UNITED STATES",
  "CANADA",
  "SAUDI ARABIA",
  "UNITED ARAB EMIRATES",
  "SINGAPORE",
  "JAPAN",
  "UNITED KINGDOM",
  "AUSTRALIA",
  "ITALY",
  "HONG KONG",
  "QATAR",
  "KUWAIT",
  "TAIWAN",
  "SOUTH KOREA"
];

export const SAMPLE_FX_RATES = [
  { currency: "USD", name: "US Dollar", buy: 58.20, sell: 58.65 },
  { currency: "EUR", name: "Euro", buy: 62.45, sell: 63.15 },
  { currency: "JPY", name: "Japanese Yen", buy: 0.385, sell: 0.392 },
  { currency: "SGD", name: "Singapore Dollar", buy: 43.80, sell: 44.30 },
  { currency: "GBP", name: "British Pound", buy: 74.50, sell: 75.30 },
  { currency: "AED", name: "UAE Dirham", buy: 15.75, sell: 16.05 },
  { currency: "SAR", name: "Saudi Riyal", buy: 15.40, sell: 15.70 },
];

