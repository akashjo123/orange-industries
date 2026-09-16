"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { companyData } from "@/data/company";

export default function CompanyIntro() {
  return (
    <section id="company" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Normal Sub Heading */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
          <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest">
            COMPANY INTRODUCTION
          </span>
          <span className="text-stone-400">•</span>
          <span className="font-mono text-xs text-stone-500 uppercase tracking-widest font-semibold">
            SINGLE ACCOUNTABLE PARTNER
          </span>
        </div>

        {/* 2-Column Editorial Grid (PDF 1.2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16">
          
          {/* Left Column: Source PDF Headline */}
          <div className="lg:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-[1.15] tracking-tight"
            >
              A single accountable <span className="text-brand-orange font-light">manufacturing partner</span>
            </motion.h2>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono pt-6">
              <span className="bg-white text-stone-800 px-3.5 py-1.5 font-bold shadow-xs">
                {companyData.hubs.bahrain}
              </span>
              <span className="bg-white text-stone-800 px-3.5 py-1.5 font-bold shadow-xs">
                {companyData.hubs.gcc}
              </span>
            </div>
          </div>

          {/* Right Column: Source PDF Copy */}
          <div className="lg:col-span-6 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-stone-700 text-lg leading-relaxed"
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
                className="inline-flex items-center gap-2 text-stone-900 font-mono text-xs uppercase tracking-wider hover:text-brand-orange transition-colors group font-bold"
              >
                <span>Read Full Company Overview</span>
                <ArrowUpRight className="w-4 h-4 text-brand-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
            <h3 className="text-2xl sm:text-4xl font-extrabold text-stone-900">
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
                className="bg-white p-6 transition-all duration-300 relative group shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-bold text-brand-orange">
                    {item.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-stone-300 group-hover:bg-brand-orange transition-colors" />
                </div>
                <h4 className="text-sm font-bold text-stone-900 mb-2 uppercase font-mono">
                  {item.title}
                </h4>
                <p className="text-sm text-stone-600 leading-relaxed font-sans">
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
