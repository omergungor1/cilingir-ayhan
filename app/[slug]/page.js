import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import { getAllSeoSlugs, getPageBySlug } from "@/lib/seo-data";
import { getPageSchemas } from "@/lib/jsonld";
import SeoPageLayout from "@/components/SeoPageLayout";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllSeoSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) return { title: "Sayfa Bulunamadı" };

  const canonical = `${SITE.domain}/${page.slug}`;

  return {
    title: page.title,
    description: page.description,
    keywords: [
      page.h1.toLowerCase(),
      "gemlik çilingir",
      "gemlik anahtarcı",
      "bursa çilingir",
    ],
    robots: { index: true, follow: true },
    alternates: { canonical },
    openGraph: {
      title: page.title,
      description: page.description,
      type: "website",
      locale: "tr_TR",
      url: canonical,
      siteName: SITE.name,
      images: [{ url: "/logo.png", width: 512, height: 512, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/logo.png"],
    },
    other: {
      "geo.region": SITE.geo.region,
      "geo.placename": SITE.geo.placename,
      "geo.position": `${SITE.geo.latitude};${SITE.geo.longitude}`,
    },
  };
}

export default async function SeoPage({ params }) {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) notFound();

  const schemas = getPageSchemas(page);

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <SeoPageLayout page={page} />
    </>
  );
}
