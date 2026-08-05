import type { MetadataRoute } from "next";
import { profile } from "./data/profile";
import { projects } from "./data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.siteUrl;

  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/resume`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/projects`, changeFrequency: "monthly", priority: 0.9 },
    ...projects.map((project) => ({
      url: `${base}/projects/${project.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
