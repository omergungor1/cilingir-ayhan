import Link from "next/link";
import {
  SITE,
  MUSTAFAKEMALPASA_MAHALLELER,
  KARACABEY_MAHALLELER,
} from "@/lib/constants";
import { slugify, ILCE_SLUG_MUSTAFAKEMALPASA, ILCE_SLUG_KARACABEY } from "@/lib/utils";

export const metadata = {
  title: "Hizmet Bölgelerimiz",
  description:
    "Bursa Mustafakemalpaşa ve Karacabey çilingir hizmet bölgeleri. Hamidiye, Barış, Gazi, Emirsultan dahil tüm mahallelere 7/24 hizmet.",
  openGraph: {
    title: "Hizmet Bölgelerimiz | Paşa Çilingir",
    description:
      "Mustafakemalpaşa ve Karacabey çilingir - Tüm mahallelere 7/24 hizmet. Hemen arayın.",
    images: ["/logo.png"],
  },
};

export default function HizmetBolgelerimizPage() {
  return (
    <article>
      <section className="bg-[#0A2540] py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <nav className="mb-4 text-sm text-white/80" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#F5B301]">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#F5B301]">Hizmet Bölgelerimiz</span>
          </nav>
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Hizmet Bölgelerimiz
          </h1>
          <p className="mb-6 max-w-2xl text-lg text-white/90">
            Bursa Mustafakemalpaşa ve Karacabey ilçelerinde 7/24 çilingir
            hizmeti. Tüm mahallelere hızlı ulaşım. Hemen arayın, dakikalar
            içinde kapınızdayız.
          </p>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center gap-2 rounded-xl bg-[#F5B301] px-6 py-3 font-bold text-[#0A2540] transition hover:bg-[#e5a300]"
            aria-label="Hemen ara"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Hemen Ara
          </a>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-[#0A2540]">
            Mustafakemalpaşa (Bursa) Mahallelerinde Çilingir Hizmeti
          </h2>
          <p className="mb-8 text-lg text-[#2E2E2E]">
            Mustafakemalpaşa çilingir olarak ilçenin tüm mahallelerine 7/24
            hizmet veriyoruz. Hamidiye Mahallesi, Barış Mahallesi, Yalıntaş
            Mahallesi, Atatürk Mahallesi, Yunus Emre Mahallesi dahil tüm bölgelere bir
            telefon kadar uzağınızdayız.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MUSTAFAKEMALPASA_MAHALLELER.map((mahalle) => (
              <div
                key={mahalle}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow transition hover:shadow-lg"
              >
                <h3 className="mb-2 text-lg font-bold text-[#0A2540]">
                  {mahalle} Çilingir
                </h3>
                <p className="mb-4 text-[#2E2E2E]">
                  {mahalle} Mustafakemalpaşa çilingir hizmeti ile yanınızdayız.
                  Ev, oto, kasa çilingir ihtiyaçlarınızda 7/24 hızlı müdahale.
                </p>
                <Link
                  href={`/hizmet-bolgelerimiz/${ILCE_SLUG_MUSTAFAKEMALPASA}/${slugify(mahalle)}`}
                  className="inline-flex items-center gap-1 font-semibold text-[#F5B301] hover:underline"
                >
                  Mahalle detayı
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>

          <h2 className="mb-8 mt-16 text-2xl font-bold text-[#0A2540]">
            Karacabey (Bursa) Mahallelerinde Çilingir Hizmeti
          </h2>
          <p className="mb-8 text-lg text-[#2E2E2E]">
            Karacabey çilingir ekibimiz ilçenin tüm mahallelerine 7/24 ulaşıyor.
            Gazi Mahallesi, Emirsultan Mahallesi, Esentepe Mahallesi, Saadet
            Mahallesi dahil tüm bölgelere hızlı hizmet.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {KARACABEY_MAHALLELER.map((mahalle) => (
              <div
                key={mahalle}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow transition hover:shadow-lg"
              >
                <h3 className="mb-2 text-lg font-bold text-[#0A2540]">
                  {mahalle} Çilingir
                </h3>
                <p className="mb-4 text-[#2E2E2E]">
                  {mahalle} Karacabey çilingir hizmeti ile yanınızdayız. Ev, oto,
                  kasa çilingir ihtiyaçlarınızda 7/24 hızlı müdahale.
                </p>
                <Link
                  href={`/hizmet-bolgelerimiz/${ILCE_SLUG_KARACABEY}/${slugify(mahalle)}`}
                  className="inline-flex items-center gap-1 font-semibold text-[#F5B301] hover:underline"
                >
                  Mahalle detayı
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-gray-50 p-8">
            <h3 className="mb-4 text-xl font-bold text-[#0A2540]">
              Merkez Adresimiz
            </h3>
            <p className="mb-4 text-[#2E2E2E]">{SITE.address}</p>
            <div className="mb-6 flex flex-wrap gap-4">
              <a
                href={`tel:${SITE.phone}`}
                className="font-bold text-[#F5B301] hover:underline"
              >
                {SITE.phoneDisplay}
              </a>
              <a
                href={SITE.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#0A2540] hover:text-[#F5B301]"
              >
                Haritada Göster
              </a>
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg">
              <iframe
                src={SITE.mapEmbed}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Paşa Çilingir - Merkez adres konumu"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="h-24 md:h-32" aria-hidden="true" />
    </article>
  );
}
