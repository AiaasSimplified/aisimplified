import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, blogPosts } from "@/data/blogs";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt
    }
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900 sm:p-10">
      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{post.publishedAt}</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">{post.title}</h1>
      <p className="mt-4 text-base text-slate-600 dark:text-slate-300">{post.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-8 space-y-4 text-slate-700 dark:text-slate-200">
        {post.content.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-10 border-t border-slate-200 pt-6 dark:border-slate-700">
        <p className="text-sm font-medium">Author: {post.author}</p>
      </div>
    </article>
  );
}
