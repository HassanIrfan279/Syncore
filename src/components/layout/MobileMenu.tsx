"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, X } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { contact, navigationLinks, services, socialLinks } from "@/lib/site";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const headerLinks = navigationLinks.filter((link) => link.label !== "Home");
const visibleSocialLinks = socialLinks.filter((link) => !link.isPlaceholder);

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const focusable = Array.from(focusableElements ?? []).filter(
        (element) => element.offsetParent !== null,
      );

      if (focusable.length === 0) {
        return;
      }

      const firstElement = focusable[0];
      const lastElement = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={`fixed inset-0 z-[60] bg-brand-charcoal/70 backdrop-blur-xl transition-opacity duration-300 lg:hidden ${
        isOpen
          ? "pointer-events-auto visible opacity-100"
          : "pointer-events-none invisible opacity-0"
      }`}
    >
      <div
        ref={panelRef}
        className={`ml-auto flex h-full w-full max-w-md flex-col overflow-y-auto bg-brand-charcoal px-5 py-5 text-brand-white shadow-2xl transition-transform duration-300 sm:px-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            onClick={onClose}
            className="font-heading text-2xl font-extrabold tracking-normal"
          >
            Syncore
          </Link>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-brand-white transition hover:border-brand-cyan hover:text-brand-cyan"
            aria-label="Close navigation menu"
          >
            <X aria-hidden="true" size={22} strokeWidth={2.4} />
          </button>
        </div>

        <nav className="mt-12" aria-label="Mobile primary navigation">
          <ul className="space-y-2">
            {headerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="group flex min-h-14 items-center justify-between border-b border-white/10 py-4 font-heading text-2xl font-extrabold tracking-normal text-brand-white transition hover:text-brand-cyan sm:text-3xl"
                >
                  {link.label}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="text-brand-purple transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-cyan"
                    size={24}
                    strokeWidth={2.2}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href={contact.whatsapp}
          onClick={() => {
            trackWhatsAppClick({ location: "mobile_menu" });
            onClose();
          }}
          className="btn btn-primary mt-10 min-h-14 w-full"
          target="_blank"
          rel="noreferrer"
        >
          Send Message
          <MessageCircle aria-hidden="true" size={18} strokeWidth={2.4} />
        </Link>

        <div className="mt-10 grid gap-6 border-t border-white/10 pt-8">
          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-brand-cyan">
              Services
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={service.href}
                  onClick={onClose}
                  className="inline-flex min-h-11 items-center rounded-full border border-white/10 px-3 py-2 text-sm font-semibold text-white/78 transition hover:border-brand-purple hover:text-brand-white"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          {visibleSocialLinks.length > 0 ? (
            <div>
              <p className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-brand-cyan">
                Social
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                {visibleSocialLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="inline-flex min-h-11 items-center text-sm font-bold text-white/72 transition hover:text-brand-cyan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
