import Image from "next/image";
import Link from "next/link";
import { SITE, GEMLIK_MAHALLELER, HIZMETLER } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand py-16 md:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/clg-img-1.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Gemlik Çilingir — 7/24 Acil Çilingir Hizmeti
          </h1>
          <p className="mb-6 text-xl text-accent md:text-2xl">
            Bir telefon kadar uzağınızdayız
          </p>
          <p className="mb-8 mx-auto max-w-2xl text-lg text-text-on-dark/95">
            Gemlik Çilingir Ayhan, Yılların deneyimiyle Gemlik genelinde 7/24 kesintisiz çilingir hizmeti sunuyoruz.
            Hemen arayın, dakikalar içinde kapınızdayız.
          </p>
          <p className="mb-8 text-lg font-semibold text-white">
            Acil çilingir mi lazım? Şimdi arayın!
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-bold text-white transition hover:bg-accent-hover"
              aria-label="Hemen ara"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {SITE.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-lg font-bold text-white transition hover:bg-[#20bd5a]"
              aria-label="WhatsApp ile yaz"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="hizmetler" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-2xl font-bold text-brand md:text-3xl">
            Gemlik Çilingir Hizmetlerimiz
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {HIZMETLER.map((hizmet, i) => {
              const images = [
                "/images/clg-img-6.webp",
                "/images/clg-img-3.jpg",
                "/images/clg-img-4.webp",
                "/images/clg-img-5.jpg",
              ];
              return (
                <article
                  key={hizmet.slug}
                  className="overflow-hidden rounded-xl border border-border bg-white shadow-lg transition hover:shadow-xl"
                >
                  <div className="relative h-48">
                    <Image
                      src={images[i]}
                      alt={`${hizmet.label} - Gemlik`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-brand">
                      {hizmet.label}
                    </h3>
                    <p className="mb-4 text-text">{hizmet.description}</p>
                    <Link
                      href={`/gemlik-${hizmet.slug}-cilingir`}
                      className="inline-block font-semibold text-accent hover:underline"
                    >
                      Detaylı bilgi →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-2xl font-bold text-brand md:text-3xl">
            Hizmet Bölgelerimiz: Gemlik Mahalleleri
          </h2>
          <p className="mb-8 mx-auto max-w-3xl text-center text-text">
            Gemlik ilçesinin tüm mahallelerinde 7/24 çilingir hizmeti. Eşref
            Dinçer, Kayhan, Umurbey, Kumla dahil her bölgeye hızlı ulaşıyoruz.
          </p>
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {GEMLIK_MAHALLELER.map((mahalle) => (
              <li key={mahalle.slug}>
                <Link
                  href={`/${mahalle.slug}-cilingir`}
                  className="block rounded-lg bg-white p-4 text-center font-medium text-brand shadow transition hover:bg-accent hover:text-white"
                >
                  {mahalle.name} çilingir
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-2xl font-bold text-brand md:text-3xl">
            Neden Gemlik Çilingir Ayhan?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-brand p-8 text-center text-white">
              <div className="mb-4 text-4xl font-bold text-accent">
                {SITE.googleRating}
              </div>
              <p className="font-semibold">Google Puanı</p>
              <p className="mt-2 text-sm text-text-on-dark/85">
                {SITE.reviewCount} müşteri yorumu
              </p>
            </div>
            <div className="rounded-xl bg-brand p-8 text-center text-white">
              <div className="mb-4 text-4xl font-bold text-accent">7/24</div>
              <p className="font-semibold">Kesintisiz Hizmet</p>
              <p className="mt-2 text-sm text-text-on-dark/85">
                Gece gündüz yanınızdayız
              </p>
            </div>
            <div className="rounded-xl bg-brand p-8 text-center text-white">
              <div className="mb-4 text-4xl font-bold text-accent">Hızlı</div>
              <p className="font-semibold">Dakikalar İçinde</p>
              <p className="mt-2 text-sm text-text-on-dark/85">Kapınızdayız</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-brand md:text-3xl">
            Bizi Bulun
          </h2>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <iframe
              src={SITE.mapEmbed}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gemlik Çilingir Ayhan - Konum"
            />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={SITE.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 font-bold text-brand shadow-lg ring-2 ring-brand ring-offset-2 transition-all hover:bg-brand hover:text-white"
            >
              Haritada Aç
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-3 rounded-xl bg-accent px-6 py-4 font-bold text-white shadow-lg transition hover:bg-accent-hover"
            >
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-brand py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Bir telefon kadar uzağınızdayız
          </h2>
          <p className="mb-6 text-lg text-text-on-dark/95">
            Gemlik genelinde 7/24 çilingir hizmeti. Hemen arayın!
          </p>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-bold text-white transition hover:bg-accent-hover"
          >
            {SITE.phoneDisplay}
          </a>
        </div>
      </section>

      <div className="h-24 md:h-32" aria-hidden="true" />
    </>
  );
}
