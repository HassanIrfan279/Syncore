import { Quote } from "lucide-react";
import { testimonials } from "@/lib/site";

const visibleTestimonials = testimonials.filter(
  (testimonial) =>
    testimonial.quote.trim() &&
    testimonial.author.trim() &&
    !testimonial.quote.toLowerCase().includes("placeholder"),
);

export function Testimonials() {
  if (visibleTestimonials.length === 0) {
    return null;
  }

  return (
    <section className="section section-light">
      <div className="container-site">
        <div className="max-w-3xl">
          <p className="eyebrow">Testimonials</p>
          <h2 className="section-heading text-balance">What Partners Say.</h2>
        </div>

        <div className="mt-12 flex snap-x gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {visibleTestimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="card min-w-[min(22rem,85vw)] snap-start p-6 lg:min-w-0"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-charcoal text-brand-cyan">
                <Quote aria-hidden="true" size={22} strokeWidth={2.2} />
              </div>
              <blockquote className="mt-7 text-lg font-semibold leading-9 text-brand-charcoal">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-7 border-t border-brand-border pt-5">
                <p className="font-heading text-base font-extrabold text-brand-charcoal">
                  {testimonial.author}
                </p>
                {(testimonial.role || testimonial.company) && (
                  <p className="mt-1 text-sm">
                    {[testimonial.role, testimonial.company]
                      .filter(Boolean)
                      .join(", ")}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
