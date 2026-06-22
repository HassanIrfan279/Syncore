"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const AIChatWidgetClient = dynamic(
  () =>
    import("@/components/AIChatWidgetClient").then(
      (module) => module.AIChatWidgetClient,
    ),
  {
    ssr: false,
    loading: () => null,
  },
);

export function AIChatWidget() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const loadWidget = () => {
      setShouldLoad(true);
    };

    const timeoutId = window.setTimeout(loadWidget, 3600);
    const idleCallbackId =
      "requestIdleCallback" in window
        ? window.requestIdleCallback(loadWidget, { timeout: 2600 })
        : undefined;

    window.addEventListener("pointerdown", loadWidget, {
      once: true,
      passive: true,
    });
    window.addEventListener("keydown", loadWidget, { once: true });

    return () => {
      window.clearTimeout(timeoutId);
      if (idleCallbackId) {
        window.cancelIdleCallback(idleCallbackId);
      }
      window.removeEventListener("pointerdown", loadWidget);
      window.removeEventListener("keydown", loadWidget);
    };
  }, []);

  if (!shouldLoad) {
    return null;
  }

  return <AIChatWidgetClient />;
}
