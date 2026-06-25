"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { trackWhatsAppClick } from "@/lib/analytics";

type TrackingType = "whatsapp";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  tracking: TrackingType;
  trackingLocation: string;
};

export function TrackedLink({
  tracking,
  trackingLocation,
  onClick,
  ...props
}: TrackedLinkProps) {
  const handleClick: NonNullable<ComponentProps<typeof Link>["onClick"]> = (
    event,
  ) => {
    if (tracking === "whatsapp") {
      trackWhatsAppClick({ location: trackingLocation });
    }

    onClick?.(event);
  };

  return <Link {...props} onClick={handleClick} />;
}
