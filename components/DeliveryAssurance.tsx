"use client";

import { ShieldCheck, HardHat, FileCheck, Recycle } from "lucide-react";
import { motion } from "framer-motion";
import { companyData } from "@/data/company";

const assuranceIcons = [FileCheck, HardHat, ShieldCheck, Recycle];

export default function DeliveryAssurance() {
  return (
    <section className="py-24 bg-[#FAF7F2] relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* PDF 2.6 Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
              <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest">
                PROCUREMENT ASSURANCE
              </span>
              <span className="text-zinc-300">•</span>
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest font-semibold">
                DELIVERY CONTROLS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight">
              Documentation should make <br />
              <span className="text-brand-orange font-light">procurement easier</span>
            </h2>
          </div>
          <p className="text-base text-zinc-600 max-w-md font-mono leading-relaxed">
            Defined inclusions, exclusions, milestone access, stage inspections, and clear approval responsibilities.
          </p>
        </div>

        {/* PDF 2.6 Delivery Controls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {companyData.procurementControls.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="bg-white p-6 space-y-3 hover:shadow-lg transition-all duration-300 relative group shadow-md rounded-xl"
            >
              <span className="font-mono text-xl font-bold text-brand-orange">
                {item.number}
              </span>
              <h3 className="text-sm font-bold text-zinc-900 uppercase font-mono">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed font-sans">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* PDF 2.7 QUALITY, SAFETY + COMPLIANCE */}
        <div className="bg-white p-8 sm:p-12 shadow-md space-y-8 rounded-2xl">
          <div className="space-y-2 pb-2">
            <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
              QUALITY, SAFETY + COMPLIANCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
              Documentation should make procurement easier
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            <div className="bg-[#FAF7F2] p-5 space-y-2 rounded-xl">
              <span className="text-brand-orange font-bold uppercase block">QUALITY CONTROL</span>
              <p className="text-zinc-600 leading-relaxed">{companyData.compliance.qualityControl}</p>
            </div>

            <div className="bg-[#FAF7F2] p-5 space-y-2 rounded-xl">
              <span className="text-brand-orange font-bold uppercase block">SITE SAFETY</span>
              <p className="text-zinc-600 leading-relaxed">{companyData.compliance.siteSafety}</p>
            </div>

            <div className="bg-[#FAF7F2] p-5 space-y-2 rounded-xl">
              <span className="text-brand-orange font-bold uppercase block">COMMERCIAL ASSURANCE</span>
              <p className="text-zinc-600 leading-relaxed">{companyData.compliance.commercialAssurance}</p>
            </div>

            <div className="bg-[#FAF7F2] p-5 space-y-2 rounded-xl">
              <span className="text-brand-orange font-bold uppercase block">ENVIRONMENTAL CONTROL</span>
              <p className="text-zinc-600 leading-relaxed">{companyData.compliance.environmentalControl}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
