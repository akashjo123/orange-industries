export interface Capability {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  items: string[];
}

export const capabilities: Capability[] = [
  {
    id: "decorative-environments",
    number: "01",
    title: "Decorative environments",
    subtitle: "Feature structures • Branded spaces • Thematic elements",
    description: "Feature structures, branded spaces and thematic elements engineered for physical environments.",
    longDescription: "Integrated production of decorative environments, feature structures, branded venue spaces and thematic architectural installations.",
    image: "/images/hero_industrial.jpg",
    items: [
      "Feature structures",
      "Branded spaces",
      "Thematic elements"
    ]
  },
  {
    id: "architectural-fabrication",
    number: "02",
    title: "Architectural fabrication",
    subtitle: "MS • Aluminium • Stainless steel • Specialist finishes",
    description: "Custom fabricated elements for interiors, façades, public spaces and branded installations.",
    longDescription: "Custom fabricated architectural metalwork in mild steel, aluminium, stainless steel, acrylic, timber and composite finishes. Engineering drawings, material approvals, samples and stage inspections remain connected to the project programme.",
    image: "/images/cap_fabrication.jpg",
    items: [
      "Mild steel (MS)",
      "Aluminium",
      "Stainless steel",
      "Specialist finishes",
      "Acrylic & Timber composites"
    ]
  },
  {
    id: "signage-wayfinding",
    number: "03",
    title: "Signage & wayfinding",
    subtitle: "Internal • External • Illuminated • Directional",
    description: "A coordinated service from site survey and sign schedules through fabrication, illumination, installation and handover.",
    longDescription: "Internal, external, illuminated and directional signage systems planned around user movement and operational environments.",
    image: "/images/cap_signage.jpg",
    items: [
      "External signage — Building identification, pylons and fascia applications",
      "Internal signage — Room identification, directories and statutory signs",
      "Wayfinding — Directional systems planned around user movement",
      "Illuminated signage — LED, fabricated letters and lightbox solutions"
    ]
  },
  {
    id: "display-activation",
    number: "04",
    title: "Display & activation systems",
    subtitle: "SEG • POS • Kiosks • Exhibition structures",
    description: "Retail and commercial display systems manufactured for visibility, durability and repeatable rollout.",
    longDescription: "SEG lightboxes, POS displays, kiosks, and digital display structures engineered for high visibility and rapid venue activation.",
    image: "/images/project_dpworld.jpg",
    items: [
      "SEG lightboxes — Wall mounted, freestanding and custom configurations",
      "POS displays — Product presentation and promotional structures",
      "Kiosks — Custom enclosures and branded customer touchpoints",
      "Digital display structures — LED screen housings and integrated support systems"
    ]
  },
  {
    id: "flags-outdoor-branding",
    number: "05",
    title: "Flags & outdoor branding",
    subtitle: "National • Corporate • Ceremonial systems",
    description: "Flag production and outdoor systems for corporate, government, ceremonial and promotional use.",
    longDescription: "National, corporate, indoor and outdoor flag formats, structural poles, bases, parasols, tents and tensioned fabric display systems.",
    image: "/images/project_f1.jpg",
    items: [
      "Flags — National, corporate, indoor and outdoor formats",
      "Flag accessories — Poles, bases and installation components",
      "Parasols and tents — Branded outdoor systems with sourced frames",
      "Fabric systems — Portable and fixed visual display applications"
    ]
  },
  {
    id: "custom-manufactured-products",
    number: "06",
    title: "Custom manufactured products",
    subtitle: "Awards • Gift boxes • Parasols • Tents",
    description: "Each project begins with feasibility, material selection and an agreed approval route.",
    longDescription: "Bespoke awards, corporate gifts, retail presentation packaging, and specialized engineered commissions outside standard catalogues.",
    image: "/images/cap_fabrication.jpg",
    items: [
      "Awards and trophies — Custom forms, prototypes and premium finishes",
      "Corporate gifts — Branded items and presentation solutions",
      "Retail packaging — Custom packaging for food, beverage and retail clients",
      "Special projects — Engineered commissions outside standard catalogues"
    ]
  }
];
