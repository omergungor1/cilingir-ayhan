import Link from "next/link";
import {
  SITE,
  MUSTAFAKEMALPASA_MAHALLELER,
  KARACABEY_MAHALLELER,
} from "@/lib/constants";
import {
  slugify,
  ILCE_SLUG_MUSTAFAKEMALPASA,
  ILCE_SLUG_KARACABEY,
  ILCE_SLUG_TO_KEY,
} from "@/lib/utils";

const ILCE_LISTESI = {
  mustafakemalpaşa: {
    mahalleler: MUSTAFAKEMALPASA_MAHALLELER,
    label: "Mustafakemalpaşa",
    labelFull: "Mustafakemalpaşa (Bursa)",
  },
  karacabey: {
    mahalleler: KARACABEY_MAHALLELER,
    label: "Karacabey",
    labelFull: "Karacabey (Bursa)",
  },
};

function getMahalleBilgisi(ilceSlug, slug) {
  const ilceKey = ILCE_SLUG_TO_KEY[ilceSlug];
  if (!ilceKey) return null;
  const ilceBilgi = ILCE_LISTESI[ilceKey];
  if (!ilceBilgi) return null;
  const mahalle = ilceBilgi.mahalleler.find((m) => slugify(m) === slug);
  return mahalle ? { ...ilceBilgi, mahalle } : null;
}

/** Sadece önceden tanımlı mahalleler; bilinmeyen slug 404 (Vercel CDN SSG) */
export const dynamicParams = false;

export async function generateStaticParams() {
  const mustafakemalpaşaParams = MUSTAFAKEMALPASA_MAHALLELER.map((m) => ({
    ilce: ILCE_SLUG_MUSTAFAKEMALPASA,
    slug: slugify(m),
  }));
  const karacabeyParams = KARACABEY_MAHALLELER.map((m) => ({
    ilce: ILCE_SLUG_KARACABEY,
    slug: slugify(m),
  }));
  return [...mustafakemalpaşaParams, ...karacabeyParams];
}

export async function generateMetadata({ params }) {
  const { ilce: ilceSlug, slug } = await params;
  const bilgi = getMahalleBilgisi(ilceSlug, slug);
  if (!bilgi) return { title: "Mahalle Bulunamadı" };
  const title = `${bilgi.mahalle} Çilingir | ${bilgi.label} Çilingir | Paşa Çilingir`;
  const description = `${bilgi.mahalle} çilingir hizmeti. ${bilgi.labelFull} genelinde 7/24 ev, oto, kasa çilingir. Hemen arayın: ${SITE.phoneDisplay}`;
  return {
    title,
    description,
    openGraph: {
      title: `${bilgi.mahalle} Çilingir | Paşa Çilingir`,
      description,
      images: ["/logo.png"],
    },
  };
}

export default async function MahalleDetayPage({ params }) {
  const { ilce: ilceSlug, slug } = await params;
  const bilgi = getMahalleBilgisi(ilceSlug, slug);
  if (!bilgi) {
    return (
      <article className="mx-auto max-w-2xl px-4 py-16 text-center">
        <h1 className="mb-4 text-2xl font-bold text-[#0A2540]">
          Mahalle bulunamadı
        </h1>
        <Link
          href="/hizmet-bolgelerimiz"
          className="text-[#F5B301] hover:underline"
        >
          Hizmet bölgelerimize dön
        </Link>
      </article>
    );
  }

  const { mahalle, label, labelFull, mahalleler } = bilgi;
  const digerMahalleler = mahalleler.filter((m) => m !== mahalle);

  return (
    <article>
      <section className="bg-[#0A2540] py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <nav
            className="mb-4 text-sm text-white/80"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#F5B301]">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/hizmet-bolgelerimiz"
              className="hover:text-[#F5B301]"
            >
              Hizmet Bölgelerimiz
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#F5B301]">{mahalle}</span>
          </nav>
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            {mahalle} Çilingir Hizmeti
          </h1>
          <p className="mb-6 max-w-2xl text-lg text-white/90">
            {labelFull} {mahalle} çilingir hizmeti ile 7/24 yanınızdayız. Ev, oto,
            kasa çilingir ihtiyaçlarınızda hızlı müdahale.
          </p>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center gap-2 rounded-xl bg-[#F5B301] px-6 py-3 font-bold text-[#0A2540] transition hover:bg-[#e5a300]"
            aria-label="Hemen ara"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            {SITE.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="prose prose-lg max-w-none prose-headings:text-[#0A2540] prose-p:text-[#2E2E2E]">
            <h2 className="text-xl font-bold text-[#0A2540]">
              {mahalle} Çilingir Hizmeti
            </h2>
            <p className="text-[#2E2E2E]">
              {mahalle} ve {label} genelinde çilingir hizmeti sunuyoruz. Anahtar
              kilitte kaldıysa, kapı kilidi açılmıyorsa veya kasa şifresini
              unuttuysanız tek bir telefon kadar uzağınızdayız. 7 gün 24 saat
              kesintisiz {mahalle} çilingir hizmeti ile dakikalar içinde
              adresinizdeyiz.
            </p>
            <h2 className="text-xl font-bold text-[#0A2540]">
              Neden {mahalle} Çilingir?
            </h2>
            <ul className="list-disc space-y-2 pl-6 text-[#2E2E2E]">
              <li>7/24 kesintisiz hizmet</li>
              <li>Ev, oto ve kasa çilingir ihtiyaçlarınızda tek numara</li>
              <li>Deneyimli ekip, hızlı müdahale</li>
              <li>Şeffaf fiyat, güvenilir hizmet</li>
            </ul>
          </div>

          <div className="mt-10 rounded-xl bg-[#0A2540] p-8 text-center text-white">
            <p className="mb-4 text-lg font-semibold">
              {mahalle} çilingir için hemen arayın
            </p>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-block rounded-xl bg-[#F5B301] px-8 py-4 font-bold text-[#0A2540] transition hover:bg-[#e5a300]"
            >
              {SITE.phoneDisplay}
            </a>
          </div>

          {digerMahalleler.length > 0 && (
            <div className="mt-12 rounded-xl bg-gray-50 p-6">
              <h3 className="mb-4 text-lg font-bold text-[#0A2540]">
                {label} Diğer Mahalleler
              </h3>
              <ul className="flex flex-wrap gap-2">
                {digerMahalleler.map((m) => (
                  <li key={m} className="p-0.5">
                    <Link
                      href={`/hizmet-bolgelerimiz/${ilceSlug}/${slugify(m)}`}
                      className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-[#0A2540] shadow transition hover:bg-[#F5B301] hover:text-[#0A2540]"
                    >
                      {m} çilingir
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/hizmet-bolgelerimiz"
                className="mt-4 inline-block font-semibold text-[#F5B301] hover:underline"
              >
                Tüm hizmet bölgeleri →
              </Link>
            </div>
          )}
        </div>
      </section>

      <div className="h-24 md:h-32" aria-hidden="true" />
    </article>
  );
}
