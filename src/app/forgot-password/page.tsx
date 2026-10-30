import { AccountActionForm } from "@/components/auth/AccountActionForm";

export const metadata = {
  title: "Forgot Password | LANDBANK iAccess",
  description: "Reset your LANDBANK iAccess internet banking password online.",
};

export default function ForgotPasswordPage() {
  return (
    <div className="flex-1 iaccess-page-canvas py-10 sm:py-16 px-3 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-lg mx-auto">
        <AccountActionForm mode="forgot-password" />
      </div>
    </div>
  );
}

