import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { companyData } from "@/data/company";

export default function CTA() {
  return (
    <section className="py-16 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white p-8 sm:p-16 relative overflow-hidden shadow-xl rounded-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <span className="font-mono text-xs font-bold text-brand-orange-text uppercase tracking-widest block">
                PROJECT ENQUIRIES
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                Bring us the brief. <br />
                <span className="text-brand-orange-text font-light">We will engineer the outcome.</span>
              </h2>

              <p className="text-base sm:text-lg text-zinc-600 max-w-2xl font-normal leading-relaxed">
                Share your concept, drawings, BOQ or site requirement. Our team will assess the materials, manufacturing method, programme and installation approach.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-zinc-500 pt-2">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-orange-text" />
                  {companyData.hubs.bahrain}
                </span>
                <span>·</span>
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-orange-text" />
                  {companyData.email}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-3 bg-brand-orange hover:bg-zinc-900 text-white py-4 px-6 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 shadow-lg rounded-xl"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="w-full flex items-center justify-center gap-3 bg-[#FAF7F2] hover:bg-zinc-100 text-zinc-700 py-4 px-6 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 rounded-xl"
              >
                <span>Explore Selected Work</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
