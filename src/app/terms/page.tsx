import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeDollarSign,
  FileText,
  Mail,
  Scale,
  ShieldAlert,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { getPageMetadata } from "@/lib/seo";
import { termsContent } from "@/lib/site";

export const metadata: Metadata = getPageMetadata("terms");

const termsIcons: Record<string, LucideIcon> = {
  "website-use": FileText,
  services: Sparkles,
  payments: BadgeDollarSign,
  "intellectual-property": ShieldAlert,
  "limitation-of-liability": Scale,
  contact: Mail,
};

export default function TermsPage() {
  return (
    <main>
      <section className="hero-dark relative overflow-hidden pb-20 pt-36 sm:pt-40 lg:pb-28">
        <div className="container-site relative z-10">
          <div className="max-w-4xl">
            <p className="eyebrow">
              <FileText aria-hidden="true" size={16} strokeWidth={2.4} />
              Terms
            </p>
            <h1 className="display-heading text-balance text-brand-white">
              Terms of Use
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-xl leading-9 text-white/76">
              {termsContent.heroCopy}
            </p>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">Usage terms</p>
              <h2 className="section-heading text-balance">
                Clear rules for the website and services.
              </h2>
            </div>

            <p className="lead max-w-2xl lg:ml-auto">
              {termsContent.introCopy}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {termsContent.sections.map((section) => {
              const Icon = termsIcons[section.id] ?? FileText;

              return (
                <article key={section.title} className="card card-gradient p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-charcoal text-brand-cyan">
                      <Icon aria-hidden="true" size={22} strokeWidth={2.3} />
                    </div>
                    <div>
                      <h3 className="text-2xl">{section.title}</h3>
                      <p className="mt-4 leading-8">{section.copy}</p>
                    </div>
                  </div>
                </article>
              );
            })}
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
                <p className="eyebrow">Need clarity?</p>
                <h2 className="section-heading max-w-2xl text-balance text-brand-white">
                  Talk to Syncore before starting.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/74">
                  Use the contact page to ask about service scopes, proposals,
                  payments, or project agreements.
                </p>
              </div>

              <Link
                href="/contact"
                className="btn btn-primary min-h-14 px-7 text-base"
              >
                Contact Syncore
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
