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

        {/* 3-Piece Isometric M Mark (White) */}
        <g fill="#FFFFFF">
          {/* Left Pillar (Right-facing plane) */}
          <path d="M 36 39 L 14 50 L 14 94 L 36 83 Z" />
          {/* Center Roof (Top-facing plane) */}
          <path d="M 60 49 L 38 38 L 60 27 L 82 38 Z" />
          {/* Right Pillar (Left-facing plane) */}
          <path d="M 84 39 L 106 50 L 106 94 L 84 83 Z" />
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
