import type { MetadataRoute } from "next";
import { absoluteUrl, seo } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return Object.values(seo)
    .filter((entry) => entry.includeInSitemap !== false)
    .map((entry) => ({
      url: absoluteUrl(entry.href),
      lastModified,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
    }));
}
