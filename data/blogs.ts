export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
}

export const blogNote = {
  headline: "Engineering Insights & Articles",
  notice: "Official Specification Note: The supplied company profiles reserve this section for future articles, project insights, and manufacturing content once approved client content is provided."
};

export const blogPosts: BlogPost[] = [
  {
    slug: "future-manufacturing-insights",
    title: "Engineering Insights & Manufacturing Content Hub",
    category: "Project Insights",
    date: "Upcoming Release",
    readTime: "Future Article",
    image: "/images/cap_fabrication.jpg",
    excerpt: "Reserved for future project insights, technical manufacturing whitepapers, and approved client articles.",
    content: [
      "The supplied company profile documents reserve the blog space for future articles, technical whitepapers, and manufacturing project insights.",
      "Future content will cover shop drawing workflows, AWS welding standards, thermal expansion engineering for GCC architectural facades, and single-accountable delivery models."
    ]
  },
  {
    slug: "precision-fabrication-f1",
    title: "Precision Fabrication for Formula 1 Activation",
    category: "Case Studies",
    date: "Mar 12, 2024",
    readTime: "5 min read",
    image: "/images/project_f1.jpg",
    excerpt: "Exploring the high-stakes engineering and accelerated timelines required to deliver flawless structural assets for global motorsport events.",
    content: [
      "Delivering for Formula 1 requires a unique blend of structural integrity and premium aesthetic finishing. In this breakdown, our engineering team explores the fabrication methodologies used to create rapid-deployment hospitality structures.",
      "Key topics include modular steel frameworks, custom aluminum cladding, and the logistics of assembling multi-story structures in live event environments within strict 72-hour windows."
    ]
  },
  {
    slug: "wayfinding-systems-dp-world",
    title: "Material Durability in Coastal Wayfinding Systems",
    category: "Technical Papers",
    date: "Feb 04, 2024",
    readTime: "8 min read",
    image: "/images/project_dpworld.jpg",
    excerpt: "A technical review of anti-corrosive coatings and marine-grade materials used in our industrial signage projects for DP World.",
    content: [
      "Coastal industrial environments present extreme challenges for exterior signage. High salinity, intense UV exposure, and wind sheer require specialized material specifications.",
      "This technical paper outlines our approach to specifying marine-grade stainless steel (316L), specialized powder coatings, and engineered footing systems for large-scale pylon signs in port environments."
    ]
  },
  {
    slug: "integration-of-smart-signage",
    title: "The Integration of Smart Signage in Modern Retail",
    category: "Industry Trends",
    date: "Jan 18, 2024",
    readTime: "4 min read",
    image: "/images/cap_signage.jpg",
    excerpt: "How digital displays and traditional fabrication are merging to create hybrid wayfinding and advertising solutions for commercial real estate.",
    content: [
      "The line between static signage and digital architecture is blurring. We are increasingly seeing requests for hybrid structures that house complex digital display panels within bespoke fabricated environments.",
      "This article discusses the thermal management, structural load engineering, and aesthetic integration required when embedding high-brightness LED arrays into traditional architectural metalwork."
    ]
  }
];
