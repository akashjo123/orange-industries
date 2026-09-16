import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { capabilities } from "@/data/capabilities";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Capabilities & Production Disciplines — Orange Industries Bahrain",
  description:
    "Integrated production disciplines: Decorative environments, Architectural fabrication, Signage & wayfinding, Display systems, Outdoor branding, and Custom products.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        number="1.4"
        eyebrow="PRODUCTION DISCIPLINES"
        title="Integrated production disciplines create complete outcomes"
        description="Explore our specialized manufacturing divisions operating under a connected single-accountable project lead model."
      />

      {/* Capabilities Detail Showcase */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {capabilities.map((cap, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={cap.id}
                id={cap.id}
                className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Image */}
                <div
                  className={`lg:col-span-6 relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={cap.image}
                    alt={cap.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#141416]/90 backdrop-blur px-3 py-1.5 rounded-md font-mono text-xs text-brand-orange font-bold shadow-sm">
                    DISCIPLINE
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-brand-orange font-bold">
                    <span>CAPABILITY {cap.number}</span>
                    <span className="opacity-50">|</span>
                    <span>{cap.subtitle}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                    {cap.title}
                  </h2>

                  <p className="text-base text-zinc-700 leading-relaxed font-sans">
                    {cap.longDescription}
                  </p>

                  {/* Included Elements List */}
                  <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
                    <span className="font-mono text-xs text-brand-orange uppercase tracking-wider block font-bold">
                      INCLUDED PRODUCTION ELEMENTS:
                    </span>
                    <ul className="space-y-2 text-xs text-zinc-700 font-mono">
                      {cap.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider hover:bg-zinc-900 transition-colors shadow-md"
                    >
                      <span>Request Enquiry for {cap.title}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}
