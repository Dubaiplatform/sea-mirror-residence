"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export const RECAPTCHA_SITE_KEY = "6LfjeaEtAAAAAPdlWZke-txvQlSLGc7sFTVuUmKO";

export function RecaptchaProvider({ children }: { children: React.ReactNode }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "head",
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
