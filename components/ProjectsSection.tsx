"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { projects, selectedPortfolioItems } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="work" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-line opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
              <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest">
                SELECTED WORK PREVIEW
              </span>
              <span className="text-stone-400">•</span>
              <span className="font-mono text-xs text-stone-500 uppercase tracking-widest font-semibold">
                FLAGSHIP CASE STUDIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
              Additional work demonstrates breadth <br />
              <span className="text-brand-orange font-light">without diluting focus</span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-brand-orange font-mono text-xs uppercase tracking-wider hover:text-stone-900 transition-colors font-bold"
          >
            <span>View Full Portfolio</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Staggered Flagship Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="group block bg-white overflow-hidden transition-all duration-300 relative shadow-sm hover:shadow-md h-full flex flex-col justify-between rounded-sm"
              >
                <div>
                  {/* Project Image Container */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-all duration-700"
                    />

                    {/* Top Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-mono text-stone-900 uppercase tracking-wider font-bold shadow-xs">
                        {project.client}
                      </span>
                    </div>

                    {/* Top Right Arrow */}
                    <div className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur flex items-center justify-center text-stone-900 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-xs">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <div className="p-6 space-y-4 bg-white">
                    <h3 className="text-xl font-extrabold text-stone-900 group-hover:text-brand-orange transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-stone-600 font-mono line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="pt-2 space-y-1">
                      <span className="font-mono text-[10px] text-stone-500 uppercase tracking-wider font-semibold block">
                        SCOPE INCLUSIONS:
                      </span>
                      {project.scopeList.map((item, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs font-mono text-stone-700">
                          <CheckCircle2 className="w-3 h-3 text-brand-orange shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 bg-white">
                  <div className="pt-4 flex items-center justify-between text-xs font-mono">
                    <span className="text-stone-500">CASE STUDY</span>
                    <span className="text-brand-orange font-bold uppercase tracking-wider text-[11px] flex items-center gap-1">
                      <span>View Scope</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* PDF 4.7 SELECTED PORTFOLIO LIST */}
        <div className="mt-16 bg-white p-8 space-y-6 shadow-sm rounded-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 gap-4">
            <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-wider">
              ADDITIONAL SELECTED PORTFOLIO PROJECTS
            </span>
            <span className="font-mono text-xs text-stone-500 font-semibold">VERIFIED EXECUTION</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {selectedPortfolioItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F1ECE1] p-4 text-center font-mono text-xs font-bold text-stone-800 hover:text-brand-orange transition-colors shadow-xs rounded-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
