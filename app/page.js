import Image from "next/image";
import Link from "next/link";
import {
  SITE,
  MUSTAFAKEMALPASA_MAHALLELER,
  KARACABEY_MAHALLELER,
} from "@/lib/constants";
import { slugify, ILCE_SLUG_MUSTAFAKEMALPASA, ILCE_SLUG_KARACABEY } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0A2540] py-16 md:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/clg-img-1.jpeg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Bursa Mustafakemalpaşa & Karacabey Çilingir
          </h1>
          <p className="mb-6 text-xl text-[#F5B301] md:text-2xl">
            Bir telefon kadar uzağınızdayız
          </p>
          <p className="mb-8 max-w-2xl mx-auto text-lg text-white/90">
            Hemen arayın, dakikalar içinde kapınızdayız. 7/24 Mustafakemalpaşa ve
            Karacabey çilingir hizmeti ile yanınızdayız.
          </p>
          <p className="mb-8 text-lg font-semibold text-white">
            Acil çilingir mi lazım? Şimdi arayın!
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F5B301] px-8 py-4 text-lg font-bold text-[#0A2540] transition hover:bg-[#e5a300]"
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
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="hizmetler" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-2xl font-bold text-[#0A2540] md:text-3xl">
            Mustafakemalpaşa & Karacabey Çilingir Hizmetlerimiz
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/images/clg-img-2.jpg"
                  alt="Ev çilingir hizmeti - Mustafakemalpaşa Karacabey"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#0A2540]">
                  Ev Çilingir Hizmeti
                </h3>
                <p className="mb-4 text-[#2E2E2E]">
                  Mustafakemalpaşa ve Karacabey ev çilingir hizmeti ile kapınızda.
                  Anahtar kilit sorunlarınızda hız, güven ve deneyimle yanınızdayız.
                  Hamidiye, Barış, Gazi, Emirsultan dahil tüm mahallelere 7/24
                  hizmet veriyoruz.
                </p>
                <Link
                  href="/hizmetler/ev-cilingir"
                  className="inline-block font-semibold text-[#F5B301] hover:underline"
                >
                  Detaylı bilgi →
                </Link>
              </div>
            </article>

            <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/images/clg-img-3.webp"
                  alt="Acil çilingir - Mustafakemalpaşa Karacabey"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#0A2540]">
                  Acil Çilingir
                </h3>
                <p className="mb-4 text-[#2E2E2E]">
                  Acil çilingir ihtiyacınızda 7/24 yanınızdayız. Mustafakemalpaşa ve
                  Karacabey genelinde gece gündüz dakikalar içinde adresinizde.
                </p>
                <Link
                  href="/hizmetler/acil-cilingir"
                  className="inline-block font-semibold text-[#F5B301] hover:underline"
                >
                  Detaylı bilgi →
                </Link>
              </div>
            </article>

            <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/images/clg-img-4.jpg"
                  alt="Oto çilingir - Mustafakemalpaşa Karacabey"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#0A2540]">
                  Oto Çilingir
                </h3>
                <p className="mb-4 text-[#2E2E2E]">
                  Mustafakemalpaşa ve Karacabey oto çilingir hizmeti. Anahtar
                  kilitte kaldı mı? Araç kilidi açılmıyor mu? Hemen arayın,
                  profesyonel ekip dakikalar içinde yanınızda.
                </p>
                <Link
                  href="/hizmetler/oto-cilingir"
                  className="inline-block font-semibold text-[#F5B301] hover:underline"
                >
                  Detaylı bilgi →
                </Link>
              </div>
            </article>

            <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/images/clg-img-5.webp"
                  alt="Kasa çilingir - Mustafakemalpaşa Karacabey"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#0A2540]">
                  Kasa Çilingir
                </h3>
                <p className="mb-4 text-[#2E2E2E]">
                  Mustafakemalpaşa ve Karacabey kasa çilingir hizmeti. Kasa açma,
                  şifre sıfırlama, elektronik kasa tamiri. İşletmeniz veya eviniz
                  için güvenilir kasa çilingir çözümleri.
                </p>
                <Link
                  href="/hizmetler/kasa-cilingir"
                  className="inline-block font-semibold text-[#F5B301] hover:underline"
                >
                  Detaylı bilgi →
                </Link>
              </div>
            </article>

            <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition hover:shadow-xl md:col-span-2 lg:col-span-1">
              <div className="relative h-48">
                <Image
                  src="/images/clg-img-6.jpg"
                  alt="7/24 çilingir servisi - Mustafakemalpaşa Karacabey"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#0A2540]">
                  7/24 Çilingir Servisi
                </h3>
                <p className="mb-4 text-[#2E2E2E]">
                  7/24 çilingir hizmeti. Gece yarısı, bayram, tatil fark etmez.
                  Mustafakemalpaşa ve Karacabey genelinde yorumlarında 5 yıldız
                  alan ekibimiz her an hazır.
                </p>
                <Link
                  href="/hizmetler/7-24-cilingir"
                  className="inline-block font-semibold text-[#F5B301] hover:underline"
                >
                  Detaylı bilgi →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-2xl font-bold text-[#0A2540] md:text-3xl">
            Hizmet Bölgelerimiz: Mustafakemalpaşa & Karacabey
          </h2>
          <p className="mb-8 max-w-3xl mx-auto text-center text-[#2E2E2E]">
            Bursa Mustafakemalpaşa ve Karacabey ilçelerinde 7/24 çilingir
            hizmeti. Hamidiye, Barış, Gazi, Emirsultan dahil tüm mahallelere
            hızlı ulaşıyoruz.
          </p>
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-center text-lg font-bold text-[#0A2540]">
                Mustafakemalpaşa Mahalleleri
              </h3>
              <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
                {MUSTAFAKEMALPASA_MAHALLELER.map((mahalle) => (
                  <li key={mahalle}>
                    <Link
                      href={`/hizmet-bolgelerimiz/${ILCE_SLUG_MUSTAFAKEMALPASA}/${slugify(mahalle)}`}
                      className="block rounded-lg bg-white p-4 text-center font-medium text-[#0A2540] shadow transition hover:bg-[#F5B301] hover:text-[#0A2540]"
                    >
                      {mahalle} çilingir
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-center text-lg font-bold text-[#0A2540]">
                Karacabey Mahalleleri
              </h3>
              <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
                {KARACABEY_MAHALLELER.map((mahalle) => (
                  <li key={mahalle}>
                    <Link
                      href={`/hizmet-bolgelerimiz/${ILCE_SLUG_KARACABEY}/${slugify(mahalle)}`}
                      className="block rounded-lg bg-white p-4 text-center font-medium text-[#0A2540] shadow transition hover:bg-[#F5B301] hover:text-[#0A2540]"
                    >
                      {mahalle} çilingir
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/hizmet-bolgelerimiz"
              className="inline-block rounded-xl bg-[#0A2540] px-6 py-3 font-semibold text-white transition hover:bg-[#0d2d4d]"
            >
              Tüm Hizmet Bölgelerimiz
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-2xl font-bold text-[#0A2540] md:text-3xl">
            Neden Paşa Çilingir?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-[#0A2540] p-8 text-center text-white">
              <div className="mb-4 text-4xl font-bold text-[#F5B301]">5.0</div>
              <p className="font-semibold">Google Puanı</p>
              <p className="mt-2 text-sm text-white/80">48 müşteri yorumu</p>
            </div>
            <div className="rounded-xl bg-[#0A2540] p-8 text-center text-white">
              <div className="mb-4 text-4xl font-bold text-[#F5B301]">7/24</div>
              <p className="font-semibold">Kesintisiz Hizmet</p>
              <p className="mt-2 text-sm text-white/80">Gece gündüz yanınızdayız</p>
            </div>
            <div className="rounded-xl bg-[#0A2540] p-8 text-center text-white">
              <div className="mb-4 text-4xl font-bold text-[#F5B301]">Hızlı</div>
              <p className="font-semibold">Dakikalar İçinde</p>
              <p className="mt-2 text-sm text-white/80">Kapınızdayız</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-[#0A2540] md:text-3xl">
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
              title="Paşa Çilingir - Konum"
            />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={SITE.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 font-bold text-[#0A2540] shadow-lg ring-2 ring-[#0A2540] ring-offset-2 transition-all hover:bg-[#0A2540] hover:text-white hover:shadow-xl"
              aria-label="Haritada konumu aç"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0A2540] text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </span>
              Haritada Aç
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-3 rounded-xl bg-[#F5B301] px-6 py-4 font-bold text-[#0A2540] shadow-lg ring-2 ring-[#F5B301] ring-offset-2 transition-all hover:bg-[#e5a300] hover:shadow-xl"
              aria-label="Hemen ara"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0A2540] text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </span>
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#0A2540] py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Bir telefon kadar uzağınızdayız
          </h2>
          <p className="mb-6 text-lg text-white/90">
            Hemen arayın, dakikalar içinde kapınızdayız. 7/24 Mustafakemalpaşa ve
            Karacabey çilingir hizmeti.
          </p>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center gap-2 rounded-xl bg-[#F5B301] px-8 py-4 text-lg font-bold text-[#0A2540] transition hover:bg-[#e5a300]"
            aria-label="Hemen ara"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            {SITE.phoneDisplay}
          </a>
        </div>
      </section>

      <div className="h-24 md:h-32" aria-hidden="true" />
    </>
  );
}
