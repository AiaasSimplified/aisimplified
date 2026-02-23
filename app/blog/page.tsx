import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on AI voice agents, agentic AI systems, and enterprise deployment strategy."
};

export default function BlogListPage() {
  return (
    <div className="space-y-14">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Blog"
          title="Insights for enterprise AI builders"
          description="Perspectives on voice AI platform architecture, agentic AI operations, and deployment best practices."
        />
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid gap-5">
          {blogPosts.map((post) => (
            <article key={post.slug} className="surface-card rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.15em] text-slate-500">{post.publishedAt}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                <Link href={`/blog/${post.slug}`} className="hover:text-ai-700 dark:hover:text-ai-300">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
