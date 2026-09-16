import React from "react";

interface PageHeroProps {
  number?: string;
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageHero({
  number,
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="pt-36 pb-20 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-2 text-brand-orange font-mono text-xs font-extrabold uppercase tracking-widest">
            <span>{eyebrow}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-zinc-900 tracking-tight leading-[1.08]">
            {title}
          </h1>

          <p className="text-lg text-zinc-600 font-normal leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
