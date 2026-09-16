export interface Project {
  slug: string;
  title: string;
  client: string;
  category: "events" | "signage" | "fabrication" | "custom";
  scopeList: string[];
  summary: string;
  challenge: string;
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "dp-world",
    title: "DP World — Event branding",
    client: "DP World",
    category: "events",
    summary: "A coordinated event environment requiring consistent brand presentation across multiple physical touchpoints.",
    challenge: "A coordinated event environment requiring consistent brand presentation across multiple physical touchpoints.",
    scopeList: [
      "Large-format event branding",
      "Branded structures and wayfinding",
      "Production, finishing and site installation"
    ],
    image: "/images/project_dpworld.jpg",
    featured: true,
  },
  {
    slug: "formula-1",
    title: "Formula 1 — Brand activation",
    client: "Formula 1",
    category: "events",
    summary: "A time-critical activation requiring premium presentation, high visibility and controlled venue installation.",
    challenge: "A time-critical activation requiring premium presentation, high visibility and controlled venue installation.",
    scopeList: [
      "Activation structures and display elements",
      "Environmental graphics and finishes",
      "Venue installation and removal"
    ],
    image: "/images/project_f1.jpg",
    featured: true,
  },
  {
    slug: "ministry-of-health",
    title: "Ministry of Health — Signage programme",
    client: "Ministry of Health",
    category: "signage",
    summary: "A public-sector signage requirement focused on clarity, durability and installation within an operational environment.",
    challenge: "A public-sector signage requirement focused on clarity, durability and installation within an operational environment.",
    scopeList: [
      "Directional and identification signage",
      "Material and finish control",
      "Phased production and installation"
    ],
    image: "/images/cap_signage.jpg",
    featured: true,
  },
  {
    slug: "building-branding",
    title: "Building branding — Façade branding",
    client: "Commercial & Corporate Real Estate",
    category: "fabrication",
    summary: "A large-scale façade-branding requirement needing accurate measurement, engineered mounting and safe installation.",
    challenge: "A large-scale façade-branding requirement needing accurate measurement, engineered mounting and safe installation.",
    scopeList: [
      "Site survey and technical detailing",
      "Large-format fabricated brand elements",
      "Access planning and installation"
    ],
    image: "/images/cap_fabrication.jpg",
    featured: true,
  },
  {
    slug: "aramco",
    title: "Aramco — Trophies and corporate gifts",
    client: "Aramco",
    category: "custom",
    summary: "A recognition programme requiring bespoke design, precise fabrication, premium finishing and presentation packaging.",
    challenge: "A recognition programme requiring bespoke design, precise fabrication, premium finishing and presentation packaging.",
    scopeList: [
      "Design development and prototyping",
      "Custom trophies and corporate gifts",
      "Finishing, inspection and packaging"
    ],
    image: "/images/cap_fabrication.jpg",
    featured: true,
  },
  {
    slug: "dior",
    title: "Dior — Event branding",
    client: "Dior",
    category: "events",
    summary: "A luxury event environment requiring disciplined colour control, refined detailing and discreet site execution.",
    challenge: "A luxury event environment requiring disciplined colour control, refined detailing and discreet site execution.",
    scopeList: [
      "Branded environmental elements",
      "Premium finishes and detailing",
      "Controlled production and installation"
    ],
    image: "/images/hero_industrial.jpg",
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
