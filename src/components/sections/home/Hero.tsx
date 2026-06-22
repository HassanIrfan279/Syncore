import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  ChartNoAxesCombined,
  MessageCircle,
  MousePointerClick,
  Sparkles,
  UsersRound,
  Zap,
} from "lucide-react";
import { TrackedLink } from "@/components/TrackedLink";
import { contact } from "@/lib/site";

const dashboardCards = [
  {
    label: "Leads captured",
    value: "+284",
    detail: "Qualified this month",
    icon: UsersRound,
  },
  {
    label: "AI chat active",
    value: "24/7",
    detail: "Instant response flow",
    icon: MessageCircle,
  },
  {
    label: "Campaign growth",
    value: "+63%",
    detail: "ROAS momentum",
    icon: ChartNoAxesCombined,
  },
  {
    label: "Website conversion",
    value: "4.8x",
    detail: "Landing page lift",
    icon: MousePointerClick,
  },
];

export function Hero() {
  return (
    <section
      className="hero-dark relative flex items-center overflow-hidden pt-28 lg:min-h-svh"
      aria-labelledby="home-hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 z-[-1] opacity-70">
        <div className="animate-grid-drift absolute inset-[-4rem] bg-[linear-gradient(rgb(255_255_255/0.045)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.045)_1px,transparent_1px)] bg-[length:4.75rem_4.75rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgb(255_255_255/0.09)_1px,transparent_1.5px)] bg-[length:2.2rem_2.2rem] opacity-25" />
        <div className="absolute left-[8%] top-[18%] size-72 rounded-full bg-brand-cyan/18 blur-3xl" />
        <div className="absolute right-[8%] top-[16%] size-96 rounded-full bg-brand-purple/18 blur-3xl" />
        <div className="absolute bottom-[8%] left-[44%] size-80 rounded-full bg-brand-indigo/18 blur-3xl" />
      </div>

      <div className="container-site relative z-10 grid items-center gap-10 pb-12 pt-8 sm:gap-14 sm:pb-16 sm:pt-10 lg:grid-cols-[1fr_0.88fr] lg:gap-16 lg:pb-24 lg:pt-20">
        <div className="max-w-3xl">
          <div className="eyebrow">
            <Sparkles aria-hidden="true" size={16} strokeWidth={2.4} />
            Premium AI-era growth partner
          </div>

          <h1
            id="home-hero-heading"
            className="display-heading text-balance text-brand-white"
          >
            Turn Attention Into Revenue.
          </h1>

          <p className="mt-7 max-w-2xl text-pretty text-lg leading-9 text-white/76 sm:text-xl">
            Syncore builds the AI automation, high-converting websites,
            content, and ad campaigns that grow your business &mdash; so you can
            focus on running it.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <TrackedLink
              href={contact.calendly}
              className="btn btn-primary min-h-14 w-full px-7 text-base sm:w-auto"
              target="_blank"
              rel="noreferrer"
              tracking="book-call"
              trackingLocation="home_hero"
            >
              Book a Free Consultation
              <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.5} />
            </TrackedLink>

            <Link
              href="/work"
              className="btn btn-secondary min-h-14 w-full px-7 text-base sm:w-auto"
            >
              See Our Work
              <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.5} />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md sm:max-w-xl lg:max-w-none">
          <div className="ai-glow absolute inset-10" aria-hidden="true" />

          <div
            className="ai-network-panel animated-gradient-border floating-visual syncore-glow relative p-3 sm:p-5"
            role="img"
            aria-label="Abstract Syncore AI dashboard showing leads captured, AI chat activity, campaign growth, and website conversion metrics"
          >
            <div className="neural-dot left-[12%] top-[18%]" aria-hidden="true" />
            <div className="neural-dot right-[15%] top-[34%]" aria-hidden="true" />
            <div className="neural-dot bottom-[18%] left-[38%]" aria-hidden="true" />
            <div
              className="neural-line left-[16%] top-[21%] w-[42%] rotate-[10deg]"
              aria-hidden="true"
            />
            <div
              className="neural-line right-[16%] top-[38%] w-[34%] rotate-[138deg]"
              aria-hidden="true"
            />

            <div className="relative rounded-[1rem] border border-white/10 bg-brand-charcoal/72 p-3 shadow-2xl backdrop-blur-xl sm:p-5">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="font-heading text-sm font-extrabold uppercase tracking-[0.14em] text-brand-cyan">
                    Growth system
                  </p>
                  <p className="mt-1 text-sm text-white/58">
                    Live AI revenue dashboard
                  </p>
                </div>

                <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-gradient text-brand-white shadow-[0_1rem_2.5rem_rgb(0_188_212/18%)]">
                  <Bot aria-hidden="true" size={24} strokeWidth={2.3} />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-3">
                {dashboardCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <div
                      key={card.label}
                      className="group rounded-2xl border border-white/10 bg-white/[0.075] p-3 shadow-[inset_0_1px_0_rgb(255_255_255/0.08)] transition duration-300 hover:-translate-y-1 hover:border-brand-cyan/50 hover:bg-white/[0.105] hover:shadow-[0_1rem_2.5rem_rgb(0_188_212/0.12)] sm:p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-brand-cyan">
                          <Icon
                            aria-hidden="true"
                            size={19}
                            strokeWidth={2.3}
                          />
                        </div>
                        <Zap
                          aria-hidden="true"
                          className="text-brand-purple opacity-60 transition group-hover:text-brand-cyan group-hover:opacity-100"
                          size={17}
                          strokeWidth={2.3}
                        />
                      </div>

                      <p className="mt-5 font-heading text-2xl font-extrabold leading-none text-brand-white sm:mt-6 sm:text-3xl">
                        {card.value}
                      </p>
                      <p className="mt-2 font-heading text-xs font-bold leading-5 text-brand-white sm:mt-3 sm:text-sm">
                        {card.label}
                      </p>
                      <p className="mt-1 hidden text-sm leading-6 text-white/58 min-[390px]:block">
                        {card.detail}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <div className="flex items-center gap-3">
                  <span className="relative flex size-3">
                    <span className="absolute inline-flex h-full w-full animate-soft-pulse rounded-full bg-brand-cyan opacity-70" />
                    <span className="relative inline-flex size-3 rounded-full bg-brand-cyan" />
                  </span>
                  <p className="font-heading text-sm font-bold text-brand-white">
                    Automation workflow running
                  </p>
                </div>

                <div
                  className="mt-4 h-2 overflow-hidden rounded-full bg-white/10"
                  aria-hidden="true"
                >
                  <div className="h-full w-4/5 rounded-full bg-brand-gradient" />
                </div>
              </div>

              <div className="pointer-events-none absolute -right-4 top-24 hidden rounded-2xl border border-white/14 bg-white/10 px-4 py-3 text-brand-white shadow-2xl backdrop-blur-xl lg:block">
                <p className="font-heading text-xs font-extrabold uppercase tracking-[0.12em] text-brand-cyan">
                  AI qualified
                </p>
                <p className="mt-1 text-sm font-bold text-white/78">
                  18 hot leads
                </p>
              </div>

              <div className="pointer-events-none absolute -bottom-5 left-8 hidden rounded-2xl border border-white/14 bg-brand-charcoal/82 px-4 py-3 text-brand-white shadow-2xl backdrop-blur-xl sm:block">
                <p className="font-heading text-xs font-extrabold uppercase tracking-[0.12em] text-brand-purple">
                  Funnel health
                </p>
                <div className="mt-2 flex gap-1.5" aria-hidden="true">
                  <span className="h-8 w-2 rounded-full bg-brand-cyan" />
                  <span className="h-5 w-2 rounded-full bg-brand-purple" />
                  <span className="h-10 w-2 rounded-full bg-brand-cyan" />
                  <span className="h-7 w-2 rounded-full bg-brand-indigo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
