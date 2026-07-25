import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { POSTS } from "@/lib/posts";
import { PROJECTS } from "@/lib/projects";
import { LANDING_PAGES } from "@/lib/landingPages";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.6 },
  ];

  const landingRoutes: MetadataRoute.Sitemap = LANDING_PAGES.map((page) => ({
    url: `${SITE_URL}/${page.slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const workRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${SITE_URL}/work/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...landingRoutes, ...workRoutes, ...blogRoutes];
}
