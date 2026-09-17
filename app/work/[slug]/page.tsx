import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck, Tag } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  if (!project) return {};

  return {
    title: `${project.title} — Flagship Case Study | Orange Industries`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Top Header */}
      <section className="pt-24 pb-16 bg-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-6">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-mono text-xs text-brand-orange-text uppercase tracking-wider hover:text-slate-950 transition-colors font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Case Studies</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="bg-brand-orange text-black font-bold px-3 py-1 uppercase">
                {project.client}
              </span>
              <span className="bg-white border border-slate-200 text-slate-700 px-3 py-1 uppercase font-semibold">
                FLAGSHIP CASE STUDY
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Cover Image */}
      <section className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 sm:h-[480px] w-full border border-slate-200 overflow-hidden shadow-sm">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Case Study Details from PDF */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Narrative */}
            <div className="lg:col-span-8 space-y-8">
              {/* Client Challenge */}
              <div className="space-y-3 bg-white p-8 border border-slate-200 shadow-xs">
                <span className="font-mono text-xs font-bold text-brand-orange-text uppercase tracking-widest block">
                  CLIENT CHALLENGE
                </span>
                <p className="text-base text-slate-900 font-medium leading-relaxed font-sans">
                  {project.challenge}
                </p>
              </div>

              {/* Orange Industries Scope */}
              <div className="space-y-4 bg-white p-8 border border-slate-200 shadow-xs">
                <span className="font-mono text-xs font-bold text-brand-orange-text uppercase tracking-widest block">
                  ORANGE INDUSTRIES SCOPE
                </span>
                <div className="space-y-2">
                  {project.scopeList.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-800 font-mono">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange-text shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar Action */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white border border-slate-200 p-6 space-y-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <span className="font-mono text-xs text-brand-orange-text uppercase tracking-widest font-bold">
                    CONNECTED EXECUTION
                  </span>
                  <ShieldCheck className="w-4 h-4 text-brand-orange-text" />
                </div>

                <p className="text-xs text-slate-600 font-mono leading-relaxed">
                  Bahrain manufacturing base connected directly to site delivery in Saudi Arabia & GCC.
                </p>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 bg-brand-orange text-black py-3.5 text-xs font-mono font-bold uppercase tracking-wider hover:bg-slate-950 hover:text-white transition-colors shadow-sm"
                  >
                    <span>Request Similar Case Proposal</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
