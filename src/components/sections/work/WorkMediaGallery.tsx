"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Film, ImageIcon } from "lucide-react";
import {
  workMedia,
  type WorkMediaCategory,
  type WorkMediaItem,
} from "@/lib/site";

type Filter = "All" | WorkMediaCategory;

const filters: Filter[] = [
  "All",
  "Social Media",
  "AI Automation",
  "Web & SEO",
  "Ads & E-Commerce",
  "Video Production",
];

function getAspectClass(item: WorkMediaItem) {
  if (item.orientation === "portrait") {
    return "aspect-[0.72]";
  }

  if (item.orientation === "square") {
    return "aspect-square";
  }

  return "aspect-[1.55]";
}

export function WorkMediaGallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredMedia = useMemo(() => {
    if (activeFilter === "All") {
      return workMedia;
    }

    return workMedia.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="section section-light">
      <div className="container-site">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">Portfolio gallery</p>
            <h2 className="section-heading text-balance">
              Work samples by service.
            </h2>
          </div>

          <div
            className="flex flex-wrap gap-2 rounded-[1.25rem] border border-brand-border bg-brand-surface p-2 sm:rounded-full"
            aria-label="Filter work samples by category"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`min-h-11 shrink-0 rounded-full px-4 py-2 text-sm font-extrabold transition ${
                  activeFilter === filter
                    ? "bg-brand-gradient text-brand-white shadow-[0_1rem_2.25rem_rgb(0_188_212/18%)]"
                    : "text-brand-muted hover:bg-brand-white hover:text-brand-charcoal"
                }`}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredMedia.map((item) => (
            <article
              key={item.id}
              className="card spotlight-card group overflow-hidden"
            >
              <div
                className={`relative overflow-hidden bg-brand-charcoal ${getAspectClass(item)}`}
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt || item.title}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="h-full w-full object-cover"
                    controls
                    muted
                    playsInline
                    preload="metadata"
                  />
                )}
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-brand-border bg-brand-surface px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-indigo">
                    {item.category}
                  </span>
                  <span
                    className="inline-flex size-10 items-center justify-center rounded-full bg-brand-surface text-brand-indigo"
                    aria-label={item.type === "image" ? "Image asset" : "Video asset"}
                  >
                    {item.type === "image" ? (
                      <ImageIcon aria-hidden="true" size={18} strokeWidth={2.4} />
                    ) : (
                      <Film aria-hidden="true" size={18} strokeWidth={2.4} />
                    )}
                  </span>
                </div>
                <h3 className="mt-4 text-xl">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
