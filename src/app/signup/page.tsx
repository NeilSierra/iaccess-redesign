import { SignUpWizard } from "@/components/signup/SignUpWizard";

export const metadata = {
  title: "Enroll in iAccess | LANDBANK",
  description: "Sign up for LANDBANK iAccess individual internet banking services online.",
};

export default function SignUpPage() {
  return (
    <div className="flex-1 iaccess-page-canvas py-8 sm:py-12 px-3 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto">
        <div className="mb-6 text-center space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            LANDBANK Online Banking
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-brand-900 tracking-tight">
            iAccess Enrollment
          </h1>
          <p className="text-xs sm:text-sm text-muted">
            Follow the 4 steps below to register your ATM account for iAccess digital banking.
          </p>
        </div>

        <SignUpWizard />
      </div>
    </div>
  );
}

