import Hero from "@/components/Hero";
import CompanyIntro from "@/components/CompanyIntro";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import SectorsSection from "@/components/SectorsSection";
import ProjectsSection from "@/components/ProjectsSection";
import DeliveryAssurance from "@/components/DeliveryAssurance";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <CapabilitiesSection />
      <ProcessTimeline />
      <SectorsSection />
      <ProjectsSection />
      <DeliveryAssurance />
      <CTA />
    </>
  );
}
