"use client";

import Image from "next/image";
import Link from "next/link";
import SynapticShift from "./SynapticShift";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { companyData } from "@/data/company";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 overflow-hidden bg-[#1f1d1d] border-b border-zinc-800">
      {/* Background Animation Container */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0 h-[120%] -top-[10%] bg-[#1f1d1d]">
        <SynapticShift 
          speed={0.35} 
          scale={0.55} 
          intensity={1.5} 
          color="#FF5A00" 
          falloff={1.15} 
          complexity={10} 
          breathing={true} 
        />
        {/* Gradient only on the left side to keep text readable without washing out the animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1f1d1d] via-[#1f1d1d]/85 to-transparent w-full lg:w-[65%]" />
      </motion.div>

      {/* Main Hero Content */}
      <motion.div style={{ y: textY, opacity }} className="relative z-20 w-full px-4 sm:px-8 lg:px-16 xl:px-24 my-auto">
        <div className="max-w-3xl space-y-8">
          
          {/* Source PDF Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-zinc-50 tracking-tight leading-[1.08]"
          >
            Manufacturing environments. <br />
            <span className="text-brand-orange font-light">Delivering experiences.</span>
          </motion.h1>

          {/* Source PDF Hero Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-2xl text-zinc-400 max-w-3xl font-normal leading-relaxed"
          >
            {companyData.heroSubheadline}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-brand-orange hover:bg-zinc-900 text-white px-8 py-4 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 shadow-xl rounded-lg"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 px-8 py-4 text-xs font-mono font-bold uppercase tracking-wider shadow-sm transition-all duration-200 rounded-lg"
            >
              <span>Explore Services</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
