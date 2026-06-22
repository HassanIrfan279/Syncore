import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Home, MessageCircle } from "lucide-react";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("notFound");

export default function NotFound() {
  return (
    <main>
      <section className="hero-dark relative flex min-h-svh items-center overflow-hidden py-32">
        <div className="container-site relative z-10">
          <div className="max-w-3xl">
            <p className="eyebrow">404</p>
            <h1 className="display-heading text-balance text-brand-white">
              Page not found.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-xl leading-9 text-white/76">
              This page is not available, but the path back to Syncore is
              simple. Head home or start a conversation with the team.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/" className="btn btn-primary min-h-14 px-7">
                <Home aria-hidden="true" size={18} strokeWidth={2.5} />
                Back to Home
              </Link>

              <Link href="/contact" className="btn btn-secondary min-h-14 px-7">
                <MessageCircle
                  aria-hidden="true"
                  size={18}
                  strokeWidth={2.5}
                />
                Contact
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
