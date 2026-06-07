import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata = {
  title: "İletişim — Gemlik Çilingir",
  description: `Gemlik Çilingir Ayhan iletişim. Telefon: ${SITE.phoneDisplay}. Adres: ${SITE.address}. 7/24 ulaşın.`,
  alternates: { canonical: `${SITE.domain}/iletisim` },
  openGraph: {
    title: "İletişim | Gemlik Çilingir Ayhan",
    description: "Gemlik çilingir iletişim bilgileri.",
    images: ["/logo.png"],
  },
};

export default function IletisimPage() {
  return (
    <article>
      <section className="bg-brand py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <nav className="mb-4 text-sm text-text-on-dark/85" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-accent">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span className="text-accent">İletişim</span>
          </nav>
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            İletişim
          </h1>
          <p className="max-w-2xl text-lg text-text-on-dark/95">
            Gemlik çilingir hizmeti için bize ulaşın. Bir telefon kadar
            uzağınızdayız.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-surface-muted p-8">
              <h2 className="mb-4 text-xl font-bold text-brand">Telefon</h2>
              <a
                href={`tel:${SITE.phone}`}
                className="text-2xl font-bold text-accent hover:underline"
              >
                {SITE.phoneDisplay}
              </a>
              <p className="mt-2 text-text">
                7/24 arayabilirsiniz. Hemen arayın, dakikalar içinde kapınızdayız.
              </p>
            </div>
            <div className="rounded-xl bg-surface-muted p-8">
              <h2 className="mb-4 text-xl font-bold text-brand">WhatsApp</h2>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-[#25D366] hover:underline"
              >
                WhatsApp ile Yaz
              </a>
              <p className="mt-2 text-text">
                Tek tıkla mesaj gönderin. Hızlı yanıt garantisi.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-surface-muted p-8">
            <h2 className="mb-4 text-xl font-bold text-brand">Adres</h2>
            <p className="text-lg text-text">{SITE.address}</p>
            <a
              href={SITE.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-semibold text-accent hover:underline"
            >
              Haritada Göster
            </a>
            <div className="mt-6 overflow-hidden rounded-xl shadow-lg">
              <iframe
                src={SITE.mapEmbed}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gemlik Çilingir Ayhan - İletişim konumu"
              />
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-brand p-8 text-center text-white">
            <p className="mb-4 text-lg font-semibold">
              Acil çilingir mi lazım? Şimdi arayın!
            </p>
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
