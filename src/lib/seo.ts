import type { Metadata } from "next";
import type { SeoKey } from "@/lib/site";
import { brand, business, defaultOgImage, seo } from "@/lib/site";

const crawlableRobots: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

const noIndexRobots: Metadata["robots"] = {
  index: false,
  follow: false,
  googleBot: {
    index: false,
    follow: false,
  },
};

export function getPageMetadata(page: SeoKey): Metadata {
  const entry = seo[page];
  const isIndexable = entry.index !== false;
  const canonical = isIndexable ? entry.href : "/";

  return {
    title: entry.title,
    description: entry.description,
    keywords: entry.keywords,
    alternates: {
      canonical,
    },
    robots: isIndexable ? crawlableRobots : noIndexRobots,
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: canonical,
      siteName: brand.name,
      locale: business.locale,
      type: "website",
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${brand.name} - ${brand.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
      images: [defaultOgImage],
    },
  };
}
