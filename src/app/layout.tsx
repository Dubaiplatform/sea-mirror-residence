import React from "react";
import type { Metadata, Viewport } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Poppins } from "next/font/google";

import "./globals.css";
import { RecaptchaProvider } from "../components/recaptcha-provider";
import { StructuredData } from "../components/structured-data";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "../lib/site-data";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const PAGE_TITLE =
  "Sea Mirror Residences on Dubai Water Canal, Jumeirah 2 | Lamar Development";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "Sea Mirror Residences",
    "Sea Mirror Jumeirah 2",
    "Dubai Water Canal penthouses",
    "Lamar Development",
    "waterfront penthouses Dubai",
    "2-bedroom penthouse Dubai",
    "3-bedroom penthouse Dubai",
    "4-bedroom penthouse Dubai",
    "luxury canal front apartments",
  ],
  authors: [{ name: "Sea Mirror Residences | Lamar Development" }],
  creator: "Sea Mirror Residences | Lamar Development",
  publisher: "Sea Mirror Residences | Lamar Development",
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: PAGE_TITLE,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/residence/3.jpg`,
        width: 1200,
        height: 630,
        alt: "Sea Mirror Residences waterfront penthouses on the Dubai Water Canal, Jumeirah 2",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/residence/3.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ghuV1cBkUvd7r8uY9r1dFlxTai0RM5DIXluia1Ojp8s",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="alternate"
          type="text/plain"
          href="/llms.txt"
          title="LLM-readable site summary"
        />
        <StructuredData />
      </head>

      <GoogleTagManager gtmId="GTM-WFDHML2B" />
      <GoogleAnalytics gaId="G-KBG68CLEK2" />

      <body className={`${poppins.variable} font-sans antialiased`}>
        {/* GTM noscript fallback (not rendered by @next/third-parties) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WFDHML2B"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <RecaptchaProvider>{children}</RecaptchaProvider>
      </body>
    </html>
  );
}
