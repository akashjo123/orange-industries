export interface Sector {
  id: string;
  number: string;
  title: string;
  kicker: string;
  description: string;
  longDescription: string;
  image: string;
  targetClients: string[];
  capabilitiesProvided: string[];
}

export const sectors: Sector[] = [
  {
    id: "events",
    number: "01",
    title: "Events, Sports + Public Experiences",
    kicker: "FAST PROGRAMMES • TEMPORARY ENVIRONMENTS • VENUE DELIVERY",
    description: "Programme discipline matters most when the opening date cannot move. Built for event companies, sporting bodies, and government activations.",
    longDescription: "Time-critical production, graphics, temporary structures, and venue delivery for international sporting events, government activations, and creative partners.",
    image: "/images/project_f1.jpg",
    targetClients: ["Event companies", "Sporting bodies", "Government activations", "Creative agency partners"],
    capabilitiesProvided: [
      "Fast programmes & venue delivery",
      "Branded spaces & immersive environments",
      "Venue production & installed brand assets",
      "Agency production support & temporary structures"
    ]
  },
  {
    id: "corporate",
    number: "02",
    title: "Corporate + Commercial Environments",
    kicker: "BRAND CONSISTENCY • MULTI-LOCATION ROLLOUTS • MAINTENANCE",
    description: "Multi-location rollouts, brand consistency, architectural fabrication, and commercial environments.",
    longDescription: "Coordinated production for financial institutions, telecommunications providers, automotive showrooms, shopping malls, and luxury hotels requiring strict brand consistency.",
    image: "/images/cap_signage.jpg",
    targetClients: ["Banks", "Telecom operators", "Automotive groups", "Shopping Malls", "Hotels"],
    capabilitiesProvided: [
      "Brand consistency across sites",
      "Multi-location repeatable rollouts",
      "Architectural metalwork & interior features",
      "Maintenance & ongoing support"
    ]
  },
  {
    id: "signage-specialist",
    number: "03",
    title: "Signage + Specialist Manufacturing",
    kicker: "ENGINEERING • DURABILITY • DOCUMENTATION • CONTROLLED INSTALLATION",
    description: "High-specification, durable signage networks, public sector wayfinding, and custom engineered fabrications.",
    longDescription: "Engineered signage and specialist manufacturing compliant with strict government, property, healthcare, and industrial standards across the Kingdom of Bahrain and United Arab Emirates.",
    image: "/images/project_dpworld.jpg",
    targetClients: ["Government ministries", "Property developers", "Airports", "Education & Healthcare", "Oil & Gas"],
    capabilitiesProvided: [
      "Engineering & structural calculations",
      "Durability & weather resistance",
      "Complete documentation & RAMS compliance",
      "Controlled site installation & snag-free handover"
    ]
  }
];
