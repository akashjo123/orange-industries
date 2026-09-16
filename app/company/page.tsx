import Image from "next/image";
import PageHero from "@/components/PageHero";
import DeliveryAssurance from "@/components/DeliveryAssurance";
import CTA from "@/components/CTA";
import { companyData } from "@/data/company";
import { CheckCircle2, ShieldCheck, MapPin, Cpu, Award } from "lucide-react";

export const metadata = {
  title: "About Us — Orange Industries Bahrain",
  description:
    "Orange Industries coordinates design development, engineering, production and installation through one project team.",
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        number="2.0"
        eyebrow="ABOUT ORANGE INDUSTRIES"
        title="A single accountable manufacturing partner"
        description="Orange Industries coordinates design development, engineering, production and installation through one project team. Our connected production model reduces handovers between suppliers."
      />

      {/* 2.1 & 2.2 Company Overview & Corporate Proof (Cream Section) */}
      <section className="py-20 bg-[#FAF7F2] text-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
                COMPANY OVERVIEW
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Connected production model for programme, quality & site delivery
              </h2>
              <p className="text-zinc-700 text-lg leading-relaxed">
                {companyData.description}
              </p>

              <div className="pt-4 space-y-3">
                <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
                  CORPORATE PROOF
                </span>
                <h3 className="text-xl font-bold text-zinc-900">
                  A manufacturing partner with the scale to deliver
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-white p-5 rounded-xl shadow-sm font-mono text-xs text-zinc-700">
                    <span className="text-brand-orange font-bold block mb-1">BAHRAIN</span>
                    <span>Integrated Manufacturing Base & Laser Hub</span>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm font-mono text-xs text-zinc-700">
                    <span className="text-brand-orange font-bold block mb-1">SAUDI ARABIA</span>
                    <span>Project Delivery & Site Contracting</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/hero_industrial.jpg"
                alt="Orange Industries Bahrain Manufacturing Shop Floor"
                fill
                className="object-cover filter grayscale contrast-125 brightness-95"
              />
              <div className="absolute bottom-4 left-4 bg-[#141416]/90 backdrop-blur px-3 py-1.5 rounded-lg font-mono text-xs text-brand-orange font-bold shadow-md">
                {companyData.hubs.bahrain}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2.3 & 2.4 Production Disciplines (Cream Section) */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
              FACTORY, PEOPLE & DISCIPLINES
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-900">
              Production control begins with real capability
            </h2>
            <p className="text-base text-zinc-500 font-mono">
              In-house manufacturing divisions operating under single project lead coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyData.productionDisciplines.map((item) => (
              <div key={item.number} className="bg-white p-6 rounded-xl space-y-2 shadow-md hover:shadow-xl transition-shadow">
                <span className="font-mono text-xs font-bold text-brand-orange">{item.number}</span>
                <h3 className="text-lg font-bold text-zinc-900">{item.title}</h3>
                <p className="text-sm text-zinc-500 font-mono leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.8 Corporate + Regional Delivery (Cream Section) */}
      <section className="py-20 bg-[#FAF7F2] text-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest">
              CORPORATE + REGIONAL DELIVERY
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-900">
              Clear legal identity supports confident contracting
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
            <div className="bg-white p-6 rounded-xl space-y-2 shadow-sm">
              <span className="text-brand-orange font-bold block text-[10px]">CORPORATE IDENTITY</span>
              <h4 className="font-bold text-zinc-900 text-base">{companyData.legalName}</h4>
              <p className="text-zinc-600">Registered entity in the Kingdom of Bahrain</p>
            </div>

            <div className="bg-white p-6 rounded-xl space-y-2 shadow-sm">
              <span className="text-brand-orange font-bold block text-[10px]">BAHRAIN HUB</span>
              <h4 className="font-bold text-zinc-900 text-base">Manufacturing & Engineering</h4>
              <p className="text-zinc-600">{companyData.regionalModel.bahrain}</p>
            </div>

            <div className="bg-white p-6 rounded-xl space-y-2 shadow-sm">
              <span className="text-brand-orange font-bold block text-[10px]">SAUDI ARABIA & REGIONAL</span>
              <h4 className="font-bold text-zinc-900 text-base">Client Servicing & Delivery</h4>
              <p className="text-zinc-600">{companyData.regionalModel.saudi}</p>
            </div>
          </div>
        </div>
      </section>

      <DeliveryAssurance />
      <CTA />
    </>
  );
}
