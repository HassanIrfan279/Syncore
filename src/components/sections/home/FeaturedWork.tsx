import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { work } from "@/lib/site";

const featuredWork = work.filter((item) =>
  [
    "lahore-grill-house-social-growth",
    "hunza-heights-ai-booking",
    "skybreeze-fans-web-seo",
  ].includes(item.id),
);

export function FeaturedWork() {
  return (
    <section className="section section-surface">
      <div className="container-site">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">Featured work</p>
            <h2 className="section-heading text-balance">Built to Convert.</h2>
          </div>

          <Link
            href="/work"
            className="btn btn-secondary w-fit min-h-12 px-5"
          >
            View all work
            <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2.4} />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredWork.map((item, index) => (
            <Link
              key={item.id}
              href={item.href}
              className="home-dark-card card spotlight-card tilt-card group overflow-hidden"
            >
              <div
                className="premium-thumbnail relative aspect-[1.35] overflow-hidden"
                role="img"
                aria-label={`${item.title} portfolio thumbnail showing ${item.visualLabel}`}
              >
                {item.visualSrc ? (
                  <Image
                    src={item.visualSrc}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="animate-thumbnail-drift absolute inset-0" aria-hidden="true" />
                )}
                {!item.visualSrc ? (
                  <>
                    <div
                      className="absolute inset-0 z-[2] bg-gradient-to-t from-brand-charcoal via-brand-charcoal/34 to-transparent"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute left-4 top-4 z-[3] flex size-11 items-center justify-center rounded-2xl border border-white/18 bg-white/12 text-brand-white backdrop-blur sm:left-6 sm:top-6 sm:size-12"
                      aria-hidden="true"
                    >
                      <Sparkles size={22} strokeWidth={2.2} />
                    </div>
                    <div className="absolute bottom-4 right-4 z-[3] rounded-full border border-white/18 bg-white/12 px-3 py-1.5 font-heading text-xs font-extrabold text-brand-white backdrop-blur sm:bottom-6 sm:right-6 sm:px-4 sm:py-2 sm:text-sm">
                      0{index + 1}
                    </div>
                    <div
                      className="absolute left-6 right-6 top-24 z-[3] hidden rounded-2xl border border-white/18 bg-brand-charcoal/52 p-4 shadow-2xl backdrop-blur-xl transition duration-500 group-hover:-translate-y-2 sm:block"
                      aria-hidden="true"
                    >
                      <div className="mb-4 flex gap-1.5">
                        <span className="size-2 rounded-full bg-brand-cyan" />
                        <span className="size-2 rounded-full bg-white/36" />
                        <span className="size-2 rounded-full bg-brand-purple" />
                      </div>
                      <div className="grid grid-cols-[1fr_0.7fr] gap-3">
                        <div className="space-y-2">
                          <span className="block h-2 rounded-full bg-white/65" />
                          <span className="block h-2 w-3/4 rounded-full bg-white/28" />
                          <span className="block h-2 w-1/2 rounded-full bg-brand-cyan/70" />
                        </div>
                        <div className="flex items-end gap-1.5">
                          <span className="h-8 w-3 rounded-full bg-brand-cyan" />
                          <span className="h-12 w-3 rounded-full bg-brand-purple" />
                          <span className="h-6 w-3 rounded-full bg-white/48" />
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>

              <div className="p-6">
                <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-cyan">
                  {item.service}
                </span>
                <h3 className="mt-5 text-2xl text-brand-white">{item.title}</h3>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-brand-cyan transition duration-300 group-hover:translate-x-1 group-hover:gap-3 group-hover:text-brand-purple">
                  View project
                  <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2.4} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
