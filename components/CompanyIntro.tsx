"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { companyData } from "@/data/company";

export default function CompanyIntro() {
  return (
    <section id="company" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Normal Sub Heading */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
          <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest">
            COMPANY INTRODUCTION
          </span>
          <span className="text-zinc-600">•</span>
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest font-semibold">
            SINGLE ACCOUNTABLE PARTNER
          </span>
        </div>

        {/* 2-Column Editorial Grid (PDF 1.2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pb-16 relative">
          
          {/* Subtle Decorative element */}
          <div className="absolute top-0 left-0 w-24 h-px bg-brand-orange/30" />

          {/* Left Column: Source PDF Headline */}
          <div className="lg:col-span-6 space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-50 leading-[1.1] tracking-tight"
            >
              A single accountable <br className="hidden sm:block" />
              <span className="text-brand-orange font-light">manufacturing partner</span>
            </motion.h2>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="bg-zinc-900 border border-zinc-800 text-zinc-100 px-4 py-2 rounded-full font-bold shadow-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                {companyData.hubs.bahrain}
              </span>
              <span className="bg-zinc-900 border border-zinc-800 text-zinc-100 px-4 py-2 rounded-full font-bold shadow-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                {companyData.hubs.gcc}
              </span>
            </div>
          </div>

          {/* Right Column: Source PDF Copy */}
          <div className="lg:col-span-6 space-y-8 lg:pl-8 border-l-0 lg:border-l border-zinc-800">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-zinc-300 text-lg sm:text-xl leading-relaxed font-medium"
            >
              {companyData.description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/company"
                className="inline-flex items-center gap-3 bg-brand-orange text-white px-8 py-4 rounded-xl font-mono text-xs uppercase tracking-wider hover:bg-zinc-800 transition-all shadow-md hover:shadow-lg group font-bold"
              >
                <span>Read Full Company Overview</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* PDF 1.3 WHY ORANGE INDUSTRIES */}
        <div className="pt-16 space-y-12">
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest">
              WHY ORANGE INDUSTRIES
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-50">
              Capability is valuable when it reduces delivery risk
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyData.whyChooseUs.map((item, idx) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="bg-zinc-900 p-6 transition-all duration-300 relative group shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-bold text-brand-orange">
                    {item.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-stone-300 group-hover:bg-brand-orange transition-colors" />
                </div>
                <h4 className="text-sm font-bold text-zinc-50 mb-2 uppercase font-mono">
                  {item.title}
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
