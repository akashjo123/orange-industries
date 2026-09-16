import PageHero from "@/components/PageHero";
import ProjectFilterGrid from "@/components/ProjectFilterGrid";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Selected Projects & Case Studies — Orange Industries Bahrain",
  description:
    "Explore Orange Industries' verified project portfolio including DP World event environments, Formula 1 VIP structures, Ministry of Health wayfinding, and executive trophies.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        number="05"
        eyebrow="PROJECT PORTFOLIO"
        title="Proof of execution across demanding projects."
        description="Review our delivered case studies across event environments, architectural metalwork, infrastructure wayfinding, and custom product manufacturing in the GCC."
      />

      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectFilterGrid />
        </div>
      </section>

      <CTA />
    </>
  );
}
