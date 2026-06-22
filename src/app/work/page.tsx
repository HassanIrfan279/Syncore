import type { Metadata } from "next";
import { BriefcaseBusiness } from "lucide-react";
import { PortfolioGrid } from "@/components/sections/work/PortfolioGrid";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("work");

export default function WorkPage() {
  return (
    <main>
      <section className="hero-dark relative overflow-hidden pb-20 pt-36 sm:pt-40 lg:pb-28">
        <div className="container-site relative z-10">
          <div className="max-w-4xl">
            <p className="eyebrow">
              <BriefcaseBusiness
                aria-hidden="true"
                size={16}
                strokeWidth={2.4}
              />
              Portfolio
            </p>
            <h1 className="display-heading text-balance text-brand-white">
              Our Work
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-xl leading-9 text-white/76">
              Real projects, real results.
            </p>
          </div>
        </div>
      </section>

      <PortfolioGrid />
    </main>
  );
}
