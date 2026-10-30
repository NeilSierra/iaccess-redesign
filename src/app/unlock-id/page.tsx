import { AccountActionForm } from "@/components/auth/AccountActionForm";

export const metadata = {
  title: "Unlock ID | LANDBANK iAccess",
  description: "Request to unlock your LANDBANK iAccess user ID online.",
};

export default function UnlockIdPage() {
  return (
    <div className="flex-1 iaccess-page-canvas py-10 sm:py-16 px-3 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-lg mx-auto">
        <AccountActionForm mode="unlock-id" />
      </div>
    </div>
  );
}

