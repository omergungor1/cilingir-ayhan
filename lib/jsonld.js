import { SITE, GEMLIK_MAHALLELER } from "./constants";

export function getLocalBusinessSchema(pageUrl) {
  return {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness"],
    name: SITE.name,
    image: `${SITE.domain}/logo.png`,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Eşref Dinçer Mahallesi",
      addressLocality: "Gemlik",
      addressRegion: "Bursa",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    url: pageUrl || SITE.domain,
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
      { "@type": "City", name: "Gemlik" },
      ...GEMLIK_MAHALLELER.map((m) => ({
        "@type": "Place",
        name: m.name,
      })),
    ],
  };
}

export function getBreadcrumbSchema(breadcrumbs, pageUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.domain}${item.href}`,
    })),
  };
}

export function getFaqSchema(faqs) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function getServiceSchema(hizmet, mahalle, pageUrl) {
  const serviceName = mahalle
    ? `Gemlik ${mahalle.name} ${hizmet.label}`
    : `Gemlik ${hizmet.label}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: hizmet.description,
    provider: {
      "@type": "Locksmith",
      name: SITE.name,
      telephone: SITE.phone,
      url: SITE.domain,
    },
    areaServed: mahalle
      ? { "@type": "Place", name: mahalle.name }
      : { "@type": "City", name: "Gemlik" },
    url: pageUrl,
    serviceType: hizmet.label,
  };
}

export function getPageSchemas(page) {
  const pageUrl = `${SITE.domain}/${page.slug}`;
  const schemas = [
    getLocalBusinessSchema(pageUrl),
    getBreadcrumbSchema(page.breadcrumbs, pageUrl),
  ];

  if (page.hizmet) {
    schemas.push(getServiceSchema(page.hizmet, page.mahalle, pageUrl));
  }

  const faqSchema = getFaqSchema(page.faqs);
  if (faqSchema) schemas.push(faqSchema);

  return schemas;
}
