import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  Cookie,
  Mail,
  MousePointer2,
  Send,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { getPageMetadata } from "@/lib/seo";
import { privacyPolicy } from "@/lib/site";

export const metadata: Metadata = getPageMetadata("privacy");

const privacyIcons: Record<string, LucideIcon> = {
  "information-collected": ShieldCheck,
  "form-submissions": Send,
  analytics: BarChart3,
  "meta-pixel": MousePointer2,
  cookies: Cookie,
  contact: Mail,
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="hero-dark relative overflow-hidden pb-20 pt-36 sm:pt-40 lg:pb-28">
        <div className="container-site relative z-10">
          <div className="max-w-4xl">
            <p className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} strokeWidth={2.4} />
              Privacy
            </p>
            <h1 className="display-heading text-balance text-brand-white">
              Privacy Policy
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-xl leading-9 text-white/76">
              {privacyPolicy.heroCopy}
            </p>
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">Policy details</p>
              <h2 className="section-heading text-balance">
                How Syncore handles visitor information.
              </h2>
            </div>

            <p className="lead max-w-2xl lg:ml-auto">
              {privacyPolicy.introCopy}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {privacyPolicy.sections.map((section) => {
              const Icon = privacyIcons[section.id] ?? ShieldCheck;

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

          <div className="mt-12 rounded-[1.25rem] border border-brand-border bg-brand-white p-6 shadow-card sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="eyebrow">Need help?</p>
                <h2 className="font-heading text-3xl font-extrabold text-brand-charcoal sm:text-4xl">
                  Questions about your information?
                </h2>
                <p className="mt-4 max-w-2xl leading-8">
                  Reach out and Syncore will respond using the contact details
                  configured for the website.
                </p>
              </div>

              <Link href="/contact" className="btn btn-primary min-h-14 px-7">
                Contact Syncore
                <Mail aria-hidden="true" size={18} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
