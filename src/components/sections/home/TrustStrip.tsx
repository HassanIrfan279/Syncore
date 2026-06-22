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
            {trustStrip.logoPlaceholders.map((label) => (
              <div
                key={label}
                className="group flex min-h-14 items-center justify-center gap-3 rounded-full border border-brand-border bg-brand-surface px-5 text-sm font-bold text-brand-muted transition duration-300 hover:-translate-y-1 hover:border-brand-cyan/60 hover:bg-brand-white hover:text-brand-charcoal hover:shadow-[0_1rem_2.5rem_rgb(33_33_33/7%)]"
                aria-label={label}
              >
                <span
                  className="size-2.5 rounded-full bg-brand-gradient opacity-65 transition group-hover:opacity-100"
                  aria-hidden="true"
                />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
