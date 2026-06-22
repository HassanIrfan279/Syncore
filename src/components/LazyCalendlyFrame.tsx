"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type LazyCalendlyFrameProps = {
  url: string;
};

function getEmbedUrl(url: string) {
  try {
    const embedUrl = new URL(url);
    embedUrl.searchParams.set("hide_gdpr_banner", "1");
    return embedUrl.toString();
  } catch {
    return url;
  }
}

export function LazyCalendlyFrame({ url }: LazyCalendlyFrameProps) {
  const frameShellRef = useRef<HTMLDivElement>(null);
  const [shouldLoadFrame, setShouldLoadFrame] = useState(false);
  const embedUrl = useMemo(() => getEmbedUrl(url), [url]);

  useEffect(() => {
    if (shouldLoadFrame) {
      return;
    }

    const frameShell = frameShellRef.current;

    if (!frameShell || !("IntersectionObserver" in window)) {
      const timeoutId = window.setTimeout(() => setShouldLoadFrame(true), 1600);
      return () => window.clearTimeout(timeoutId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadFrame(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" },
    );

    observer.observe(frameShell);

    return () => observer.disconnect();
  }, [shouldLoadFrame]);

  return (
    <div
      ref={frameShellRef}
      className="mt-5 min-h-[30rem] overflow-hidden rounded-2xl border border-brand-border bg-brand-surface"
    >
      {shouldLoadFrame ? (
        <iframe
          title="Book a Syncore consultation on Calendly"
          src={embedUrl}
          className="h-[30rem] w-full border-0"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <div className="flex min-h-[30rem] flex-col items-center justify-center p-6 text-center">
          <p className="font-heading text-lg font-extrabold text-brand-charcoal">
            Calendar loading when this section is in view.
          </p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-brand-muted">
            The Calendly embed is delayed to keep the first page load light.
          </p>
          <button
            type="button"
            className="btn btn-secondary mt-5 min-h-12 px-5"
            onClick={() => setShouldLoadFrame(true)}
          >
            Load calendar
          </button>
        </div>
      )}
    </div>
  );
}
