import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { TrackedLink } from "@/components/TrackedLink";
import { getPageMetadata } from "@/lib/seo";
import { contact } from "@/lib/site";

export const metadata: Metadata = getPageMetadata("contact");

export default function ContactPage() {
  return (
    <main>
      <section className="hero-dark relative overflow-hidden pb-20 pt-36 sm:pt-40 lg:pb-28">
        <div className="container-site relative z-10">
          <div className="max-w-4xl">
            <p className="eyebrow">
              <Send aria-hidden="true" size={16} strokeWidth={2.4} />
              Contact
            </p>
            <h1 className="display-heading text-balance text-brand-white">
              Let&apos;s Talk.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-xl leading-9 text-white/76">
              Tell us about your business and we&apos;ll show you how to grow
              it.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container-site grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <ContactForm />

          <aside className="space-y-5">
            <div className="card brand-gradient-surface spotlight-card p-6 sm:p-7">
              <h2 className="font-heading text-2xl font-extrabold text-brand-charcoal">
                Contact details
              </h2>
              <div className="mt-6 space-y-4">
                <Link
                  href={`mailto:${contact.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-brand-border bg-brand-surface p-4 transition hover:border-brand-cyan/60 hover:bg-brand-white"
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-brand-charcoal text-brand-cyan transition group-hover:bg-brand-gradient group-hover:text-brand-white">
                    <Mail aria-hidden="true" size={19} strokeWidth={2.3} />
                  </span>
                  <span>
                    <span className="block font-heading text-sm font-extrabold text-brand-charcoal">
                      Email
                    </span>
                    <span className="text-sm font-semibold text-brand-muted">
                      {contact.email}
                    </span>
                  </span>
                </Link>

                <TrackedLink
                  href={contact.whatsapp}
                  className="group flex items-center gap-4 rounded-2xl border border-brand-border bg-brand-surface p-4 transition hover:border-brand-cyan/60 hover:bg-brand-white"
                  target="_blank"
                  rel="noreferrer"
                  tracking="whatsapp"
                  trackingLocation="contact_details"
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-brand-charcoal text-brand-cyan transition group-hover:bg-brand-gradient group-hover:text-brand-white">
                    <MessageCircle
                      aria-hidden="true"
                      size={19}
                      strokeWidth={2.3}
                    />
                  </span>
                  <span>
                    <span className="block font-heading text-sm font-extrabold text-brand-charcoal">
                      WhatsApp
                    </span>
                    <span className="text-sm font-semibold text-brand-muted">
                      Click to chat
                    </span>
                  </span>
                </TrackedLink>
              </div>
            </div>

            <div className="brand-gradient-surface spotlight-card relative overflow-hidden rounded-[1.25rem] border border-brand-border bg-brand-white p-6 shadow-card sm:p-7">
              <div
                className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-brand-gradient opacity-15 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-charcoal text-brand-cyan">
                  <MessageCircle
                    aria-hidden="true"
                    size={23}
                    strokeWidth={2.3}
                  />
                </div>
                <h2 className="mt-6 font-heading text-2xl font-extrabold text-brand-charcoal">
                  Send a message
                </h2>
                <p className="mt-4 leading-8 text-brand-muted">
                  Prefer a direct conversation? Message Syncore on WhatsApp and
                  we&apos;ll continue from there.
                </p>
                <TrackedLink
                  href={contact.whatsapp}
                  className="btn btn-secondary mt-5 w-full"
                  target="_blank"
                  rel="noreferrer"
                  tracking="whatsapp"
                  trackingLocation="contact_message_card"
                >
                  Open WhatsApp
                  <ArrowUpRight
                    aria-hidden="true"
                    size={17}
                    strokeWidth={2.4}
                  />
                </TrackedLink>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
