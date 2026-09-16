"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, selectedPortfolioItems, Project } from "@/data/projects";

const categories = [
  { id: "all", label: "All Case Studies" },
  { id: "events", label: "Event Branding & Activation" },
  { id: "signage", label: "Signage & Wayfinding" },
  { id: "fabrication", label: "Architectural Fabrication" },
  { id: "custom", label: "Custom Products" },
];

export default function ProjectFilterGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 pb-6">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-brand-orange text-white shadow-md"
                  : "bg-white text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 shadow-sm"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Filtered Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="group block bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 relative h-full flex flex-col justify-between shadow-md"
              >
                <div>
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-all duration-700"
                    />

                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 text-[11px] font-mono text-brand-orange font-bold uppercase rounded-md shadow-sm">
                      {project.client}
                    </div>

                    <div className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-zinc-900 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-sm">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-extrabold text-zinc-900 group-hover:text-brand-orange transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-zinc-600 font-mono line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="pt-2 space-y-1">
                      <span className="font-mono text-[10px] text-brand-orange uppercase tracking-wider font-semibold block">
                        ORANGE INDUSTRIES SCOPE:
                      </span>
                      {project.scopeList.map((item, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs font-mono text-zinc-600">
                          <CheckCircle2 className="w-3 h-3 text-brand-orange shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500">FLAGSHIP CASE STUDY</span>
                    <span className="text-brand-orange font-bold uppercase tracking-wider text-[11px] flex items-center gap-1">
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* PDF 4.7 SELECTED PORTFOLIO LIST */}
      <div className="bg-white rounded-xl p-8 space-y-6 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 gap-4">
          <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-wider">
            ADDITIONAL SELECTED PORTFOLIO PROJECTS
          </span>
          <span className="font-mono text-xs text-zinc-500">VERIFIED EXECUTION</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {selectedPortfolioItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] p-4 rounded-lg text-center font-mono text-xs font-bold text-zinc-700 hover:text-brand-orange transition-colors shadow-xs"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
