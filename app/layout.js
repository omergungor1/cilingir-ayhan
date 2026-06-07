import "./globals.css";
import { SITE } from "@/lib/constants";
import { getLocalBusinessSchema } from "@/lib/jsonld";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export const metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Gemlik Çilingir Ayhan",
    template: "%s | Gemlik Çilingir Ayhan",
  },
  description:
    "Gemlik'te 7/24 acil çilingir hizmeti. Ev, oto, kasa çilingir. Tüm mahallelere hızlı ulaşım. Hemen arayın: 0505 264 82 64",
  keywords: [
    "gemlik çilingir",
    "gemlik anahtarcı",
    "gemlik acil çilingir",
    "gemlik 7/24 çilingir",
    "gemlik oto çilingir",
    "gemlik kasa çilingir",
    "bursa gemlik çilingir",
    "gemlik nöbetçi çilingir",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE.domain,
    siteName: SITE.name,
    title: "Gemlik Çilingir — 7/24 Acil Çilingir Hizmeti",
    description:
      "Gemlik'te 7/24 acil çilingir servisi. Ev, oto, kasa çilingir. Dakikalar içinde kapınızdayız.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Gemlik Çilingir Ayhan Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gemlik Çilingir — 7/24 Acil Çilingir Hizmeti",
    description:
      "Gemlik'te 7/24 acil çilingir hizmeti. Ev, oto, kasa çilingir.",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.domain },
  other: {
    "geo.region": SITE.geo.region,
    "geo.placename": SITE.geo.placename,
    "geo.position": `${SITE.geo.latitude};${SITE.geo.longitude}`,
  },
};

const GTM_ID = "G-984YXWPF3T";

const gtagScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GTM_ID}');
`;

export default function RootLayout({ children }) {
  const jsonLd = getLocalBusinessSchema(SITE.domain);

  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
        />
        <script dangerouslySetInnerHTML={{ __html: gtagScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-text antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
