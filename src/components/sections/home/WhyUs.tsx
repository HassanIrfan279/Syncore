import { Bot, Layers3, Rocket, Target } from "lucide-react";

const reasons = [
  {
    title: "AI-Forward",
    copy: "We use the latest AI to deliver faster, smarter, and cheaper.",
    icon: Bot,
  },
  {
    title: "Results-Driven",
    copy: "Every decision is tied to leads, sales, and growth.",
    icon: Target,
  },
  {
    title: "All-in-One",
    copy: "Automation, web, content, and ads from one team.",
    icon: Layers3,
  },
  {
    title: "Fast Turnaround",
    copy: "Quick delivery without cutting corners.",
    icon: Rocket,
  },
];

export function WhyUs() {
  return (
    <section className="section section-surface">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Why us</p>
          <h2 className="section-heading mx-auto text-balance">Why Syncore.</h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="spotlight-card tilt-card group relative overflow-hidden rounded-[1.25rem] border border-brand-border bg-brand-white p-6 shadow-card transition duration-300 hover:-translate-y-2 hover:border-brand-cyan/60 hover:shadow-card-hover"
              >
                <div
                  className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-brand-gradient opacity-10 blur-xl transition group-hover:opacity-20"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4">
                    <div className="neon-icon flex size-14 items-center justify-center rounded-2xl text-brand-cyan transition duration-300 group-hover:-translate-y-1 group-hover:text-brand-white">
                      <Icon aria-hidden="true" size={24} strokeWidth={2.2} />
                    </div>
                    <span className="font-heading text-sm font-extrabold text-brand-border">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl">{reason.title}</h3>
                  <p className="mt-4 leading-8">{reason.copy}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
