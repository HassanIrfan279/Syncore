import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  Clapperboard,
  Globe2,
  Megaphone,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/site";

const serviceIcons: Record<string, LucideIcon> = {
  "ai-automation": Bot,
  "smart-ai-websites": Globe2,
  "social-media-mgmt": Megaphone,
  "e-commerce-and-ads": ShoppingCart,
  "short-form-content": Clapperboard,
};

export function ServicesOverview() {
  return (
    <section className="section section-light">
      <div className="container-site">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">Services</p>
            <h2 className="section-heading text-balance">What We Do.</h2>
          </div>

          <p className="lead max-w-2xl lg:ml-auto">
            Everything you need to attract, convert, and keep customers &mdash;
            under one roof.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service) => {
            const Icon = serviceIcons[service.id] ?? Bot;

            return (
              <article
                key={service.title}
                className="card card-gradient spotlight-card tilt-card group flex min-h-72 flex-col p-6"
              >
                <div className="neon-icon flex size-14 items-center justify-center rounded-2xl text-brand-cyan transition duration-300 group-hover:-translate-y-1 group-hover:text-brand-white">
                  <Icon aria-hidden="true" size={24} strokeWidth={2.2} />
                </div>

                <h3 className="mt-7 text-2xl">{service.title}</h3>

                <p className="mt-4 text-base leading-8">
                  {service.homeBenefit}
                </p>

                <div
                  className="mt-6 h-1 w-16 rounded-full bg-brand-gradient opacity-60 transition duration-300 group-hover:w-24 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <Link
                  href={service.href}
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-extrabold text-brand-indigo transition hover:gap-3 hover:text-brand-purple"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn more
                  <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2.4} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
