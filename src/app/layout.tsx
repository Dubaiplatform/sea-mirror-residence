import React from "react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sea Mirror Residence | Lamar Development",
  description:
    "Sea Mirror Residence in Jumeirah 2 by Lamar Development, Dubai is a project that offers 4, and 5-bedrooms penthouses with modern interiors & amenities. Contact us to get more info",
  keywords: [
    "Sea Mirror Residence",
    "Sea Mirror in Jumeirah",
    "Lamar Development",
    "Dubai project",
    "Bay Island",
    "5-bedroom",
    "4-bedroom",
    "luxury accommodation",
    "wellness retreat",
  ],
  authors: [{ name: "Sea Mirror Residences | Lamar Development" }],
  creator: "Sea Mirror Residences | Lamar Development",
  publisher: "Sea Mirror Residences | Lamar Development",
  alternates: { canonical: "https://seamirrorresidence.com/" },
  openGraph: {
    title: "Sea Mirror Residences | Lamar Development",
    description:
      "Sea Mirror Residences in Jumeirah 2 by Lamar Development, Dubai is a project that offers 4, and 5-bedrooms penthouses with modern interiors & amenities. Contact us to get more info",
    url: "",
    siteName: "Sea Mirror Residences",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://seamirrorresidence.com/residence/3.jpg",
        width: 1200,
        height: 630,
        alt: "Sea Mirror Residences | Lamar Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sea Mirror Residences | Lamar Development",
    description:
      "Sea Mirror Residences in Jumeirah 2 by Lamar Development, Dubai is a project that offers 4, and 5-bedrooms penthouses with modern interiors & amenities. Contact us to get more info",
    images: ["https://seamirrorresidence.com/residence/3.jpg"],
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-P832RB78K6"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P832RB78K6');
          `}
      </Script>

      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
