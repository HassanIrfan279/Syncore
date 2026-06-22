import type { Metadata } from "next";
import {
  ArrowUpRight,
  Bot,
  Clapperboard,
  Globe2,
  Megaphone,
  PhoneCall,
  ShoppingCart,
} from "lucide-react";
import { FinalCTA } from "@/components/sections/home/FinalCTA";
import { Process } from "@/components/sections/home/Process";
import { TrackedLink } from "@/components/TrackedLink";
import { getPageMetadata } from "@/lib/seo";
import { contact } from "@/lib/site";

export const metadata: Metadata = getPageMetadata("services");

const services = [
  {
    id: "ai-automation",
    eyebrow: "AI Automation",
    title: "AI AUTOMATION",
    promise: "Put your repetitive work on autopilot and never miss a lead.",
    icon: Bot,
    bullets: [
      "AI Call Agents: voice agents that answer, qualify & book 24/7.",
      "AI Chatbots: on-brand chat that turns visitors into customers.",
      "Custom Workflows: automations built around your exact processes.",
    ],
  },
  {
    id: "smart-ai-websites",
    eyebrow: "Smart websites",
    title: "SMART, AI-INTEGRATED WEBSITES",
    promise: "Websites that work for you, not just look good.",
    icon: Globe2,
    bullets: [
      "Professional UI/UX designed around your customer's journey.",
      "Built-in AI: chat, lead capture & smart features that sell 24/7.",
      "Fully tailored to your goals — no generic templates.",
    ],
  },
  {
    id: "social-media-mgmt",
    eyebrow: "Social growth",
    title: "SOCIAL MEDIA MANAGEMENT",
    promise: "Turn your social media into a growth engine.",
    icon: Megaphone,
    bullets: [
      "Data-driven strategy mapped to your audience and goals.",
      "Scroll-stopping creatives produced in-house.",
      "Consistent, compounding growth — followers that convert.",
    ],
  },
  {
    id: "e-commerce-and-ads",
    eyebrow: "Commerce systems",
    title: "E-COMMERCE & PAID ADS",
    promise: "More traffic, more conversions, more revenue.",
    icon: ShoppingCart,
    bullets: [
      "Google Business Profile setup & optimization.",
      "High-performance Meta (FB/IG) ad campaigns.",
      "Conversion-focused funnels built for strong ROI.",
    ],
  },
  {
    id: "short-form-content",
    eyebrow: "Short-form content",
    title: "SHORT-FORM CONTENT",
    promise: "Content engineered to stop the scroll.",
    icon: Clapperboard,
    bullets: [
      "Attention-grabbing hooks and pacing.",
      "High-retention, dopamine-driven editing.",
      "Platform-native Reels, TikToks & Shorts.",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="hero-dark relative overflow-hidden pb-20 pt-36 sm:pt-40 lg:pb-28">
        <div className="container-site relative z-10">
          <div className="max-w-4xl">
            <p className="eyebrow">
              <PhoneCall aria-hidden="true" size={16} strokeWidth={2.4} />
              Services
            </p>
            <h1 className="display-heading text-balance text-brand-white">
              Our Services
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-xl leading-9 text-white/76">
              One team for everything that grows your business.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-site space-y-12 lg:space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isReversed = index % 2 === 1;

            return (
              <article
                id={service.id}
                key={service.title}
                className={`scroll-mt-28 grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                  isReversed ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative">
                  <div
                    className="absolute inset-8 rounded-[2rem] bg-brand-gradient opacity-20 blur-3xl"
                    aria-hidden="true"
                  />

                  <div
                    className="ai-network-panel animated-gradient-border syncore-glow relative min-h-[19rem] p-4 sm:min-h-[25rem] sm:p-5"
                    role="img"
                    aria-label={`${service.eyebrow} abstract Syncore service visual`}
                  >
                    <div className="flex h-full min-h-[17rem] flex-col justify-between rounded-[1rem] border border-white/10 bg-brand-charcoal/74 p-5 text-brand-white shadow-2xl backdrop-blur-xl sm:min-h-[23rem] sm:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="neon-icon flex size-16 items-center justify-center rounded-3xl text-brand-cyan">
                          <Icon aria-hidden="true" size={30} strokeWidth={2.2} />
                        </div>
                        <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2 font-heading text-sm font-extrabold text-white/76">
                          0{index + 1}
                        </span>
                      </div>

                      <div className="mt-10 sm:mt-16">
                        <div className="mb-5 flex gap-2" aria-hidden="true">
                          <span className="h-2 w-16 rounded-full bg-brand-cyan" />
                          <span className="h-2 w-10 rounded-full bg-brand-purple" />
                          <span className="h-2 w-6 rounded-full bg-brand-indigo" />
                        </div>
                        <p className="font-heading text-2xl font-extrabold leading-tight text-brand-white sm:text-3xl">
                          {service.eyebrow}
                        </p>
                        <p className="mt-4 max-w-sm text-base leading-8 text-white/66">
                          Premium systems designed to attract, convert, and
                          compound.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="eyebrow">{service.eyebrow}</p>
                  <h2 className="section-heading max-w-3xl text-balance">
                    {service.title}
                  </h2>
                  <p className="mt-6 text-xl font-semibold leading-9 text-brand-charcoal">
                    {service.promise}
                  </p>

                  <ul className="mt-7 space-y-4">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="spotlight-card flex gap-4 rounded-2xl border border-brand-border bg-brand-surface p-4 text-base font-semibold leading-7 text-brand-charcoal transition duration-300 hover:-translate-y-1 hover:border-brand-cyan/50 hover:bg-brand-white"
                      >
                        <span
                          className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-gradient"
                          aria-hidden="true"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <TrackedLink
                    href={contact.calendly}
                    className="btn btn-primary mt-8 min-h-14 px-7 text-base"
                    target="_blank"
                    rel="noreferrer"
                    tracking="book-call"
                    trackingLocation={`services_${service.eyebrow
                      .toLowerCase()
                      .replaceAll(" ", "_")}`}
                  >
                    Book a Free Call
                    <ArrowUpRight
                      aria-hidden="true"
                      size={18}
                      strokeWidth={2.5}
                    />
                  </TrackedLink>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <Process />
      <FinalCTA />
    </main>
  );
}
