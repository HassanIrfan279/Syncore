"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { contact } from "@/lib/site";

export function FloatingWhatsAppButton() {
  if (!contact.whatsapp.trim()) {
    return null;
  }

  return (
    <Link
      href={contact.whatsapp}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackWhatsAppClick({ location: "floating_button" })}
      aria-label="Continue on WhatsApp with Syncore"
      className="animated-gradient-border fixed bottom-4 right-4 z-[55] inline-flex size-14 items-center justify-center rounded-full border border-white/12 bg-brand-charcoal text-brand-white shadow-[0_1rem_2.5rem_rgb(33_33_33/20%)] transition hover:-translate-y-1 hover:border-brand-cyan hover:shadow-[0_1.25rem_3rem_rgb(0_188_212/24%)] focus-visible:outline-brand-cyan sm:bottom-6 sm:right-6 sm:size-16"
    >
      <span
        className="absolute inset-0 rounded-full bg-brand-gradient opacity-25 transition hover:opacity-35"
        aria-hidden="true"
      />
      <MessageCircle
        aria-hidden="true"
        className="relative z-10 text-brand-cyan"
        size={27}
        strokeWidth={2.4}
      />
    </Link>
  );
}
