"use client";

import { sendGTMEvent } from "@next/third-parties/google";

/**
 * Push a CTA/button click to the GTM dataLayer.
 * Shows up in GTM as event "cta_click" with cta_name / cta_location keys.
 */
export function trackCtaClick(
  ctaName: string,
  ctaLocation: string,
  extra: Record<string, string> = {},
) {
  sendGTMEvent({
    event: "cta_click",
    cta_name: ctaName,
    cta_location: ctaLocation,
    ...extra,
  });
}

/** Push an arbitrary event to the GTM dataLayer. */
export function trackEvent(event: string, data: Record<string, unknown> = {}) {
  sendGTMEvent({ event, ...data });
}
