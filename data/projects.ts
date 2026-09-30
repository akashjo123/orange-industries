export interface Project {
  slug: string;
  title: string;
  client: string;
  category: "residential" | "commercial";
  scopeList: string[];
  summary: string;
  challenge: string;
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "ayroor-residence",
    title: "Ayroor Residence",
    client: "Private Homeowner",
    category: "residential",
    summary: "A complete rooftop solar installation designed to meet the energy needs of a modern home.",
    challenge: "Maximizing energy generation on a limited roof space while maintaining aesthetic appeal.",
    scopeList: [
      "Site survey and energy assessment",
      "Rooftop solar panel installation",
      "Net metering and commissioning"
    ],
    image: "/images/hero_industrial.jpg",
    featured: true,
  },
  {
    slug: "kanjirappally-residence",
    title: "Kanjirappally Residence",
    client: "Private Homeowner",
    category: "residential",
    summary: "Residential solar energy system providing sustainable and reliable power.",
    challenge: "Ensuring stable power integration with the existing grid infrastructure.",
    scopeList: [
      "Custom solar system design",
      "Installation and testing",
      "Subsidy application support"
    ],
    image: "/images/project_f1.jpg",
    featured: true,
  },
  {
    slug: "elamakkara-project",
    title: "Elamakkara Project",
    client: "Local Business",
    category: "commercial",
    summary: "A commercial solar installation aimed at reducing operational electricity costs.",
    challenge: "Executing the installation without disrupting daily business operations.",
    scopeList: [
      "Commercial solar planning",
      "High-capacity panel installation",
      "Grid integration and inspection"
    ],
    image: "/images/cap_signage.jpg",
    featured: true,
  },
  {
    slug: "dp-world-tour-bahrain",
    title: "DP World Tour Bahrain Championship",
    client: "DP World Tour",
    category: "commercial",
    summary: "Comprehensive branding and structural setup for the Bapco Energies Bahrain Championship.",
    challenge: "Delivering high-quality, large-scale event branding and structures within tight international sporting event deadlines.",
    scopeList: [
      "Event branding and setup",
      "Large-scale structure fabrication",
      "Signage and display installation"
    ],
    image: "/images/project_dpworld.jpg",
    featured: true,
  }
];

export const selectedPortfolioItems = [
  "Interium signage",
  "Arab League flags",
  "Bahrain municipality flags",
  "Exhibition environments",
  "Cadillac activation",
  "Syed Junaid gift boxes"
];
