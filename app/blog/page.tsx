import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { blogPosts, blogNote } from "@/data/blogs";
import { ArrowUpRight, Calendar, Clock, FileText } from "lucide-react";

export const metadata = {
  title: "Blog & Insights — Orange Industries Bahrain",
  description: "Official publication hub for engineering whitepapers, project insights, and manufacturing content.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        number="5.0"
        eyebrow="BLOG & INSIGHTS"
        title={blogNote.headline}
        description="Official publication hub for engineering whitepapers, project insights, and manufacturing content."
      />

      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* PDF Section 5 Official Notice */}
          <div className="bg-white rounded-xl shadow-sm p-8 space-y-3">
            <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-wider block">
              DOCUMENTATION FLOW SPECIFICATION
            </span>
            <p className="text-base font-mono text-zinc-700 leading-relaxed">
              {blogNote.notice}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-md"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover filter grayscale contrast-125 brightness-95 group-hover:scale-105 group-hover:filter-none transition-all duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#141416]/90 backdrop-blur px-3 py-1.5 text-[11px] font-mono text-brand-orange font-bold uppercase rounded-md shadow-sm">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                        {post.date}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-zinc-400" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-zinc-900 group-hover:text-brand-orange transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-sm text-zinc-500 font-mono line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-400 flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-brand-orange" />
                      Future Article
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-brand-orange font-bold uppercase tracking-wider text-[11px] flex items-center gap-1 hover:text-zinc-900 transition-colors"
                    >
                      <span>Read Specification</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
