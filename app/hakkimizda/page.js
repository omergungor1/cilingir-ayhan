import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata = {
  title: "Hakkımızda — Gemlik Çilingir",
  description:
    "Gemlik Çilingir Ayhan hakkında. Eşref Dinçer Mahallesi merkezli, Gemlik genelinde 7/24 profesyonel çilingir hizmeti.",
  alternates: { canonical: `${SITE.domain}/hakkimizda` },
  openGraph: {
    title: "Hakkımızda | Gemlik Çilingir Ayhan",
    description: "Gemlik'te güvenilir 7/24 çilingir hizmeti.",
    images: ["/logo.png"],
  },
};

export default function HakkimizdaPage() {
  return (
    <article>
      <section className="bg-brand py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <nav className="mb-4 text-sm text-text-on-dark/85" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-accent">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span className="text-accent">Hakkımızda</span>
          </nav>
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Hakkımızda — Gemlik Çilingir Ayhan
          </h1>
          <p className="max-w-2xl text-lg text-text-on-dark/95">
            Gemlik&apos;te güvenilir, hızlı ve profesyonel çilingir hizmeti.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="prose prose-lg max-w-none prose-headings:text-brand prose-p:text-text">
            <p>
              Gemlik Çilingir Ayhan, Bursa Gemlik ilçesinde Eşref Dinçer Mahallesi
              merkezli olarak faaliyet gösteren profesyonel bir çilingir
              işletmesidir. Yılların deneyimiyle Gemlik ve tüm mahallelerinde
              7/24 kesintisiz çilingir hizmeti sunuyoruz.
            </p>
            <h2 className="text-xl font-bold text-brand">Misyonumuz</h2>
            <p>
              Acil kilit sorunlarında müşterilerimize en hızlı ve güvenilir
              çözümü sunmak. Kapıda kaldığınızda, araç anahtarınız kaybolduğunda
              veya kasa kilidiniz arızalandığında dakikalar içinde yanınızda
              olmak temel hedefimizdir.
            </p>
            <h2 className="text-xl font-bold text-brand">Hizmet Alanımız</h2>
            <p>
              Gemlik&apos;in tüm mahallelerine hizmet veriyoruz: Eşref Dinçer,
              Kayhan, Umurbey, Cumhuriyet, Hisar, Balıkpazarı, Osmaniye, Hamidiye,
              Yeni Mahalle, Kumla, Kumsaz ve Kursunlu. Ev çilingir, acil çilingir,
              oto çilingir ve kasa çilingir hizmetlerimizle kapsamlı destek
              sağlıyoruz.
            </p>
            <h2 className="text-xl font-bold text-brand">Neden Bizi Seçmelisiniz?</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>7/24 kesintisiz hizmet — gece, hafta sonu, bayram</li>
              <li>Hasarsız açma garantisi</li>
              <li>Şeffaf fiyat politikası</li>
              <li>Google&apos;da {SITE.googleRating} puan, {SITE.reviewCount} müşteri yorumu</li>
              <li>Gemlik genelinde hızlı ulaşım (15-30 dakika)</li>
            </ul>
          </div>

          <div className="mt-10 rounded-xl bg-brand p-8 text-center text-white">
            <p className="mb-4 text-lg font-semibold">Bize ulaşın</p>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-block rounded-xl bg-accent px-8 py-4 font-bold text-white transition hover:bg-accent-hover"
            >
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <div className="h-24 md:h-32" aria-hidden="true" />
    </article>
  );
}
