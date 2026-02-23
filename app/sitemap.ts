import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogs";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/platform",
    "/training",
    "/pricing",
    "/developers",
    "/blog",
    "/about",
    "/contact",
    "/legal/privacy-policy",
    "/legal/terms-and-conditions",
    "/legal/cookie-policy",
    "/legal/refund-policy",
    "/legal/data-protection-policy"
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteConfig.domain}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7
    })),
    ...blogPosts.map((post) => ({
      url: `${siteConfig.domain}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6
    }))
  ];
}
