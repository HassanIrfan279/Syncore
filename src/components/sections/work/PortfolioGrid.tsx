"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { ArrowUpRight, Sparkles } from "lucide-react";
import {
  work,
  workContent,
  type WorkCategory,
  type WorkProject,
} from "@/lib/site";

const CaseStudyModal = dynamic(
  () =>
    import("@/components/sections/work/CaseStudyModal").then(
      (module) => module.CaseStudyModal,
    ),
  {
    ssr: false,
    loading: () => null,
  },
);

type Filter = "All" | WorkCategory;

const filters: Filter[] = ["All", "AI", "Web", "Social", "Ads", "Content"];

const projects: WorkProject[] = work;

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(
    null,
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) =>
      project.categories.includes(activeFilter),
    );
  }, [activeFilter]);

  return (
    <>
      <section className="section section-light">
        <div className="container-site">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow">{workContent.eyebrow}</p>
              <h2 className="section-heading text-balance">
                {workContent.heading}
              </h2>
            </div>

            <div
              className="flex flex-wrap gap-2 rounded-[1.25rem] border border-brand-border bg-brand-surface p-2 sm:rounded-full"
              aria-label="Filter portfolio by service type"
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`min-h-11 shrink-0 rounded-full px-4 py-2 text-sm font-extrabold transition ${
                    activeFilter === filter
                      ? "bg-brand-gradient text-brand-white shadow-[0_1rem_2.25rem_rgb(0_188_212/18%)]"
                      : "text-brand-muted hover:bg-brand-white hover:text-brand-charcoal"
                  }`}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <article
                  key={project.id}
                  className="card spotlight-card tilt-card group"
                >
                  <div
                    className="premium-thumbnail relative aspect-[1.28] overflow-hidden"
                    role="img"
                    aria-label={`${project.title} abstract portfolio thumbnail placeholder showing ${project.visualLabel}`}
                  >
                    <div className="absolute left-6 top-6 flex size-12 items-center justify-center rounded-2xl border border-white/18 bg-white/12 text-brand-white backdrop-blur">
                      <Sparkles aria-hidden="true" size={22} strokeWidth={2.2} />
                    </div>
                    <div className="absolute bottom-6 right-6 rounded-full border border-white/18 bg-white/12 px-4 py-2 font-heading text-sm font-extrabold text-brand-white backdrop-blur">
                      0{index + 1}
                    </div>
                    <div
                      className="absolute left-6 right-6 top-24 rounded-2xl border border-white/18 bg-brand-charcoal/54 p-4 shadow-2xl backdrop-blur-xl transition duration-500 group-hover:-translate-y-2"
                      aria-hidden="true"
                    >
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <div className="flex gap-1.5">
                          <span className="size-2 rounded-full bg-brand-cyan" />
                          <span className="size-2 rounded-full bg-white/36" />
                          <span className="size-2 rounded-full bg-brand-purple" />
                        </div>
                        <span className="h-2 w-16 rounded-full bg-white/28" />
                      </div>
                      <div className="grid grid-cols-[0.72fr_1fr] gap-3">
                        <div className="rounded-xl border border-white/12 bg-white/10 p-3">
                          <span className="block h-10 rounded-full bg-brand-cyan/75" />
                        </div>
                        <div className="space-y-2">
                          <span className="block h-2 rounded-full bg-white/64" />
                          <span className="block h-2 w-4/5 rounded-full bg-white/30" />
                          <span className="block h-2 w-2/3 rounded-full bg-brand-purple/80" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="rounded-full border border-brand-border bg-brand-surface px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-indigo">
                      {project.serviceTag}
                    </span>
                    <h3 className="mt-5 text-2xl">{project.title}</h3>
                    <p className="mt-4 leading-8">{project.resultLine}</p>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="btn btn-secondary mt-7 min-h-12 px-5"
                    >
                      View Case Study
                      <ArrowUpRight
                        aria-hidden="true"
                        size={17}
                        strokeWidth={2.4}
                      />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-[1.25rem] border border-brand-border bg-brand-surface p-8 text-center">
              <p className="font-heading text-xl font-extrabold text-brand-charcoal">
                {workContent.emptyTitle}
              </p>
              <p className="mt-3">
                {workContent.emptyCopy}
              </p>
            </div>
          )}
        </div>
      </section>

      {selectedProject ? (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      ) : null}
    </>
  );
}
