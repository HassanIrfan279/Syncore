import Link from "next/link";
import Image from "next/image";
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

const serviceImages: Record<string, string> = {
  "ai-automation": "/images/services/ai-call-support.jpg",
  "smart-ai-websites": "/images/services/web-design-workspace.jpg",
  "social-media-mgmt": "/images/services/social-phone-management.jpg",
  "e-commerce-and-ads": "/images/services/ecommerce-fulfillment.jpg",
  "short-form-content": "/images/services/video-editing-workspace.jpg",
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
                className="home-dark-card card card-gradient spotlight-card tilt-card group flex min-h-[24rem] flex-col overflow-hidden"
              >
                <div className="relative aspect-[1.38] overflow-hidden">
                  <Image
                    src={serviceImages[service.id]}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 20vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/45 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="neon-icon absolute left-5 top-5 flex size-14 items-center justify-center rounded-2xl text-brand-cyan transition duration-300 group-hover:-translate-y-1 group-hover:text-brand-white">
                    <Icon aria-hidden="true" size={24} strokeWidth={2.2} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl text-brand-white">{service.title}</h3>

                  <p className="mt-4 text-base leading-8 text-white/70">
                    {service.homeBenefit}
                  </p>

                  <div
                    className="mt-6 h-1 w-16 rounded-full bg-brand-gradient opacity-60 transition duration-300 group-hover:w-24 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <Link
                    href={service.href}
                    className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-extrabold text-brand-cyan transition hover:gap-3 hover:text-brand-purple"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn more
                    <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2.4} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
