"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ChevronRight, FileText, Settings, Hammer, ShieldCheck, Truck, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ImageReveal from "./ImageReveal";
import { companyData } from "@/data/company";

const processStages = [
  {
    step: "01",
    title: "Brief + Site",
    label: "BRIEF & SURVEY",
    icon: FileText,
    description: "Requirements, survey, access and programme.",
    details: "Site survey, requirements analysis, access risk evaluation, and preliminary programme planning.",
    image: "/images/hero_industrial.jpg",
    outputs: ["Client Requirements Brief", "Site Survey & Access Analysis", "Target Delivery Programme"]
  },
  {
    step: "02",
    title: "Concept",
    label: "FEASIBILITY",
    icon: Layers,
    description: "Materials, method and feasibility.",
    details: "Material selection, manufacturing method evaluation, and structural design feasibility analysis.",
    image: "/images/cap_fabrication.jpg",
    outputs: ["Material Specification Matrix", "Manufacturing Method Plan", "Feasibility Sign-off"]
  },
  {
    step: "03",
    title: "Engineering",
    label: "DRAWINGS & SAMPLES",
    icon: Settings,
    description: "Shop drawings, samples and approvals.",
    details: "In-house CAD detailing, physical material samples, structural calculations, and documented client approvals.",
    image: "/images/cap_fabrication.jpg",
    outputs: ["Approved Shop Drawings", "Physical Material Samples", "Structural Calculation Pack"]
  },
  {
    step: "04",
    title: "Manufacturing",
    label: "PRODUCTION",
    icon: Hammer,
    description: "Connected multi trade production.",
    details: "Multi-trade fabrication in our Bahrain facility combining metal, carpentry, acrylic, graphics printing, and sub-assembly.",
    image: "/images/cap_fabrication.jpg",
    outputs: ["Connected Multi-Trade Fabrication", "CNC Laser & Machine Work", "Quality Inspection Gates"]
  },
  {
    step: "05",
    title: "Finishing",
    label: "QUALITY REVIEW",
    icon: ShieldCheck,
    description: "Stage inspection, assembly and packing.",
    details: "Controlled paint spray finishing, bench assembly, electrical testing, and protective transport packing.",
    image: "/images/cap_signage.jpg",
    outputs: ["Dry Film Finish Audit", "Stage Inspection Sign-off", "Protective Packing & Crating"]
  },
  {
    step: "06",
    title: "Installation",
    label: "SITE HANDOVER",
    icon: Truck,
    description: "Site execution, snagging and handover.",
    details: "24/7 dedicated site installation crews executing site mounting, snagging resolution, and formal project handover.",
    image: "/images/project_dpworld.jpg",
    outputs: ["Certified Rigging Execution", "Snag-Free Handover Certificate", "Client Warranty Documentation"]
  }
];

export default function ProcessTimeline() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section id="process" className="py-24 bg-[#FAF7F2] relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
              <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest">
                DELIVERY MODEL
              </span>
              <span className="text-zinc-300">•</span>
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest font-semibold">
                CONNECTED WORKFLOW PIPELINE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight">
              One accountable path from <span className="text-brand-orange">brief to handover</span>
            </h2>
          </div>
          <p className="text-base text-zinc-600 max-w-md font-mono leading-relaxed">
            Drawings, samples, materials, programme, logistics and quality controls remain connected throughout the project.
          </p>
        </div>

        {/* Step Progress Pipeline Nav */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {processStages.map((stage, idx) => {
            const isActive = activeStage === idx;
            const isPassed = activeStage > idx;
            const Icon = stage.icon;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStage(idx)}
                className={`p-4 text-left transition-all duration-300 relative overflow-hidden rounded-xl ${
                  isActive
                    ? "bg-white text-zinc-900 shadow-lg"
                    : isPassed
                    ? "bg-white/80 text-zinc-700 hover:bg-white shadow-sm"
                    : "bg-white/50 text-zinc-400 hover:bg-white/80"
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-orange rounded-t-xl" />
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-brand-orange">
                    {stage.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? "text-brand-orange" : "text-zinc-300"}`} />
                </div>
                <div className="font-mono text-[10px] uppercase text-zinc-400 tracking-wider mb-1 font-semibold">
                  {stage.label}
                </div>
                <div className="font-bold text-xs truncate">
                  {stage.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Showcase Box */}
        <div className="bg-white p-6 sm:p-10 relative overflow-hidden shadow-md rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column Text Specs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-brand-orange/10 px-3 py-1 rounded-md text-xs font-mono text-brand-orange font-bold">
                  <span>STAGE {processStages[activeStage].step} OF 06</span>
                  <span className="mx-1 opacity-50">|</span>
                  <span>{processStages[activeStage].label}</span>
                </div>

                <h3 className="text-3xl font-extrabold text-zinc-900">
                  {processStages[activeStage].title}
                </h3>

                <p className="text-lg text-zinc-700 font-medium">
                  {processStages[activeStage].description}
                </p>

                <p className="text-sm text-zinc-500 font-mono leading-relaxed">
                  {processStages[activeStage].details}
                </p>

                {/* Key Deliverables */}
                <div className="pt-4 space-y-3">
                  <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest block font-semibold">
                    STAGE WORKFLOW DELIVERABLES:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {processStages[activeStage].outputs.map((out, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-[#FAF7F2] p-2.5 rounded-lg text-xs text-zinc-700 font-mono shadow-xs"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                        <span className="truncate">{out}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step Controls */}
                <div className="flex items-center gap-4 pt-4">
                  <button
                    disabled={activeStage === 0}
                    onClick={() => setActiveStage((prev) => Math.max(0, prev - 1))}
                    className="px-4 py-2 text-xs font-mono text-zinc-600 bg-[#FAF7F2] rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-zinc-100 transition-colors"
                  >
                    ← Previous Stage
                  </button>
                  <button
                    disabled={activeStage === processStages.length - 1}
                    onClick={() => setActiveStage((prev) => Math.min(processStages.length - 1, prev + 1))}
                    className="px-4 py-2 text-xs font-mono bg-brand-orange text-white font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-zinc-900 transition-colors flex items-center gap-1.5 shadow-sm rounded-lg"
                  >
                    <span>Next Stage</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column Image */}
              <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md">
                <ImageReveal direction="right">
                  <Image
                    src={processStages[activeStage].image}
                    alt={processStages[activeStage].title}
                    fill
                    className="object-cover"
                  />
                </ImageReveal>
                <div className="absolute bottom-4 left-4 right-4 bg-[#FAF7F2]/90 backdrop-blur p-3 rounded-xl flex items-center justify-between text-xs font-mono shadow-sm z-10">
                  <span className="text-zinc-500">CONNECTED WORKFLOW:</span>
                  <span className="text-brand-orange font-bold">100% ACCOUNTABILITY</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
