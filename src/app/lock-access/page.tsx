import { AccountActionForm } from "@/components/auth/AccountActionForm";

export const metadata = {
  title: "Lock My Access | LANDBANK iAccess",
  description: "Immediately restrict and lock your LANDBANK iAccess access for security.",
};

export default function LockAccessPage() {
  return (
    <div className="flex-1 iaccess-page-canvas py-10 sm:py-16 px-3 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-lg mx-auto">
        <AccountActionForm mode="lock-access" />
      </div>
    </div>
  );
}

