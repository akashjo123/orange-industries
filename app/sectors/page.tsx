import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { sectors } from "@/data/sectors";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Industry Markets & Sectors — Orange Industries Bahrain",
  description:
    "Three core strengths serving Events, Sports + Public Experiences, Corporate + Commercial Environments, and Signage + Specialist Manufacturing.",
};

export default function SectorsPage() {
  return (
    <>
      <PageHero
        number="1.5"
        eyebrow="TARGET SECTORS"
        title="Three core strengths serve a focused set of sectors"
        description="Tailored production capabilities for event activations, commercial rollouts, and specialized public sector signage."
      />

      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {sectors.map((sector) => (
            <div
              key={sector.id}
              id={sector.id}
              className="scroll-mt-32 bg-zinc-900 rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-md"
            >
              <div className="flex items-center justify-between pb-6 mb-8">
                <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest">
                  {sector.kicker}
                </span>
                <span className="font-mono text-2xl font-bold text-zinc-200">
                  {sector.number}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <h2 className="text-3xl font-extrabold text-zinc-50 tracking-tight">
                    {sector.title}
                  </h2>

                  <p className="text-base text-zinc-300 leading-relaxed font-sans">
                    {sector.longDescription}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="bg-zinc-950 p-4 rounded-xl space-y-2 shadow-sm">
                      <span className="font-mono text-[11px] text-brand-orange uppercase tracking-wider block font-bold">
                        TARGET CLIENT CATEGORIES:
                      </span>
                      <ul className="space-y-1 text-xs text-zinc-300 font-mono">
                        {sector.targetClients.map((client, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                            <span>{client}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-zinc-950 p-4 rounded-xl space-y-2 shadow-sm">
                      <span className="font-mono text-[11px] text-brand-orange uppercase tracking-wider block font-bold">
                        DELIVERED STRENGTHS:
                      </span>
                      <ul className="space-y-1 text-xs text-zinc-300 font-mono">
                        {sector.capabilitiesProvided.map((cap, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-brand-orange text-white px-5 py-2.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider hover:bg-zinc-900 transition-colors shadow-md"
                    >
                      <span>Inquire for {sector.title}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
