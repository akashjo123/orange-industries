import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogs";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, FileText } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  if (!post) return {};

  return {
    title: `${post.title} — Orange Industries`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs text-brand-orange-text uppercase tracking-wider hover:text-slate-950 transition-colors font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Insights</span>
          </Link>

          <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
            <span className="bg-brand-orange text-black font-bold px-3 py-1 uppercase">
              {post.category}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-brand-orange-text" />
              {post.date}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Main Image */}
      <section className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 sm:h-[450px] w-full border border-slate-200 overflow-hidden shadow-sm">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
          <p className="text-lg text-slate-800 font-medium leading-relaxed border-l-2 border-brand-orange pl-4 italic">
            "{post.excerpt}"
          </p>

          <div className="space-y-6 text-slate-700 text-base leading-relaxed">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-8 border-t border-slate-200 flex items-center justify-between">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-orange text-black px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider hover:bg-slate-950 hover:text-white transition-colors"
            >
              <span>Discuss Project Requirements</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
