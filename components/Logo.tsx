import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  lightMode?: boolean;
}

export default function Logo({ className = "h-9", iconOnly = false, lightMode = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      <Image
        src="/logo_1.png"
        alt="Orange Industries Logo Mark"
        width={120}
        height={120}
        className="h-full w-auto aspect-square shrink-0"
        priority
      />

      {!iconOnly && (
        <div className={`flex items-baseline text-xl sm:text-2xl tracking-tight leading-none ${montserrat.className}`}>
          <span className={`font-semibold ${lightMode ? "text-slate-900" : "text-white"}`}>orange</span>
          <span className={`font-light ${lightMode ? "text-slate-600" : "text-slate-300"}`}>industries</span>
        </div>
      )}
    </div>
  );
}
