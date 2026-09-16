import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  lightMode?: boolean;
}

export default function Logo({ className = "h-9", iconOnly = false, lightMode = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Official Orange Industries 3D Circle Logo Icon */}
      <svg
        viewBox="0 0 120 120"
        className="h-full w-auto aspect-square shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Signature Orange Circle */}
        <circle cx="60" cy="60" r="58" fill="#FF5500" />

        {/* 3D Isometric Structural Mark (White) */}
        <g fill="#FFFFFF">
          {/* Left Vertical Pillar */}
          <path d="M 30 45 L 50 34 L 50 83 L 30 72 Z" />
          {/* Top Connecting Bar */}
          <path d="M 50 34 L 72 47 L 72 59 L 50 46 Z" />
          {/* Right Vertical Pillar */}
          <path d="M 72 47 L 92 34 L 92 72 L 72 84 Z" />
          {/* Inner Fold Accent */}
          <path d="M 50 58 L 72 70 L 72 84 L 50 72 Z" />
        </g>
      </svg>

      {!iconOnly && (
        <div className="flex items-baseline font-sans text-xl sm:text-2xl tracking-tight leading-none">
          <span className={`font-extrabold ${lightMode ? "text-slate-900" : "text-white"}`}>orange</span>
          <span className={`font-light ${lightMode ? "text-slate-600" : "text-slate-300"}`}>industries</span>
        </div>
      )}
    </div>
  );
}
