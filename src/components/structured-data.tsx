import {
  AMENITIES,
  FAQS,
  GEO,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  UNIT_TYPES,
} from "../lib/site-data";

const address = {
  "@type": "PostalAddress",
  streetAddress: "Dubai Water Canal, Jumeirah 2",
  addressLocality: "Dubai",
  addressRegion: "Dubai",
  addressCountry: "AE",
};

const geo = {
  "@type": "GeoCoordinates",
  latitude: GEO.latitude,
  longitude: GEO.longitude,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#developer`,
      name: "Lamar Development",
      url: SITE_URL,
      description:
        "Lamar Development is the developer behind Sea Mirror Residences, a waterfront penthouse community on the Dubai Water Canal in Jumeirah 2, Dubai.",
      address,
    },
    {
      "@type": "RealEstateAgent",
      "@id": `${SITE_URL}/#agent`,
      name: SITE_NAME,
      url: SITE_URL,
      image: `${SITE_URL}/residence/3.jpg`,
      description: SITE_DESCRIPTION,
      address,
      geo,
      areaServed: {
        "@type": "City",
        name: "Dubai",
      },
      parentOrganization: { "@id": `${SITE_URL}/#developer` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#developer` },
      inLanguage: "en-AE",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: "Sea Mirror Residences on Dubai Water Canal, Jumeirah 2 | Lamar Development",
      description: SITE_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#residence` },
      primaryImageOfPage: `${SITE_URL}/residence/3.jpg`,
      inLanguage: "en-AE",
    },
    {
      "@type": "ApartmentComplex",
      "@id": `${SITE_URL}/#residence`,
      name: SITE_NAME,
      url: SITE_URL,
      description:
        "Sea Mirror Residences is an ultra-luxury waterfront penthouse community on the Dubai Water Canal in Jumeirah 2, Dubai, by Lamar Development. 2-4 bedroom penthouses with 3.2m floor-to-ceiling heights, a 12-metre double-height lobby, infinity pool, spa and wellness centre.",
      address,
      geo,
      image: [
        `${SITE_URL}/residence/1.jpg`,
        `${SITE_URL}/residence/2.jpg`,
        `${SITE_URL}/residence/3.jpg`,
        `${SITE_URL}/residence/9.jpg`,
      ],
      amenityFeature: AMENITIES.map((name) => ({
        "@type": "LocationFeatureSpecification",
        name,
        value: true,
      })),
    },
    ...UNIT_TYPES.map((unit) => ({
      "@type": "Product",
      "@id": `${SITE_URL}/#unit-${unit.bedrooms}br`,
      name: `Sea Mirror Residences ${unit.name}`,
      description: `${unit.bedrooms} bedroom waterfront penthouse at Sea Mirror Residences on the Dubai Water Canal, Jumeirah 2, Dubai, by Lamar Development. Price on request.`,
      image: `${SITE_URL}/residence/3.jpg`,
      brand: { "@id": `${SITE_URL}/#developer` },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "AED",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "AED",
          valueAddedTaxIncluded: false,
        },
        url: `${SITE_URL}/#contact-form`,
        seller: { "@id": `${SITE_URL}/#agent` },
      },
    })),
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
