"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { workContent, type WorkProject } from "@/lib/site";

type CaseStudyModalProps = {
  project: WorkProject | null;
  onClose: () => void;
};

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (!project) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, project]);

  if (!project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[70] overflow-y-auto bg-brand-charcoal/78 px-3 py-4 backdrop-blur-xl sm:px-4 sm:py-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onMouseDown={onClose}
    >
      <div
        className="mx-auto w-full max-w-5xl overflow-hidden rounded-[1.1rem] border border-white/12 bg-brand-white shadow-2xl sm:rounded-[1.5rem]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="relative overflow-hidden bg-brand-charcoal p-5 text-brand-white sm:p-8">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgb(0_188_212/0.24),transparent_18rem),radial-gradient(circle_at_82%_24%,rgb(176_74_226/0.22),transparent_20rem),linear-gradient(rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-[length:auto,auto,3.5rem_3.5rem,3.5rem_3.5rem]"
            aria-hidden="true"
          />

          <div className="relative z-10 flex items-start justify-between gap-6">
            <div>
              <p className="font-heading text-sm font-extrabold uppercase tracking-[0.14em] text-brand-cyan">
                {workContent.caseStudyEyebrow}
              </p>
              <h2
                id="case-study-title"
                className="mt-4 max-w-2xl font-heading text-3xl font-extrabold leading-tight text-brand-white sm:text-4xl"
              >
                {project.title}
              </h2>
              <p className="mt-4 text-white/72">{project.client}</p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-brand-white transition hover:border-brand-cyan hover:text-brand-cyan"
              aria-label="Close case study"
            >
              <X aria-hidden="true" size={22} strokeWidth={2.4} />
            </button>
          </div>
        </div>

        <div className="grid gap-6 p-4 sm:gap-8 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div
            className="premium-thumbnail relative min-h-60 overflow-hidden rounded-[1rem] sm:min-h-72 sm:rounded-[1.25rem]"
            role="img"
            aria-label={`${project.title} case study visual showing ${project.visualLabel}`}
          >
            {project.visualSrc ? (
              <Image
                src={project.visualSrc}
                alt=""
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            ) : null}
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgb(255_255_255/0.32),transparent_11rem),radial-gradient(circle_at_78%_76%,rgb(255_255_255/0.18),transparent_12rem),linear-gradient(135deg,transparent_0_42%,rgb(255_255_255/0.18)_42.2%_42.8%,transparent_43%_100%)]"
              aria-hidden="true"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/18 bg-white/12 p-4 text-brand-white backdrop-blur sm:inset-x-6 sm:bottom-6 sm:p-5">
              <p className="font-heading text-sm font-extrabold uppercase tracking-[0.14em] text-brand-white/72">
                {workContent.visualsEyebrow}
              </p>
              <p className="mt-2 font-heading text-xl font-extrabold sm:text-2xl">
                {project.visualLabel}
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              ["Challenge", project.challenge],
              ["What we did", project.whatWeDid],
              ["Result", project.result],
            ].map(([label, copy]) => (
              <section
                key={label}
                className="rounded-2xl border border-brand-border bg-brand-surface p-5"
              >
                <h3 className="font-heading text-sm font-extrabold uppercase tracking-[0.14em] text-brand-indigo">
                  {label}
                </h3>
                <p className="mt-3 leading-8 text-brand-muted">{copy}</p>
              </section>
            ))}
          </div>
        </div>

        {project.gallery?.length ? (
          <section className="border-t border-brand-border bg-brand-surface px-4 py-6 sm:px-8 sm:py-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-heading text-sm font-extrabold uppercase tracking-[0.14em] text-brand-indigo">
                  Image assets
                </p>
                <h3 className="mt-2 text-2xl">Case study visuals</h3>
              </div>
              <p className="max-w-xl text-sm leading-6 text-brand-muted">
                Branded portfolio assets prepared for the restaurant case study.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {project.gallery.map((image, index) => (
                <figure
                  key={image.src}
                  className={`overflow-hidden rounded-[1rem] border border-brand-border bg-brand-white shadow-sm ${
                    index === 0 || index === 3 ? "md:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative bg-brand-charcoal ${
                      index === 3
                        ? "aspect-[1.34]"
                        : index === 2
                          ? "aspect-[0.92] md:aspect-[1.05]"
                          : "aspect-square"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes={
                        index === 0 || index === 3
                          ? "(min-width: 1024px) 896px, 100vw"
                          : "(min-width: 768px) 50vw, 100vw"
                      }
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="border-t border-brand-border px-4 py-3 font-heading text-sm font-extrabold text-brand-charcoal">
                    IMG {String(index + 1).padStart(2, "0")} - {image.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
