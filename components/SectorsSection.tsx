"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sectors } from "@/data/sectors";

export default function SectorsSection() {
  const [activeSectorId, setActiveSectorId] = useState(sectors[0].id);

  const currentSector = sectors.find((s) => s.id === activeSectorId) || sectors[0];

  return (
    <section id="sectors" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Normal Sub Heading */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
          <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest">
            MARKETS & SECTORS
          </span>
          <span className="text-stone-400">•</span>
          <span className="font-mono text-xs text-stone-500 uppercase tracking-widest font-semibold">
            FOCUSED MARKET STRENGTHS
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight mb-12">
          Three core strengths serve a <span className="text-brand-orange font-light">focused set of sectors</span>
        </h2>

        {/* Sector Nav Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 pb-6">
          {sectors.map((sector) => {
            const isActive = activeSectorId === sector.id;
            return (
              <button
                key={sector.id}
                onClick={() => setActiveSectorId(sector.id)}
                className={`px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 rounded-sm ${
                  isActive
                    ? "bg-stone-900 text-white shadow-md"
                    : "bg-white text-stone-700 shadow-xs hover:bg-stone-100 hover:text-stone-900"
                }`}
              >
                {sector.title}
              </button>
            );
          })}
        </div>

        {/* Interactive Sector Panel Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSector.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 sm:p-12 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-sm rounded-sm"
          >
            {/* Background number watermark */}
            <div className="absolute top-4 right-8 font-mono text-8xl font-black text-stone-200/60 pointer-events-none select-none">
              {currentSector.number}
            </div>

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 relative z-10">
              <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
                {currentSector.kicker}
              </span>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-stone-900">
                {currentSector.title}
              </h3>

              <p className="text-lg text-stone-600 leading-relaxed font-normal">
                {currentSector.description}
              </p>

              {/* Target Clients */}
              <div className="pt-4 border-t border-[#E7E0D3] space-y-3">
                <span className="font-mono text-xs text-stone-500 uppercase tracking-widest block font-semibold">
                  TARGET CLIENT CATEGORIES:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentSector.targetClients.map((client, idx) => (
                    <span
                      key={idx}
                      className="bg-[#F1ECE1] text-stone-800 px-3 py-1 text-xs font-mono border border-[#E7E0D3]"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>

              {/* Capabilities Delivered */}
              <div className="pt-2 space-y-2">
                <span className="font-mono text-xs text-stone-500 uppercase tracking-widest block font-semibold">
                  DELIVERY STRENGTHS:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentSector.capabilitiesProvided.map((cap, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-stone-800 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/sectors"
                  className="inline-flex items-center gap-2 bg-brand-orange hover:bg-stone-900 text-white px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Explore Market Capabilities</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative h-80 sm:h-96 border border-[#E7E0D3] overflow-hidden relative z-10">
              <Image
                src={currentSector.image}
                alt={currentSector.title}
                fill
                className="object-cover"
              />

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
