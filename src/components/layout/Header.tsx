"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { trackBookCallClick } from "@/lib/analytics";
import { brand, contact, navigationLinks } from "@/lib/site";
import { MobileMenu } from "@/components/layout/MobileMenu";

const headerLinks = navigationLinks.filter((link) => link.label !== "Home");

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMobileMenu = useCallback(() => {
    setIsMenuOpen(false);
    window.requestAnimationFrame(() => {
      menuButtonRef.current?.focus();
    });
  }, []);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMobileMenu, isMenuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? "border-b border-white/10 bg-brand-charcoal/94 py-3 shadow-[0_1rem_3rem_rgb(0_0_0/18%)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent py-5"
        }`}
      >
        <div className="container-site flex items-center justify-between gap-5">
          <Link
            href="/"
            className="group inline-flex min-h-11 items-center gap-3 text-brand-white"
            aria-label="Syncore home"
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-brand-gradient text-sm font-black text-brand-white shadow-[0_1rem_2.25rem_rgb(0_188_212/20%)]">
              S
            </span>
            <span className="font-heading text-2xl font-extrabold tracking-normal">
              {brand.name}
            </span>
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary navigation"
          >
            {headerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-brand-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href={contact.calendly}
              className="btn btn-primary min-h-12 px-5"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackBookCallClick({ location: "header" })}
            >
              Book a Free Call
              <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2.5} />
            </Link>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex size-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-brand-white backdrop-blur transition hover:border-brand-cyan hover:text-brand-cyan lg:hidden"
            aria-label="Open navigation menu"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu aria-hidden="true" size={23} strokeWidth={2.4} />
          </button>
        </div>
      </header>

      <div id="mobile-menu">
        <MobileMenu
          isOpen={isMenuOpen}
          onClose={closeMobileMenu}
        />
      </div>
    </>
  );
}
