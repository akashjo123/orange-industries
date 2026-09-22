import React from "react";
import Image from "next/image";
import LogoSVG from "./LogoSVG";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  lightMode?: boolean;
}

export default function Logo({ className = "h-9", iconOnly = false, lightMode = true }: LogoProps) {
  if (iconOnly) {
    return (
      <div className={`flex items-center select-none ${className}`}>
        <Image
          src="/logo_1.png"
          alt="Orange Industries Logo Mark"
          width={120}
          height={120}
          className="h-full w-auto aspect-square shrink-0"
          priority
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center select-none ${className} ${lightMode ? "text-slate-800" : "text-white"}`}>
      <LogoSVG className="h-full w-auto" />
    </div>
  );
}
