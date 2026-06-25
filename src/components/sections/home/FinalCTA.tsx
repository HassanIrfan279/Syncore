import { ArrowUpRight, MessageCircle } from "lucide-react";
import { TrackedLink } from "@/components/TrackedLink";
import { contact } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="section-dark py-20 sm:py-24">
      <div className="container-site">
        <div className="glass-panel animated-gradient-border relative overflow-hidden p-7 sm:p-10 lg:p-12">
          <div
            className="absolute right-0 top-0 h-56 w-56 translate-x-16 -translate-y-16 rounded-full bg-brand-gradient opacity-20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-brand-cyan text-brand-charcoal shadow-[0_1rem_2.5rem_rgb(0_188_212/22%)]">
                <MessageCircle aria-hidden="true" size={25} strokeWidth={2.3} />
              </div>

              <h2 className="section-heading max-w-2xl text-balance text-brand-white">
                Ready to grow your business?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/74">
                Send us a message and let&apos;s map your next 90 days.
              </p>
            </div>

            <TrackedLink
              href={contact.whatsapp}
              className="btn btn-primary min-h-14 w-full px-7 text-base sm:w-fit"
              target="_blank"
              rel="noreferrer"
              tracking="whatsapp"
              trackingLocation="final_cta"
            >
              Send Message
              <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.5} />
            </TrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
