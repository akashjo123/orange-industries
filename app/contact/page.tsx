import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { companyData } from "@/data/company";
import { Mail, MapPin, Globe, Clock, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Start a Project — Contact Orange Industries Bahrain",
  description:
    "Submit your architectural fabrication, branded environment, or signage project enquiry to Orange Industries. Rapid response within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        number="06"
        eyebrow="PROJECT ENQUIRY"
        title="Let's build what comes next."
        description="Share your concept, drawings, BOQ or site requirements. Our engineering team will assess manufacturing methods, material selection, and installation schedules."
      />

      <section className="py-12 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Contacts & Operational Hubs */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white rounded-2xl shadow-sm p-8 space-y-6">
                <span className="font-mono text-xs font-bold text-brand-orange-text uppercase tracking-widest block">
                  DIRECT COMMUNICATIONS
                </span>

                <div className="space-y-4 text-xs font-mono">
                  <div className="space-y-1">
                    <span className="text-zinc-400 block text-[10px] uppercase">PROJECT ENQUIRIES</span>
                    <a
                      href={`mailto:${companyData.email}`}
                      className="text-zinc-900 font-bold text-sm hover:text-brand-orange-text transition-colors flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4 text-brand-orange-text" />
                      <span>{companyData.email}</span>
                    </a>
                  </div>

                  <div className="space-y-1 pt-3">
                    <span className="text-zinc-400 block text-[10px] uppercase">OFFICIAL DOMAIN</span>
                    <a
                      href={companyData.website}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-600 hover:text-zinc-900 transition-colors flex items-center gap-2"
                    >
                      <Globe className="w-4 h-4 text-zinc-400" />
                      <span>{companyData.website.replace("https://", "")}</span>
                    </a>
                  </div>

                  <div className="space-y-1 pt-3">
                    <span className="text-zinc-400 block text-[10px] uppercase">RESPONSE TIMELINE</span>
                    <div className="flex items-center gap-2 text-zinc-700">
                      <Clock className="w-4 h-4 text-brand-orange-text" />
                      <span>Within 1 Business Day</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regional Locations */}
              <div className="bg-white rounded-2xl shadow-sm p-8 space-y-6">
                <span className="font-mono text-xs font-bold text-brand-orange-text uppercase tracking-widest block">
                  REGIONAL OPERATIONAL BASES
                </span>

                <div className="space-y-6 text-xs font-mono">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-zinc-900 font-bold text-sm">
                      <MapPin className="w-4 h-4 text-brand-orange-text" />
                      <span>KINGDOM OF BAHRAIN</span>
                    </div>
                    <p className="text-zinc-500 pl-6 leading-relaxed">
                      Integrated Manufacturing Hub, Metal Fabrication & CNC Laser Facility
                    </p>
                  </div>

                  <div className="space-y-2 pt-4">
                    <div className="flex items-center gap-2 text-zinc-900 font-bold text-sm">
                      <ShieldCheck className="w-4 h-4 text-brand-orange-text" />
                      <span>KINGDOM OF SAUDI ARABIA</span>
                    </div>
                    <p className="text-zinc-500 pl-6 leading-relaxed">
                      Project Delivery, Logistics & Turnkey Site Installation Management
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Multi-field Interactive Project Form */}
            <div className="lg:col-span-8">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
