import React from "react";

interface SectionHeadingProps {
  number?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {/* Number & Eyebrow Badge */}
      <div className="flex items-center gap-3">
        {number && (
          <span className="font-mono text-xs font-bold text-brand-orange bg-brand-orange/10 px-2.5 py-1 border border-brand-orange/20 tracking-wider">
            {number}
          </span>
        )}
        {eyebrow && (
          <span
            className={`font-mono text-xs uppercase tracking-widest ${
              light ? "text-slate-600" : "text-slate-400"
            }`}
          >
            {eyebrow}
          </span>
        )}
      </div>

      {/* Main Section Title */}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-none text-balance ${
          light ? "text-slate-950" : "text-white"
        }`}
      >
        {title}
      </h2>

      {/* Description paragraph if provided */}
      {description && (
        <p
          className={`text-base sm:text-lg max-w-2xl leading-relaxed ${
            light ? "text-slate-600" : "text-slate-400"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
