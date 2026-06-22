type AnalyticsValue = string | number | boolean | null | undefined;
type AnalyticsPayload = Record<string, AnalyticsValue>;

// TODO: Add NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX to the production env.
// TODO: Add NEXT_PUBLIC_META_PIXEL_ID=000000000000000 to the production env.
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: string, eventName: string, params?: AnalyticsPayload) => void;
    fbq?: (command: string, eventName: string, params?: AnalyticsPayload) => void;
  }
}

function cleanPayload(payload: AnalyticsPayload = {}) {
  return Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined),
  ) as AnalyticsPayload;
}

function isBrowser() {
  return typeof window !== "undefined";
}

function trackEvent(eventName: string, payload: AnalyticsPayload = {}) {
  const eventPayload = cleanPayload({
    event_source: "syncore_website",
    ...payload,
  });

  if (!isBrowser()) {
    return;
  }

  const hasGa = Boolean(gaMeasurementId && typeof window.gtag === "function");
  const hasMeta = Boolean(metaPixelId && typeof window.fbq === "function");

  if (hasGa) {
    window.gtag?.("event", eventName, eventPayload);
  }

  if (hasMeta) {
    window.fbq?.("trackCustom", eventName, eventPayload);
  }

  if (process.env.NODE_ENV === "development" && !hasGa && !hasMeta) {
    console.info("[analytics]", {
      event: eventName,
      payload: eventPayload,
      status: "skipped_missing_or_unloaded_ids",
    });
  }
}

export function trackLeadSubmit(payload: AnalyticsPayload = {}) {
  trackEvent("lead_submit", {
    lead_type: "contact_form",
    ...payload,
  });
}

export function trackBookCallClick(payload: AnalyticsPayload = {}) {
  trackEvent("book_call_click", payload);
}

export function trackWhatsAppClick(payload: AnalyticsPayload = {}) {
  trackEvent("whatsapp_click", payload);
}

export function trackChatLeadCapture(payload: AnalyticsPayload = {}) {
  trackEvent("chat_lead_capture", {
    lead_type: "ai_chat_widget",
    ...payload,
  });
}
