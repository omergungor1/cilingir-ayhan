import { SITE } from "./constants";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Paşa Çilingir",
    image: `${SITE.domain}/logo.png`,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Barış mahallesi, Fatih Cd. No:16",
      addressLocality: "Mustafakemalpaşa",
      addressRegion: "Bursa",
      postalCode: "16535",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.0380318,
      longitude: 28.3822413,
    },
    url: SITE.domain,
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.googleRating.toString(),
      reviewCount: SITE.reviewCount.toString(),
      bestRating: "5",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Mustafakemalpaşa",
        containedInPlace: { "@type": "AdministrativeArea", name: "Bursa" },
      },
      {
        "@type": "City",
        name: "Karacabey",
        containedInPlace: { "@type": "AdministrativeArea", name: "Bursa" },
      },
    ],
  };
}
