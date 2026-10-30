import { WelcomeHeroCard } from "@/components/auth/WelcomeHeroCard";
import { LoginCard } from "@/components/auth/LoginCard";

export default function HomePage() {
  return (
    <div className="flex-1 iaccess-page-canvas py-8 sm:py-12 lg:py-16 px-3 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Welcome & Value Propositions */}
          <div className="lg:col-span-7 flex flex-col">
            <WelcomeHeroCard />
          </div>

          {/* Right Column: Login Card & Enrollment */}
          <div className="lg:col-span-5 flex flex-col">
            <LoginCard />
          </div>
        </div>
      </div>
    </div>
  );
}
