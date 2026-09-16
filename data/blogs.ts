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
  }
];
