import Image from "next/image";
import { trustStrip } from "@/lib/site";

export function TrustStrip() {
  return (
    <section className="border-y border-brand-border bg-brand-white py-8">
      <div className="container-site">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <p className="font-heading text-sm font-extrabold uppercase tracking-[0.14em] text-brand-muted">
            {trustStrip.text}
          </p>

          <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:w-auto lg:grid-cols-6">
            {trustStrip.logos.map((logo) => (
              <div
                key={logo.label}
                className="group flex min-h-16 items-center justify-center rounded-2xl border border-brand-border bg-brand-surface px-3 py-2 transition duration-300 hover:-translate-y-1 hover:border-brand-cyan/60 hover:bg-brand-white hover:shadow-[0_1rem_2.5rem_rgb(33_33_33/7%)]"
                aria-label={logo.label}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={45}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
