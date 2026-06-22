import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  Eye,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { TrackedLink } from "@/components/TrackedLink";
import { getPageMetadata } from "@/lib/seo";
import { aboutContent, contact } from "@/lib/site";

export const metadata: Metadata = getPageMetadata("about");

const values = [
  {
    title: "AI-forward",
    copy: "Modern systems, smarter workflows, and practical AI built around real business outcomes.",
    icon: Bot,
  },
  {
    title: "Results-driven",
    copy: "Every deliverable is shaped around growth signals: leads, sales, conversion, and retention.",
    icon: Target,
  },
  {
    title: "Transparent",
    copy: "Clear strategy, clear communication, and clean reporting so you always know what is happening.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="hero-dark relative overflow-hidden pb-20 pt-36 sm:pt-40 lg:pb-28">
        <div className="container-site relative z-10">
          <div className="max-w-5xl">
            <p className="eyebrow">
              <Sparkles aria-hidden="true" size={16} strokeWidth={2.4} />
              About
            </p>
            <h1 className="display-heading text-balance text-brand-white">
              About Syncore
            </h1>
            <p className="mt-8 max-w-4xl text-pretty text-xl leading-10 text-white/76">
              Syncore is a digital growth agency built for businesses that want
              to move faster and smarter. We combine AI automation,
              conversion-focused websites, scroll-stopping content, and
              performance-driven advertising into one connected system &mdash;
              turning attention into revenue, so you can focus on running your
              business while we handle the growth.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">Our Approach</p>
              <h2 className="section-heading text-balance">Our Approach</h2>
            </div>

            <p className="lead max-w-2xl lg:ml-auto">
              Clean strategy, connected execution, and measurable growth systems
              that help your business move with more confidence.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="card card-gradient spotlight-card tilt-card group p-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="neon-icon flex size-14 items-center justify-center rounded-2xl text-brand-cyan transition duration-300 group-hover:-translate-y-1 group-hover:text-brand-white">
                      <Icon aria-hidden="true" size={24} strokeWidth={2.2} />
                    </div>
                    <span className="font-heading text-sm font-extrabold text-brand-border">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl">{value.title}</h3>
                  <p className="mt-4 leading-8">{value.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-center">
            <div
              className="animated-gradient-border floating-visual relative min-h-80 overflow-hidden rounded-[1.5rem] bg-brand-charcoal p-6 text-brand-white syncore-glow"
              role="img"
              aria-label={aboutContent.founderNote.visualLabel}
            >
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgb(0_188_212/0.24),transparent_18rem),radial-gradient(circle_at_82%_72%,rgb(176_74_226/0.22),transparent_20rem),linear-gradient(rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.05)_1px,transparent_1px)] bg-[length:auto,auto,3.5rem_3.5rem,3.5rem_3.5rem]"
                aria-hidden="true"
              />

              <div className="relative z-10 flex h-full min-h-72 flex-col justify-between rounded-[1rem] border border-white/12 bg-white/8 p-6 backdrop-blur">
                <Eye
                  aria-hidden="true"
                  className="text-brand-cyan"
                  size={34}
                  strokeWidth={2.2}
                />
                <div>
                  <p className="font-heading text-sm font-extrabold uppercase tracking-[0.14em] text-brand-cyan">
                    {aboutContent.founderNote.visualEyebrow}
                  </p>
                  <p className="mt-4 font-heading text-3xl font-extrabold leading-tight text-brand-white">
                    {aboutContent.founderNote.visualTitle}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="eyebrow">{aboutContent.founderNote.eyebrow}</p>
              <h2 className="section-heading max-w-3xl text-balance">
                {aboutContent.founderNote.heading}
              </h2>
              <p className="mt-6 text-lg leading-9 text-brand-muted">
                {aboutContent.founderNote.copy}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark py-20 sm:py-24">
        <div className="container-site">
          <div className="glass-panel relative overflow-hidden p-7 sm:p-10 lg:p-12">
            <div
              className="absolute right-0 top-0 h-56 w-56 translate-x-16 -translate-y-16 rounded-full bg-brand-gradient opacity-20 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="eyebrow">Next step</p>
                <h2 className="section-heading max-w-2xl text-balance text-brand-white">
                  Let&apos;s build your growth system.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/74">
                  Talk to Syncore about the systems, website, content, and
                  campaigns your business needs next.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <TrackedLink
                  href={contact.calendly}
                  className="btn btn-primary min-h-14 px-7 text-base"
                  target="_blank"
                  rel="noreferrer"
                  tracking="book-call"
                  trackingLocation="about_cta"
                >
                  Book a Free Call
                  <ArrowUpRight
                    aria-hidden="true"
                    size={18}
                    strokeWidth={2.5}
                  />
                </TrackedLink>

                <Link
                  href="/contact"
                  className="btn btn-secondary min-h-14 px-7 text-base"
                >
                  Contact Us
                  <ArrowUpRight
                    aria-hidden="true"
                    size={18}
                    strokeWidth={2.5}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
