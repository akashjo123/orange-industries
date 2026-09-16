"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ImageReveal from "./ImageReveal";
import { capabilities } from "@/data/capabilities";

export default function CapabilitiesSection() {
  const router = useRouter();
  const [activeId, setActiveId] = useState(capabilities[0].id);

  const activeCapability = capabilities.find((c) => c.id === activeId) || capabilities[0];

  return (
    <section id="capabilities" className="py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
              <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest">
                CAPABILITIES PREVIEW
              </span>
              <span className="text-zinc-300">•</span>
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest font-semibold">
                PRODUCTION DISCIPLINES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight">
              Integrated production disciplines <br />
              <span className="text-brand-orange font-light">create complete outcomes</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-zinc-700 font-mono text-xs uppercase tracking-wider font-bold hover:text-brand-orange transition-colors"
          >
            <span>View All Services</span>
            <ArrowUpRight className="w-4 h-4 text-brand-orange" />
          </Link>
        </div>

        {/* Interactive Desktop Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Numbered List */}
          <div className="lg:col-span-7 space-y-3">
            {capabilities.map((cap) => {
              const isActive = activeId === cap.id;
              return (
                <div
                  key={cap.id}
                  onMouseEnter={() => setActiveId(cap.id)}
                  onClick={() => router.push('/services')}
                  className={`cursor-pointer p-6 transition-all duration-300 relative rounded-xl ${
                    isActive
                      ? "bg-white shadow-lg"
                      : "bg-white/60 hover:bg-white/90 shadow-sm hover:shadow-md"
                  }`}
                >
                  {/* Left Active Accent Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCapBorder"
                      className="absolute left-0 top-3 bottom-3 w-[4px] bg-brand-orange rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-5">
                      <span
                        className={`font-mono text-xl font-bold transition-colors ${
                          isActive ? "text-brand-orange" : "text-zinc-300"
                        }`}
                      >
                        {cap.number}
                      </span>
                      <div>
                        <h3
                          className={`text-xl font-bold transition-all ${
                            isActive ? "text-zinc-900 translate-x-1" : "text-zinc-700"
                          }`}
                        >
                          {cap.title}
                        </h3>
                        <p className="text-sm text-brand-orange font-mono mt-1 font-semibold">
                          {cap.subtitle}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      className={`w-5 h-5 transition-all shrink-0 mt-1 ${
                        isActive
                          ? "text-brand-orange translate-x-1 -translate-y-1 opacity-100"
                          : "text-zinc-300 opacity-40"
                      }`}
                    />
                  </div>

                  {/* Mobile Preview Image Inline */}
                  <div className="mt-4 block lg:hidden rounded-xl overflow-hidden relative h-48">
                    <ImageReveal direction="left">
                      <Image
                        src={cap.image}
                        alt={cap.title}
                        fill
                        className="object-cover"
                      />
                    </ImageReveal>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Focal Preview (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 bg-white p-6 relative flex-col justify-between overflow-hidden shadow-md rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCapability.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative h-64 w-full overflow-hidden group rounded-xl">
                  <ImageReveal direction="right">
                    <Image
                      src={activeCapability.image}
                      alt={activeCapability.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </ImageReveal>
                  <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur px-2.5 py-1 text-[10px] font-mono text-zinc-800 font-bold shadow-xs rounded-md z-10">
                    DISCIPLINE {activeCapability.number}
                  </div>
                </div>

                {/* Technical Overview */}
                <div className="space-y-4 pt-6">
                  <span className="font-mono text-xs text-brand-orange uppercase tracking-wider font-bold">
                    {activeCapability.subtitle}
                  </span>
                  <h4 className="text-2xl font-bold text-zinc-900">
                    {activeCapability.title}
                  </h4>
                  <p className="text-sm text-zinc-600 leading-relaxed font-sans">
                    {activeCapability.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-widest font-semibold">
                      INCLUDED ELEMENTS:
                    </span>
                    {activeCapability.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-700 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/services"
                      className="w-full flex items-center justify-center gap-2 bg-brand-orange text-white py-3 text-xs font-mono font-bold uppercase tracking-wider hover:bg-zinc-900 transition-colors shadow-sm rounded-lg"
                    >
                      <span>Explore Service Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
