import { Compass, LineChart, Rocket, Wrench } from "lucide-react";

const steps = [
  {
    title: "Discover",
    copy: "We learn your business, goals, and audience.",
    icon: Compass,
  },
  {
    title: "Strategy",
    copy: "We map the plan and the deliverables.",
    icon: LineChart,
  },
  {
    title: "Build",
    copy: "We design, develop, and create.",
    icon: Wrench,
  },
  {
    title: "Grow",
    copy: "We launch, measure, and optimize.",
    icon: Rocket,
  },
];

export function Process() {
  return (
    <section className="section section-light">
      <div className="container-site">
        <div className="max-w-3xl">
          <p className="eyebrow">Process</p>
          <h2 className="section-heading text-balance">How We Work.</h2>
        </div>

        <div className="relative mt-12">
          <div
            className="timeline-line absolute left-6 top-0 h-full w-px lg:left-0 lg:top-10 lg:h-px lg:w-full"
            aria-hidden="true"
          />

          <div className="grid gap-6 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="group relative pl-20 lg:pl-0 lg:pt-20"
                >
                  <div className="timeline-node absolute left-0 top-0 z-10 flex size-12 items-center justify-center rounded-2xl text-brand-indigo transition duration-300 group-hover:-translate-y-1 group-hover:text-brand-cyan lg:top-4">
                    <Icon aria-hidden="true" size={22} strokeWidth={2.2} />
                  </div>

                  <div className="home-dark-card card spotlight-card tilt-card group-hover:border-brand-cyan/60 p-6">
                    <span className="font-heading text-sm font-extrabold text-brand-cyan">
                      0{index + 1}
                    </span>
                    <h3 className="mt-4 text-2xl">{step.title}</h3>
                    <p className="mt-4 leading-8">{step.copy}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
