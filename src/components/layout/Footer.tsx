import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { TrackedLink } from "@/components/TrackedLink";
import {
  brand,
  contact,
  legalLinks,
  logoMark,
  navigationLinks,
  services,
  socialLinks,
} from "@/lib/site";

const quickLinks = navigationLinks.filter((link) => link.label !== "Home");
const visibleSocialLinks = socialLinks.filter((link) => !link.isPlaceholder);
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="section-dark relative border-t border-white/10 pt-20">
      <div
        className="absolute inset-x-0 top-0 h-px bg-brand-gradient opacity-80"
        aria-hidden="true"
      />
      <div className="container-site">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center text-brand-white"
              aria-label="Syncore home"
            >
              <Image
                src={logoMark}
                alt="Syncore"
                width={300}
                height={86}
                className="h-auto w-[13rem] object-contain sm:w-[15.5rem]"
              />
            </Link>

            <p className="mt-5 text-base leading-8 text-white/72">
              Syncore &mdash; Your Digital Partners
            </p>

            <div className="glass-panel animated-gradient-border mt-8 p-5">
              <p className="font-heading text-xl font-extrabold text-brand-white">
                Ready to grow? Send us a message.
              </p>
              <TrackedLink
                href={contact.whatsapp}
                className="btn btn-primary mt-5 w-full"
                target="_blank"
                rel="noreferrer"
                tracking="whatsapp"
                trackingLocation="footer_cta"
              >
                Send Message
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.5} />
              </TrackedLink>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-sm font-extrabold uppercase tracking-[0.14em] text-brand-cyan">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-white/72 transition hover:text-brand-cyan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-sm font-extrabold uppercase tracking-[0.14em] text-brand-cyan">
              Services
            </h2>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-white/72 transition hover:text-brand-cyan"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-sm font-extrabold uppercase tracking-[0.14em] text-brand-cyan">
              Contact
            </h2>
            <div className="mt-5 space-y-4">
              <Link
                href={`mailto:${contact.email}`}
                className="group flex min-h-11 items-center gap-3 text-sm font-semibold text-white/72 transition hover:text-brand-cyan"
              >
                <span className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand-cyan">
                  <Mail aria-hidden="true" size={18} strokeWidth={2.2} />
                </span>
                {contact.email}
              </Link>

              <TrackedLink
                href={contact.whatsapp}
                className="group flex min-h-11 items-center gap-3 text-sm font-semibold text-white/72 transition hover:text-brand-cyan"
                target="_blank"
                rel="noreferrer"
                tracking="whatsapp"
                trackingLocation="footer_contact"
              >
                <span className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand-cyan">
                  <MessageCircle
                    aria-hidden="true"
                    size={18}
                    strokeWidth={2.2}
                  />
                </span>
                WhatsApp
              </TrackedLink>
            </div>

            {visibleSocialLinks.length > 0 ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {visibleSocialLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex min-h-11 items-center rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white/72 transition hover:border-brand-purple hover:bg-white/5 hover:text-brand-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-4 py-6 text-sm font-semibold text-white/58 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} {brand.name}. All rights reserved.
          </p>

          <div className="flex gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center transition hover:text-brand-cyan"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
