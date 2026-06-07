import "./globals.css";
import { SITE } from "@/lib/constants";
import { getLocalBusinessSchema } from "@/lib/jsonld";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export const metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Paşa Çilingir | Bursa Mustafakemalpaşa & Karacabey 7/24 Çilingir",
    template: "%s | Paşa Çilingir",
  },
  description:
    "Bursa Mustafakemalpaşa ve Karacabey'de 7/24 acil çilingir hizmeti. Ev, oto, kasa çilingir. Dakikalar içinde kapınızdayız. Hemen arayın: 0541 343 34 90",
  keywords: [
    "mustafakemalpaşa çilingir",
    "kemalpaşa çilingir",
    "kemalpaşa nöbetçi çilingir",
    "karacabey çilingir",
    "karacabey nöbetçi çilingir",
    "bursa çilingir",
    "mustafakemalpaşa anahtarcı",
    "karacabey anahtarcı",
    "7/24 çilingir bursa",
    "acil çilingir mustafakemalpaşa",
    "acil çilingir karacabey",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE.domain,
    siteName: "Paşa Çilingir",
    title: "Paşa Çilingir | Bursa Mustafakemalpaşa & Karacabey 7/24 Çilingir",
    description:
      "Bursa Mustafakemalpaşa ve Karacabey'de 7/24 acil çilingir servisi. Ev, oto, kasa çilingir. Dakikalar içinde kapınızdayız.",
    images: [
      {
        url: "https://pasacilingir.com/logo.png",
        width: 512,
        height: 512,
        alt: "Paşa Çilingir Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paşa Çilingir | Bursa Mustafakemalpaşa & Karacabey 7/24 Çilingir",
    description:
      "Bursa Mustafakemalpaşa ve Karacabey'de 7/24 acil çilingir hizmeti. Ev, oto, kasa çilingir.",
    images: ["https://pasacilingir.com/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE.domain,
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
  const jsonLd = getLocalBusinessSchema();

  return (
    <html lang="tr">
      <head>
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
      <body className="min-h-screen bg-white text-[#2E2E2E] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
