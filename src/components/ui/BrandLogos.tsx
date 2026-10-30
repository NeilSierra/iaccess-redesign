"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

export function LandbankLogo({ className = "h-8 w-auto", priority = true }: LogoProps) {
  return (
    <Image
      src="/assets/logos/landbank-logo.svg"
      alt="Land Bank of the Philippines"
      width={174}
      height={32}
      priority={priority}
      className={className}
    />
  );
}

export function OverseasFilipinoBankLogo({ className = "h-7 w-auto", priority = true }: LogoProps) {
  return (
    <Image
      src="/assets/logos/overseas-filipino-bank-logo.svg"
      alt="Overseas Filipino Bank"
      width={146}
      height={32}
      priority={priority}
      className={className}
    />
  );
}

export function IAccessLogo({ className = "h-8 w-auto", priority = true }: LogoProps) {
  return (
    <Image
      src="/assets/logos/iaccess-logo.svg"
      alt="iAccess Online Banking"
      width={111}
      height={32}
      priority={priority}
      className={className}
    />
  );
}

export function BancNetLogo({ className = "h-6 w-auto" }: LogoProps) {
  return (
    <Image
      src="/assets/logos/bancnet-logo.svg"
      alt="BancNet"
      width={128}
      height={32}
      className={className}
    />
  );
}

export function PdicLogo({ className = "h-9 w-auto" }: LogoProps) {
  return (
    <Image
      src="/assets/icons/pdic-icon.svg"
      alt="PDIC - Philippine Deposit Insurance Corporation"
      width={100}
      height={40}
      className={className}
    />
  );
}

export function BspLogo({ className = "h-9 w-auto" }: LogoProps) {
  return (
    <Image
      src="/assets/icons/bsp-icon.svg"
      alt="Bangko Sentral ng Pilipinas"
      width={40}
      height={40}
      className={className}
    />
  );
}

export function HeaderBrandGroup() {
  return (
    <div className="flex items-center gap-2 sm:gap-5 min-w-0">
      <Link href="/" className="flex items-center gap-2 sm:gap-3 transition-opacity hover:opacity-90 min-w-0 shrink" aria-label="Go to LANDBANK Home">
        <LandbankLogo className="h-6 sm:h-8 w-auto max-w-[150px] sm:max-w-none" />
      </Link>
      <div className="h-6 w-px bg-white/30 hidden sm:block" aria-hidden="true" />
      <div className="hidden sm:flex items-center">
        <OverseasFilipinoBankLogo className="h-6 sm:h-7 w-auto" />
      </div>
    </div>
  );
}

